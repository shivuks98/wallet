import React from 'react'
import { View,Text,TextInput,TouchableOpacity,AsyncStorage,Modal,ActivityIndicator } from 'react-native'
import styles from '../../resources/styles/Styles'
import SncakBar from 'react-native-snackbar'

export default class SetSecurityAnswers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            securityAnswer:null,
            activity:false,
            // activity1:false
        }
    }
    componentDidMount(){
        this.setState({activity:true})
        setTimeout(()=>{
            this.setState({activity:false})
        },3000)
    }
    handleNext=()=>{
        if(!this.state.securityAnswer){
            SncakBar.show({
                text:'Enter the security answer',
                duration:SncakBar.LENGTH_LONG,
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