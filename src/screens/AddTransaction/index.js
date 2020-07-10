import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableHighlight } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Backspace from '../../assets/Images/tag.svg';
import { useRoute, useNavigation } from '@react-navigation/native'; 


export default function Cards() {

    const [pressValue, setPressValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const navigation = useNavigation();
    
    function handleKeyPress(number) {

        


        if (displayValue === '0') {
            setDisplayValue(number)
        } else {
            setDisplayValue(displayValue + number);
        };
    }

    const handleNextNavigation = () => {

        const mountantParsed = parseFloat(displayValue);
        navigation.navigate('AddTransationReview', {
            amount:mountantParsed
        });
    }


    return (
        <View style={{ width: '100%', height: '100%' }}>
            <StatusBar barStyle="light-content" backgroundColor={'#FF5400'} />
            <View style={styles.boxTransaction}>
                <View style={styles.headerBoxContainer}>
                    <View style={styles.boxHeaderTop}>
                        <View style={styles.headerAddTransaction}>
                            <Text style={styles.TextAddTransaction}>Adicionar Transação</Text>
                            <Text style={styles.TextAddDespense}>Despesa</Text>
                        </View>
                        <TouchableOpacity style={styles.headerBoxCancelButtom}>
                            <Text style={styles.textCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxValueKey}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingTop: 22, }}>
                                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>R$</Text>
                            </View>
                            <View style={{ marginLeft: 8, }}>
                                <Text style={styles.ValueTextAmmount}>{displayValue}</Text>
                            </View>

                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.keyboard}>
                <View style={styles.keyboardBox}>
                    <View style={styles.keyboardKeys}>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('1')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>1</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('2')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>2</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('3')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>3</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('4')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>4</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('5')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>5</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('6')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>6</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('7')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>7</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('8')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>8</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('9')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>9</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress(',')}  underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>,</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => handleKeyPress('0')} underlayColor="#e9ecef" >
                            <Text style={styles.keyText}>0</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.KeyboardKey} onPress={() => setDisplayValue('0')} underlayColor="#e9ecef" >
                            <Backspace width="35" height="35" style={styles.BackspaceIcon} />
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight style={styles.nextButton} underlayColor="#ff8500" onPress={handleNextNavigation}>
                        <Text style={styles.nextButtomText}>Adicionar Transação</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}