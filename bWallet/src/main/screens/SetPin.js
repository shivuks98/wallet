import React from 'react'
import { View,Text,TextInput,TouchableOpacity, KeyboardAvoidingView,AsyncStorage,Modal,ActivityIndicator } from 'react-native'
import Styles from '../../resources/styles/Styles'
import SnackBar from 'react-native-snackbar'

export default class SetPin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pin:null,
            confirm:null,
            activity:false
        }
    }
    handleNext=()=>{
        var Pin='Enter the New PIN'
        var cpin='Enter the Confirm PIN'
        var compare='Your new PIN and confirm PIN do not match'
        var len='PIN must be 4 digit'
        var text=""
        var showSnack=true
        var list=[]
        var pin=this.state.pin
        for(var i in pin){
            list.push(parseInt(pin[i]))
        }
        var one=list[0]+3
        var two=list[1]+2
        var three=list[2]+1

        var rone=list[0]-3
        var rtwo=list[1]-2
        var rthree=list[2]-1
        
        if(this.state.pin==null){
            text=Pin
        }else if(this.state.confirm==null){
            text=cpin
        }else if(this.state.pin.lengh<4 || this.state.confirm.length<4){
            text=len
        }
        else if(this.state.pin!=this.state.confirm){
            text=compare
        }else if(one==two && two == three && three==list[3]){
            text='Pin should not be sequential in ascending order'
        }
        else if(rone==rtwo && rtwo == rthree && rthree==list[3]){
            text='Pin should not be sequential in descending order'
        }
        else if((list[0]==list[1] && list[1]==list[2])|| (list[1]==list[2] && list[2]==list[3])){
            text="PIN cannot contain same digit consecutively more than 2 times"
        }
        else{
            AsyncStorage.setItem("PIN",this.state.pin)
            setTimeout(()=>{
                this.setState({activity:false})
                this.props.navigation.navigate('UploadPhoto')
            },3000)
            // this.props.navigation.navigate('UploadPhoto')
            // showSnack=false
            text="You have been successfully registered.\nPlease complete KYC to use our services.\nredirecting"
        }
        if(showSnack){
           SnackBar.show({
               text:text,
               duration:SnackBar.LENGTH_LONG,
               action:{
                   text:'OK',
                   textColor:'red'
               }
           }) 
        }
    }
   
    render(){
        return(
            <KeyboardAvoidingView style={Styles.container} behavior="padding">
                <View style={[Styles.container,{paddingBottom:50,alignItems:'center',justifyContent:'center'}]}>
                {/* <View style={{flex:1,alignItems:"flex-start",paddingTop:70,padding:80,alignContent:'center'}}> */}
                    <Text style={Styles.text}>New PIN</Text>
                    <TextInput secureTextEntry={true} onChangeText={(pin)=>this.setState({pin:pin})} keyboardType='numeric' maxLength={4}
                    placeholder="****" style={[Styles.textInput,{width:'30%',textAlign:'center'}]}/>
                    <Text style={Styles.text}>Confirm PIN</Text>
                    <TextInput secureTextEntry={true} onChangeText={(cpin)=>this.setState({confirm:cpin})} keyboardType='numeric' maxLength={4}
                    placeholder="****" style={[Styles.textInput,{width:'30%',textAlign:'center'}]}/>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity  
                    onPress={this.handleNext}>
                        <Text style={Styles.buttonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}