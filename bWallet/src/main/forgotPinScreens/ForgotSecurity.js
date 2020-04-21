
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard,Modal,ActivityIndicator
  ,ToastAndroid
} from 'react-native';
 
//  import styles from './styles/styles'
 import styles from '../../resources/styles/Styles'
export default class ForgotSecurity extends React.Component {
    constructor(props){
        super(props)
        this.state={timer:true,visible:false}
      }
      componentDidMount(){
        this.setState({visible:true})
        setTimeout(()=>{
          this.setState({visible:false})
          // this.props.navigation.navigate("Photo")
        },1000)

        
      }
      validate=()=>{
        var text="A verification link has been sent to your email id"
        ToastAndroid.show(text,ToastAndroid.LONG)
        this.props.navigation.navigate("Login")
      }
  render() {
    
 
    return (
      <TouchableWithoutFeedback style={styles.regform} onPress={()=>{
        Keyboard.dismiss();
        
      }}>
        

        <View style={styles.regform}>
            <View style={{}}>
             <Text style={{fontSize:18}}>Your Registered EMAILID</Text>
            </View>
             <View style={{}}>
                <Text style={styles.title3}>abcd@gmail.com</Text>
             </View>
             <View>
                <Text style={{paddingBottom:0,fontSize:20,fontWeight:"bold"}}> 
                Please verify your EMAIL ID!</Text>
            </View>

             <View style={{}}>
             <TouchableOpacity onPress={this.validate}>
          <Text style={styles.buttonText2}>VERIFY EMAIL</Text>
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

