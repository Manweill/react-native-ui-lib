import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Alert} from 'react-native';
import {
  Text,
  View,
  Button,
  Dialog,
  Colors,
  PanningProvider,
  RadioGroup,
  RadioButton,
  Switch,
  Constants
} from 'react-native-ui-lib'; // eslint-disable-line

export default class DialogScreen extends Component {
  constructor(props) {
    super(props);

    this.SCROLL_TYPE = {
      NONE: 'none',
      VERTICAL: 'vertical',
      HORIZONTAL: 'horizontal'
    };

    this.pannableTitle = {title: 'This is a pannable header Dialog'};
    this.title = 'This is a Dialog';
    this.supportedOrientations = ['portrait', 'landscape'];
    this.colors = [
      {value: Colors.red10, label: 'Red10'},
      {value: Colors.red30, label: 'Red30'},
      {value: Colors.red50, label: 'Red50'},
      {value: Colors.red70, label: 'Red70'},
      {value: Colors.blue10, label: 'Blue10'},
      {value: Colors.blue30, label: 'Blue30'},
      {value: Colors.blue50, label: 'Blue50'},
      {value: Colors.blue70, label: 'Blue70'},
      {value: Colors.purple10, label: 'Purple10'},
      {value: Colors.purple30, label: 'Purple30'},
      {value: Colors.purple50, label: 'Purple50'},
      {value: Colors.purple70, label: 'Purple70'},
      {value: Colors.green10, label: 'Green10'},
      {value: Colors.green30, label: 'Green30'},
      {value: Colors.green50, label: 'Green50'},
      {value: Colors.green70, label: 'Green70'},
      {value: Colors.yellow10, label: 'Yellow10'},
      {value: Colors.yellow30, label: 'Yellow30'},
      {value: Colors.yellow50, label: 'Yellow50'},
      {value: Colors.yellow70, label: 'Yellow70'}
    ];

    this.state = {
      panDirection: PanningProvider.Directions.DOWN,
      position: 'bottom',
      scroll: this.SCROLL_TYPE.NONE,
      showHeader: true,
      isRounded: true,
      showDialog: false,
      ignoreBackgroundPress: false
    };
  }

  titlePressed = ({title}) => {
    Alert.alert('Pressed on', title);
  };

  setPanDirection = panDirection => {
    if (panDirection !== this.state.panDirection) {
      this.setState({panDirection});
    }
  };

  setPosition = position => {
    if (position !== this.state.position) {
      this.setState({position});
    }
  };

  setScroll = scroll => {
    if (scroll !== this.state.scroll) {
      this.setState({scroll});
    }
  };

  toggleShowHeader = () => {
    this.setState({
      showHeader: !this.state.showHeader
    });
  };

  toggleIsRounded = () => {
    this.setState({
      isRounded: !this.state.isRounded
    });
  };

  toggleIgnoreBackgroundPress = () => {
    this.setState({
      ignoreBackgroundPress: !this.state.ignoreBackgroundPress
    });
  };

  showDialog = () => {
    this.setState({showDialog: true});
  };

  hideDialog = () => {
    this.setState({showDialog: false});
  };

  getWarning = () => {
    const {showHeader, scroll, panDirection} = this.state;
    if (!showHeader && scroll !== this.SCROLL_TYPE.NONE) {
      return (
        <Text color={Colors.$textDangerLight}>It is recommended to have pannable header with scrollable content</Text>
      );
    } else if (showHeader && panDirection !== PanningProvider.Directions.DOWN) {
      return <Text color={Colors.$textDangerLight}>It is recommended to have pannable header with direction=down</Text>;
    }
  };

  getMessage = () => {
    const {panDirection, position, scroll} = this.state;

    return `Panning direction: ${panDirection ? panDirection : 'none'}
Position: ${position ? position : 'center'}
Scroll: ${scroll}`;
  };

  renderPannableHeader = props => {
    const {title} = props;
    return (
      <View>
        <View margin-20>
          <Text $textDefault>{title}</Text>
        </View>
        <View height={2} bg-grey70/>
      </View>
    );
  };

  renderPlainContent = () => {
    return (
      <View margin-20 right>
        <Button text60 label="Done" link onPress={this.hideDialog}/>
      </View>
    );
  };

  keyExtractor = item => {
    return item.value;
  };

  renderVerticalItem = ({item: color}) => {
    return (
      <Text $textDefault text50 margin-20 color={color.value}>
        {color.label}
      </Text>
    );
  };

  renderVerticalScroll = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.verticalScroll}
        data={this.colors}
        renderItem={this.renderVerticalItem}
        keyExtractor={this.keyExtractor}
      />
    );
  };

  renderHorizontalItem = ({item: color}) => {
    return <View flex width={100} height={1000} style={{backgroundColor: color.value}}/>;
  };

  renderHorizontalScroll = () => {
    return (
      <View marginT-20 pointerEvents="box-none">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.colors}
          renderItem={this.renderHorizontalItem}
          keyExtractor={this.keyExtractor}
        />
        <View row pointerEvents="none" style={styles.horizontalTextContainer}>
          <Text>
            {'\u25c0'} Scroll me {'\u25b6'}
          </Text>
        </View>
      </View>
    );
  };

  renderContent = () => {
    const {scroll, showHeader} = this.state;

    let content;
    switch (scroll) {
      case this.SCROLL_TYPE.VERTICAL:
        content = this.renderVerticalScroll();
        break;
      case this.SCROLL_TYPE.HORIZONTAL:
        content = this.renderHorizontalScroll();
        break;
      case this.SCROLL_TYPE.NONE:
      default:
        content = this.renderPlainContent();
        break;
    }

    const data = (
      <View spread flex={scroll !== this.SCROLL_TYPE.NONE}>
        <View marginT-20 marginH-20>
          {!showHeader && <Text $textDefault text50>{this.title}</Text>}
          <Text $textDefault marginT-20={!showHeader}>{this.getMessage()}</Text>
          {this.getWarning()}
        </View>
        {content}
      </View>
    );

    return data;
  };

  getDialogKey = height => {
    const {position} = this.state;
    return `dialog-key-${position}-${height}`;
  };

  renderDialog = () => {
    const {showDialog, panDirection, position, scroll, showHeader, isRounded, ignoreBackgroundPress} = this.state;
    const renderPannableHeader = showHeader ? this.renderPannableHeader : undefined;
    const height = scroll !== this.SCROLL_TYPE.NONE ? '70%' : undefined;

    return (
      <Dialog
        useSafeArea
        key={this.getDialogKey(height)}
        top={position === 'top'}
        bottom={position === 'bottom'}
        height={height}
        panDirection={panDirection}
        containerStyle={isRounded ? styles.roundedDialog : styles.dialog}
        visible={showDialog}
        onDismiss={this.hideDialog}
        renderPannableHeader={renderPannableHeader}
        pannableHeaderProps={this.pannableTitle}
        supportedOrientations={this.supportedOrientations}
        ignoreBackgroundPress={ignoreBackgroundPress}
      >
        {this.renderContent()}
      </Dialog>
    );
  };

  render() {
    const {panDirection, position, scroll, showHeader, isRounded, ignoreBackgroundPress} = this.state;

    return (
      <ScrollView>
        <View flex padding-12>
          <Text $textDefault text30 marginB-20>
            Dialog
          </Text>

          <RadioGroup marginT-20 initialValue={panDirection} onValueChange={this.setPanDirection}>
            <Text $textDefault>Panning Direction:</Text>
            <View row marginV-10>
              <RadioButton value={null} label={'None'}/>
              <RadioButton value={PanningProvider.Directions.UP} label={'Up'} marginL-10/>
              <RadioButton value={PanningProvider.Directions.DOWN} label={'Down'} marginL-10/>
              <RadioButton value={PanningProvider.Directions.LEFT} label={'Left'} marginL-10/>
              <RadioButton value={PanningProvider.Directions.RIGHT} label={'Right'} marginL-10/>
            </View>
          </RadioGroup>

          <RadioGroup marginT-20 initialValue={position} onValueChange={this.setPosition}>
            <Text $textDefault>Position:</Text>
            <View row marginV-10>
              <RadioButton value={'top'} label={'Top'}/>
              <RadioButton value={null} label={'Center'} marginL-10/>
              <RadioButton value={'bottom'} label={'Bottom'} marginL-10/>
            </View>
          </RadioGroup>

          <RadioGroup marginT-20 initialValue={scroll} onValueChange={this.setScroll}>
            <Text $textDefault>Scroll:</Text>
            <View row marginV-10>
              <RadioButton value={this.SCROLL_TYPE.NONE} label={'None'}/>
              <RadioButton value={this.SCROLL_TYPE.VERTICAL} label={'Vertical'} marginL-10/>
              <RadioButton value={this.SCROLL_TYPE.HORIZONTAL} label={'Horizontal'} marginL-10/>
            </View>
          </RadioGroup>

          <View row marginT-20 centerV>
            <Text $textDefault>Toggle pannable header:</Text>
            <Switch value={showHeader} onValueChange={this.toggleShowHeader} marginL-10/>
          </View>

          <View row marginT-20 centerV>
            <Text $textDefault>Add some style:</Text>
            <Switch value={isRounded} onValueChange={this.toggleIsRounded} marginL-10/>
          </View>

          <View row marginT-20 centerV>
            <Text $textDefault>Ignore Background Press:</Text>
            <Switch value={ignoreBackgroundPress} onValueChange={this.toggleIgnoreBackgroundPress} marginL-10/>
          </View>

          <Button marginT-50 label={'Show dialog'} onPress={this.showDialog}/>

          {this.renderDialog()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: Colors.$backgroundDefault
  },
  roundedDialog: {
    backgroundColor: Colors.$backgroundDefault,
    marginBottom: Constants.isIphoneX ? 0 : 20,
    borderRadius: 12
  },
  button: {
    margin: 5,
    alignSelf: 'flex-start'
  },
  verticalScroll: {
    marginTop: 20
  },
  horizontalTextContainer: {
    alignSelf: 'center',
    position: 'absolute',
    top: 10
  }
});
