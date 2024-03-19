import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Ionicons } from '@expo/vector-icons';
import { dataString, dataString2, dataString3, dataString4, dataString5 } from './shortnews';

export default function Screen() {

  const navigation = useNavigation();

    return (
          // ========================== 
          // TouchableOpacity와 TouchableWithoutFeedback은 모두 React Native에서 터치 이벤트를 처리하기 위한 컴포넌트입니다.

          // TouchableOpacity:
          // 터치가 발생할 때 투명도를 변경하여 사용자에게 터치 이벤트를 시각적으로 표시합니다.
          // 여러 개의 자식 요소를 가질 수 있습니다.

          // 터치 이벤트가 발생했을 때 TouchableOpacity 내의 자식 요소 중 하나에 터치가 발생한 것으로 처리됩니다.

          // 터치 이벤트에 반응하기 위해 약간의 오버헤드가 발생할 수 있습니다.


          // TouchableWithoutFeedback:
          // 터치 피드백을 제공하지 않습니다. 터치가 발생하면 시각적인 피드백이 없으며,
          // 사용자에게 터치가 발생했음을 알리지 않습니다.

          // 역시 여러 개의 자식 요소를 가질 수 있습니다.
          // 하지만 자식 요소 중 하나에 터치가 발생하면, 다른 자식 요소에 대한 터치 이벤트는 무시됩니다.

          // 추가적인 퍼포먼스 오버헤드 없이 터치 이벤트를 처리합니다.
          // 따라서 간단한 터치 이벤트 처리에 적합합니다.


          <View style={styles.container}>
          <Swiper>
  
           {/* ===== 1번 쇼츠 */}
          <View style={[styles.slideContainer, styles.slide1]}>
            {/* 내용 */}
            <View>
              <Text style={styles.text}>{dataString}</Text>
            </View>

            {/* 버튼 */}
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BottomNavigator')}>
                <View style={styles.closeButton}>
                <Ionicons name='close' size={27} color="#4AB9F8" />
                </View>
            </TouchableWithoutFeedback>
            </View>


           {/* ===== 2번 쇼츠 */}
          <View style={[styles.slideContainer, styles.slide2]}>


            {/* 내용 */}
            <View>
              <Text style={styles.text}>{dataString2}</Text>
            </View>

            {/* 버튼 */}
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BottomNavigator')}>
                <View style={styles.closeButton}>
                <Ionicons name='close' size={27} color="#4AB9F8" />
                </View>
            </TouchableWithoutFeedback>
            </View>


           {/* ===== 3번 쇼츠 */}
          <View style={[styles.slideContainer, styles.slide3]}>
            {/* 내용 */}
            <View>
              <Text style={styles.text}>{dataString3}</Text>
            </View>

            {/* 버튼 */}
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BottomNavigator')}>
                <View style={styles.closeButton}>
                <Ionicons name='close' size={27} color="#4AB9F8" />
                </View>
            </TouchableWithoutFeedback>
            </View>

           {/* ===== 4번 쇼츠 */}
          <View style={[styles.slideContainer, styles.slide4]}>

          {/* 내용 */}
          <View>
            <Text style={styles.text}>{dataString4}</Text>
          </View>
            {/* 버튼 */}
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BottomNavigator')}>
                <View style={styles.closeButton}>
                <Ionicons name='close' size={27} color="#4AB9F8" />
                </View>
            </TouchableWithoutFeedback>
            </View>

           {/* ===== 5번 쇼츠 */}
          <View style={[styles.slideContainer, styles.slide5]}>

          {/* 내용 */}
          <View>
            <Text style={styles.text}>{dataString5}</Text>
          </View>

            {/* 버튼 */}
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BottomNavigator')}>
                <View style={styles.closeButton}>
                <Ionicons name='close' size={27} color="#4AB9F8" />
                </View>
            </TouchableWithoutFeedback>
            </View>

        </Swiper>
      </View>
    );
  }



  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: '#323236',
  },
  slide2: {
    backgroundColor: '#222326',
  },
  slide3: {
    backgroundColor: '#323236',
  },
  slide4: {
    backgroundColor: '#222326',
  },
  slide5: {
    backgroundColor: '#323236',
  },
  botton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  closeButton: {
    position: 'absolute',
    top: 60, // 상단으로부터의 거리
    right: 30, // 우측으로부터의 거리
    backgroundColor: 'transparent', // 배경색을 투명하게 설정
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    margin: 30,
    fontSize: 18,

  }
});