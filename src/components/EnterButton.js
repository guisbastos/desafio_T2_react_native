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
//import * as Animatable from 'react-native-animatable';

export default class EnterButton extends React.Component {

  /*constructor(props) {
    super(props);
    this.state = {
      animationType: 'pulse',
    };
  }*/
  
  animatedPress = () => {
    this.setState({
      animationType: '',
    });
    const {screen, navigation} = this.props;
    5;
    navigation.navigate(screen, {screen: screen});
  };

  render() {
    const {title} = this.props;
    return (
      //<Animatable.View animation={this.state.animationType}>
        <Pressable
          style={styles.mainTheme}
          onPress={() => this.animatedPress()}>
          <Text style={styles.textButton}>{`${title}`}</Text>
        </Pressable>
      //</Animatable.View>
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
