import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image,AsyncStorage,BackHandler,ToastAndroid } from 'react-native'
import Styles from '../../resources/styles/Styles'
import  ImagePicker  from 'react-native-image-picker'
import SnackBar from 'react-native-snackbar'
import sharedData from 'react-native-shared-preferences'
import {requestMultiple,PERMISSIONS} from 'react-native-permissions'

// var d=60
// requestMultiple([PERMISSIONS.ANDROID.CAMERA,PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]).then(()=>{
  
// })

export default class UploadPhoto extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            source:null
        }
    }

    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress",this.handleback)
    }
    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress",this.handleback)
    }
    handleback=()=>{
        // ToastAndroid.show("back button pressed",ToastAndroid.LONG)
        SnackBar.show({
            text:"It is mandatory to complete KYC.Please complete the process.",
            duration:SnackBar.LENGTH_INDEFINITE,
            action:{
                text:"OK",
                textColor:'red'
            }
        })
        return true
        
    }
    handleNext=()=>{
        var photo='Select a image'
        
        var text=""
        var showSnack=true
        if(!this.state.source){
            text=photo
        }else{
            // console.log("from the upload photo "+this.state.source)
            // sharedData.setItem('UserPhoto',JSON.stringify(this.state.source))
            
            AsyncStorage.setItem('UserPhoto',JSON.stringify(this.state.source))
            // this.props.navigation.navigate('Confirm')
            this.props.navigation.navigate('Nationalid')
            showSnack=false
        }
        if(showSnack){
           SnackBar.show({
               text:text,
               duration:SnackBar.LENGTH_LONG,
               action:{
                   text:'OK',
                   textColor:'red'
               }
           }) 
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
            if(response.didCancel){66
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
    render(){
        return(
            <View style={Styles.container}>
                <View style={[Styles.container,{paddingBottom:50,paddingTop:50,alignItems:'center',}]}>
                    <View style={{width:"50%",height:130,justifyContent:'center',alignItems:'center',borderWidth:2,borderRadius:5,borderColor:'black'}}>
                    { 
                    !this.state.source  && (<Image style={{width:130,height:110,justifyContent:'center'}} 
                source={require('../../resources/images/fileupload.png')}/>)}
                { 
                    this.state.source  && (<Image style={{width:'100%',height:130,borderRadius:5}} 
                source={this.state.source}/>)}
                {/* <Image style={{width:130,height:110,margin:10,borderColor:'black',borderWidth:1,}} 
                source={require('../../resources/images/fileupload.png')}/> */}
                </View>
                <Text style={Styles.text}>Your recent photo</Text>
                <View style={{flexDirection:'row',padding:40}}>
                    <TouchableOpacity onPress={this.handleGalary}>
                    <Image style={{width:40,height:30,margin:10,}} 
                    source={require('../../resources/images/galary.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleCamera}>
                    <Image style={{width:40,height:30,margin:10,}} 
                    source={require('../../resources/images/camera.png')}/>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={this.handleNext}
                    // onPress={()=>this.props.navigation.navigate('Nationalid')}
                    >
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}