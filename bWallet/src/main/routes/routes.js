import React from 'react'
import {createStackNavigator, HeaderTitle,HeaderBackButton} from '@react-navigation/stack';
import {NavigationContainer,} from '@react-navigation/native';
import {View,TouchableOpacity,Text,TextInput,Image,Button} from 'react-native'
// import {Icon} from 'react-native-vector-icons'
import SnackBar from 'react-native-snackbar'
import Buttons from '../../resources/Button/CallButton'
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
import { Icon } from 'react-native-vector-icons/AntDesign';


function myicon(){
 <Icon name='arrowleft' size={50} color='red'/>}
const Stack=createStackNavigator();
const Stack1=createStackNavigator();

export default class routes extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        
        return(
            // <Text>hii</Text>
            <NavigationContainer >
                <Stack.Navigator 
                screenOptions={{
                    headerStyle:{backgroundColor:'#424241'},
                    headerTintColor:'white',
                    headerRight:()=><Image style={{height:30,width:100,}}
                source={require('../../resources/images/bWallet2.png')}/>,
                
                }}>
                    
                    
                    {/* <Stack.Screen name='l' component={Test}/> */}
                    
                    {/* Register screens */}
                    {/* <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='terms' component={terms} options={{title:'Terms and Conditions'}}/> */}
                    {/* <Stack.Screen name='register1' component={Register1} options={{title:'Registration'}}/>
                    <Stack.Screen name='verify' component={Register2} options={{title:'Registration',headerLeft:null}}/>
                    <Stack.Screen name='registerForm' component={RegisterForm} options={{title:'Registration'}}/>
                    <Stack.Screen name='securityAnswer' component={SetSecurity} options={{title:'Set Security Answers'}}/>
                    <Stack.Screen name='SetPin' component={SetPin} options={{title:'Set Pin',}}/> */}
                    <Stack.Screen name='UploadPhoto' component={UploadPhoto}
                     options={{title:'Upload Recent Photo',headerLeft: () => (
                        <TouchableOpacity
                          onPress={this.KYCBack}
                        //   title="Info"
                          color="#424241"
                        ><Image style={{height:20,width:30,}}
                        source={require('../../resources/images/back1.png')}/>
                        </TouchableOpacity>
                      ),
                     }} />
                    <Stack.Screen name='Nationalid' component={NationalId} options={{title:'National ID',headerLeft:null}}/>
                    <Stack.Screen name='Document' component={UploadDocument} options={{title:'Upload Document',headerLeft:null}}/>
                    <Stack.Screen name='Confirm' component={ConfirmPhoto} options={{title:'Confirm'}}/>
                    
                    {/* ForGot Pin Screens */}
                    <Stack.Screen name="Forgot PIN?" component={Drop}/>
                    <Stack.Screen name="Account Verification" component={acc}/>
                    <Stack.Screen name="Security Questions" component={sqs}/>
                    <Stack.Screen name="Forgot Security Answer" component={fsa}/>
                    <Stack.Screen name="Set Pin" component={sp}/>
                    
                    
                    
                    {/*Below Screen are Not to be used  */}
                    {/* <Stack.Screen name='test' component={Test2}/> */}
                    
                    {/* <Stack.Screen name='l' component={Stack1.Screen}/> */}
                </Stack.Navigator>
                
            </NavigationContainer>

        )
    }
    KYCBack=()=>{
        this.props.navigation.navigate("Nationalid")
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

