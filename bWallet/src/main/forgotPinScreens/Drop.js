

import React, { Component } from 'react';
import 
{View,TextInput,
  StyleSheet,TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardSpacer,
  AsyncStorage,
ActivityIndicator} from 'react-native'
import Modal from 'react-native-translucent-modal'
import { Dropdown } from 'react-native-material-dropdown';
import Snackbar from 'react-native-snackbar';
// import styles from './styles/styles'
import styles from '../../resources/styles/Styles'

const numericRegex = /^[0-9]*$/
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
    var defaultpin=123456
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
        
      }}>
          
       
        
      <View style={styles.container1}>
       <View style={{paddingLeft:60,paddingTop:60}}>
          <Image style={styles.logo} source={require('../forgotPinScreens/images/lock.png')}/>
          <Text style={{paddingTop:20}}>Please enter the mobile number</Text>

        </View>
        <View style={[styles.numberView,{justifyContent:'space-between'}]}>
          <View style={{width:60}}>
          <Dropdown data={data} value={971}containerStyle={{width:60}} itemCount={8} pickerStyle={{width:70}} dropdownPosition={0}
           animationDuration={0} onChangeText={(code)=>this.setState({code:code})}/>
          </View>
          <TextInput value={this.state.mobileNo} maxLength={10} style={[styles.textInput,{marginLeft:20,width:"90%"}]} placeholder="Phone Number" keyboardType={'numeric'}
          onChangeText={(number)=>
            {if(numericRegex.test(number))
          {
            this.setState({mobileNo:number})

          }else if(number.length<1){
            this.setState({mobileNo:null})
          }
          }}/>
          </View>
          {/* {!this.state.mobileNo && (<Text style={{color:'red',paddingLeft:140}}>Please enter the mobile number</Text>)} */}
          
          
          
          <View style={styles.Button}>
            <TouchableOpacity onPress={this.validate}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
          <Modal transparent={true} visible={this.state.visible}>
          <View style={styles.activityContainer}>
          <View style={styles.innerActivity}>
                <ActivityIndicator size='large' color='red'/>
                <Text style={styles.activityText}>Request is being Processed</Text>
              </View>
            </View>
          </Modal>

      </View>
  
     
      </TouchableWithoutFeedback>
    );
  }
}

