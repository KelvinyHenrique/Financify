import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    Box:{
        width:'90%',
        height:90,
        backgroundColor:'#FFF',
        elevation:4,
        borderRadius:15,
        flexDirection:'row',
        paddingLeft:10,
        marginBottom:20
    },
    LeftContent:{
        width:'75%',
        height:'100%',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    iconBackground:{
        width:70,
        height:70,
        borderRadius:15,
        alignItems:'center',
        backgroundColor:'#FF6000',
        justifyContent:'center'
    },
    CategoriesName:{
        width:'90%',
        marginLeft:15,
    },
    TextCategoriName:{
        fontSize:20,
        color:'#FF6000',
        fontWeight:'bold',
    },
    Graph:{
        width:'100%',
        height:25   ,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        
    },
    GraphLine:{
        width:'90%',
        height:10,
        borderRadius:20,
        backgroundColor:'#caf0f8'
    },
    GraphProgress:{
        height:'100%',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:'#FF4800',
    },
    GraphLineDescription:{
        width:'100%',
        height:'100%',
        color:'red',
        position:'absolute',
        flexDirection:'row',
        alignItems:"center",
        paddingLeft:10,
    },

});