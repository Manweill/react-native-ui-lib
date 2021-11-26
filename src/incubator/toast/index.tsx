import React, {PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ActivityIndicator, StyleSheet, findNodeHandle, AccessibilityInfo, ViewStyle} from 'react-native';
import _ from 'lodash';
import {asBaseComponent} from '../../commons/new';
import {useDidUpdate} from '../../hooks';
import {Colors, BorderRadiuses, Spacings, Typography, Shadows} from 'style';
import {Constants} from 'helpers';
import View from '../../components/view';
import Text from '../../components/text';
import Image from '../../components/image';
import Button from '../../components/button';
import PanView from '../panView';
import {ToastProps} from './types';
import useToastTimer from './helpers/useToastTimer';
import useToastPresets from './helpers/useToastPresets';
import useToastAnimation from './helpers/useToastAnimation';

const THRESHOLD = {x: Constants.screenWidth / 4, y: 10};

const Toast = (props: PropsWithChildren<ToastProps>) => {
  const {
    visible,
    position = 'bottom',
    zIndex,
    elevation,
    style,
    containerStyle,
    message,
    messageStyle,
    renderAttachment,
    centerMessage,
    showLoader,
    action,
    swipeable,
    backgroundColor,
    children,
    testID
  } = props;

  const directions = useRef([
    props.position === 'bottom' ? PanView.directions.DOWN : PanView.directions.UP,
    PanView.directions.LEFT,
    PanView.directions.RIGHT
  ]);

  const viewRef = useRef();
  const [toastHeight, setToastHeight] = useState(500);

  const {clearTimer, setDismissTimer} = useToastTimer(props);
  const {icon, iconColor, accessibilityMessage} = useToastPresets(props);

  const playAccessibilityFeatures = () => {
    if (visible) {
      if (viewRef.current && action) {
        // @ts-expect-error
        const reactTag = findNodeHandle(viewRef.current);
        AccessibilityInfo.setAccessibilityFocus(reactTag!);
      } else if (message) {
        AccessibilityInfo.announceForAccessibility?.(accessibilityMessage);
      }
    }
  };

  const {isAnimating, toggleToast, toastOpacity, toastTranslateY} = useToastAnimation({
    ...props,
    toastHeight,
    setDismissTimer,
    playAccessibilityFeatures
  });

  useEffect(() => {
    if (visible) {
      toggleToast(visible, {delay: 100});
    }
    return () => clearTimer();
  }, []);

  useDidUpdate(() => {
    if (!visible) {
      clearTimer();
    }

    toggleToast(visible);
  }, [visible]);

  const onDismiss = useCallback(() => {
    clearTimer();
    props.onDismiss?.();
  }, [props.onDismiss]);

  const positionStyle = useMemo(() => {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      [position]: 0
    } as Pick<ViewStyle, 'top' | 'left' | 'right' | 'bottom' | 'position'>;
  }, [position]);

  const onLayout = useCallback(event => {
    const height = event.nativeEvent.layout.height;
    if (height !== toastHeight) {
      setToastHeight(height);
    }
  },
  [toastHeight]);

  const renderRightElement = () => {
    // NOTE: order does matter
    if (showLoader) {
      const loaderColors = [Colors.rgba(Colors.white, 0.3), Colors.rgba(Colors.grey30, 0.7)];
      return (
        <ActivityIndicator size={'small'} testID={`${testID}-loader`} color={loaderColors[1]} style={styles.loader}/>
        // <Loader size={Loader.sizes.SMALL} color={loaderColors} style={styles.loader} testID={`${testID}-loader`}/>
      );
    }

    if (action) {
      return (
        <Button
          link
          style={styles.action}
          color={Colors.grey20}
          {...action}
          labelStyle={Typography.bodySmallBold}
          accessibilityRole={'button'}
          activeBackgroundColor={Colors.grey70}
          testID={`${testID}-action`}
        />
      );
    }
  };

  const renderMessage = () => {
    const textAlign = centerMessage ? 'center' : 'left';
    return (
      <View accessible={Constants.isIOS} style={styles.messageContainer}>
        <Text
          testID={`${testID}-message`}
          // @ts-expect-error
          ref={viewRef}
          style={[styles.message, {textAlign}, messageStyle]}
          accessibilityLabel={accessibilityMessage}
        >
          {message}
        </Text>
      </View>
    );
  };

  const renderIcon = () => {
    const tintColor = iconColor;
    return <Image source={icon} resizeMode={'contain'} style={styles.icon} tintColor={tintColor}/>;
  };

  const renderToastContent = () => {
    if (!_.isUndefined(children)) {
      return children;
    }

    return (
      <View style={[styles.toastContent, style, backgroundColor ? {backgroundColor} : undefined]}>
        {renderIcon()}
        {renderMessage()}
        {renderRightElement()}
      </View>
    );
  };

  const renderAttachmentContent = () => {
    if (renderAttachment) {
      return <View pointerEvents={'box-none'}>{renderAttachment()}</View>;
    }
  };

  const _renderAttachment = (positionStyle: object, zIndex?: number) => {
    return (
      <View style={[positionStyle, {zIndex}]} pointerEvents={'box-none'}>
        {renderAttachmentContent()}
      </View>
    );
  };

  const renderToast = () => {
    if (!visible && !isAnimating) {
      return renderAttachment ? _renderAttachment(positionStyle, zIndex) : null;
    }

    const isTop = position === 'top';

    return (
      <>
        {!isTop && !!toastHeight && renderAttachmentContent()}
        <View
          animated
          useSafeArea
          style={[{opacity: toastOpacity}, containerStyle]}
          onLayout={onLayout}
          pointerEvents={visible ? 'box-none' : 'none'}
        >
          {renderToastContent()}
        </View>
        {isTop && !!toastHeight && renderAttachmentContent()}
      </>
    );
  };

  if (!visible && !isAnimating) {
    return renderAttachment ? _renderAttachment(positionStyle, zIndex) : null;
  }

  return (
    <View
      key="toast"
      animated
      testID={testID}
      style={[positionStyle, {zIndex, elevation, transform: [{translateY: toastTranslateY}]}]}
      pointerEvents={'box-none'}
    >
      <PanView
        directions={swipeable ? directions.current : []}
        dismissible
        animateToOrigin
        directionLock
        onDismiss={onDismiss}
        threshold={THRESHOLD}
      >
        {renderToast()}
      </PanView>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContent: {
    backgroundColor: Colors.white,
    minHeight: 48,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: BorderRadiuses.br40,
    ...Shadows.sh20.bottom,
    marginHorizontal: Spacings.s5,
    marginVertical: Spacings.s3,
    paddingLeft: Spacings.s3
  },
  messageContainer: {
    flex: Constants.isTablet ? undefined : 1,
    paddingVertical: Spacings.s3,
    justifyContent: 'center'
  },
  message: {
    ...Typography.bodySmall,
    color: Colors.grey10,
    marginLeft: Spacings.s2,
    marginRight: Spacings.s5
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: Spacings.s1
  },
  loader: {
    marginRight: Spacings.s3
  },
  action: {
    backgroundColor: Colors.grey80,
    borderTopRightRadius: BorderRadiuses.br40,
    borderBottomRightRadius: BorderRadiuses.br40,
    paddingHorizontal: Spacings.s3,
    height: '100%'
  }
});

export {ToastProps};
export default asBaseComponent<ToastProps>(Toast);
