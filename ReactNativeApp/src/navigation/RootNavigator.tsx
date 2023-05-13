import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Amount from '../screens/Amount';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';
import COLORS from '../constants/colors';
const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: [
          styles.tabBarStyle,
          {borderTopLeftRadius: route.name === 'Home' ? 20 : 0},
          {borderTopRightRadius: route.name === 'Notifications' ? 20 : 0},
        ],
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../assests/home.png');
          } else if (route.name === 'Menu') {
            iconName = require('../assests/menu.png');
          } else if (route.name === 'Amount') {
            iconName = require('../assests/amount.png');
          } else if (route.name === 'Notifications') {
            iconName = require('../assests/notifications.png');
          } else if (route.name === 'Profile') {
            iconName = require('../assests/profile.png');
          }
          return (
            <Image
              style={{height: 28, width: 28}}
              source={iconName}
              resizeMode="contain"
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: props => <CustomTabBarButton route="Home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarButton: props => <CustomTabBarButton route="Menu" {...props} />,
        }}
      />
      <Tab.Screen
        name="Amount"
        component={Amount}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="Amount" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="Notifications" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="Profile" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.primary,
    borderTopWidth: 0,
    height: 72,
  },
});
