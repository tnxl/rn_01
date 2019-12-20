import React from 'react';
import
{
    View,
    Text,
    StyleSheet,
    ScrollView,
    SectionList,
    Image,
    Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerWidth = Dimensions.get('window').width*0.75;

export default class DrawerView extends React.Component {

    render() {
        return (
          <View style={DrawerViewStyles.container}>
              <View style={DrawerViewStyles.userBoxStyle}>
                  <View>
                      <View style={{flexDirection: 'row',width:DrawerWidth,justifyContent: 'space-between'}}>
                          {/*大头像*/}
                          <View style={{
                              width: 80, height: 80, borderRadius: 90, marginTop: 20,
                              marginLeft: 20
                          }}>
                              <Image
                                source={require('../assets/images/1.png')}
                                style={{
                                    width: 80, height: 80, borderRadius: 90, borderColor: 'white', borderWidth: 2,
                                }}
                              />
                          </View>
                          {/*右侧两图标*/}
                          <View style={{flexDirection: 'row',marginRight:20,marginTop:20}}>
                              <TouchableOpacity>
                                  <View style={DrawerViewStyles.circleBoxStyle}>
                                      <AntDesign name={'creditcard'} size={21} color={'#2c2c2c'}/>
                                  </View>
                              </TouchableOpacity>
                              {/*sizedBox*/}
                              <View style={{width: 15}}/>
                              <TouchableOpacity>
                                  <View style={DrawerViewStyles.circleBoxStyle}>
                                      <Ionicons name={'ios-qr-scanner'} size={22} color={'#2c2c2c'}/>
                                  </View>
                              </TouchableOpacity>
                          </View>
                      </View>
                      {/*用户信息*/}
                      <View style={{flexDirection: 'row',marginTop:20,marginLeft:20,alignItems: 'center'}}>
                          <Text style={{fontSize:18}}>Izvara</Text>
                          <View style={{borderWidth: 1,borderRadius: 3,borderColor: '#fc7397',marginLeft:5,height:18,justifyContent:'center',alignItems:'center'}}>
                              <Text style={{color:'#fc7397',fontSize:12}}> LV7 </Text>
                          </View>
                          <View style={{marginLeft:5,backgroundColor: '#fc7397',borderRadius: 3,height:20,justifyContent: 'center',alignItems: 'center'}}>
                              <Text style={{fontSize:11,color:'white',paddingHorizontal:5}}>大会员</Text>
                          </View>
                          <View style={{marginLeft:5,backgroundColor: '#FFD700',borderRadius: 3,height:20,justifyContent: 'center',alignItems: 'center'}}>
                              <Text style={{fontSize:11,color:'white',paddingHorizontal:5}}>年</Text>
                          </View>
                      </View>
                      {/*用户财富*/}
                        <View style={{flexDirection: 'row',marginTop:5,marginLeft:20}}>
                            <Text style={{color:'#848484'}}>SN币: </Text>
                            <Text style={{color:'#848484'}}> 10.0 </Text>
                            <Text style={{color:'#848484'}}>硬币: </Text>
                            <Text style={{color:'#848484'}}> 359.0 </Text>
                        </View>
                      {/*会员权益*/}
                      <View style={DrawerViewStyles.vipBoxStyle}>
                        <View style={{flexDirection:'row',width:180,flexWrap:'wrap',marginLeft:20}}>
                            <Text style={{color:'#fc7397',fontSize:15}}>我的大会员</Text>
                            <Text style={{marginLeft:10,color:'#848484'}}>了解更多权益</Text>
                            <Text style={{marginTop:7}}>开通大会员畅看国内外</Text>
                        </View>
                          <View>
                              <TouchableOpacity>
                                  <AntDesign name={'right'} size={20} color={'#848484'} style={{marginRight:10}} />
                              </TouchableOpacity>
                          </View>
                      </View>
                      {/*个人关注*/}
                      <View style={DrawerViewStyles.activeInfoBoxStyle}>
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Text style={{fontSize:16,color:'#505050'}}>1</Text>
                              <Text style={{color:'#787878',marginTop:5}}>动态</Text>
                          </View>
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Text style={{fontSize:16,color:'#505050'}}>56</Text>
                              <Text style={{color:'#787878',marginTop:5}}>关注</Text>
                          </View>
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Text style={{fontSize:16,color:'#505050'}}>2</Text>
                              <Text style={{color:'#787878',marginTop:5}}>粉丝</Text>
                          </View>
                      </View>
                  </View>
              </View>
              {/*列表*/}
              <View style={{height:440}}></View>
              {/*底部功能*/}
                  <View style={DrawerViewStyles.bottomBoxStyle}>
                      <TouchableOpacity>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                              <View style={DrawerViewStyles.circleBoxStyle}>
                                  <AntDesign name={'setting'} size={18} color={'#858585'} />
                              </View>
                              <Text style={{marginLeft:5}}>设置</Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                              <View style={DrawerViewStyles.circleBoxStyle}>
                                  <MaterialCommunityIcons name={'palette-outline'} size={20} color={'#858585'} />
                              </View>
                              <Text style={{marginLeft:5}}>主题</Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                              <View style={DrawerViewStyles.circleBoxStyle}>
                                  <Fontisto name={'night-clear'} size={16} color={'#858585'} />
                              </View>
                              <Text style={{marginLeft:5}}>夜间</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
          </View>
        );
    }

}

const DrawerViewStyles = StyleSheet.create({
    container: {
        width:DrawerWidth,
    },
    userBoxStyle: {
        flexDirection: 'row',
        height: 340,
        backgroundColor: '#f4f4f4',
    },
    circleBoxStyle: {
        borderColor: '#2c2c2c',
        borderWidth: 2,
        borderRadius: 90,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vipBoxStyle: {
        width: DrawerWidth,
        height:70,
        marginTop:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
      alignItems: 'center'
    },
    activeInfoBoxStyle: {
        height:70,
        width:DrawerWidth,
        marginTop: 10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    listBoxStyle: {},
    bottomBoxStyle: {
        height:50,
        width:DrawerWidth,
        alignSelf:'flex-end',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        // borderWidth: 1,
        borderTopColor:'#848484',
        borderTopWidth:1,
    },
});

class DrawerViewTab extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

    }

}
