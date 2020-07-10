import React from 'react';
import styles from './styles';
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import Flag from '../../assets/Images/mastercard.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { Svg } from 'react-native-svg';
function Profile(props) {

    return (
        <TouchableOpacity style={[styles.CardBox, {backgroundColor:props.color}]} activeOpacity={0.7}>
            <View style={styles.CardTopText}>
                <Text style={styles.CardBankText}>{props.bank}</Text>
                <Flag style={styles.CardFlag}/>
            </View>
            <View>
                <Text style={styles.limitText}>Limite Disponível</Text>
                <Text style={styles.limitDisponible}>R$ {props.limit}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default Profile;