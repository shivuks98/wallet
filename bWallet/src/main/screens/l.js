import React,{useState} from 'react'
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,TextInput,
  StatusBarIOS,
  PixelRatio
} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';
import Picker from 'react-native-country-picker-modal'

const check=/^[0-9a-zA-Z\s]+$/
// const [value, setValue] = useState("");
export default class l extends React.Component {
  constructor(props){
    // StatusBarIOS.setHidden(true);
    super(props);
    this.state = {
      
      text:null
    };
  }
  

  onChange = e => {
    const input = e;
    if (/^[a-zA-Z]+$/.test(input) || input === "") {
      setValue(input);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        
        <TextInput placeholder="dgfhs" value={this.state.text} underlineColorAndroid='red'
        onChange={this.onChange}
           
        
// style={styles.questionText}

      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777'
  }
});