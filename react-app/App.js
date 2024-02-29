// 라이브러리 임포트 목록 하단에 정리되어 있습니다.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './chaehyeon/components/BottomNavigator';
import ShortNewsScreen from './chaehyeon/components/ShortNewsScreen';
import Weather from "./jonghwan/components/WeatherAPI";
import DetailWeather from "./jonghwan/pages/DetailWeather";
import DetailNews from "./jonghwan/pages/DetailNews";
import News from "./jonghwan/components/News";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
              {/* <Weather style={styles.weather} /> */}

      <Stack.Navigator
         screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
        />
          <Stack.Screen
          name="ShortNewsScreen"
          component={ShortNewsScreen}
        />
        <Stack.Screen
            options={{headerShown: false}}
            name="Weather"
            component={Weather}
        />
        <Stack.Screen
            options={{headerShown: false}}
            name="DetailWeather"
            component={DetailWeather}
        />
        <Stack.Screen
            name="DetailNews"
            component={DetailNews}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // weather: {
  //   border: '1px solid black',
  //   width: '80%',
  //   height: '25%',
  //   position: "absolute",
  //   top: '10%'
  // }
});




/*
====================================

라이브러리 임포트 목록

@react-navigation/bottom-tabs (v6.5.12):
하단 탭 네비게이터를 제공하는 패키지입니다.

npm install @react-navigation/material-top-tabs react-native-tab-view
상단 탭 네비게이터를 제공하는 패키지입니다. 

@react-navigation/material-top-tabs (v6.6.8): 
React Navigation에서 제공하는 또 다른 패키지로, 머티리얼 스타일의 상단 탭 네비게이터를 제공합니다. 
React Native 애플리케이션에서 상단 탭을 생성하는 데 사용됩니다.

@react-navigation/native (v6.1.10): 
React Native를 위한 React Navigation 라이브러리의 핵심입니다. 
앱 내에서 네비게이션 및 라우팅을 용이하게 하는 일련의 네비게이터를 제공합니다.

@react-navigation/native-stack (v6.9.18): 
React Navigation에 특화된 스택 네비게이터로, 
React Native 앱에서 네비게이션 스택을 관리하는 데 사용됩니다.

@react-navigation/stack (v6.3.21): 
React Navigation의 스택 네비게이터로, 
스크린 간을 이동하고 스택을 유지하는 데 사용됩니다.

axios (v1.6.7): 
HTTP 요청을 생성하고 응답을 처리하는 데 사용되는 인기 있는 HTTP 클라이언트입니다. 
React Native 앱에서 HTTP 요청을 간편하게 만들어 줍니다.

expo (~49.0.15): 
React Native 애플리케이션을 구축하기 위한 프레임워크 및 도구를 제공하는 패키지입니다. 
네이티브 모듈을 구성하는 복잡성을 줄여줍니다.

expo-location (~16.1.0): 
Expo SDK의 일부로, 기기의 위치 정보에 액세스할 수 있게 해주며, 
앱에서 위치 기반 기능을 구현하는 데 유용합니다.

expo-status-bar (~1.11.1): 
Expo에서 제공하는 상태 표시줄의 모양을 관리하는 컴포넌트입니다. 

react-native-elements (v3.4.3): 
React Native 애플리케이션을 위한 UI 툴킷입니다.

react-native-safe-area-context (v4.6.3): 
React Native 앱에서 노치나 다른 불규칙한 화면 모양에 대한 안전한 영역을 처리하는 데 도움이 되는 패키지입니다.

react-native-screens (~3.22.0): 
React Native 앱에서 네이티브 뷰와 뷰 컨트롤러를 관리하기 위한 패키지로, 
주로 React Navigation과 함께 사용됩니다.

react-native-vector-icons (v10.0.3): 
React Native에서 사용할 수 있는 사용자 정의 가능한 벡터 아이콘 세트를 제공하는 패키지입니다.

react-native-video (v5.2.1): 
React Native 비디오 컴포넌트입니다.

react-native-web-swiper (^2.2.4)
이미지 슬라이더 및 캐러셀을 쉽게 구현할 수 있는 패키지입니다.
*/
