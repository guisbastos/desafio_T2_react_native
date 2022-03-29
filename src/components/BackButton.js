import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import gotApi from '../services/gotApi';

export default class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonPress = () => {
    const {screen, navigation} = this.props;
    navigation.navigate(screen, {screen: screen});
  };

  render() {
    const {title} = this.props;
    return (
      <Pressable style={styles.buttonTheme} onPress={() => this.buttonPress()}>
        <Text style={styles.textButton}>{`${title}`}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  buttonTheme: {
    height: 50,
    backgroundColor: '#000',
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    textTransform: 'uppercase',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
});
