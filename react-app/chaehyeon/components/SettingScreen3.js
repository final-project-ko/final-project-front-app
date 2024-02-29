import { Button } from "react-native-elements";
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SettingScreen3 = () =>{
    const navigation = useNavigation();
  
    const goShort = () => {
      navigation.navigate('ShortNewsScreen'); // 'Home'은 홈 화면의 route name입니다. 실제 앱에서는 해당하는 route name으로 변경해야 합니다.
    };
  
    return (
      <Button onPress={goShort} title="Go Short" />
    );
  };
  

export default SettingScreen3;
