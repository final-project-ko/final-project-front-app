import { Image, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useReducer, useState} from "react";
import useStore from "../../../../store";
import window from "@react-navigation/native/src/__mocks__/window";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {homeUrl} from "../../../../ifconfig/Inet";
import loginHandler from "./LoginHandler";
const Login = () => {

    const navigation = useNavigation();

    const kakao = require('../../../../assets/kakao1.png');
    const naver = require('../../../../assets/naver.png');

    const [login,setLogin] = useState(false);
    const { userId, auth,userName,userEmail, setUserInfo } = useStore();


    const openKakaoAuth = () => {
        navigation.navigate("LoginHandler");
    };

    const openNaverAuth = () => {
        navigation.navigate("NaverHandeler");
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const kAccessToken = await AsyncStorage.getItem("KtodayId");
                const nAccessToken = await AsyncStorage.getItem("NtodayId"); // NtodayId 가져오기
                console.log(kAccessToken, nAccessToken);

                // 하나의 토큰이라도 존재하는 경우에 실행
                if (kAccessToken || nAccessToken) {
                    if (tokenValid(kAccessToken) || tokenValid(nAccessToken)) {
                        console.log("토큰 있음");

                        try {
                            if (kAccessToken) { // Kakao 토큰이 존재하는 경우
                                const kResponse = await fetch(`http://${homeUrl}:8080/api/login/kakao`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        accessToken: kAccessToken
                                    })
                                });
                                const kData = await kResponse.json();
                                console.log("Kakao data:", kData);
                                setUserInfo(kData.id, kData.userAuth, kData.name, kData.email);
                            }
                            if (nAccessToken) { // Naver 토큰이 존재하는 경우
                                const nResponse = await fetch(`http://${homeUrl}:8080/api/naver/login`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        accessToken: nAccessToken
                                    })
                                });
                                const nData = await nResponse.json();
                                console.log("Naver data:", nData);
                                setUserInfo(nData.id, nData.userAuth, nData.name, nData.email);
                            }
                            setLogin(true);
                        } catch (error) {
                            console.error(error);
                            setLogin(false);
                        }
                    }
                } else {
                    console.log("토큰 없음");
                    setLogin(false);
                }
            } catch (error) {
                console.error("Error getting item from AsyncStorage:", error);
                setLogin(false);
            }
        };

        fetchData()
    }, []);



    const loginHandler = async () => {
        const loginBtn = login? "LogOut" : "LogIn";
        if (loginBtn === "LogOut") {
            try {
                console.log(AsyncStorage);
                await AsyncStorage.removeItem("KtodayId");
                await AsyncStorage.removeItem("NtodayId");
                setLogin(false);
                console.log("고구마" + AsyncStorage);
                navigation.navigate('홈');
            } catch (error) {
                console.log("Error removing item from AsyncStorage:", error);
            }
        }
    };




    return(
            <>

                <View style={styles.container}>

                    <TouchableOpacity style={{height:'auto'}} onPress={openKakaoAuth}>
                        <Image style={{width:250, height:60, borderRadius:10}} source={kakao} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{height:'auto', marginTop: 20}} onPress={openNaverAuth}>
                        <Image style={{width:250, height:60, borderRadius:10}} source={naver} />
                    </TouchableOpacity>


                    {login && (
                        <TouchableOpacity style={{ backgroundColor: '#008BDA', padding: 10, borderRadius: 5 , marginTop: 50, width:200, height:50, justifyContent:'center', alignItems:'center'}} onPress={loginHandler}>
                            <Text style={{ color: 'white', fontSize: 18 }}>LogOut</Text>
                        </TouchableOpacity>
                    )}
                </View>

            </>
        )
}

export default Login;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
        alignItems:"center",
        paddingTop:100,
        justifyContent:'center'
    },

})


const tokenValid = async (accessToken) => {
    const url = "https://kapi.kakao.com/v1/user/access_token_info";

    // 요청 헤더 설정
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    };

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        const data = await response.json();
        // 유효한 토큰인지 확인
        if (data.id) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
