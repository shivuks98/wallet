import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image,StyleSheet,AsyncStorage,KeyboardAvoidingView } from 'react-native'
import Styles from '../../resources/styles/Styles'
// import  ImagePicker  from 'react-native-image-picker'

export default class ConfirmPhoto extends React.Component{
    constructor(props){
        super(props)
        this.state={
            photo:null,
            Nationalid:null,
            NationalIdFrontImage:null,
            NationaIdBackImage:null,
            DocumentType:null,
            DLNumber:null,
            DLFrontImage:null,
            DLBackImage:null,
            PassportNumber:null,
            PassportFrontImage:null

        }
    }
    componentDidMount=async()=>{
// alert('hi')
        var key=[],val=[]
        var keys=['UserPhoto','NationalIdNumber','NationalIdFrontImage','NationalIdBackImage',
        'DocumentType',]
        try {
            var uri=await AsyncStorage.multiGet(keys,(err,stores)=>{
                stores.map((result,i,store)=>{
                    key[i]=store[i][0]
                    val[i]=store[i][1]
                    
                })
            })
            console.log(key,val)
            this.setState({
                photo:JSON.parse(val[0]),
                Nationalid:JSON.parse(val[1]),
                NationalIdFrontImage:JSON.parse(val[2]),
                NationaIdBackImage:JSON.parse(val[3]),
                DocumentType:(val[4])

            })
            if(this.state.DocumentType=="DL"){
               let id=await AsyncStorage.getItem("DLNumber")
               let frontImage=await AsyncStorage.getItem("DLFrontImage")
               let backImage=await AsyncStorage.getItem('DLBackImage')
               this.setState({
                    DLNumber:id,
                    DLFrontImage:JSON.parse(frontImage),
                    DLBackImage:JSON.parse(backImage)
               })
               
            }
            else if(this.state.DocumentType=="Passport"){
                let id=await AsyncStorage.getItem("PassportNumber")
                let frontImage=await AsyncStorage.getItem("PassportFrontImage")
                this.setState({
                    PassportNumber:id,
                    PassportFrontImage:JSON.parse(frontImage)
                })
             }
            // console.log(this.state.photo)
        } catch (error) {
            
        }
    }
     
    render(){
        return(
            <View style={Styles.container}>
                <Text style={[Styles.text,{paddingLeft:20}]}>Recent Photo</Text>
                <View style={design.imageview}>
                        <View style={{justifyContent:'center',flexDirection:'row',borderWidth:1,borderRadius:10,height:90,width:100}}>
                        <Image style={{width:"100%",height:"100%",borderRadius:10}} 
                        source={this.state.photo}/>
                       {/* source={require('../../resources/images/fileupload.png')} /> */}
                        
                    </View>
                    {/* <Image style={Styles.photo} source={require('../../resources/images/fileupload.png')} /> */}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('UploadPhoto')}>
                        <Image style={{}} source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
                </View>
                <View style={design.content}>
                <Text style={[Styles.text,{paddingLeft:20}]}>National ID</Text>
        <Text style={[Styles.textInput,Styles.text,{width:'50%',margin:10}]} >{this.state.Nationalid}</Text>
                </View>
                
                <View style={design.imageview}>
                    <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,margin:1,height:90,width:100}}>
                        <Image style={{width:50,height:90,borderBottomLeftRadius:10,borderTopLeftRadius:10}} 
                        source={this.state.NationalIdFrontImage}/>
                        {/* source={require('../../resources/images/fileupload.png')} /> */}
                        <Image style={{width:50,height:90,borderBottomRightRadius:10,borderTopRightRadius:10}} 
                        source={this.state.NationaIdBackImage}/>
                        {/* source={require('../../resources/images/fileupload.png')} /> */}
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Nationalid')}>
                        <Image style={{}} source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
                </View>
                <View style={design.content}>
                    <Text style={[Styles.text,{paddingLeft:20}]}>Passport/DL</Text>
                    <Text style={[Styles.textInput,Styles.text,{width:'50%',margin:10}]}>
                        {this.state.DLNumber}{this.state.PassportNumber}</Text>
                </View>
                
                <View style={design.imageview}>
                    {this.state.DocumentType=="DL" && 
                    <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,margin:1,height:90,width:100}}>
                        <Image style={{marginLeft:1,width:48,height:90,borderBottomLeftRadius:10,borderTopLeftRadius:10}} source={this.state.DLFrontImage}/>
                        {/* source={require('../../resources/images/fileupload.png')} /> */}
                        <Image style={{width:48,height:90,borderBottomRightRadius:10,borderTopRightRadius:10}} source={this.state.DLBackImage}/>
                        {/* source={require('../../resources/images/fileupload.png')} /> */}
                    </View>
                    } 
                    {this.state.DocumentType=="Passport" &&
                    <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,margin:1,height:90,width:100}}>
                         {/* <Image style={{width:50,height:90}} source={require('../../resources/images/fileupload.png')} /> */}
                        <Image style={{marginLeft:1,width:96,height:87,borderRadius:10}} source={this.state.PassportFrontImage}/>
                        {/* source={require('../../resources/images/fileupload.png')} /> */}
                </View>
                    }
                    {/* <Image style={Styles.photo} source={require('../../resources/images/fileupload.png')} /> */}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Document')}>
                        <Image source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
                </View>
               
                
                <View style={Styles.Button}>
                    <TouchableOpacity >
                        <Text style={Styles.buttonText}>CONFIRM</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const design=StyleSheet.create({
    imageview:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'}
})