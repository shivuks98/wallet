import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"white",
        alignContent:'flex-start',

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
        marginTop:10,
        fontSize:16
    },
    textInput:{
        borderBottomColor:"red",
        borderBottomWidth:1,
        
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
        height:35
    },
    buttonText:{
        textAlign:'center',
        color:'#ffff',
        fontSize:20,
        justifyContent:'center',
        alignContent:'center'
    },
    photo:{
        width:100,
        height:80,
        margin:10,
        borderColor:'black',
        borderWidth:1,
        borderRadius:5
    }
    
})