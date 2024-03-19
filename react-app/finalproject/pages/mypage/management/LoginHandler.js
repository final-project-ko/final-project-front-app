import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import axios from 'axios';
import { homeUrl } from "../../../../ifconfig/Inet";
import {useNavigation} from "@react-navigation/native";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const LoginHandler = () => {
    const navigation = useNavigation();

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    const handleWebViewNavigationStateChange = (newNavState) => {
        const { url } = newNavState;
        const code = url.split('code=')[1];
        if (code) {
            kakaoLogin(code);
        }
    };

    const kakaoLogin = async (code) => {
        try {
            const response = await fetch(`http://${homeUrl}:8080/api/login/oauth/?code=${code}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            asyncStorage.setItem("KtodayId", data.accessToken);
            navigation.navigate('홈');
            navigation.navigate('Login');
            navigation.navigate('홈');
        } catch (error) {
            console.log(error);
        }
    };


    // // useEffect를 사용하여 AsyncStorage 값이 변경될 때마다 실행
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         // 여기서 AsyncStorage의 값을 읽어올 수 있음
    //         console.log("AsyncStorage 값이 변경되었습니다.");
    //     });
    //
    //     // Clean up function
    //     return unsubscribe;
    // }, [navigation]);



    return (
        <WebView
            source={{ uri: KAKAO_AUTH_URL }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
        />
    );
};

export default LoginHandler;
