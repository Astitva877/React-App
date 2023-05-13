import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Amount from '../screens/Amount';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
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
            iconName = focused ? 'home' : 'ios-home-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Amount') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }

          return <Icon name={iconName} size={22} color={'#000000'} />;
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
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    // position: 'absolute',
    backgroundColor: COLORS.primary,
    borderTopWidth: 0,
    // borderRadius: 30,

    // borderTopLeftRadius: 20,
    // bottom: 15,
    // color: 'black',
    // right: 10,
    // left: 10,
    height: 72,
  },
});
