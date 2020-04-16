import React from 'react'
import {View,Modal, Image,Text,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView } from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
// import ModalDropdown from 'react-native-modal-dropdown'
import SnackBar from 'react-native-snackbar'
import Menu, {MenuItem}from "react-native-material-menu"
import styles from '../../resources/styles/Styles'

var data =[
    {value:973},{value:965},{value:968},{value:974},{value:966},{value:971}]

// data=[]
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.props.navigation.setOptions({headerRight:()=>
            <View style={{flexDirection:'row',alignItems:'center'}}><Image style={{height:30,width:100,}}
            source={require('../../resources/images/bWalletC.png')}/>
                <Menu ref={this.setMenuRef} button={ <TouchableOpacity onPress={this.showMenu}><Image style={{height:20,width:20,margin:10,}}
                source={require('../../resources/images/globe.png')}/></TouchableOpacity>}>
                    <MenuItem onPress={()=>this.setState({language:true})}>Change Language</MenuItem>
                </Menu>
            
            </View>})
        this.state={
            value:989,
            mobileNo:null,
            pin:null,
            visible:true,
            language:false
            
        }
    }
    _menu=null
    setMenuRef=ref=>{
        this._menu=ref
    }
    hideMenu=()=>{
        this._menu.hide();
    }
    showMenu=()=>{
        this._menu.show();
    }
    
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({visible:false})
        },2000)
    }
    login=()=>{
        if(this.state.mobileNo && this.state.pin){
           var text1='Mobile Number must be atleast 8 digit';
            var text2='PIN must be 4 Digit'
            var text3=''
            if(this.state.mobileNo.length<8){
                text3=text1
            }
            else if(this.state.pin.length<4){
                text3=text2
            }
            SnackBar.show({
                text:text3,
                duration:SnackBar.LENGTH_LONG,
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
               <KeyboardAvoidingView style={styles.container} behavior="padding" >
                {/* Language modal */}
                <Modal transparent={true} visible={this.state.language}>
                    <View style={{flex:1,backgroundColor:'#000000aa',justifyContent:'center',alignItems:'center'}}>
                        <View style={{backgroundColor:'#ffff',width:'80%',height:150,padding:20}}>
                        <Text style={{fontWeight:"bold",fontSize:20,color:'red'}}>Pick a Language</Text>
                        <TouchableOpacity onPress={()=>this.setState({language:false})}>
                            <Text style={{paddingTop:10,fontSize:18,color:'red'}}>English/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({language:false})}>
                            <Text style={{paddingTop:10,fontSize:18,color:'red'}}>Arabic/</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                   <Modal visible={this.state.visible}>
                       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{height:'100%',width:"100%"}} source={require('../../resources/images/Screen.png')}/>
                   </View>
                   </Modal>
                    <ScrollView>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.image} source={require('../../resources/images/blogo.png')}/>
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Mobile Number</Text>
                    </View>
                    <View style={[styles.numberView,{justifyContent:'space-between'}]}>
                        <View style={{width:70,paddingRight:10}}>
                            <Dropdown data={data} value={this.state.value} fontSize={18}
                            onChangeText={(value)=>this.setState({value:value})}/>
                        </View>
                        <TextInput maxLength={9} autoFocus={true} returnKeyType={"next"} 
                        onSubmitEditing={()=>this.nextInput.focus()}
                        keyboardType='numeric'  placeholder="Mobile Number" 
                        style={[styles.textInput,{width:'90%',fontSize:18,fontWeight:'bold',paddingTop:20}]}
                        onChangeText={(number)=>{this.setState({mobileNo:number})
                        }}/>
                    </View>
                    
                    
                    <View style={styles.textview}>
                    {!this.state.mobileNo && (<Text style={styles.error}>Please Enter a Valid Mobile Number</Text>)}
                        <Text style={styles.text}>PIN</Text>
                        <TextInput ref={nextInput=>this.nextInput=nextInput}
                         maxLength={4} secureTextEntry keyboardType='numeric' 
                        onChangeText={(pin)=>{this.setState({pin:pin})}}
                        placeholder="****" style={[styles.textInput,{fontSize:20,fontWeight:'bold'}]}/>
                        
                        {this.state.mobileNo && !this.state.pin && (
                        <Text style={styles.error}>Please Enter PIN</Text>)}
                    
                    </View>
                            
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forgot PIN?')}> 
                        <Text style={{color:'red',paddingLeft:50,paddingTop:10}}>Forgot PIN?</Text>
                    </TouchableOpacity>
                    
                    </ScrollView>
                    <View style={{flex:1}}>
                            <View style={[styles.Button,{bottom:40}]}>
                                <TouchableOpacity onPress={this.login} > 
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.Button,{backgroundColor:'gray',}]}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('terms')}> 
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                    </View>         
                            
                    </KeyboardAvoidingView>
            
        )
    }
}