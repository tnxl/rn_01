//tabs
import ReMen from '../main/tabs/ReMen';
import TuiJian from '../main/tabs/TuiJian';
import YingShi from '../main/tabs/YingShi';
import ZhiBo from '../main/tabs/ZhiBo';
import ZhuiFan from '../main/tabs/ZhuiFan';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import React from 'react';

const AppInnerTabNavigator = createMaterialTopTabNavigator(
  {
      zhibo: {
          screen: ZhiBo,
          navigationOptions: {
              tabBarLabel: '直播',
          },
      },
      tuijian: {
          screen: TuiJian,
          navigationOptions: {
              tabBarLabel: '推荐',
          },
      },
      remen: {
          screen: ReMen,
          navigationOptions: {
              tabBarLabel: '热门',
          },
      },
      zhuifan: {
          screen: ZhuiFan,
          navigationOptions: {
              tabBarLabel: '追番',
          },
      },
      yingshi: {
          screen: YingShi,
          navigationOptions: {
              tabBarLabel: '影视',
          },
      },

  },
  {
      tabBarPosition: 'top',
      animationEnabled: true,
      initialRouteName: 'tuijian',
      backBehavior: 'none',
      order: ['zhibo', 'tuijian', 'remen', 'zhuifan', 'yingshi'],
      tabBarOptions: {
          showIcon:false,
          showLabel:true,
          swipeEnabled: true,
          activeTintColor: '#fc7397',
          inactiveTintColor: 'grey',
          pressColor: '#fc7397',
          scrollEnabled: false,
          tabStyle: {
              borderWidth: 0,
              height: 45,
          },
          indicatorStyle: {
              backgroundColor: '#fc7397',
              height: 3,
              width:"10%",
              left:"5%",
              bottom:"8%",
          },
          labelStyle: {
              fontSize:17,
              backgroundColor: 'white',
          },
          style: {
              backgroundColor: 'white',
          },
      },
  },
);

export const AppInnerTabNavigatorContainer = createAppContainer(AppInnerTabNavigator);
