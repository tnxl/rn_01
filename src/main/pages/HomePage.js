import React from 'react';
import
{
    View,
    Text,
} from 'react-native';
import {AppInnerTabNavigatorContainer} from '../../navigator/AppInnerTabNavigator';

export default class HomePage extends React.Component {

    render() {
        return (
          <View style={{flex:1}}>
              <AppInnerTabNavigatorContainer />
          </View>
        );
    }

}
