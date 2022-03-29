import * as React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import BackButton from '../components/BackButton';

export default class UniversityDetails extends React.Component {
  render() {
    const {item} = this.props.route.params;
    return (
      <ImageBackground
        style={styles.imageBackgorund}
        resizeMode="cover"
        source={{
          uri: 'https://www.discovernepa.com/wp-content/uploads/2018/01/DN-HeroBkg-MarywoodUniversity.jpg',
        }}>
        <View style={styles.mainView}>
          <View style={styles.textView}>
            <Text style={styles.textDetails}>{`País: ${item.country}`}</Text>
            <Text style={styles.textDetails}>{`Nome: ${item.name}`}</Text>
            <Text style={styles.textDetails}>{`Domínio: ${item.domains}`}</Text>
            <Text
              style={
                styles.textDetails
              }>{`Código do País: ${item.alpha_two_code}`}</Text>
            {/*<Text style={styles.textDetails}>{`Estado: ${item.state-province}`}</Text>*/}
            <Text
              style={
                styles.textDetails
              }>{`Página Web\n${item.web_pages}`}</Text>
          </View>
          <View style={styles.imageView}>
            <Text
              style={
                styles.textDetails
              }>{`react-native-google-image-search`}</Text>
          </View>
          <View style={styles.buttonView}>
            <BackButton
              title={'Voltar'}
              screen={'Search'}
              navigation={this.props.navigation}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgorund: {
    height: Dimensions.get('window').height,
  },
  mainView: {
    flex: 1,
    padding: 32,
    backgroundColor: 'rgba(120,80,14,0.2)',
  },
  textView: {
    flex: 3,
    backgroundColor: 'rgba(10,10,14,0.8)',
    borderWidth: 3,
    borderRadius: 16,
    justifyContent: 'center',
  },
  textDetails: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    margin: 10,
    //backgroundColor: 'rgba(10,10,14,0.6)',
  },
  imageView: {
    flex: 1,
    backgroundColor: 'rgba(10,10,14,0.8)',
    borderWidth: 3,
    borderRadius: 16,
    justifyContent: 'center',
  },
  buttonView: {
    flex: 2,
    justifyContent: 'center',
    //alignItems: 'center',
    /*backgroundColor: 'red',
    borderWidth: 3,
    borderRadius: 16,*/
  },
});
