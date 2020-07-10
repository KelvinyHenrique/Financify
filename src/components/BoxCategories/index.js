import React from 'react';
import styles from './styles';
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import profileImage from '../../assets/Images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faCar } from '@fortawesome/free-solid-svg-icons';

function BoxCategories(props) {

    return (
        <View style={styles.Box}>
            <View style={{
                justifyContent: 'flex-start', width: '25%', height: 50, backgroundColor: '#FFF',
                alignSelf: 'center', justifyContent: 'center'
            }}>
                <View style={styles.iconBackground}>
                    <FontAwesomeIcon icon={faCar} size={40} color="#fff" />
                </View>
            </View>
            <View style={styles.LeftContent}>
                <View style={styles.CategoriesName}>
                    <Text style={styles.TextCategoriName}>{props.name}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:2}}>
                        <Text style={{fontSize:12, fontWeight:'bold'}}>{props.qtTransactions} Transações</Text>
                        <Text style={{fontSize:12, fontWeight:'bold'}}>{props.qtDespesas}% das Despesas</Text>
                    </View>
                </View>
                <View style={styles.Graph}>
                    <View style={styles.GraphLine}>
                        <View style={[styles.GraphProgress, { width: props.progress }]} >
                        </View>
                    </View>
                </View>
            </View>


        </View>
    );
}


export default BoxCategories;