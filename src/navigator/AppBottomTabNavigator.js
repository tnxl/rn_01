//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

//pages
import HomePage from '../main/pages/HomePage';
import FriendPage from '../main/pages/FriendPage';
import FindPage from '../main/pages/FindPage';
import MinePage from '../main/pages/MinePage';
import React from 'react';

const AppBottomTabNavigator = createBottomTabNavigator(
  {
      home: {
          screen: HomePage,
          navigationOptions: ({navigation}) => ({
              tabBarLabel: '首页',
              tabBarIcon: ({tintColor, focused}) => (
                <AntDesign name={'home'} size={22} color={tintColor}/>
              ),
          }),
      },
      friend: {
          screen: FriendPage,
          navigationOptions: ({navigation}) => ({
              tabBarLabel: '朋友',
              tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome5 name={'user-friends'} size={22} color={tintColor}/>
              ),
          }),
      },
      find: {
          screen: FindPage,
          navigationOptions: ({navigation}) => ({
              tabBarLabel: '发现',
              tabBarIcon: ({tintColor, focused}) => (
                <AntDesign name={'find'} size={22} color={tintColor}/>
              ),
          }),
      },
      mine: {
          screen: MinePage,
          navigationOptions: ({navigation}) => ({
              tabBarLabel: '我的',
              tabBarIcon: ({tintColor, focused}) => (
                <AntDesign name={'user'} size={22} color={tintColor}/>
              ),
          }),
      },
  },
  {
      initialRouteName: 'home',
      order: ['home', 'friend', 'find', 'mine'],
      swipeEnabled: true,
      tabBarOptions: {
          showIcon: true,
          showLabel: true,
          activeTintColor: '#fc7397',
          inactiveTintColor: 'grey',
          upperCaseLabel: false,
          pressColor: '#823453',
          pressOpacity: 0.8,
          style: {
              backgroundColor: '#fff',
              paddingBottom: 0,
              borderTopWidth: 0.5,
              borderTopColor: '#ccc',
          },
          labelStyle: {
              fontSize: 10,
              margin: 1,
          },
          indicatorStyle: {height: 0}, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      },
      tabBarPosition: 'bottom',
      animationEnabled: true,
      lazy: false,
      backBehavior: 'none',
  },
);

export const AppBottomNavigatorContainer = createAppContainer(AppBottomTabNavigator);
