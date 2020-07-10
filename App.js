import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: '#FFF',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
       <MainTab/>
    </NavigationContainer>
  );
};

export default App;
