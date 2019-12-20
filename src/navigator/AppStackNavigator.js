import React from 'react';
import
{
    Easing,
    Animated,
} from 'react-native';
import reanimated from 'react-native-reanimated';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//main
import LoginView from '../main/LoginView';
import MainView from '../main/MainView';
import {AppBottomNavigatorContainer} from './AppBottomTabNavigator';
import {AppInnerTabNavigatorContainer} from './AppInnerTabNavigator';
import HeaderView from '../main/HeaderView';

const AppStackNavigator = createStackNavigator(
  {
      login: {
          screen: LoginView,
          navigationOptions: ({
              header: null,
          }),
      },
      main: {
          screen: MainView,
          navigationOptions: ({
              header: null,
              gesturesEnabled:true
          }),
      },
      head:{
          screen:HeaderView,
          navigationOptions:({
              header:null,
          })
      },
      pages: {
          screen: AppBottomNavigatorContainer,
          navigationOptions: ({
              header: null,
          }),
      },
      tabs: {
          screen: AppInnerTabNavigatorContainer,
          navigationOptions: ({
              header: null,
          }),
      },
  },
  {
      initialRouteName: 'login',
      navigationOptions: {
          gestureEnable: true,
      },
      transitionConfig: () => ({
          transitionSpec: {
              duration: 300,
              easing: Easing.out(Easing.poly(1)),
              timing: Animated.timing,
          },
          screenInterpolator: sceneProps => {
              const {layout, position, scene} = sceneProps;
              const {index} = scene;
              const Width = layout.initWidth;
              //沿X轴平移
              const translateX = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [Width, 0, -(Width - 10)],
              });
              //透明度
              const opacity = position.interpolate({
                  inputRange: [index - 1, index - 0.99, index],
                  outputRange: [0, 1, 1],
              });
              return {opacity, transform: [{translateX}]};
          },
      }),
  },
);

export const AppStackContainer = createAppContainer(AppStackNavigator);
