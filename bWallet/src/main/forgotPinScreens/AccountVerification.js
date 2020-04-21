import React, { Component } from 'react';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard,Modal,ActivityIndicator, AsyncStorage

} from 'react-native';
// import styles from './styles/styles'
import styles from '../../resources/styles/Styles'
import Snackbar from 'react-native-snackbar';
export default class AccountVerification extends React.Component {
    constructor(props){
        super(props)
        this.state={
        pin:0,
        timer:60,time:true,
        visible:false,
        mobileNo:null
        // activity:false
      }
      }
      

      componentDidMount=async()=>{
        let number=await AsyncStorage.getItem("MobileNo")
        this.setState({mobileNo:JSON.parse(number)})
        this.interval=setInterval(
            ()=>this.setState((prevState)=>({timer:prevState.timer-1}) ),1000
        )
    }
    componentDidUpdate(){
        if(this.state.timer==0){
            clearInterval(this.interval)
        }  
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    resendOtp=()=>{
        this.setState({timer:60})
        this.interval=setInterval(
            ()=>this.setState((prevState)=>({timer:prevState.timer-1}) ),1000
        )
    }
      validate=()=>{
        
                var text1='Enter a valid OTP'
                var text=''
                var shows=false
                var defaultpin=123456
                if(this.state.pin==0 || this.state.pin!=defaultpin){
                    text=text1
                }
                else {
                  this.setState({visible:true})
                  setTimeout(()=>{
                    this.setState({visible:false})
                    this.props.navigation.navigate("Security Questions")
                  },1000)
        //         this.props.navigation.navigate("Security Questions")
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
    
 
    return (
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
       
       <View style={[styles.container,{paddingTop:30}]}>
                <View style={{paddingLeft:60,paddingRight:50}}>
                <Text style={styles.text}>A Verification code has been sent to
                     your registered mobile number {"\n"}
                     +{this.state.mobileNo} </Text>
                     </View>
              <View style={[styles.container,{paddingLeft:70,paddingRight:70}]}>
                     <Text style={[styles.text,{fontWeight:'bold'}]}>
                    Please enter it below</Text>
                <TextInput  secureTextEntry={true} maxLength={6}  onChangeText={(p)=>{this.setState({pin:p})}}
                    placeholder="XXXXXX" style={styles.textInput} keyboardType='number-pad'/>
                  <Text style={styles.text}>Did not get the code?</Text>
                    <View>
                        {this.state.timer !=0 &&(
                        <View style={{flexDirection:'row'}}> 
                        <Image style={{margin:10,marginTop:20}}source={require('../../resources/images/restart.png')}/>
                                            
                        <Text style={[styles.text,{color:'red',textAlign:'left'}]}>
                        Click to resend in {this.state.timer} seconds.</Text></View>
                        )}
                        {this.state.timer==0 && <View style={{flexDirection:'row'}}> 
                        <TouchableOpacity onPress={this.resendOtp} style={{flexDirection:'row'}}>
                        <Image style={{margin:10,marginTop:20}}source={require('../../resources/images/restart.png')}/>
                                            
                        <Text style={[styles.text,{color:'red',textAlign:'right'}]}>
                            Click to resend </Text>
                        </TouchableOpacity></View>}
                    </View>
                    </View>
                    <View style={styles.Button}>
                     <TouchableOpacity onPress={this.validate}>
                     <Text style={styles.buttonText}>Verify</Text>
                         </TouchableOpacity>
                </View>
                <Modal transparent={true} visible={this.state.visible}>
          <View style={styles.activityContainer}>
          <View style={styles.innerActivity}>
                <ActivityIndicator size='large' color='red'/>
                <Text style={styles.activityText}>Processing</Text>
              </View>
            </View>
          </Modal>
           </View>
            </TouchableWithoutFeedback>
);
  }
}