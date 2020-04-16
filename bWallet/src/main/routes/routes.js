import React from 'react'
import {createStackNavigator, HeaderTitle,HeaderBackButton} from '@react-navigation/stack';
import {NavigationContainer,} from '@react-navigation/native';
import {View,TouchableOpacity,Text,TextInput,Image,Button, Modal, Alert} from 'react-native'
// import {Icon} from 'react-native-vector-icons'
import SnackBar from 'react-native-snackbar'
import Menu, {MenuItem}from "react-native-material-menu"
import Test from '../screens/l'
import Test2 from '../screens/test'

import Login from '../screens/Login'
import terms from '../screens/terms'
import Register1 from '../screens/Register1'
import Register2 from '../screens/RegisterVerify'
import RegisterForm from '../screens/RegisterForm'
import addAddress from '../screens/addAddress'
import SetSecurity from '../screens/SetSecurityAnswers'
import SetPin from '../screens/SetPin'
import UploadPhoto from '../screens/UploadPhoto'
import NationalId from '../screens/NationalId'
import UploadDocument from '../screens/UploadDocument'
import ConfirmPhoto from '../screens/ConfirmPhoto'

//Forgot pin Screens
import Def from '../forgotPinScreens/Def';
import Drop from '../forgotPinScreens/Drop';
import acc from '../forgotPinScreens/AccountVerification'
import sqs from '../forgotPinScreens/Security'
import fsa from '../forgotPinScreens/ForgotSecurity'
import sp from '../forgotPinScreens/SetPin'



const Stack=createStackNavigator();

export default class routes extends React.Component{
    constructor(props){
        super(props)
        this.state={language:false}
        // this.Test1=this.Test1.bind(this)
        this.KYCBack=this.KYCBack.bind(this)
    }
   
    render(){
        
        return(
            
            <NavigationContainer >
                <Stack.Navigator 
                screenOptions={{
                    headerStyle:{backgroundColor:'#424241'},
                    headerTintColor:'white',
                    headerRight:()=><Image style={{height:30,width:100,}}
                source={require('../../resources/images/bWalletC.png')}/>,
                
                }}>
                    
                    
                    <Stack.Screen name='l' component={Test}/>
                    
                    {/* Register screens */}
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='terms' component={terms} options={{title:'Terms and Conditions'}}/>
                    <Stack.Screen name='register1' component={Register1} 
                     options={({navigation})=>{return {title:'Registration',headerLeft:()=><HeaderBackButton tintColor='white' 
                     onPress={()=>navigation.navigate("Login")}/>}}}
                    />
                    <Stack.Screen name='verify' component={Register2} options={{title:'Registration',headerLeft:null}}/>
                    <Stack.Screen name='registerForm' component={RegisterForm} 
                    options={({navigation})=>{return {title:'Registration',headerLeft:()=><HeaderBackButton tintColor='white' 
                    onPress={()=>navigation.navigate("register1")}/>}}}
                    />
                    <Stack.Screen name='securityAnswer' component={SetSecurity} options={{title:'Set Security Answers',headerLeft:null}}/>
                    <Stack.Screen name='SetPin' component={SetPin} options={{title:'Set Pin',}}/>
                    <Stack.Screen name='UploadPhoto' component={UploadPhoto}
                        options={{title:'Upload Recent Photo' ,headerLeft:()=><HeaderBackButton tintColor="#ffff" onPress={this.KYCBack}/>}} />
                    <Stack.Screen name='Nationalid' component={NationalId} options={{title:'National ID',headerLeft:null}}/>
                    <Stack.Screen name='Document' component={UploadDocument} options={{title:'Upload Document',headerLeft:null}}/>
                    <Stack.Screen name='Confirm' component={ConfirmPhoto} options={{title:'Confirm',
                        headerLeft:()=><HeaderBackButton tintColor="#ffff" onPress={this.KYCBack}/>}}/>
                    
                    
                    {/* ForGot Pin Screens */}
                    <Stack.Screen name="Forgot PIN?" component={Drop}/>
                    <Stack.Screen name="Account Verification" component={acc}/>
                    <Stack.Screen name="Security Questions" component={sqs}
                    options={({navigation})=>{return {headerLeft:()=><HeaderBackButton tintColor='white' 
                    onPress={()=>navigation.navigate("Forgot PIN?")}/>}}}
                    />
                    <Stack.Screen name="Forgot Security Answer" component={fsa}
                        options={({navigation})=>{return {headerLeft:()=><HeaderBackButton tintColor='white' 
                        onPress={()=>navigation.navigate("Forgot PIN?")}/>}}}
                    />
                    <Stack.Screen name="Set Pin" component={sp}
                        options={({navigation})=>{return {headerLeft:()=><HeaderBackButton tintColor='white' 
                        onPress={()=>navigation.navigate("Forgot PIN?")}/>}}}
                    />
                    
                    
                    
                    {/*Below Screen are Not to be used  */}
                    {/* <Stack.Screen name='test' component={Test2}/> */}
                    
                    {/* <Stack.Screen name='l' component={Stack1.Screen}/> */}
                </Stack.Navigator>
                
            </NavigationContainer>

        )
    }
    KYCBack=({navigation})=>{
        
        
        SnackBar.show({
            text:"It is mandatory to complete KYC.Please complete the process.",
            duration:SnackBar.LENGTH_INDEFINITE,
            action:{
                text:"OK",
                textColor:'red'
            }
        })
       
    }
}
