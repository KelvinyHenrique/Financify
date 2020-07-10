import React from 'react';
import styles from './styles';
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import profileImage from '../../assets/Images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell} from '@fortawesome/free-solid-svg-icons';

function Profile() {

    return (
        <View style={styles.Profile}>
            <View style={styles.ProfileText}>
                <Text style={styles.Salutation}>Bom dia</Text>
                <Text style={styles.ProfileName}>Kelviny Henrique</Text>
            </View>
            <View style={styles.profileOptions}>
                <FontAwesomeIcon icon={faBell} size={25} color={'#FF4800'} />
                <Image source={profileImage} style={styles.ProfileImage} />
            </View>
        </View>
    );
}


export default Profile;