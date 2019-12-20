import React,{Component} from 'react';
import
{
    View,
  Text
} from 'react-native';
import {AppInnerTabNavigator, AppInnerTabNavigatorContainer} from '../navigator/AppStackNavigator';

export default class TestPage extends Component{

    render(){
        return (
          <View style={{flex:1}}>
              <AppInnerTabNavigatorContainer />
          </View>
        );
    }

}
