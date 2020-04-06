// png.js:


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TextInput,
  Image,TouchableOpacity,options,TouchableWithoutFeedback,Keyboard
} from 'react-native';

import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-picker';

var document=[
  {label:'Driving License',value:0},
  {label:'Passport', value:1}
]


export default class App extends React.Component {
  constructor(props)
          {
            super(props);
            this.state={
              avatarSource:null
            }
          }

          
          handleCamera=()=>{
            const options={}
            ImagePicker.launchCamera(options,(response)=>{
               //  console.log(response)
                if(response.didCancel){
                    console.log('User cancelled image picker')
                }else if(response.error){
                    console.log('ImagePicker Error',response.error)
                }else{
                    const uri={uri:response.uri}
                    this.setState({
                        source:uri
                    })
                }
            })
        }
        handleGalary=()=>{
           const options={}
           ImagePicker.launchImageLibrary(options,(response)=>{
               // console.log(response)
               if(response.didCancel){
                   console.log('User cancelled image picker')
               }else if(response.error){
                   console.log('ImagePicker Error',response.error)
               }else{
                   const uri={uri:response.uri}
                   this.setState({
                       source:uri
                   })
               }
           })
       }
  


  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard')
      }}>

      
      <View style={{padding:20}}>
        <Text style={{fontWeight:"bold",fontSize:20,textAlign:'center'}} >Choose ID document</Text>
        <RadioForm radio_props={document}
          labelVertical={true}
           formVertical={true}
           labelcolor="red"
           buttonColor={'#2196f3'}
           
                     
          labelStyle={{paddingLeft:10,paddingRight:'30%',}}
         onPress={(value)=>this.setState({value:value})}
        />
        <View style={{paddingLeft:10}}>
        

        <View style={styles.regform}>
        <View style={{paddingLeft:10,paddingRight:20,alignItems:'center'}}>
          <Text style={{fontWeight:"bold",fontSize:20,paddingTop:20}} >Passport/DL</Text>
        <TextInput style={styles.textinput1} placeholder="Enter Document Number"
                secureTextEntry
                underlineColorAndroid={'transparent'} />
        </View>
        </View>

            

<View>
        
        <Image source={this.state.avatarSource}  style={{width:'10%',height:20,margin:0}}/>


        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:50,paddingBottom:15}}>
        <TouchableOpacity onPress={this.handleGalary}>
 
                <Image 
                source={require('../forgotPinScreens/images/docs.png')} 
                style={styles.ImageIconStyle} 
                />
                </TouchableOpacity>
               
                <TouchableOpacity onPress={this.handleCamera}>
                <Image 
                source={require('../forgotPinScreens/images/docs.png')} 
                style={styles.ImageIconStyle1} 
                />
               
                </TouchableOpacity>
                </View>
                <Text style={{paddingHorizontal:20}}>document front side            document back side </Text>
               
               </View>
            </View>
      </View>
      </TouchableWithoutFeedback>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput1:{
    borderBottomColor:'black',
        borderBottomWidth:1,
        fontSize:20,
        width:'80%'

  },
  ImageIconStyle: {
    height: 50,
    width: 50,
    resizeMode : 'stretch',
  },
  ImageIconStyle1:{
    height: 50,
    width: 50,
    resizeMode : 'stretch',
    padding:20
  },
  text:{
    justifyContent:'center',
    color:'#ffff',
    alignItems:'center',
    padding:20
  }

});