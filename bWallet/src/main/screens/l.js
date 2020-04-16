import React, { Component } from 'react';
import { Text, View,Modal,TouchableOpacity,KeyboardAvoidingView,TextInput,ScrollView, AsyncStorage, ActivityIndicator, ActivityIndicatorBase } from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'
// import { Icon } from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import shred from 'react-native-shared-preferences'
import {requestMultiple,PERMISSIONS} from 'react-native-permissions'

// var d=60
requestMultiple([PERMISSIONS.ANDROID.CAMERA,PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]).then(()=>{
  
})

export default class l extends Component{
  constructor(props){
    super(props)
    this.state={timer:false}
  }

  
render(){
  return(
    <View>
     
    </View>
      
      
  )
}
}