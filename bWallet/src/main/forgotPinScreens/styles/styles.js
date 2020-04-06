import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffff',
        // padding:20
        
    
    },
    button:{
      position:'absolute',
      backgroundColor:'red',
      bottom:0,
      width:'100%',
      alignItems:'center',
      height:30
    },
    text:{
      justifyContent:'center',
      color:'#ffff',
      alignItems:'center'
    },
    // text1:{
    //     paddingBottom:20,
    // },
    logo:{
      padding:20,
      height:30,
      width:20
    },
    title:{
      padding:20
    },
    title1:{
        padding:20,
        fontWeight:"bold"   
    },
    title2:{
        padding:20,
        color:'red',
        fontSize:20,
        fontWeight:"bold"
    },
    numerview:{
      paddingTop:40,
      paddingRight:40,
      flexDirection:'row',
      justifyContent:'space-evenly'
    } ,
    textInput:{
      alignItems:'stretch',
      borderBottomWidth:1,
      borderBottomColor:'red',
      width:150
    },
    textinput1:{
        fontSize:20,
        color:'black',
        paddingBottom:10,
         marginBottom:30,
         borderBottomColor:'red',
        borderBottomWidth:1,
    
    
    },
    textinput2:{
        borderBottomColor:"black",
            borderBottomWidth:1,
            fontSize:20,
    },
    numberView1:{
        padding:20
        
      },
    buttonText:
    {
        textAlign:'center',
        color:'white'
        
    },
    buttonText1 :{
 
        color: 'red',
        textAlign:'center',
        
        
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
    button1:{
        width:'90%',
        height:40,
        backgroundColor:'red', 
        alignItems:'center',
        justifyContent:'center'
    },
    regform:{
        alignSelf:'stretch',
        paddingTop:150,
        flex:1
        
    },
    ImageIconStyle: {
        height: 50,
        width: 50,
        resizeMode : 'stretch',
      
     },
     Bottom:{
  
        alignItems:'center',
        position:'absolute',
        bottom:0,
        width:"100%"
    },

    

    
    
})