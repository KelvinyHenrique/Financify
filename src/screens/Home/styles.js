import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    BoxContainerHome: {
        flex: 1,
        backgroundColor: '#fff',
    },

    BoxHeader: {
        backgroundColor: '#FF5400',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    BoxMenu: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between'
    },
    BoxHistory: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingLeft: 20,
        paddingRight: 20,
    },
    BoxBottom: {
        backgroundColor: '#FF5400',
        height: '70%',
    },
    avaliableBalance: {
        width: '70%',
        alignItems: 'flex-start'
    },
    balanceText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 35,

    },
    balanceSubtitle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    profileOptions: {
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    ProfileImage: {
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 15,
    },
    scrollAlignment: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-around',
        marginTop: 10,
    },

    iconsHomeHeader: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 50,
        borderRadius: 15,
        alignSelf: 'center'
    },
    boxButtonHeader: {
        alignItems: 'center'
    },
    BoxHistoryTopText: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tagTransactionsAll: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        marginRight: 15,
        borderRadius: 20,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    HistoryTextDay:{
        fontSize:17,
        fontWeight:'bold',
        color:'#ced4da',
        textTransform:'uppercase',
    },  
    transactionBox:{
        width:'96%',
        marginTop:20,
        borderRadius:10,
        flexDirection:'column',
        backgroundColor: '#FFF',
        elevation: 5,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:16
    },
    transactionBoxLefContent:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textTransactionItem:{
        fontSize:17,
        color:'#FF4800',
        fontWeight:'bold'
    },
    textTransactionItemSubtitle:{
        fontSize:14,
        color:'#CECECE',
    },
    transactionBoxItem:{
        width:'100%',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#CECECE' 
    },
});