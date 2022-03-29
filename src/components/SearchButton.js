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

export default class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: 'afsasv',
    };
  }

  getUniversities = () => {
      console.warn(this.text)
    /*gotApi.get('/search?country='+ this.state.text).then((result) => {
        this.setState({
          gotData: result.data,
        });
      }); */
  };

  render() {
    const {title} = this.props;
    return (
      <Pressable style={styles.buttonTheme} onPress={() => this.getUniversities()}>
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
