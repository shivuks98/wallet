import React, { Component } from 'react';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard,Modal,ActivityIndicator, AsyncStorage

} from 'react-native';
import styles from './styles/styles'
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
        
                var text1='Enter a valid OTP'
                var text=''
                var shows=false
                var defaultpin=123456
                if(this.state.pin==0 || this.state.pin!=defaultpin){
                    text=text1
                }
                else {
                  this.setState({visible:true})
                  setTimeout(()=>{
                    this.setState({visible:false})
                    this.props.navigation.navigate("Security Questions")
                  },1000)
        //         this.props.navigation.navigate("Security Questions")
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
       
            <View style={styles.regform}>
                <View style={{paddingLeft:60,paddingRight:50}}>
                <Text>A Verification code has been sent to{"\n"}
                     your registered mobile number {"\n"}
                     +{this.state.mobileNo} </Text>
                 <Text style={styles.title1}>Please enter it below</Text>

                <TextInput maxLength={6} style={styles.textinput1} placeholder="XXXXXX"
                 onChangeText={(p)=>{this.setState({pin:p})}}
                secureTextEntry
                underlineColorAndroid={'transparent'} 
                keyboardType={'numeric'} />

                 <Text style={styles.text1}>Did not get the code?</Text>
                 <View style={{alignItems:'flex-start',paddingLeft:20}}>
                 {this.state.timer !=0 &&(
                       <View style={{flexDirection:'row'}}> 
                       <Image 
                          source={require('../../resources/images/restart.png')} 
                          style={styles.ImageIconStyle} 
                          />
                       <Text style={[styles.text,{color:'red',textAlign:'right',paddingLeft:30,paddingTop:10}]}>
                                Click to resend in {this.state.timer} seconds.</Text></View>
                                )}
                        {this.state.timer ==0 &&(
                       <View style={{flexDirection:'row'}}> 
                       <TouchableOpacity style={{flexDirection:'row'}} onPress={this.resendOtp}>
                       <Image 
                          source={require('../../resources/images/restart.png')} 
                          style={styles.ImageIconStyle} 
                          />
                       <Text style={[styles.text,{color:'red',textAlign:'right',paddingLeft:30,paddingTop:10}]}>
                                Click to resend  </Text>
                                </TouchableOpacity></View>
                                )}

                       </View>
                 <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                {/* <TouchableOpacity >
                  <Image 
                source={require('../files/images/refresh.png')} 
                style={styles.ImageIconStyle} 
                />
               
              </TouchableOpacity> */}
                </View>
                </View>
                     <View style={styles.button}>
                     <TouchableOpacity onPress={this.validate}
                        style={styles.button1}>
                      <Text style={{color:'white', fontSize: 16}}>Verify</Text>
                         </TouchableOpacity>
                </View>
                <Modal transparent={true} visible={this.state.visible}>
            <View style={{backgroundColor:"#000000aa",flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={{backgroundColor:'#ffff',width:'80%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <ActivityIndicator size='large' color='red'/>
                <Text style={{justifyContent:'center',paddingHorizontal:10}}>Processing</Text>
              </View>
            </View>
          </Modal>
            </View>
                
            </TouchableWithoutFeedback>

            
        );
  }
}
