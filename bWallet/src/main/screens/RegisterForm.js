import React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Button,ToastAndroid,BackHandler, Image,Modal,ScrollView,ActivityIndicator, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import styles from '../../resources/styles/Styles'
import {Dropdown} from 'react-native-material-dropdown'
import ModalDropdown from 'react-native-modal-dropdown'
import RadioForm, {RadioButton,RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import SnackBar from 'react-native-snackbar'
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'

var gender=[
    {label:'Male',value:"Male"},
    {label:'Female', value:"Female"}
]

var country=[{value:"Bahrain"},{value:"Kuwait"},{value:"Oman"},
{value:"Qatar"},{value:"Saudi Arabia"},{value:"United Arab Emirates"},]
class RegisterForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            value:0,
            buttonClicked:false,
            date:false,
            dob:null,
            firstname:null,
            lastname:null,
            gender:"Male",
            nationality:null,
            saveAddress:false,
            age:null,
            activity:false,
            activity1:false,
            
            // Address
            houseNo:null,
            flatNo:null,
            streetName:null,
            area:null,
            block:null,
            country:country[0].value,
            backCount:0
            
        }
    }
    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress",this.handleBack)
        this.setState({activity:true})
        setTimeout(()=>{
            this.setState({activity:false})
        },2000)
    }
    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress",this.handleBack)
    }
    handleBack=()=>{
        // this.state.visible==false?
        // this.props.navigation.navigate("register1"):
        if(this.state.backCount==0){
        ToastAndroid.show("Divulging Address is mandatory. Press again to exit",ToastAndroid.LONG)
        this.setState({backCount:1})
        }else
        {this.props.navigation.navigate("register1")
        this.setState({visible:false})}
        return true
    }
    validate=()=>{

        this.setState({buttonClicked:true})
       var firstname='Please enter First Name'
        var lastname='Please enter Last Name'
        var dob="Enter Date Of Birth"
        var gender="Select Gender"
        var nationality='Enter nationality'
        var address="Add Address"
        var age="You must be at least 13 years old to Register"
        var text=''
        var shows=false
        if(this.state.firstname==null){
            text=firstname
        }else if(this.state.lastname==null){
            text=lastname
        }else if(this.state.dob==null ){
            text=dob
        }else if(this.state.age<13){
            text=age
        }
        else if(this.state.gender==null){
            text=gender
        }else if(this.state.nationality==null){
            text=nationality
        }else if(!this.state.saveAddress){
            text="Add Address"
        }
        else {
            this.setState({activity1:true})
            let keys=[["FirstName",this.state.firstname],["LastName",this.state.lastname],["DOB",this.state.dob],
            ["Gender",this.state.gender],["Nationality",this.state.nationality]]
            AsyncStorage.setItem("PersonalInfo",JSON.stringify(keys))
            setTimeout(()=>{
                this.setState({activity1:false})
                this.props.navigation.navigate('securityAnswer')
            },2000)
            
        shows=true
        }
        if(shows==false){
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
    handleDate=(name)=>{
        
       var month=parseInt(name.getMonth())+1
        // console.log(name.getDate()+"/"+month+"/"+name.getFullYear())
        var date=name.getDate()+"/"+month+"/"+name.getFullYear()
        this.setState({
            dob:date,
            date:false
        })
        var today = new Date();
    var birthDate = new Date(month+"/"+name.getDate()+"/"+name.getFullYear());  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    // console.log(age_now);
    var m = today.getMonth() - birthDate.getMonth();
    // console.log(m);
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    this.setState({age:age_now})
    // console.log(new Date()+'birth date' + birthDate)
    // console.log(age_now);
   
        // console.log(this.state.dob)
        
    }
    validateAddress=()=>{
        // this.setState({visible:false,saveAddress:true})}
        // console.log(this.state)
        if(!this.state.houseNo || !this.state.streetName || !this.state.area || !this.state.block){
            SnackBar.show({
                text:"Please fill mandatory fields",
                duration:SnackBar.LENGTH_LONG
            })
        }else{
            let keys=[['HouseNo',this.state.houseNo],["FlatNo",this.state.flatNo],['StreetName',this.state.streetName],
            ["Area",this.state.area],['Block',this.state.block],["Country",this.state.country]]
            AsyncStorage.setItem("Address",JSON.stringify(keys))
            this.setState({visible:false,saveAddress:true})
        }
        
    }
    render(){
        return(
            
            <View style={styles.container}>
                
                <ScrollView style={[styles.container,{paddingLeft:20,paddingRight:20}]}>
                    <Text style={styles.text}>First Name</Text>
                    <TextInput style={styles.textInput} onChangeText={(fname)=>this.setState({firstname:fname})
                    }/>
                    {!this.state.firstname && this.state.buttonClicked && (<Text style={{color:'red'}}>First Name is Mandatory</Text>)}
                    <Text style={styles.text}>Last Name</Text>
                    <TextInput style={styles.textInput} onChangeText={(lname)=>this.setState({lastname:lname})}/>
                    {!this.state.lastname && this.state.buttonClicked && (<Text style={{color:'red'}}>Last Name is Mandatory</Text>)}
                    
                    <Text style={styles.text}>Date of Birth</Text>
                    <DateTimePickerModal isVisible={this.state.date} mode={"date"}
                        onCancel={()=>this.setState({date:false,})} datePickerModeAndroid={'spinner'}
                        onConfirm={(name)=>this.handleDate(name)} />
                        <Text onPress={()=>this.setState({date:true})} 
                        style={[styles.textInput,styles.text,{paddingTop:10}]}>{this.state.dob}</Text>
                    {/* <TextInput style={styles.textInput}  onFocus={()=>{this.setState({date:true})}} 
                     onChange={(dob)=>this.setState({dob:dob})}value={this.state.dob}/> */}
                     {!this.state.dob && this.state.buttonClicked && (<Text style={{color:'red'}}>Date Of Birth is Mandatory</Text>)}
                    
                    <Text style={[styles.text,{paddingBottom:15}]}>Gender</Text>
                    
                    <RadioForm radio_props={gender}
                    labelHorizontal={true}
                     formHorizontal={true} 
                    //  onSelect={}
                    // initial={0}
                      labelStyle={{paddingLeft:10,paddingRight:'30%'}}
                     onPress={(value)=>this.setState({gender:value})}
                     />
                    <Text style={styles.text}>Nationality</Text>
                    <CountryPicker withFlag={false} withFilter={true}  visible={false} 
                   
                    onSelect={(name)=>{this.setState({nationality:name.name})
                    console.log(this.state.nationality)}}
                    />
                    {/* <TextInput onAccessibilityAction={CountryPicker} style={styles.textInput}
                    value={this.state.nationality} onFocus={CountryPicker}
                    /> */}
                    
                    <Text 
                    style={[styles.textInput,styles.text]}>{this.state.nationality}</Text>
                    {/* <TextInput style={styles.textInput} onChangeText={(name)=>this.setState({nationality:name})}/> */}
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.text}>Add Address</Text>
                    <TouchableOpacity 
                    onPress={()=>this.setState({visible:true})}
                    // onPress={()=>this.props.navigation.navigate('addAddress')}
                    >
                    {!this.state.saveAddress && (
                    <Image style={{flexShrink:2}}source={require('../../resources/images/add.png')}/>)}
                     {this.state.saveAddress && (
                    <Image style={{height:35,}}source={require('../../resources/images/checkmark.png')}/>)}
                    {/* <Image style={{flexShrink:2}}source={require('../../resources/images/add.png')}/> */}
                    </TouchableOpacity>
                    </View>
                    
                    <Modal transparent={true} 
                        onRequestClose={()=>{
                        if(this.state.backCount==0){
                            ToastAndroid.show("Divulging Address is mandatory. Press again to exit",ToastAndroid.SHORT)
                            this.setState({backCount:1})
                            }else
                            {
                            this.setState({visible:false,backCount:0})
                        }
                    }}
                    // visible={true}
                    visible={this.state.visible}
                    >
                        
                    <View style={Styles.container}>
                        <View style={{margin:25,borderRadius:5,width:'80%',backgroundColor:'#ffff',flex:1}}>
                        {/* <Address/> */}
                    
                        <ScrollView>
                        <KeyboardAvoidingView style={{paddingHorizontal:20}}>
                    <View style={{alignItems:'center'}}>
                    <Image source={require('../../resources/images/home.png')}/>
                    </View>
                    <Text style={styles.text}>Building/ House NO</Text>
                    <View style={{flexDirection:'row'}}>
                    <TextInput value={this.state.houseNo} onChangeText={(house)=>this.setState({houseNo:house})} style={[styles.textInput,{width:'100%'}]}/>
                    <Text style={{color:'red',paddingTop:15}}>*</Text>
                    </View>
                    <Text style={[styles.text,{paddingTop:20}]}>Flat No</Text>
                    <TextInput value={this.state.flatNo} onChangeText={(flat)=>this.setState({flatNo:flat})} style={styles.textInput}/>
                    <Text style={[styles.text,{paddingTop:20}]}>Road/Street Name</Text>
                    <View style={{flexDirection:'row'}}>
                    <TextInput value={this.state.streetName} onChangeText={(street)=>this.setState({streetName:street})} style={[styles.textInput,{width:'100%'}]}/>
                    <Text style={{color:'red',paddingTop:15}}>*</Text>
                    </View>
                    {/* <Text> </Text> */}
                    <View style={{flexDirection:'row',justifyContent:'center',paddingRight:10,}}>
                        <TextInput value={this.state.area} onChangeText={(area)=>this.setState({area:area})}
                        style={[styles.textInput,{paddingTop:25,width:"45%",marginHorizontal:10}]} placeholder="Area"/>
                        <Text style={{color:'red',paddingTop:25}}>*</Text>
                        <TextInput value={this.state.block} onChangeText={(block)=>this.setState({block:block})}
                        keyboardType='number-pad' style={[styles.textInput,{paddingTop:25,width:'47%',marginHorizontal:6}]} placeholder="Block"/> 
                        <Text style={{color:'red',paddingTop:25}}>*</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={[styles.text,{paddingTop:25}]}>Country</Text>
                    <Text style={{color:'red',paddingTop:33}}>*</Text>
                    </View>
                    {/* <ModalDropdown options={country}></ModalDropdown> */}
                    <View>
                    <Dropdown data={country} value={this.state.country} fontSize={18} dropdownPosition={4} 
                    onChangeText={(name)=>{this.setState({country:name})}} />
                    </View>
                     {/* <TextInput onAccessibilityAction={CountryPicker} style={styles.textInput}> */}
                    
                    {/* </TextInput> */}

                </KeyboardAvoidingView>
                            <View style={{flex:1}} >
                            <TouchableOpacity onPress={this.validateAddress}
                            // {/* onPress={()=>this.setState({visible:false,saveAddress:true})} */}
                            style={[styles.Button,{position:'relative',width:100,bottom:10,borderRadius:10,alignSelf:'center'}]}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                            </View>
                            {/* <Button title='Save' style={{}} onPress={()=>this.setState({visible:false})}></Button> */}
                </ScrollView>
                
                    </View>
                </View>
               
            </Modal>
                </ScrollView> 
                
                <View style={styles.Button }>
                    <TouchableOpacity onPress={this.validate}>
                     {/* onPress={()=>this.props.navigation.navigate('securityAnswer')}> */}
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View> 

                {/*Activity Indicator */}
                <Modal transparent={true} visible={this.state.activity}>
                    <View style={styles.activityContainer}>
                        <View style={styles.innerActivity}>
                            <ActivityIndicator size='large' color="red"/>
                            <Text style={styles.activityText}>Getting Available Countries</Text>
                        </View>
                    </View>
                </Modal>
                <Modal transparent={true} visible={this.state.activity1}>
                    <View style={styles.activityContainer}>
                        <View style={styles.innerActivity}>
                            <ActivityIndicator size='large' color="red"/>
                            <Text style={styles.activityText}>Authenticating</Text>
                        </View>
                    </View>
                </Modal>

            </View>
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
        backgroundColor:'red',
        alignItems:"center",
        marginHorizontal:80,
        borderRadius:5,
        height:50,
        bottom:0
    }
})
export default RegisterForm
 