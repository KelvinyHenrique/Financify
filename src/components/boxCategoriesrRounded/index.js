import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import Car from '../../assets/Images/tag.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faCar, faUtensils } from '@fortawesome/free-solid-svg-icons';

function boxCategoriesRounded(props) {

    const [borderOpacity, setBorderOpacity] = useState(1);
    const bgColorBox = props.bgColor;

    const handleChangeButton = () => {
        if (borderOpacity == 1) {
            setBorderOpacity(0.2);
        } 
        if (borderOpacity == 0.2){
            setBorderOpacity(1);
        }
    }

    return (
        <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 5, paddingTop: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 15, borderColor: bgColorBox, opacity: borderOpacity }} onPress={handleChangeButton}>
            <View style={{ width: 65, height: 65, alignItems: 'center', justifyContent: 'center', backgroundColor: bgColorBox, borderRadius: 37 }}>
                <FontAwesomeIcon icon={faCar} size={30} color="#f4f3ee" />
            </View>
            <Text style={{ fontWeight: 'bold', marginTop: 6, fontSize: 15, textAlign: 'center', color: '#252323' }}>Transporte</Text>
        </TouchableOpacity>

    );
}



export default boxCategoriesRounded;