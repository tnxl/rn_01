import React, {Component} from 'react';
import
{
    Text,
    View,
    StyleSheet,
    Dimensions,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class HeaderView extends Component {

    constructor(props,navigation) {
        super(props);
        this.props.navigation = navigation;
    }

    render() {

        return (
            <View style={HeaderViewStyles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {/*<Image source={require('../assets/images/list.png')} style={HeaderViewStyles.listIconStyle}/>*/}
                        <Foundation name={'list'} size={22} color={'#5a5a5a'} style={HeaderViewStyles.listIconStyle}/>
                        <Image source={require('../assets/images/5.png')} style={HeaderViewStyles.headerIconStyle}/>
                    </View>
                </TouchableOpacity>
                <View style={HeaderViewStyles.searchBoxStyle}>
                    {/*<Image source={require('../assets/images/search.png')} style={{marginLeft: 10}}/>*/}
                    <Ionicons name={'ios-search'} size={22} color={'#5a5a5a'} style={{marginLeft: 10}}/>
                </View>
                <TouchableOpacity>
                    <View style={{
                        width: 40, height: 40, marginRight: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        {/*<Image source={require('../assets/images/scan.png')} style={HeaderViewStyles.fileStyle}/>*/}
                        <Ionicons name={'md-qr-scanner'} size={30} color={'#5a5a5a'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        width: 40, height: 40, marginRight: 10, justifyContent: 'center', alignItems: 'center',
                    }}>
                        {/*<Image source={require('../assets/images/add.png')} style={HeaderViewStyles.messageStyle}/>*/}
                        <Ionicons name={'md-add'} size={35} color={'#5a5a5a'} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

const HeaderViewStyles = StyleSheet.create({

    container: {
        width: ScreenWidth,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listIconStyle: {
        width: 10,
        // height: 25,
    },
    headerIconStyle: {
        marginLeft: 15,
        width: 35,
        height: 35,
        borderRadius: 90,
    },
    searchBoxStyle: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        height: 35,
        borderRadius: 90,
        marginHorizontal: 15,
        justifyContent:'center',
    },
    messageStyle: {
        width: 26,
        height: 26,
    },
    fileStyle: {
        width: 25,
        height: 25,
    },

});
