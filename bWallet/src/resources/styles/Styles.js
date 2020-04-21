import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"white",
        alignContent:'flex-start',

    },
    container1:{
        flex:1,
        backgroundColor:'#ffff'

    },
    imagecontainer:{
        alignItems:'center',
        paddingTop:20
    },
    image:{
        width:120,
        height:60,
    },
    textview:{
        alignItems:'stretch',
        paddingLeft:50,
        paddingRight:50,
        
    },
    text:{
        marginTop:'10%',
        fontSize:16
    },
    textInput:{
        borderBottomColor:"red",
        borderBottomWidth:1,
        // alignItems:'stretch',
        // width:150
        
    },
    numberView:{
        flexDirection:'row',
        paddingRight:100,
        paddingLeft:50,
    },
    error:{
        color:'red',
        // paddingLeft:50
    },
    Button:{
        width:'100%',
        backgroundColor:"red",
        position:'absolute',
        bottom:0,
        height:50,
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'center',
        color:'#ffff',
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    photo:{
        width:100,
        height:80,
        margin:10,
        borderColor:'black',
        borderWidth:1,
        borderRadius:5
    },
    activityContainer:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#000000aa",
        justifyContent:'center'
    },
    innerActivity:{
        flexDirection:'row',
        borderRadius:2,
        backgroundColor:"#ffff",
        width:'90%',
        alignItems:'center',
        height:90,
        justifyContent:'flex-start',
        padding:10
    },
    activityText:{
        justifyContent:'center',
        fontSize:18,
        paddingHorizontal:20},

        //added by SV
        logo:{
            padding:20,
            height:30,
            width:20
          },
          numerview1:{
            paddingTop:40,
            paddingRight:40,
            flexDirection:'row',
            justifyContent:'space-evenly'
          },
          textinput2:{
            borderBottomColor:"black",
                borderBottomWidth:1,
                fontSize:20,
        },
        buttonText2:{
            textAlign:'center',
            color:'white',
            fontSize:20,
            justifyContent:'center',
            alignContent:'center',
            borderRadius:7,
            borderWidth:1,
            backgroundColor:'red',
            width:300,
            padding:5
        },
        Bottom:{
  
            alignItems:'center',
            position:'absolute',
            bottom:0,
            width:"100%"
        },
        regform:{
            alignSelf:'stretch',
            flex:1,
            justifyContent:'center',
            alignItems:'center'
            
        },
        title3:{
            padding:20,
            color:'red',
            fontSize:20,
            fontWeight:"bold"
        },
        regform1:{
            alignSelf:'stretch',
            paddingTop:150,
            flex:1
            
        },
        // textinput:{
        //     borderBottomColor:'black',
        //     borderBottomWidth:1,
        //     padding:60
        // },
        textinput2:{
            borderBottomColor:'black',
            borderBottomWidth:1,
            padding:20
    
        },
    

    
})