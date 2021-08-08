import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cards from '../screens/Cards';
import CustomTabBar from '../components/CustomTabBar';
import TransationsStack from '../navigators/TransationsStack';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Histórico" component={Home} />
      <Tab.Screen name="AddTransaction" component={TransationsStack} />
      <Tab.Screen name="Cartões" component={Cards} />
      <Tab.Screen name="Perfil" component={Cards} />
    </Tab.Navigator>
  );
}
