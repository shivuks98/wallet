import React, { Component } from 'react'
import {Modal,Image,View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,KeyboardAvoidingView} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
import styles from '../../resources/styles/Styles'
import Snackbar from 'react-native-snackbar'
// import Styles from '../../resources/styles/Styles'
// var show=true
class CustomAlert extends Component{
    render(){
        return(
            
                <View >
                    <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',padding:15}}>
                        Please keep the below documents with you during the registration process:
                    </Text>
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <Image source={require('../../resources/images/checkmark.png')}/>
                        <Text style={{paddingLeft:20,fontSize:16}}>National ID</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <Image source={require('../../resources/images/checkmark.png')}/>
                        <Text style={{paddingLeft:20,fontSize:16}}>Passport(For Non-Bahraini)</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <Image source={require('../../resources/images/checkmark.png')}/>
                        <Text style={{paddingLeft:20,fontSize:16}}>Passport or Bahraini/GCC Driving Licence (For GCC Citizens)</Text>
                    </View>
                    
                </View>
            
        )
    }

}
export default class Register1 extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:true,
            mobileNo:null,
            email:null
        }
    }
    validate=()=>{
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var text1='Enter a valid Mobile Number'
        var text2="Mobile Number must be atleast 8 digits"
        var text3="Please Enter a valid Email Address"
        var text=''
        var shows=false
        if(this.state.mobileNo==null){
            text=text1
        }else if(this.state.mobileNo.length<8){
            text=text2
        }else if(this.state.email==null || reg.test(this.state.email)==false ){
            text=text3
        }
        else {
        this.props.navigation.navigate('verify')
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

    render(){
        var data =[
            {value:973},{value:965},{value:968},{value:974},{value:966},{value:971}]
        return(
            
            // <ScrollView style={styles.container} >
            <View style={{flex:1}}>
                <Modal transparent={true} visible={false}>
                <View style={{flex:1,backgroundColor:'#000000aa',justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#ffff',width:'85%',height:300}}>
                        <CustomAlert/>
                        <View style={Styles.savebtn}>
                            <TouchableOpacity
                            onPress={()=>this.setState({visible:false}) }>
                                <Text style={[styles.buttonText,{color:'black'}]}> OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </Modal>
                    <KeyboardAvoidingView style={[styles.container,{paddingTop:70}]} behavior='padding'>
                    
                    <View style={styles.textview}>
                        <Text style={styles.text}>Please enter your moible number</Text>
                    </View>
                    <View style={styles.numberView}>
                        <View style={{width:60}}>
                            <Dropdown  style={{}}data={data} value={973}/>
                        </View>
                        <TextInput maxLength={9} keyboardType='phone-pad' onChangeText={(mobile)=>this.setState({mobileNo:mobile})}
                         placeholder="Mobile Number" style={[styles.textInput,{width:150}]}/>
                    </View>
                    <View style={[styles.textview,{paddingTop:20}]}>
                    <Text style={styles.text}>Enter your Email</Text>
                    <TextInput keyboardType='email-address' onChangeText={(mail)=>this.setState({email:mail})} 
                    placeholder="Email" style={styles.textInput}/>
                    </View>
                    <View style={styles.Button} >
                    <TouchableOpacity onPress={this.validate}>
                    {/* onPress={()=>this.props.navigation.navigate('verify')}>  */}
                        <Text style={[styles.buttonText]}>Next</Text>
                    </TouchableOpacity>
                    </View>       
                </KeyboardAvoidingView>
                
                </View>
                //  </ScrollView>
        )
    }
}
const Styles=StyleSheet.create({
    container:{
        // width:100,
        flex:1,
        alignItems:"center",
        backgroundColor:"#000000aa"

    },
    savebtn:{
        // backgroundColor:'red',
        alignItems:"center",
        marginHorizontal:100,
        borderRadius:10,
        borderColor:'#cddc39',
        borderWidth:2,
        height:35,
        bottom:0,
        marginVertical:20
        // padding:30
        
        
    }
})