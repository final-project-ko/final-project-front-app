import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import axios from 'axios';
import { homeUrl } from "../../../../ifconfig/Inet";
import {useNavigation} from "@react-navigation/native";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import RNRestart from 'react-native-restart';

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
            const response = await axios.get(`http://${homeUrl}:8080/login/oauth/?code=${code}`);
            const data = response.data;
            console.log("제발"+data);
            asyncStorage.setItem("todayId", data.accessToken);
            // localStorage에 accessToken 저장
            // 계속 사용할 정보(예: 이름 등)은 AsyncStorage에 저장하십시오.
            /* AsyncStorage.setItem("name", data.account.name); */
            // 로그인이 성공하면 이동할 페이지
            // navigate("/") 대신에 원하는 페이지로 이동하는 코드를 추가하십시오.
            navigation.navigate('홈'); // 로그인 성공 시 홈페이지로 이동
            // RNRestart.Restart();

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
