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
    }

  getUniversities = () => {
    gotApi.get('/search?country=Brazil').then((result) => {
        this.setState({
          gotData: result.data,
        });
      }); 
  };

  render() {
    const {title} = this.props;
    return (
      <Pressable
        style={styles.mainTheme}
        onPress={() => this.getUniversities()}>
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
