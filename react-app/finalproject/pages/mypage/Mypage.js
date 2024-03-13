import {Button, Tab} from "react-native-elements";
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import MypageNavigator from "../../components/navigator/MypageNavigator";


const Mypage = () =>{


    return (

      <View style={styles.container}>

          <MypageNavigator/>

      </View>
    );
  };
  

export default Mypage;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
        padding: '5%',
    },

});
