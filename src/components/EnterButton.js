import * as React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

export default class EnterButton extends React.Component {
  buttonPress = () => {
    const {screen, navigation} = this.props;
    navigation.navigate(screen, {screen: screen});
  };

  render() {
    const {title} = this.props;
    return (
      <Pressable style={styles.mainTheme} onPress={() => this.buttonPress()}>
        <Text style={styles.textButton}>{`${title}`}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  mainTheme: {
    height: 50,
    backgroundColor: '#000',
    marginVertical: 8,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
