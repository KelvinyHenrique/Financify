import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    Profile:{
        width:'100%',
        height:100,
        paddingLeft:25,
        paddingRight:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    ProfileImage: {
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: '#CECECE',
        borderRadius: 15,
    },
    profileOptions:{
        width:'30%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    ProfileText:{
        width:'70%'
    },
    Salutation:{
        color:'#FF6000',
        fontSize:17,
    },
    ProfileName:{
        color:'#FF6000',
        fontSize:20,
        fontWeight:'bold'
    }
});