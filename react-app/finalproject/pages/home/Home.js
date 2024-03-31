import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import Weather from '../../components/weatherCompo/WeatherAPI';
import SwipeButtons from '../../components/button/SwipeableButton';
import StringToButtons from '../../components/button/StringToButtons';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// const Stack = createStackNavigator();


const Home = () => {

  const navigation = useNavigation();

  const goShort = () => {
    navigation.navigate('ShortNewsScreen');
  };

  const goNews = () => {
    navigation.navigate('국내 뉴스');
  };

  return (
    <View style={styles.container}>
      <View style={styles.separator5} />

      {/* 날씨 위젯 */}
      <Weather />
      {/* 칸에 여백 */}
      <View style={styles.separator10} />

      {/* 요약기사 읽기 슬라이드 */}
      <SwipeButtons
        message="오늘은?"
        backgroundSource={require('../../../assets/SwipeBar_1loop.gif')}
        widthsize={320}
        Swipesuccessfully={goShort}
      />
      {/* 칸에 여백 */}
      <View style={styles.separator10} />
      <View style={styles.keywordbox}>

        {/* 오늘의 키워드 */}
        <Text style={[styles.titletext, { backgroundColor: '#323236' }]}>오늘의 키워드</Text>

        <StringToButtons />

        {/* 칸에 여백 */}
        <View style={styles.separator10} />
        {/* 기사 상세보기 슬라이드 */}

        <SwipeButtons
          message="밀어서 더 읽기"
          backgroundSource={require('../../../assets/SwipeBar_4loop.gif')}
          widthsize={300}
          Swipesuccessfully={goNews}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222326',
  },
  separator30: {
    margin: 30,
  },
  separator20: {
    margin: 20,
  },
  separator15: {
    margin: 15,
  },
  separator10: {
    margin: 10,
  },
  separator5: {
    margin: 5,
  },
  separator2: {
    margin: 2,
  },
  keywordbox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#323236',
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 25,
    borderRadius: 15,
  },
  titletext: {
    fontSize: 19,
    marginTop:25,
    margin:15,
    fontWeight: 'bold',
    color: "#4AB9F8"
  }
});