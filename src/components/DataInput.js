import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class DataInput extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder={'Login'}
        />
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder={'Senha'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#000',
    padding: 10,
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});
