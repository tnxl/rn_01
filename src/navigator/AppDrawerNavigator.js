import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import DrawerView from '../main/DrawerView';
import {AppStackContainer} from './AppStackNavigator';

const ScreenWidth = Dimensions.get('window').width;

const AppDrawerNavigator = createDrawerNavigator(
  {
      stack: AppStackContainer,
  },
  {
      drawerLockMode: 'unlocked',
      drawerType:'front',
      tapToClose:true,
      drawerWidth: ScreenWidth * 0.75,
      drawerPosition: 'left',
      useNativeAnimations: true,
      overlayColor: 'rgba(0,0,0,0.6)',
      contentComponent:()=>{return <DrawerView />},
      contentOptions:{
          activeTintColor: '#fb7299',
          activeBackgroundColor: '#ccc',
          inactiveTintColor: 'black',
      }
  },
);

export const AppDrawerNavigatorContainer = createAppContainer(AppDrawerNavigator);
