import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import SearchButton from '../components/SearchButton';

const DATA_DEFAULT = [
  {
    id: 1,
    university: '-----------------------------------',
  },
  {
    id: 2,
    university: '-----------------------------------',
  },
  {
    id: 3,
    university: '-----------------------------------',
  },
  {
    id: 4,
    university: '-----------------------------------',
  },
  {
    id: 5,
    university: '-----------------------------------',
  },
  {
    id: 6,
    university: '-----------------------------------',
  },
  {
    id: 7,
    university: '-----------------------------------',
  },
  {
    id: 8,
    university: '-----------------------------------',
  },
  {
    id: 9,
    university: '-----------------------------------',
  },
  {
    id: 10,
    university: '-----------------------------------',
  },
];

const screenSizeHeight = Dimensions.get('window').height;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/images/biblioteca.jpg'),
      gotData: DATA_DEFAULT,
      text: '',
    };
  }

  renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.listItemContentTitle}>{`${item.name}`}</Text>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={this.state.background}>
        <View style={styles.mainView}>
          <Text style={styles.searchText}>{`Universidades`}</Text>
          <View style={styles.searchView}>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder={'Escolha o país'}
                onChangeText={text => this.setState({text})}
                value={this.state.text}
              />
            </View>
            <View style={styles.buttonView}>
              <SearchButton
                title="Procurar"
                screen="Search"
                navigation={this.props.navigation}
              />
            </View>
          </View>
          <View style={styles.resultView}>
            <FlatList
              data={this.state.gotData}
              renderItem={item => this.renderItem(item)}
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
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    //borderColor: 'red',
    //borderWidth: 3,
  },
  searchText: {
    fontSize: 30,
    textTransform: 'uppercase',
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
    marginVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  buttonView: {
    flex: 1,
  },
  resultView: {
    flex: 6,
    flexDirection: 'row',
    //borderColor: 'red',
    //borderWidth: 3,
  },
  listItemContentTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    margin: 8,
    fontWeight: 'bold',
  },
});
