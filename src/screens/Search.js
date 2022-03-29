import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import gotApi from '../services/gotApi';

/*const DATA_DEFAULT = [
  {
    id: 1,
    name: '-----------------------------------',
  },
  {
    id: 2,
    name: '-----------------------------------',
  },
  {
    id: 3,
    name: '-----------------------------------',
  },
  {
    id: 4,
    name: '-----------------------------------',
  },
  {
    id: 5,
    name: '-----------------------------------',
  },
  {
    id: 6,
    name: '-----------------------------------',
  },
  {
    id: 7,
    name: '-----------------------------------',
  },
  {
    id: 8,
    name: '-----------------------------------',
  },
  {
    id: 9,
    name: '-----------------------------------',
  },
  {
    id: 10,
    name: '-----------------------------------',
  },
];*/

const screenSizeHeight = Dimensions.get('window').height;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/images/biblioteca.jpg'),
      gotData: [],
      text: '',
    };
  }

  getUniversities = () => {
    //console.warn(this.state.text)
    gotApi.get('/search?country=' + this.state.text).then(result => {
      this.setState({
        gotData: result.data,
      });
    });
  };

  goToDetail = (item) => {
    this.props.navigation.navigate('UniversityDetails', {screen: 'UniversityDetails', item: item});
  };

  renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => this.goToDetail(item)}>
          <Text style={styles.listItemContentTitle}>{`${item.name}`}</Text>
        </TouchableOpacity>
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
              <Pressable
                style={styles.buttonTheme}
                onPress={() => this.getUniversities()}>
                <Text style={styles.textButton}>{`Procurar`}</Text>
              </Pressable>
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
  textButton: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
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
});
