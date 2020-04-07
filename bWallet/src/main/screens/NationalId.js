import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image, KeyboardAvoidingView } from 'react-native'
import Styles from '../../resources/styles/Styles'
import  ImagePicker  from 'react-native-image-picker'
import SnackBar from 'react-native-snackbar'

export default class NationalId extends React.Component{
    constructor(props){
        super(props)
        this.state={
            frontId:null,
            backId:null,
            idnumber:null
        }
    }
    handleNext=()=>{
        var idno='Please check your input fields.'
        var image='Please select image'
        // var back='Choose the back image'
        
        var text=""
        var showSnack=true
        if(!this.state.idnumber || this.state.idnumber.length<8){
            text=idno
        }else if(!this.state.frontId || !this.state.backId){
            text=image
        }
       else{
            this.props.navigation.navigate('Document')
            showSnack=false
        }
        if(showSnack){
           SnackBar.show({
               text:text,
               duration:SnackBar.LENGTH_INDEFINITE,
               action:{
                   text:'OK',
                   textColor:'red'
               }
           }) 
        }
    }
     handleFrontId=()=>{
         var options={
             title:'Add Photo!',
            
             storageOptions:{
                 skipBackup:true
             }
             
         }
         ImagePicker.showImagePicker(options,(response)=>{
            //  console.log(response)
             if(response.didCancel){
                 console.log('User cancelled image picker')
             }else if(response.error){
                 console.log('ImagePicker Error',response.error)
             }else if(response.customButton){
                 console.log("user tapped on custom button",response.customButton)
                 alert(response.customButton)
             }
             else{
                 const uri={uri:response.uri}
                 this.setState({
                     frontId:uri
                 })
             }
         })
     }
     handleBackId=()=>{
        var options={
            title:'Add Photo!',
           
            storageOptions:{
                skipBackup:true
            }
            
        }
        ImagePicker.showImagePicker(options,(response)=>{
           //  console.log(response)
            if(response.didCancel){
                console.log('User cancelled image picker')
            }else if(response.error){
                console.log('ImagePicker Error',response.error)
            }else if(response.customButton){
                console.log("user tapped on custom button",response.customButton)
                alert(response.customButton)
            }
            else{
                const uri={uri:response.uri}
                this.setState({
                    backId:uri
                })
            }
        })
    }
    render(){
        return(
            <KeyboardAvoidingView style={Styles.container}>
                <View style={[Styles.container,{alignItems:'center',paddingTop:'10%'}]}>
                    <Text style={Styles.text}>National ID</Text> 
                    <TextInput maxLength={15} onChangeText={(id)=>this.setState({idnumber:id})}
                    style={[Styles.textInput,{width:'57%',borderBottomWidth:2.3}]}/>
                    
                {/* <Image style={{width:130,height:110,margin:10,borderColor:'black',borderWidth:1,}} 
                source={require('../../resources/images/fileupload.png')}/> */}
                
                <View style={{flexDirection:'row',padding:10}}>
                    <TouchableOpacity onPress={this.handleFrontId}>
                        { 
                        !this.state.frontId  && (<Image style={Styles.photo} 
                        source={require('../../resources/images/fileupload.png')}/>)}
                        { 
                        this.state.frontId  && (<Image style={Styles.photo} 
                        source={this.state.frontId}/>)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleBackId}>
                        { 
                        !this.state.backId  && (<Image style={Styles.photo} 
                        source={require('../../resources/images/fileupload.png')}/>)}
                        { 
                        this.state.backId  && (<Image style={Styles.photo} 
                        source={this.state.backId}/>)}
                    </TouchableOpacity>
                </View>
                <Text style={[Styles.text,{}]}> ID Front Image    ID Back Image</Text>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={this.handleNext}>
                    {/* onPress={()=>this.props.navigation.navigate('Document')} > */}
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}