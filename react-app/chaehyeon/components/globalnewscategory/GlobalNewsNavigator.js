import React from 'react';
import GlobalNewsAll from './GlobalNewsAll';
import GTechnologyAll from './GCategoryTechnology';
import GScienceAll from './GCategoryScience';
import GSportAll from './GCategorySport';
import GHealthAll from './GCategoryHealth';
import GBusinessAll from './GCategoryBusiness';
import GEntertainmentAll from './GCategoryEntertainment';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';





const Tab = createMaterialTopTabNavigator();

const GlobalNewsNavigator = () => {
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
        name="GNewsAll" 
        component={GlobalNewsAll} 
        options={{
          tabBarLabel: "전체"
        }}
      />
            <Tab.Screen 
        name="GBusinessAll" 
        component={GBusinessAll} 
        options={{
          tabBarLabel: "비즈니스"
        }}
      />
            <Tab.Screen 
        name="GEntertainmentAll" 
        component={GEntertainmentAll} 
        options={{
          tabBarLabel: "엔터테인먼트"
        }}
      />

            <Tab.Screen 
        name="GTechnologyAll" 
        component={GTechnologyAll} 
        options={{
          tabBarLabel: "기술"
        }}
      />
                  <Tab.Screen 
        name="GScienceAll" 
        component={GScienceAll} 
        options={{
          tabBarLabel: "과학"
        }}
      />
                        <Tab.Screen 
        name="GSportAll" 
        component={GSportAll} 
        options={{
          tabBarLabel: "스포츠"
        }}
      />
                              <Tab.Screen 
        name="GHealthAll" 
        component={GHealthAll} 
        options={{
          tabBarLabel: "건강"
        }}
      />


    </Tab.Navigator>
  );
}

export default GlobalNewsNavigator;

