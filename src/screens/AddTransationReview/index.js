import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableHighlight, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import Backspace from '../../assets/Images/tag.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import BoxCategoriesRounded from '../../components/boxCategoriesrRounded';
import { useNavigation, useRoute } from '@react-navigation/native';



export default function AddTransactionReview() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);
    const [displayValue, setDisplayValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('Today, 26 Apr 2019');
    const [flexbox, setFlexbox] = useState('flex');
    const route = useRoute();
    
    const { amount } = route.params;
    
    useEffect(()=>{
        setDisplayValue(amount);
    },[]);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    function handleKeyPress(number) {
        setDisplayValue(displayValue + number);
    }

    const handlekeyUp = () => {
        setFlexbox('none');
    }

    const handleEndEditing = () => {
        setFlexbox('flex');
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
                                <Text style={styles.ValueTextAmmount}>{parseFloat(displayValue)}</Text>
                            </View>

                        </View>

                    </View>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View style={styles.keyboard}>
                <View style={styles.keyboardBox}>
                    <View style={styles.categoriesValues}>
                        <View style={{ width: '100%' }}>
                            <Text style={{ color: '#CECECE', fontSize: 16 }}>Data da transação</Text>
                            <View style={styles.BoxTransactionDate}>
                                <TouchableOpacity style={{ justifyContent: 'center', width: '100%', height: '100%' }}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{selectedDate}</Text>
                                </TouchableOpacity>
                                <View style={{ width: '100%', height: 160, marginTop: 20, display: flexbox }}>
                                    <Text style={{ color: '#CECECE', fontSize: 16 }}>Categorias</Text>
                                    <ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center' }} showsHorizontalScrollIndicator={false}>
                                        <BoxCategoriesRounded bgColor="#2541b2" />
                                        <BoxCategoriesRounded bgColor="#f2bb05" />
                                        <BoxCategoriesRounded bgColor="#17c10a" />
                                        <BoxCategoriesRounded bgColor="#ff5714" />
                                        <BoxCategoriesRounded bgColor="#ab3428" />
                                        <BoxCategoriesRounded bgColor="#59cd90" />
                                    </ScrollView>
                                </View>
                                <View>
                                    <Text style={{ color: '#CECECE', fontSize: 16, marginBottom: 10 }}>Notas</Text>
                                    <TextInput onFocus={handlekeyUp} onEndEditing={handleEndEditing} style={{ backgroundColor: '#f7f7ff', height: 50, borderRadius: 5 }} />
                                </View>
                            </View>

                        </View>
                    </View>
                    <TouchableHighlight style={styles.nextButton}>
                        <Text style={styles.nextButtomText}>Adicionar Transação</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}