import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faRocket, faChartLine, faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons'



const TabBar = styled.View`
    flexDirection:row;
    alignItems:center;
    height:80px;
    justifyContent: space-around;
    backgroundColor: #fff;
`;

const TabBarIcon = styled.TouchableHighlight`
    width:30%;
    justifyContent:center;
    alignItems:center;
    height:50px;
`;
const TabBarIconText = styled.Text``;
const TabBarAddIcon = styled.TouchableHighlight`
    width:70px;
    marginLeft:20px;
    marginRight:20px;
    justifyContent:center;
    alignItems:center;
    height:50px;
    borderRadius:10px;
    marginTop:-40px;  
    backgroundColor:#FF4800;
`;

const styles = StyleSheet.create({
    onFocused: {
        color: '#000'
    },
    notFocused: {
        color: '#000',
    }
})

function CustomTabBar({ state, descriptors, navigation }) {
    
    return (
        <TabBar>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                let label = route.name;
                if (options.tabBarLabel != undefined) {
                    label = options.tabBarLabel;
                } else if (options.title != undefined) {
                    label = options.title;
                }

                const handleTabPress = () => {
                    navigation.navigate(route.name);
                }

                const isFocused = state.index === index;
                

                switch (route.name) {
                    case 'AddTransaction':
                        return (
                            <TabBarAddIcon key={index} onPress={handleTabPress} underlayColor="#FF7900">
                                <FontAwesomeIcon icon={faPlus} size={27} color={'#FFF'}/>
                            </TabBarAddIcon>
                        );
                        break;

                    case 'Home':
                        return (

                            <TabBarIcon key={index} onPress={handleTabPress} underlayColor="transparent">
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon icon={faRocket} size={24} color={'#FF4800'} style={{margin:5}} />
                                    <Text style={[styles.notFocused, isFocused ? styles.onFocused : null]}>{label}</Text>
                                </View>
                            </TabBarIcon>

                        );
                        break;

                    case 'Cards':
                        return (
                            <TabBarIcon key={index} onPress={handleTabPress} underlayColor="transparent">
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon icon={faCreditCard} size={24} color={'#FF4800'} style={{margin:5}} />
                                    <Text style={[styles.notFocused, isFocused ? styles.onFocused : null]}>{label}</Text>
                                </View>
                            </TabBarIcon>

                        );
                        break;

                    case 'History':
                        return (
                            <TabBarIcon key={index} onPress={handleTabPress} underlayColor="transparent">
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon icon={faChartLine} size={24} color={'#FF4800'} style={{margin:5}} />
                                    <Text style={[styles.notFocused, isFocused ? styles.onFocused : null]}>{label}</Text>
                                </View>
                            </TabBarIcon>

                        );
                        break;

                    case 'Profile':
                        return (
                            <TabBarIcon key={index} onPress={handleTabPress} underlayColor="transparent">
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon icon={faUser} size={24} color={'#FF4800'} style={{margin:5}} />
                                    <Text style={[styles.notFocused, isFocused ? styles.onFocused : null]}>{label}</Text>
                                </View>
                            </TabBarIcon>

                        );
                        break;



                    default:
                        return (
                            <TabBarIcon key={index} onPress={handleTabPress} underlayColor="transparent">
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon icon={faPlus} size={24} color={'#000'} style={{margin:5}} />
                                    <Text style={[styles.notFocused, isFocused ? styles.onFocused : null]}>{label}</Text>
                                </View>

                            </TabBarIcon>
                        );
                        break
                }
            })}
        </TabBar>
    );
}

export default CustomTabBar;