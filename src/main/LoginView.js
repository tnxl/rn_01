import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const {MAINWIDTH, MAINHEIGHT} = Dimensions.get('window');

const userProtocolFontSize = 11;
const userProtocolFontFamily = '微软雅黑';

export default class LoginView extends Component {
    constructor(props){
        super(props);
    }

    render() {
        //导航器
        const navigate = this.props.navigation;

        return (
            <View style={LoginViewStyles.baseStyles}>
                {/*头像*/}
                <View style={LoginViewStyles.imagesBoxStyle}>
                    {/*<Image*/}
                    {/*    style={LoginViewStyles.imagesStyle}*/}
                    {/*    // source={{uri: 'https://www.itying.com/images/flutter/1.png'}}*/}
                    {/*    source={require('./images/skynet.png')}*/}
                    {/*    />*/}
                    <Text style={LoginViewStyles.mainTitleStyle}>SKYNET</Text>
                </View>
                {/*账号和密码*/}
                <View style={LoginViewStyles.idcoutBoxStyle}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 50, height: 50}}>
                        <Image style={{width: 40, height: 40, borderRadius: 90}}
                            // source={{uri: 'https://www.itying.com/images/flutter/1.png'}}
                               source={require('../assets/images/1.png')}
                        />
                    </View>
                    <TextInput style={LoginViewStyles.idcountStyle}
                               placeholder={'账号'}
                               multiLine={false}
                               clearButtonMode={'always'}
                               maxLength={16}
                    />
                    <View style={{width: 50, height: 50}}/>
                </View>
                <View style={LoginViewStyles.idkeyBoxStyle}>
                    <View style={{width: 50, height: 50}}/>
                    <TextInput style={LoginViewStyles.idkeyStyle}
                               multiLine={false}
                               placeholder={'密码'}
                               password={true}
                               secureTextEntry={true}
                               clearButtonMode={'always'}
                               maxLength={16}
                    />
                    <View style={{width: 50, height: 50}}/>
                </View>
                {/*登录按钮*/}
                <View style={LoginViewStyles.loginButtonBoxStyle}>
                    {/*<TouchableOpacity onPress={this._loginEvent}>*/}
                    <TouchableOpacity onPress={()=>{navigate.navigate('main')}}>
                        <View style={{
                            width: 65,
                            height: 65,
                            borderRadius: 90,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image style={LoginViewStyles.loginButtonStyle}
                                   source={require('../assets/images/arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {/*忘记密码用户注册*/}
                <View style={LoginViewStyles.bottomBoxStyle}>
                    <View style={LoginViewStyles.userOptionBoxStyle}>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: userProtocolFontSize,
                                fontFamily: userProtocolFontFamily,
                            }}>忘记密码</Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: userProtocolFontSize,
                            color: '#808080',
                            fontFamily: userProtocolFontFamily,
                        }}>|</Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: userProtocolFontSize,
                                fontFamily: userProtocolFontFamily,
                            }}>用户注册</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={LoginViewStyles.serverProtocolsBoxStyle}>
                        <Text style={{
                            color: '#808080', fontSize: userProtocolFontSize,
                            fontFamily: userProtocolFontFamily,
                        }}>登录即代表阅读并同意</Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: userProtocolFontSize,
                                fontFamily: userProtocolFontFamily,
                            }}>服务协议</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    //登录操作
    _loginEvent() {
        this.props.navigation.navigator('MainView');
    }
}


const LoginViewStyles = StyleSheet.create({
    baseStyles: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // justifyContent:'center',
        // alignItems:'center',
    },
    imagesBoxStyle: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagesStyle: {
        // width: 120,
        // height: 120,
    },
    mainTitleStyle: {
        fontSize: 60,
        fontFamily: 'Lombok',
    },
    idcoutBoxStyle: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#F2F3F7',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    idcountStyle: {
        // marginLeft:80,
        // marginRight:80,
        textAlign: 'center',
        fontSize: 20,
    },
    idkeyBoxStyle: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 50,
        backgroundColor: '#F2F3F7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    idkeyStyle: {
        // marginLeft:80,
        // marginRight:80,
        textAlign: 'center',
        fontSize: 20,
    },
    loginButtonBoxStyle: {
        width: 65,
        height: 65,
        borderRadius: 90,
        marginTop: 50,
        // backgroundColor: '#01CAFC',
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loginButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
    },
    bottomBoxStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    userOptionBoxStyle: {
        flexDirection: 'row',
        width: 150,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serverProtocolsBoxStyle: {
        width: 150,
        flexDirection: 'row',
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//输出类
// module.exports = LoginView;
