

import React, { Component } from 'react';
import 
{View,TextInput,
  StyleSheet,TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardSpacer,Modal,
  AsyncStorage,
ActivityIndicator} from 'react-native'
  // import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
  
import { Dropdown } from 'react-native-material-dropdown';
import Snackbar from 'react-native-snackbar';
import styles from './styles/styles'
export default class Drop extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mobileNo:null,
      visible:false,
      code:971
    }
  }
  
  validate=()=>{
       
    var text1='Enter a valid Mobile Number'
    var text2="Mobile Number must be atleast 8 digits"
    
    var text=''
    var shows=false
    var defaultpin=123456
    if(this.state.mobileNo==null){
        text=text1
    }else if(this.state.mobileNo.length<8){
        text=text2
    }
    else {
      AsyncStorage.setItem("MobileNo",JSON.stringify(this.state.code+this.state.mobileNo))
      this.setState({visible:true})
      setTimeout(()=>{
        this.setState({visible:false})
        this.props.navigation.navigate("Account Verification")
      },1000)
   
    shows=true
    }
    if(shows==false){
    Snackbar.show({
        text:text,
        duration:Snackbar.LENGTH_INDEFINITE,
        action:{
            text:'OK',
            textColor:'red'
        }
        
    })
}
}

  render() {
    let data = [{
      value: '973',
    }, {
      value: '965',
    }, {
      value: '968',
    },{
        value:'974',
    },{
        value:'966',
    },{
        value:'971',
    }
];
    return (
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
          
       
        
      <View style={styles.container}>
       <View style={{paddingLeft:60,paddingTop:60}}>
          <Image style={styles.logo} source={require('../forgotPinScreens/images/lock.png')}/>
          <Text style={{paddingTop:20}}>Please enter the mobile number</Text>
          
        </View>
        <View style={styles.numerview}>
          <View style={{width:60}}>
          <Dropdown data={data} value={971} onChangeText={(code)=>this.setState({code:code})}/>
          </View>
          <TextInput maxLength={12} style={styles.textInput} placeholder="Phone Number" keyboardType={'numeric'}
          onChangeText={(m)=>{this.setState({mobileNo:m})}}/>
          </View>
          {!this.state.mobileNo && (<Text style={{color:'red',paddingLeft:140}}>Please enter the mobile number</Text>)}
          <View style={styles.button}>

          
            <TouchableOpacity onPress={this.validate}
            style={styles.button1}
            >
              <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
          </View>
          <Modal transparent={true} visible={this.state.visible}>
            <View style={{backgroundColor:"#000000aa",flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={{backgroundColor:'#ffff',width:'80%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <ActivityIndicator size='large' color='red'/>
                <Text style={{justifyContent:'center',paddingHorizontal:10}}>Request is being Processed</Text>
              </View>
            </View>
          </Modal>

      </View>
  
     
      </TouchableWithoutFeedback>
    );
  }
}


