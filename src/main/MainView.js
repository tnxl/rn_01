import React from 'react';
import
{
    Text,
    View,
    StyleSheet,
    ScrollView,

} from 'react-native';
import HeaderView from './HeaderView';
import {AppBottomNavigatorContainer} from '../navigator/AppBottomTabNavigator';

export default class MainView extends React.Component{

    render(){
        return (
            <View style={{flex:1}}>
                <HeaderView navigation={this.props.navigation}/>
                <AppBottomNavigatorContainer />
            </View>
        );
    }


}


