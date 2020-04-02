import React from 'react'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View,TouchableOpacity,Text,TextInput,Image,Button} from 'react-native'
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


const Stack=createStackNavigator();

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
                source={require('../../resources/images/bWallet2.png')}/>}}>
                    {/* <Stack.Screen name='test' component={Test2}/> */}
                    
                    {/* <Stack.Screen name='l' component={Test}/> */}
                    {/* <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='terms' component={terms} options={{title:'Terms and Conditions'}}/>
                    <Stack.Screen name='register1' component={Register1} options={{title:'Registration'}}/>
                    <Stack.Screen name='verify' component={Register2} options={{title:'Registration'}}/> */}
                    {/* <Stack.Screen name='registerForm' component={RegisterForm} options={{title:'Registration'}}/> */}
                    {/* <Stack.Screen name='addAddress' component={addAddress} options={{title:'Registration'}}/> */}
                    <Stack.Screen name='securityAnswer' component={SetSecurity} options={{title:'Set Security Answers'}}/>
                    <Stack.Screen name='SetPin' component={SetPin} options={{title:'Set Pin'}}/>
                    <Stack.Screen name='UploadPhoto' component={UploadPhoto} options={{title:'Upload Recent Photo'}}/>
                    <Stack.Screen name='Nationalid' component={NationalId} options={{title:'National ID'}}/>
                    <Stack.Screen name='Document' component={UploadDocument} options={{title:'Upload Document'}}/>
                    <Stack.Screen name='Confirm' component={ConfirmPhoto} options={{title:'Confirm'}}/>
                    
                </Stack.Navigator>
            </NavigationContainer>

        )
    }
}

