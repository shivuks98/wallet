import React from 'react'
import { View,Text,TextInput,TouchableOpacity,AsyncStorage,Modal,ActivityIndicator,BackHandler } from 'react-native'
import styles from '../../resources/styles/Styles'
// import SncakBar from 'react-native-snackbar'
import SnackBar from 'react-native-snackbar'

export default class SetSecurityAnswers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            securityAnswer:null,
            activity:false,
            backCount:0,
            // activity1:false
        }
    }
    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress",this.handleBack)
        this.setState({activity:true})
        setTimeout(()=>{
            this.setState({activity:false})
        },3000)
    }
    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress",this.handleBack)
    }
    handleBack=()=>{
        if(this.state.backCount==0){
            SnackBar.show({
                text:"Please click BACK again to exit sigh up process",
                duration:SnackBar.LENGTH_INDEFINITE,
                action:{
                    text:"OK",
                    textColor:'red'
                }
            })
            this.setState({backCount:1})
        }else this.props.navigation.navigate("Login")
        setTimeout(()=>{
            this.setState({backCount:0})
        },2000)
        return true
    }
    handleNext=()=>{
        if(!this.state.securityAnswer){
            SnackBar.show({
                text:'Enter the security answer',
                duration:SnackBar.LENGTH_LONG,
                action:{
                    text:"OK",
                    textColor:'red'
                }
            })
        }
        else {
            this.setState({activity:true})
            AsyncStorage.setItem("SecurityAnswer",this.state.securityAnswer)
            setTimeout(()=>{
                this.setState({activity:false})
                this.props.navigation.navigate('SetPin')
            },3000)

            }

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1,alignItems:"center",paddingTop:70,padding:80}}>
                    <Text style={styles.text}>What is the name of your first school</Text>
                    <TextInput style={[styles.textInput,{width:'100%'}]}
                    onChangeText={(answer)=>this.setState({securityAnswer:answer})}/>

                </View>
                <View style={styles.Button}>
                    <TouchableOpacity onPress={this.handleNext}>
                    {/* onPress={()=>this.props.navigation.navigate('SetPin')}> */}
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>

                {/*Activity Indicator */}
                <Modal transparent={true} visible={this.state.activity}>
                    <View style={styles.activityContainer}>
                        <View style={styles.innerActivity}>
                            <ActivityIndicator size='large' color="red"/>
                            <Text style={styles.activityText}>Request is being processed</Text>
                        </View>
                    </View>
                </Modal>
                
            </View>
        )
    }
}