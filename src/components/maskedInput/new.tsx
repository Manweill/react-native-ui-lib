import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  ReactElement,
  ForwardedRef
} from 'react';
import _ from 'lodash';
import {StyleSheet, Keyboard, TextInput, TextInputProps, StyleProp, ViewStyle} from 'react-native';
import View from '../view';
import Text from '../text';
import TouchableOpacity from '../touchableOpacity';

export interface MaskedInputProps extends Omit<TextInputProps, 'value'> {
  /**
   * Initial value to pass to masked input
   */
  initialValue?: string;
  /**
   * callback for rendering the custom input out of the value returns from the actual input
   */
  renderMaskedText?: ReactElement;
  /**
   * Custom formatter for the input value
   */
  formatter?: (value?: string) => string | undefined;
  /**
   * container style for the masked input container
   */
  containerStyle: StyleProp<ViewStyle>;
}

/**
 * @description: Mask Input to create custom looking inputs with custom formats
 * @gif: https://camo.githubusercontent.com/61eedb65e968845d5eac713dcd21a69691571fb1/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4b5a5a7446666f486f454b334b2f67697068792e676966
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/MaskedInputScreen.js
 */
function MaskedInput(props: MaskedInputProps, ref: ForwardedRef<any>) {
  const {initialValue, formatter = _.identity, containerStyle, renderMaskedText, onChangeText, ...others} = props;
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<TextInput>();
  const keyboardDidHideListener = useRef<any>();

  useImperativeHandle(ref, () => {
    return {
      isFocused: () => inputRef.current?.isFocused(),
      focus,
      blur: () => inputRef.current?.blur(),
      clear: () => {
        inputRef.current?.clear();
        setValue('');
        // NOTE: This fixes an RN issue - when triggering imperative clear method, it doesn't call onChangeText
        onChangeText?.('');
      }
    };
  });

  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    keyboardDidHideListener.current = Keyboard.addListener('keyboardDidHide', () => {
      if (inputRef.current?.isFocused()) {
        inputRef.current?.blur();
      }
    });

    return () => keyboardDidHideListener.current.remove();
  }, []);

  const _onChangeText = useCallback((value: string) => {
    const formattedValue = formatter(value) ?? '';
    setValue(formattedValue);
    onChangeText?.(formattedValue);
  },
  [onChangeText, formatter]);

  const focus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const _renderMaskedText = () => {
    if (_.isFunction(renderMaskedText)) {
      return renderMaskedText(value);
    }
    return <Text>{value}</Text>;
  };

  return (
    <TouchableOpacity style={containerStyle} activeOpacity={1} onPress={focus}>
      <TextInput
        {...others}
        value={value}
        // @ts-expect-error
        ref={inputRef}
        style={styles.hiddenInput}
        enableErrors={false}
        hideUnderline
        placeholder=""
        caretHidden
        multiline={false}
        onChangeText={_onChangeText}
      />
      <View style={styles.maskedInputWrapper}>{_renderMaskedText()}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  hiddenInput: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    color: 'transparent',
    backgroundColor: 'transparent',
    height: undefined
  },
  maskedInputWrapper: {
    zIndex: 0
  }
});

MaskedInput.displayName = 'MaskedInput';
export default forwardRef(MaskedInput);
