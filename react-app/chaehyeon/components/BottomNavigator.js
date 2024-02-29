import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from './MainScreen';
import SettingScreen3 from './SettingScreen3';
import TopNavigator from './TopNavigator';
import SettingScreen2 from './SettingScreen2';
import { MaterialIcons } from '@expo/vector-icons'; 

const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {

  const currentDate = new Date();
  const formattedDate = ` ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`;


  return (

<BottomTab.Navigator
  initialRouteName='MainScreen'
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#323236', // Background color of the tab bar
      height: 52 // Height of the tab bar
    },
    headerStyle: {
      backgroundColor: '#222326', // Header background color
      height: 70, // Header height

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
        }}
      />
    )
  }}
>
      <BottomTab.Screen 
        name="홈" 
        component={MainScreen} 
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
        component={TopNavigator} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' } // Customize tab label style
        }}
      />
      <BottomTab.Screen 
        name="해외 뉴스" 
        component={SettingScreen2} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="globe-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' } // Customize tab label style
        }}
      />
      <BottomTab.Screen 
        name="마이 페이지" 
        component={SettingScreen3} 
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

