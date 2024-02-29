import React from 'react';
import AScreen from './AScreen';
import BScreen from './BScreen';
import DScreen from './DScreen';
import EScreen from './EScreen';
import FScreen from './FScreen';
import GScreen from './GScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CScreen from './CScreen';


const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (    <Tab.Navigator
    initialRouteName='MainScreen'
    tabBarOptions={{
      scrollEnabled: true,
      style: { 
        backgroundColor: '#2E2E37', // 헤더 배경색 설정
        height: 50 // 헤더 높이를 10으로 지정
      },
      labelStyle: { 
        color: '#ffffff', // 탭 텍스트 색상 설정
        fontSize: 16 // 탭 폰트 크기를 15로 지정
      },
      indicatorStyle: {
        backgroundColor: '#4AB9F8', // 선택된 탭 아래의 인디케이터 색상 설정
      },
      showIcon: false, // 아이콘을 숨김
      showLabel: true, // 라벨을 보여줌
      pressColor: '#4AB9F8', // 탭을 눌렀을 때 효과 색상
      pressOpacity: 0.8, // 탭을 눌렀을 때 투명도 설정
    }}
  >
      <Tab.Screen 
        name="AScreen" 
        component={AScreen} 
        options={{
          tabBarLabel: "전체"
        }}
      />
            <Tab.Screen 
        name="CScreen" 
        component={CScreen} 
      />
      <Tab.Screen 
        name="BScreen" 
        component={BScreen} 
      />
            <Tab.Screen 
        name="DScreen" 
        component={DScreen} 
      />
                  <Tab.Screen 
        name="EScreen" 
        component={EScreen} 
      />
                        <Tab.Screen 
        name="FScreen" 
        component={FScreen} 
      />
                              <Tab.Screen 
        name="GScreen" 
        component={GScreen} 
      />

    </Tab.Navigator>
  );
}

export default TopNavigator;

