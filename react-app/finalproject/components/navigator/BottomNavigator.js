import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Home from "../../pages/home/Home";
import Mypage from "../../pages/mypage/Mypage";
import {useNavigation} from "@react-navigation/native";
import KoreaNewsNavigator from "../../pages/news/koreanewscategory/KoreaNewsNavigator";
import GlobalNewsNavigator from "../../pages/news/globalnewscategory/GlobalNewsNavigator";

const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {

  const currentDate = new Date();
  const formattedDate = ` ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`;
  const navigation = useNavigation();


  return (

<BottomTab.Navigator
  initialRouteName='Home'
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#323236', // Background color of the tab bar
      height: 100 // Height of the tab bar
    },
    headerStyle: {
      backgroundColor: '#222326', // Header background color
    },
    headerTitleStyle: {
      color: '#ffffff', // Header text color
      fontSize: 23, // Header font size
    },
    headerShadowVisible: false, // Remove header shadow
    // Add settings button to the header
    headerRight: () => (
      <MaterialIcons
        name="settings"
        size={25}
        color="#ffffff"
        style={{ marginRight: 20 }} // Adjust the right margin as needed
        onPress={() => {
          // Navigate to SettingsScreen or open settings modal
            navigation.navigate("계정관리");
        }}
      />
    )
  }}
>
      <BottomTab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerTitle: formattedDate, // 헤더 제목을 오늘 날짜로 설정
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' } // Customize tab label style
        }}
      />
      <BottomTab.Screen
        name="국내 뉴스"
        component={KoreaNewsNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' } // Customize tab label style
        }}
      />
      <BottomTab.Screen
        name="해외 뉴스"
        component={GlobalNewsNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="globe-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' } // Customize tab label style
        }}
      />
      <BottomTab.Screen
        name="마이 페이지"
        component={Mypage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' } // Customize tab label style
        }}

      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigator;

