

import React, { Component } from 'react';
import 
{View,TextInput,
  StyleSheet,TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardSpacer} from 'react-native'
  // import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
  
import { Dropdown } from 'react-native-material-dropdown';
import Snackbar from 'react-native-snackbar';
import styles from '../forgotPinScreens/styles/styles'
// import Snackbar from 'react-native-snackbar';
export default class Drop extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mobileNo:null
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
    this.props.navigation.navigate("Account Verification")
    shows=true
    }
    if(shows==false){
    Snackbar.show({
        text:text,
        duration:Snackbar.LENGTH_LONG,
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
        {/* <KeyboardAwareScrollView style={{flex:1}}
        behavior="padding"> */}
      <View style={styles.container}>
       <View style={{paddingLeft:60,paddingTop:60}}>
          <Image style={styles.logo} source={require('../forgotPinScreens/images/lock.png')}/>
          <Text style={{paddingTop:20}}>Please enter the mobile number</Text>
          
        </View>
        <View style={styles.numerview}>
          <View style={{width:60}}>
          <Dropdown data={data} value={971}/>
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

      </View>
      {/* </KeyboardAwareScrollView> */}
      </TouchableWithoutFeedback>
    );
  }
}


