import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import EnterButton from '../components/EnterButton';
import DataInput from '../components/DataInput';

const screenSizeHeight = Dimensions.get('window').height;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/images/biblioteca.jpg'),
    };
  }

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={this.state.background}>
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{`Acervo\nUniversidades`}</Text>
          </View>
          <View style={styles.textInputView}>
            <DataInput />
          </View>
          <View style={styles.buttonView}>
            <EnterButton
              title="Entrar"
              screen="Search"
              navigation={this.props.navigation}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    height: screenSizeHeight,
  },
  mainView: {
    flex: 1,
    padding: 32,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  titleView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    //borderColor: 'red',
    //borderWidth: 3,
  },
  titleText: {
    fontSize: 36,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  textInputView: {
    flex: 2,
  },
  textInput: {
    borderColor: '#000',
    padding: 10,
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  buttonView: {
    flex: 2,
  },
});
