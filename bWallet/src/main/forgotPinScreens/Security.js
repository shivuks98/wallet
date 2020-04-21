import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,Text,View,Image,TextInput,TouchableWithoutFeedback,Keyboard,Modal,ActivityIndicator,BackHandler

} from 'react-native';
 import  Drop from './Drop'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
// import styles from './styles/styles'
import styles from '../../resources/styles/Styles'
export default class Security extends React.Component
{
         
          constructor(props) {
            super(props)
            this.state={ans:null,timer:true,visible:false}
            this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
          }
          componentDidMount() {
            
          BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
          }
          componentWillUnmount() {
           
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
          }
          handleBackButtonClick() {
            
            
            
            this.props.navigation.navigate('Forgot PIN?');
            
            return true;
          }
          validate=()=>{
       
            var text1='please eneter your response'
            var text2="answer entered in invald"
            
            var text=''
            var shows=false
            var defaultanswer="abc"
            if(this.state.ans==null){
                text=text1
            }else if(this.state.ans!=defaultanswer){
                text=text2
            }
            else {
              this.setState({visible:true})
                  setTimeout(()=>{
                    this.setState({visible:false})
                    this.props.navigation.navigate("Set Pin")
                  },1000)

          
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
      <View style={{padding:20}}>
        <Text style={{fontSize:18}}>What is the name of your first school?</Text>

        <View style={{padding:20}}>
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
