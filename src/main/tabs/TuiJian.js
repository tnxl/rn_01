import React from 'react';
import
{
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ScreenWidth = Dimensions.get('window').width;

import Images from '../../assets/ImageData';

export default class TuiJian extends React.Component {

    render() {
        return (
          <View style={TuiJianStyles.mainBoxStyle}>
              <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <ScrollView style={TuiJianStyles.scrollViewStyle}
                              horizontal={true}
                              alwaysBounceHorizontal={true}
                              pagingEnabled={true}
                              showsHorizontalScrollIndicator={false}
                              bounces={true}
                  >
                      {this._renderImages()}
                  </ScrollView>
              </View>
              <View style={{height: 10}}/>
              <ScrollView style={{flexDirection: 'column',flexWrap:'nowrap'}}>
                  {this._renderTabs()}
              </ScrollView>
          </View>
        );
    }

    _renderImages() {
        let renderedImages = [];
        let images = Images.data;
        for (let i = 0; i < images.length; i++) {
            let image = images[i];
            renderedImages.push(
              <Image key={i} source={{uri: image.imgPath}} style={TuiJianStyles.imageStyle}/>,
            );
        }
        return renderedImages;
    }

    _renderTabs() {
        let tabs = [];
        for (let i = 0; i < 12; i++) {
            tabs.push(
              <View key={i} style={{width:ScreenWidth/2,height:ScreenWidth/2,justifyContent:'center',alignItems:'center'}}>
                  <TuiJianTab />
              </View>
            );
        }
        return tabs;
    }

}

const TuiJianStyles = StyleSheet.create({
    mainBoxStyle: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    scrollViewStyle: {
        width: ScreenWidth - 25,
        height: 200,
        borderRadius: 10,
    },
    imageStyle: {
        width: ScreenWidth - 25,
        height: 200,
        borderRadius: 10,
    },

});

const TabWidth = ScreenWidth / 2 - 20;
const TabHeight = ScreenWidth / 2 - 20;

class TuiJianTab extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (

          <View style={TuiJianTabStyles.cardBoxStyle}>
              <TouchableOpacity activeOpacity={0.7}>
              <View style={TuiJianTabStyles.imageBoxStyle}>
                  <ImageBackground source={{uri: 'https://www.itying.com/images/flutter/2.png'}}
                                   style={TuiJianTabStyles.imageStyle}
                                   imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                      <View style={{justifyContent: 'flex-end', height: TabHeight * 0.55}}>
                          <View style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: 2,
                          }}>
                              <View style={{
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginLeft: 10,
                              }}>
                                  <Foundation name={'play-video'} size={20} color={'white'}/>
                                  {/*播放数*/}
                                  <Text style={{color: 'white', marginHorizontal: 5, fontSize: 14}}>219.0万</Text>
                                  <Fontisto name={'play-list'} size={12} color={'white'}/>
                                  {/*评论数*/}
                                  <Text style={{color: 'white', marginHorizontal: 5, fontSize: 14}}>2万</Text>
                              </View>
                              <View style={{marginRight: 10}}>
                                  {/*视频时常*/}
                                  <Text style={{color: 'white', fontSize: 14}}>5:20</Text>
                              </View>
                          </View>
                      </View>
                  </ImageBackground>
              </View>
              <View style={TuiJianTabStyles.titleBoxStyle}>
                  {/*视频标题*/}
                  <Text style={{fontSize: 15}}>
                      宣布一下,我有那个陪我一起吃火锅的人了!
                  </Text>
              </View>
              <View style={TuiJianTabStyles.funcBoxStyle}>
                  <View style={{
                      flexDirection: 'row',
                      backgroundColor: '#fc9e60',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 15,
                      borderRadius: 3,
                      paddingHorizontal: 3,
                  }}>
                      <Text style={{color: 'white', fontSize: 12}}>21万</Text>
                      <Text style={{color: 'white', fontSize: 12}}>硬币</Text>
                  </View>
                  <TouchableOpacity>
                      <View style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
                          <Text>⋮</Text>
                      </View>
                  </TouchableOpacity>
              </View>
              </TouchableOpacity>
          </View>
        );
    }

}

const TuiJianTabStyles = StyleSheet.create({
    cardBoxStyle: {
        width: TabWidth,
        height: TabHeight,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    imageBoxStyle: {
        width: TabWidth,
        height: TabHeight * 0.55,
    },
    imageStyle: {
        width: TabWidth,
        height: TabHeight * 0.55,
    },
    titleBoxStyle: {
        marginHorizontal: 15,
        height: TabHeight * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    funcBoxStyle: {
        width: TabWidth,
        height: TabHeight * 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});
