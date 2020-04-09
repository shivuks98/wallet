import React, { Component } from 'react';
import { Text, View,Modal,TouchableOpacity,KeyboardAvoidingView,TextInput,ScrollView, AsyncStorage, ActivityIndicator, ActivityIndicatorBase } from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'
// import { Icon } from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
// const myIcon = <Icon name="left" size={50} color="#900"/>;

// var d=60
export default class l extends Component{
  constructor(props){
    super(props)
    this.state={timer:false}
  }

  // componentWillUnmount(){
    // this.setState({timer:true})
    // setTimeout(()=>{
    //   this.setState({timer:true})
    // },7000)
    // var pinfo=await AsyncStorage.getItem("PersonalInfo")
    // var add=await AsyncStorage.getItem("Address")
    // console.log(JSON.parse(pinfo)[1])
    // console.log(add)
    
  // }
  
  
render(){
  return(
    <View>
      {/* {myIcon} */}
      <Icon name="arrowleft" size={50}></Icon>
    </View>
      
      
  )
}
}