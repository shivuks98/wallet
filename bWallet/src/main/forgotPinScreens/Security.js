import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableWithoutFeedback,Keyboard

} from 'react-native';
//  import  Drop from './Drop'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import styles from '../forgotPinScreens/styles/styles'
export default class Def extends React.Component
{
          constructor(props)
          {
            super(props)
            this.state={
              ans:null
            }
          }
          validate=()=>{
       
            var text1='please eneter your response'
            var text2="answer entered in invald"
            
            var text=''
            var shows=false
            var defaultanswer="abc"
            if(this.state.ans==null){
                text=text1
            }else if(this.state.ans!=defaultanswer){
                text=text2
            }
            else {
            this.props.navigation.navigate("Set Pin")
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

     render()
  {
    return(
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>
    <View style={styles.regform}>
      <View style={{paddingLeft:50,paddingRight:50,}}>
        <Text style={{fontSize:18}}>What is the name of your first school?</Text>

        <View style={styles.numberView1}>
          <TextInput placeholder="Security Answer"
           onChangeText={(a)=>{this.setState({ans:a})}}
           style={styles.textinput2}/>
        </View>
        <View>
          <TouchableOpacity onPress={this.validate}>
          <Text style={styles.buttonText2}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        

      </View>
      <View  style={styles.Bottom}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forgot Security Answer')} >
          <Text style={{textAlign:'center',justifyContent:'center',fontSize:15,fontWeight:"bold"}}>
            Forgot Security Answer?
            </Text>
          </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback>

      );
  }
}


