import React, { Component } from 'react'
import { View,Text,ScrollView,KeyboardAvoidingView,TouchableOpacity,StyleSheet } from 'react-native'
import Styles from '../../resources/styles/Styles'

export default class terms extends Component{
    render(){
        return(
            <View style={styles.cont}>
                <ScrollView>
                    <Text style={{fontSize:18,textAlign:'center'}}>Terms and Conditions</Text>
                    <Text style={styles.text}>
                        have to write the terms and Conditions
                        
                        
                    </Text>
                </ScrollView>
                <View>
                <Text style={styles.text}>
                        You must read and agree to the above Terms and Conditions to use 
                        the b-Wallet. 
                        By cancelling you will not be able to use any of the services of the b-Wallet
                    </Text>
                <View style={styles.bottomview}>
                    <View style={styles.view}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('register1')}>
                        <Text style={styles.btntext}>I AGREE</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.view1}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
                        <Text style={styles.btntext}>I DONOT AGREE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    cont:{
        flex:1,
        padding:10,
        backgroundColor:'#ffff'
    },
    
    bottomview:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    
    },
    view:{
        alignItems:'center',
        height:35,
        backgroundColor:'gray',
        margin:15,
        width:150,
        justifyContent:'center'

    },
    view1:{
        alignItems:'center',
        alignContent:'center',
        height:35,
        width:150,
        backgroundColor:'#d50000',
        justifyContent:"center"
    },
    text:{
        fontSize:15,
        textAlign:'justify'
    },
    btntext:{
        color:'#FFFF',
        fontSize:16,
        textAlign:'center',
        
    }
})

