import React, { useRef, useEffect } from 'react';
import { Text, View, StatusBar, Button, Animated, Dimensions, Easing, Image, TouchableHighlight, ScrollView } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faWallet, faMoneyBill, faBarcode, faSearchDollar, faArrowCircleDown, faArrowAltCircleUp, faHamburger } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/Images/profile.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Math.round(Dimensions.get('window').height);

const thirty = (30 * screenHeight) / 100;

export default function Home() {

    const fadeAnim = useRef(new Animated.Value(screenHeight)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: thirty,
            duration: 1500,
            easing: Easing.bounce,
            useNativeDriver: false
        }).start();
    };
    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <View style={styles.BoxContainerHome}>
            <StatusBar barStyle="light-content" backgroundColor={'#FF5400'} />
            <Animated.View style={[styles.BoxHeader, { height: fadeAnim }]}>
                <View style={styles.BoxMenu}>
                    <View style={styles.avaliableBalance}>
                        <Text style={styles.balanceText}>R$5.598,50</Text>
                        <Text style={styles.balanceSubtitle}>Valor Disponível</Text>
                    </View>
                    <View style={styles.profileOptions}>
                        <FontAwesomeIcon icon={faBell} size={25} color={'#FFF'} />
                        <Image source={profileImage} style={styles.ProfileImage} />
                    </View>
                </View>
                <View style={styles.scrollAlignment} >
                    <TouchableHighlight style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { alert('Clickou') }} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faWallet} size={20} color={'#FF5400'} />
                            </View>
                            <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 5 }}>Pagar</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ alignItems: 'center', justifyContent: 'center', padding: 0 }} onPress={() => { alert('Clickou') }} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faMoneyBill} size={27} color={'#FF5400'} />
                            </View>
                            <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 5 }}>Receber</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ alignItems: 'center', justifyContent: 'center', padding: 0 }} onPress={() => { alert('Clickou') }} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faBarcode} size={25} color={'#FF5400'} />
                            </View>
                            <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 5 }}>Contas</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ alignItems: 'center', justifyContent: 'center', padding: 0 }} onPress={() => { alert('Clickou') }} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faSearchDollar} size={20} color={'#FF5400'} />
                            </View>
                            <Text style={{ color: '#FFF', fontWeight: 'bold', marginTop: 5 }}>Gastos</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </Animated.View>
            <View style={styles.BoxBottom}>
                <View style={styles.BoxHistory}>
                    <View style={styles.BoxHistoryTopText}>
                        <Text style={{ color: '#FF4800', fontSize: 20, fontWeight: 'bold' }}>Transações Recentes</Text>
                        <TouchableOpacity><Text style={{ color: '#FF8500', fontSize: 15, fontWeight: 'bold' }}>Ver Tudo</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <TouchableOpacity style={[styles.tagTransactionsAll, { width: 70 }]}>
                            <Text style={{ color: '#FF8500', fontWeight: 'bold', }}>Todas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tagTransactionsAll, { width: 100 }]}>
                            <FontAwesomeIcon icon={faArrowCircleDown} size={17} color={'#0ead69'} />
                            <Text style={{ color: '#FF8500', fontWeight: 'bold', marginLeft: 5 }}>Renda</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tagTransactionsAll, { width: 100 }]}>
                            <FontAwesomeIcon icon={faArrowAltCircleUp} size={17} color={'#FF6000'} />
                            <Text style={{ color: '#FF8500', fontWeight: 'bold', marginLeft: 5 }}>Despesas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 30, width: '100%', height: 325, }}>
                        <ScrollView style={{ backgroundColor: '#fff'}} horizontal={false} showsVerticalScrollIndicator={false}>
                            <Text style={styles.HistoryTextDay}>Hoje</Text>
                            <View style={styles.transactionBox}>
                                <View style={styles.transactionBoxItem}>
                                    <View style={styles.transactionBoxLefContent}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesomeIcon icon={faHamburger} size={30} color={'#FF6000'} />
                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={styles.textTransactionItem}>Hamburguer</Text>
                                                <Text style={styles.textTransactionItemSubtitle}>Pascoaline Hamburgueria</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.textTransactionItem}>-R$ 50,00</Text>
                                            <Text style={[styles.textTransactionItemSubtitle, { textAlign: 'right' }]}>8 Set</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.transactionBoxItem}>
                                    <View style={styles.transactionBoxLefContent}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesomeIcon icon={faHamburger} size={30} color={'#FF6000'} />
                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={styles.textTransactionItem}>Hamburguer</Text>
                                                <Text style={styles.textTransactionItemSubtitle}>Pascoaline Hamburgueria</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.textTransactionItem}>-R$ 50,00</Text>
                                            <Text style={[styles.textTransactionItemSubtitle, { textAlign: 'right' }]}>8 Set</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <Text style={styles.HistoryTextDay}>Ontem</Text>
                            <View style={styles.transactionBox}>
                                <View style={styles.transactionBoxItem}>
                                    <View style={styles.transactionBoxLefContent}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesomeIcon icon={faHamburger} size={30} color={'#FF6000'} />
                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={styles.textTransactionItem}>Hamburguer</Text>
                                                <Text style={styles.textTransactionItemSubtitle}>Pascoaline Hamburgueria</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.textTransactionItem}>-R$ 50,00</Text>
                                            <Text style={[styles.textTransactionItemSubtitle, { textAlign: 'right' }]}>8 Set</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.transactionBoxItem}>
                                    <View style={styles.transactionBoxLefContent}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesomeIcon icon={faHamburger} size={30} color={'#FF6000'} />
                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={styles.textTransactionItem}>Hamburguer</Text>
                                                <Text style={styles.textTransactionItemSubtitle}>Pascoaline Hamburgueria</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.textTransactionItem}>-R$ 50,00</Text>
                                            <Text style={[styles.textTransactionItemSubtitle, { textAlign: 'right' }]}>8 Set</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            
                        </ScrollView>

                    </View>
                </View>
            </View>

        </View>
    );
}