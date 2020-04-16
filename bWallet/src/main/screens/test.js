import React from 'react'
import {Dropdown} from 'react-native-material-dropdown'
import { View,StyleSheet,ActivityIndicator,Text,TextInput,ScrollView,TouchableOpacity,KeyboardAvoidingView,Image } from 'react-native'
// import styles from '../../resources/styles/Styles'
import shared from 'react-native-shared-preferences'

class test extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        shared.getItems(["name","names"],function (params) {
         alert(params)   
        })
    }
    render(){
        return(
            
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                
                
                
                
            </View>
        )
    }
    
}
export default test