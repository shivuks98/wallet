import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image,AsyncStorage, ActivityIndicator } from 'react-native'
import Styles from '../../resources/styles/Styles'
import  ImagePicker  from 'react-native-image-picker'
import RadioForm from 'react-native-simple-radio-button'
import SnackBar from 'react-native-snackbar'

radio_prop=[
    {label:'Driving License',value:1},
    {label:'Passport',value:2}
]
export default class UploadDocument extends React.Component{
    constructor(props){
        super(props)
        this.state={
            frontId:null,
            backId:null,
            radio:1,
            Id:null
        }
    }
    componentDidMount(){
        return(
            
                <ActivityIndicator/>
            
        )

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
    handleNext=()=>{
        console.log(this.state.value)
        var idno='Please check the input fields.'
        var image='Select the image'
        
        
        var text=""
        var showSnack=true
        if(!this.state.Id || this.state.Id.length<8){
            text=idno
        }else if(!this.state.frontId || (!this.state.backId && this.state.radio ==1)){
            text=image
        }
        else{
            // AsyncStorage.setItem('userphoto',this.state.source)
            this.props.navigation.navigate('Confirm')
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
    
    render(){
        return(
            
            <View style={Styles.container}>
                <View style={[Styles.container,{alignItems:'center',paddingTop:'10%'}]}>
                    <Text style={{fontSize:20,fontWeight:'bold',paddingBottom:10}}>Choose ID document</Text>
                    <View style={{paddingLeft:30,width:'100%'}}>
                    <RadioForm  radio_props={radio_prop} labelStyle={{fontSize:18}}  onPress={(v)=>
                        {this.setState({radio:v,frontId:null,backId:null})
                        // console.log(this.state.radio)
                    }
                        }/>
                        </View>
                    <Text style={Styles.text}>Passport/DL</Text> 
                    <TextInput maxLength={15} onChangeText={(id)=>this.setState({Id:id})}
                    style={[Styles.textInput,{width:'57%',borderBottomWidth:2.3}]}/>
                    
                {/* <Image style={{width:130,height:110,margin:10,borderColor:'black',borderWidth:1,}} 
                source={require('../../resources/images/fileupload.png')}/> */}
                
                <View style={{flexDirection:'row',paddingHorizontal:'19%',alignSelf:'flex-start',}}>
                    <View>
                    <TouchableOpacity onPress={this.handleFrontId}>
                        { 
                        !this.state.frontId  && (<Image style={Styles.photo} 
                        source={require('../../resources/images/fileupload.png')}/>)}
                        { 
                        this.state.frontId  && (<Image style={Styles.photo} 
                        source={this.state.frontId}/>)}
                    </TouchableOpacity>
                        <Text style={[Styles.text,{textAlign:'center'}]}>
                            ID Front Image</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={this.handleBackId}>
                        { this.state.radio == 1 &&
                        !this.state.backId  && (<Image style={Styles.photo} 
                        source={require('../../resources/images/fileupload.png')}/>)}
                        { 
                        this.state.backId  && (<Image style={Styles.photo} 
                        source={this.state.backId}/>)}
                    </TouchableOpacity>
                    {this.state.radio==1 &&(
                    <Text style={Styles.text}>ID Back Image</Text>)}
                    </View>
                </View>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={this.handleNext}>
                    {/* Press={()=>this.props.navigation.navigate('Confirm')} > */}
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}