import React, { Component } from 'react';
import { Text, View,Modal,TouchableOpacity,KeyboardAvoidingView,TextInput,ScrollView, AsyncStorage, ActivityIndicator, ActivityIndicatorBase } from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'

// var d=60
export default class l extends Component{
  constructor(props){
    super(props)
    this.state={timer:true}
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({timer:false})
    },7000)
    
  }
  
render(){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      { this.state.timer ?
      <Modal>
    <View style={{backgroundColor:'#000000aa',flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style={{backgroundColor:'#ffff',flexDirection:'row',width:'80%',height:60,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size='large' color='red'/>
      <Text style={{justifyContent:'center',fontSize:20}}>  Loading the Details</Text>
      </View>

    </View>
    </Modal> : <Text>welcome </Text>
}
</View>
  
      
  )
}
}