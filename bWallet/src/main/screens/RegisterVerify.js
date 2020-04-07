import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image } from 'react-native'
import styles from '../../resources/styles/Styles'
import Snackbar from 'react-native-snackbar'
//on timer expire = "TImer has expired before verification,please regenerate OTP"
const time=5
class RegisterVerify extends React.Component{
    constructor(props){
        super(props)
        this.state={
            otp:0,
            timer:time
        }
    }
    
    validate=()=>{
        
        var text1='Enter a valid OTP'
        var text=''
        var shows=false
        var defaultOtp=123456
        if(this.state.otp==0 || this.state.otp!=defaultOtp){
            text=text1
        }
        else {
        this.props.navigation.navigate('registerForm')
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
    componentDidMount(){
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
        this.setState({timer:time})
        this.interval=setInterval(
            ()=>this.setState((prevState)=>({timer:prevState.timer-1}) ),1000
        )
    }
    render(){
        return(
            <View style={[styles.container,{paddingTop:30}]}>
                <View style={{paddingLeft:40}}>
                <Text style={styles.text}>A Verification code has been sent to your registered mobile number</Text>
                </View>
                <View style={[styles.container,{paddingLeft:70,paddingRight:70}]}>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>
                    Please enter it below</Text>
                    <TextInput secureTextEntry={true} maxLength={6} onChangeText={(otp)=>this.setState({otp:otp})}
                    placeholder="XXXXXX" style={styles.textInput} keyboardType='number-pad'/>
                    <Text style={styles.text}>Did not get the code?</Text>
                    <View>
                        {this.state.timer !=0 &&(
                        <View style={{flexDirection:'row'}}> 
                        <Image style={{margin:10}}source={require('../../resources/images/restart.png')}/>
                                            
                        <Text style={[styles.text,{color:'red',textAlign:'left'}]}>
                        Click to resend in {this.state.timer} seconds.</Text></View>
                        )}
                        {this.state.timer==0 &&<TouchableOpacity onPress={this.resendOtp}>
                        <Text style={[styles.text,{color:'red',textAlign:'left'}]}>
                            Click to resend </Text>
                        </TouchableOpacity>}
                    </View>
                </View>
                <View style={styles.Button}>
                    <TouchableOpacity onPress={this.validate}>
                    {/* onPress={()=>this.props.navigation.navigate('registerForm')}> */}
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default RegisterVerify