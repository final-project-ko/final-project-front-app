import {Image, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";


const Login = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    const kakao = require('../../../assets/kakao1.png');
    const openKakaoAuth = () => {
        Linking.openURL(KAKAO_AUTH_URL);
    };


    return(
            <>

                <View style={styles.container}>

                    <TouchableOpacity style={{width:300, height:300, backgroundColor:'white'}} onPress={openKakaoAuth}>
                        {/* 이미지를 보여주기 위해 Image 컴포넌트를 사용합니다. */}
                        <Image source={kakao} />

                        <Text>카카오</Text>
                    </TouchableOpacity>
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