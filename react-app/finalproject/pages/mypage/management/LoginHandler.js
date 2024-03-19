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




    return (
        <WebView
            source={{ uri: KAKAO_AUTH_URL }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
        />
    );
};

export default LoginHandler;
