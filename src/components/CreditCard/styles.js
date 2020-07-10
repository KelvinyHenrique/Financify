import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    CardBox: {
        marginLeft: 10,
        marginRight: 10,
        width: 320,
        height: 180,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 20,
        alignSelf: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
    },
    CardTopText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    CardFlag: {
        width: 60,
        height: 60,
    },
    CardBankText: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
    },
    limitText: {
        color: '#FFF'
    },
    limitDisponible: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
});