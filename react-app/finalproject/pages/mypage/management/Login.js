import { Image, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import useStore from "../../../../store";
import window from "@react-navigation/native/src/__mocks__/window";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {homeUrl} from "../../../../ifconfig/Inet";

const Login = () => {

    const navigation = useNavigation();

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    const kakao = require('../../../../assets/kakao1.png');

    const [login,setLogin] = useState();
    const { userId, auth,userName,userEmail, setUserInfo } = useStore();

    const openKakaoAuth = () => {
        navigation.navigate("LoginHandler");
    };

        console.log({REST_API_KEY});
        console.log({REDIRECT_URI})


    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await AsyncStorage.getItem("todayId");
                console.log(accessToken);
                if (accessToken) {
                    if (tokenValid(accessToken)) {
                        console.log("토큰 있음");
                        try {
                            const response = await fetch(`http://${homeUrl}:8080/login/kakao`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    accessToken: accessToken
                                })
                            });
                            const data = await response.json();
                            console.log("dfehu" + data);
                            setUserInfo(data.id, data.userAuth, data.name, data.email);
                            /* setUserId(data.id);
                            setAuth(data.userAuth); */
                            setLogin(true);
                            console.log("userId :" + userId);
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

        fetchData();
    }, []); // accessToken을 의존성 배열에 추가


    const loginHandler = async () => {
        const loginBtn = login? "LogOut" : "LogIn";
        if (loginBtn === "LogOut") {
            try {
                console.log(AsyncStorage);
                await AsyncStorage.removeItem("todayId");
                setLogin(false);
                console.log("고구마" + AsyncStorage);
                navigation.navigate("홈");
            } catch (error) {
                console.log("Error removing item from AsyncStorage:", error);
            }
        }
    };



    return(
            <>

                <View style={styles.container}>

                    <TouchableOpacity style={{width:300, height:300, backgroundColor:'white'}} onPress={openKakaoAuth}>
                        {/* 이미지를 보여주기 위해 Image 컴포넌트를 사용합니다. */}
                        <Image source={kakao} />

                        <Text>카카오</Text>
                    </TouchableOpacity>
                    {login && (
                        <TouchableOpacity style={{ backgroundColor: '#008BDA', padding: 10, borderRadius: 5 }} onPress={loginHandler}>
                            <Text style={{ color: 'white' }}>LogOut</Text>
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
        paddingTop:100
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
