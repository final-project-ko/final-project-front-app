import React, { useEffect } from 'react';
import WebView from 'react-native-webview';
import axios from 'axios';
import { homeUrl } from "../../../../ifconfig/Inet";
import {useNavigation} from "@react-navigation/native";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import useStore from "../../../../store";
const NaverHandeler = () => {
    const navigation = useNavigation();

    const { userName , userEmail} = useStore();

    const NAVER_REST_API_KEY= process.env.REACT_APP_REST_API_KEY_NAVER;
    const NAVER_REDIRECT_URL= process.env.REACT_APP_REDIRECT_URL_NAVER;
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_REST_API_KEY}&state=STATE_STRING&redirect_uri=${NAVER_REDIRECT_URL}`;

    const handleWebViewNavigationStateChange = (newNavState) => {
        const { url } = newNavState;
        const code = url.split('code=')[1];
        if (code) {
            naverLogin(code);
        }
    };

    const naverLogin = async (code) => {
        try {
            const response = await axios.get(`http://${homeUrl}:8080/api/naver/oauth/?code=${code}`);
            const data = response.data;
            console.log("제발"+data);
            asyncStorage.setItem("NtodayId", data.accessToken);

            navigation.navigate('홈');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <WebView
            source={{ uri: NAVER_AUTH_URL }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
        />
    );
};

export default NaverHandeler;
