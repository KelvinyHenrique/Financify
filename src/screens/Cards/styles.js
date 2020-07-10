import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    DateInit:{
        paddingLeft:10,
        paddingRight:10,
        width:150,
        height:45,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#FF6D00',
    },
    Chart:{
        marginTop:30,
        width:'70%',
        alignItems:'center',
        justifyContent:'center',
    },
    progress: {
        backgroundColor:'#7159C1',
        width:'70%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    AmountSpend:{
        marginTop:10,
        fontSize:16,
        color:'#CECECE'
    },
    Amount:{
        fontSize:23,
        fontWeight:'bold',
        color:'#FF5400',
    },
    contentContainer:{
        width:'100%',
        alignItems:"center",
        flexDirection:'column',
        justifyContent:'center'
    },
});