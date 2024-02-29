import {useEffect, useState} from "react";
import {Alert, Button, ImageBackground, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity } from 'react-native';
// import {Tab} from "react-native-elements";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useNavigation} from "@react-navigation/native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


const Fivedays = () =>{
    const [isLoading , setIsLoading] = useState(true);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [status, setStatus] = useState('');
    const [pop, setPop] = useState(0.0);

    const [min2, setMin2] = useState('');
    const [max2, setMax2] = useState('');
    const [status2, setStatus2] = useState('');
    const [pop2, setPop2] = useState(0.0);

    const [min3, setMin3] = useState('');
    const [max3, setMax3] = useState('');
    const [status3, setStatus3] = useState('');
    const [pop3, setPop3] = useState(0.0);
    const [date3, setDate3] = useState('');

    const [min4, setMin4] = useState('');
    const [max4, setMax4] = useState('');
    const [status4, setStatus4] = useState('');
    const [pop4, setPop4] = useState(0.0);
    const [date4, setDate4] = useState('');

    const [min5, setMin5] = useState('');
    const [max5, setMax5] = useState('');
    const [status5, setStatus5] = useState('');
    const [pop5, setPop5] = useState(0.0);
    const [date5, setDate5] = useState('');

    const [min6, setMin6] = useState('');
    const [max6, setMax6] = useState('');
    const [status6, setStatus6] = useState('');
    const [pop6, setPop6] = useState(0.0);
    const [date6, setDate6] = useState('');





    const [error, setError] = useState(false);



    // const Tab = createBottomTabNavigator();
    const API_KEY = "5c109176cb7f758390478b3cbdcc8d63";
    const latitude = 38;
    const longitude = 127;
    const navigation = useNavigation();


    useEffect(() => {
        let mounted = true;
        const getWeather = async (latitude, longitude) => {
            try {
                const resWeather = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                ).then(response => {
                    console.log("-")
                    console.log(response.data.list[0].main.temp_min)
                    console.log(response.data.list[0].dt_txt);
                    console.log(response.data.list[7].dt_txt);
                    console.log(response.data.list[5].main.temp_max);
                    console.log(response.data.list[21].dt_txt.split(" ")[0]);

                    console.log("--")
                    if(mounted) {
                        // let summary = response.data.list[0].main;
                        //
                        setMin(response.data.list[0].main.temp_min);
                        setMax(response.data.list[0].main.temp_max);
                        setStatus(response.data.list[0].weather[0].main);
                        setPop(response.data.list[0].pop);

                        setMin2(response.data.list[7].main.temp_min);
                        setMax2(response.data.list[7].main.temp_max);
                        setStatus2(response.data.list[7].weather[0].main);
                        setPop2(response.data.list[8].pop);

                        setMin3(response.data.list[13].main.temp_min);
                        setMax3(response.data.list[13].main.temp_max);
                        setStatus3(response.data.list[13].weather[0].main);
                        setPop3(response.data.list[13].pop);
                        setDate3(response.data.list[13].dt_txt.substring(5, 10).replace("-","."));

                        setMin4(response.data.list[21].main.temp_min);
                        setMax4(response.data.list[21].main.temp_max);
                        setStatus4(response.data.list[21].weather[0].main);
                        setPop4(response.data.list[21].pop);
                        setDate4(response.data.list[21].dt_txt.substring(5, 10).replace("-","."));

                        setMin5(response.data.list[29].main.temp_min);
                        setMax5(response.data.list[29].main.temp_max);
                        setStatus5(response.data.list[29].weather[0].main);
                        setPop5(response.data.list[29].pop);
                        setDate5(response.data.list[29].dt_txt.substring(5, 10).replace("-","."));

                        setMin6(response.data.list[37].main.temp_min);
                        setMax6(response.data.list[37].main.temp_max);
                        setStatus6(response.data.list[37].weather[0].main);
                        setPop6(response.data.list[37].pop);
                        setDate6(response.data.list[37].dt_txt.substring(5, 10).replace("-","."));
                        // setIsLoading(false);

                    }
                });


            } catch (error) {
                Alert.alert("날씨 정보를 읽어올 수 없습니다.")
                setError(true);
                setIsLoading(false);
            }

        };

        getWeather(latitude, longitude);

        return()=>{
            mounted = false
        }

    }, []);

    return (
        <>

                            <View style={styles.inContainer}>
                                    <View style={{height: '15%',width:'100%' ,flexDirection:'row',   justifyContent: 'space-between',borderBottomWidth: 2, borderBottomColor: 'grey'  }}>
                                        <Text style={{fontSize:14, fontWeight:'bold', color:'white'}}> 오늘 </Text>
                                        <Text style={{fontSize:14, fontWeight:'bold',color: 'rgba(39, 145, 205, 1)' }}> {pop}%
                                            {status === "Clouds" && <Icon name="cloudy-outline" color='white'/>}
                                            {status === "Clear" && <Icon name="sunny-outline" color='white'/>}
                                            {status === "Snow" && <Icon name="snow-outline" color='white'/>}
                                            {status === "Rain" && <Icon name="rainy-outline" color='white'/>}
                                            {status === "Drizzle" && <Icon name="rainy-outline" color='white'/>}
                                            {status === "Thunderstorm" && <Icon name="thunderstorm-outline" color='white'/>}
                                        </Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{ color: 'rgba(39, 145, 205, 1)' }}>
                                                {Math.round(min)}°/
                                            </Text>
                                            <Text style={{ color: 'rgba(241,112,34,1)' }}>
                                                {Math.round(max)}°
                                            </Text>
                                        </View>
                                    </View>


                                <View style={{height: '15%',width:'100%' ,flexDirection:'row',   justifyContent: 'space-between',borderBottomWidth: 2, borderBottomColor: 'grey'  }}>
                                    <Text style={{fontSize:14, fontWeight:'bold',color:'white'}}> 내일 </Text>
                                    <Text style={{fontSize:14, fontWeight:'bold',color: 'rgba(39, 145, 205, 1)' }}> {pop2}%
                                        {status2 === "Clouds" && <Icon name="cloudy-outline" color='white'/>}
                                        {status2 === "Clear" && <Icon name="sunny-outline" color='white'/>}
                                        {status2 === "Snow" && <Icon name="snow-outline" color='white'/>}
                                        {status2 === "Rain" && <Icon name="rainy-outline" color='white'/>}
                                        {status2 === "Drizzle" && <Icon name="rainy-outline" color='white'/>}
                                        {status2 === "Thunderstorm" && <Icon name="thunderstorm-outline" color='white'/>}
                                    </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{ color: 'rgba(39, 145, 205, 1)' }}>
                                            {Math.round(min2)}°/
                                        </Text>
                                        <Text style={{ color: 'rgba(241,112,34,1)' }}>
                                            {Math.round(max2)}°
                                        </Text>
                                    </View>

                                </View>

                                <View style={{height: '15%',width:'100%' ,flexDirection:'row',   justifyContent: 'space-between',borderBottomWidth: 2, borderBottomColor: 'grey'  }}>
                                    <Text style={{fontSize:14, fontWeight:'bold',color:'white'}}> {date3} </Text>
                                    <Text style={{fontSize:14, fontWeight:'bold',color: 'rgba(39, 145, 205, 1)' }}> {pop3}%
                                        {status3 === "Clouds" && <Icon name="cloudy-outline" color='white'/>}
                                        {status3 === "Clear" && <Icon name="sunny-outline" color='white'/>}
                                        {status3 === "Snow" && <Icon name="snow-outline" color='white'/>}
                                        {status3 === "Rain" && <Icon name="rainy-outline" color='white'/>}
                                        {status3 === "Drizzle" && <Icon name="rainy-outline" color='white'/>}
                                        {status3 === "Thunderstorm" && <Icon name="thunderstorm-outline" color='white'/>}
                                    </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{ color: 'rgba(39, 145, 205, 1)' }}>
                                            {Math.round(min3)}°/
                                        </Text>
                                        <Text style={{ color: 'rgba(241,112,34,1)' }}>
                                            {Math.round(max3)}°
                                        </Text>
                                    </View>
                                </View>

                                <View style={{height: '15%',width:'100%' ,flexDirection:'row',   justifyContent: 'space-between',borderBottomWidth: 2, borderBottomColor: 'grey'  }}>
                                    <Text style={{fontSize:14, fontWeight:'bold',color:'white'}}> {date4} </Text>
                                    <Text style={{fontSize:14, fontWeight:'bold',color: 'rgba(39, 145, 205, 1)' }}> {pop4}%
                                        {status4 === "Clouds" && <Icon name="cloudy-outline" color='white'/>}
                                        {status4 === "Clear" && <Icon name="sunny-outline" color='white'/>}
                                        {status4 === "Snow" && <Icon name="snow-outline" color='white'/>}
                                        {status4 === "Rain" && <Icon name="rainy-outline" color='white'/>}
                                        {status4 === "Drizzle" && <Icon name="rainy-outline" color='white'/>}
                                        {status4 === "Thunderstorm" && <Icon name="thunderstorm-outline" color='white'/>}
                                    </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{ color: 'rgba(39, 145, 205, 1)' }}>
                                            {Math.round(min4)}°/
                                        </Text>
                                        <Text style={{ color: 'rgba(241,112,34,1)' }}>
                                            {Math.round(max4)}°
                                        </Text>
                                    </View>
                                </View>

                                <View style={{height: '15%',width:'100%' ,flexDirection:'row',   justifyContent: 'space-between',borderBottomWidth: 2, borderBottomColor: 'grey'  }}>
                                    <Text style={{fontSize:14, fontWeight:'bold',color:'white'}}> {date5} </Text>
                                    <Text style={{fontSize:14, fontWeight:'bold',color: 'rgba(39, 145, 205, 1)' }}> {pop5}%
                                        {status5 === "Clouds" && <Icon name="cloudy-outline" color='white'/>}
                                        {status5 === "Clear" && <Icon name="sunny-outline" color='white'/>}
                                        {status5 === "Snow" && <Icon name="snow-outline" color='white'/>}
                                        {status5 === "Rain" && <Icon name="rainy-outline" color='white'/>}
                                        {status5 === "Drizzle" && <Icon name="rainy-outline" color='white'/>}
                                        {status5 === "Thunderstorm" && <Icon name="thunderstorm-outline" color='white'/>}
                                    </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{ color: 'rgba(39, 145, 205, 1)' }}>
                                            {Math.round(min5)}°/
                                        </Text>
                                        <Text style={{ color: 'rgba(241,112,34,1)' }}>
                                            {Math.round(max5)}°
                                        </Text>
                                    </View>
                                </View>

                                <View style={{height: '15%',width:'100%' ,flexDirection:'row',   justifyContent: 'space-between',borderBottomWidth: 2, borderBottomColor: 'grey'  }}>
                                    <Text style={{fontSize:14, fontWeight:'bold',color:'white'}}> {date6} </Text>
                                    <Text style={{fontSize:14, fontWeight:'bold',color: 'rgba(39, 145, 205, 1)' }}> {pop6}%
                                        {status6 === "Clouds" && <Icon name="cloudy-outline" color='white'/>}
                                        {status6 === "Clear" && <Icon name="sunny-outline" color='white'/>}
                                        {status6 === "Snow" && <Icon name="snow-outline" color='white'/>}
                                        {status6 === "Rain" && <Icon name="rainy-outline" color='white'/>}
                                        {status6 === "Drizzle" && <Icon name="rainy-outline" color='white'/>}
                                        {status6 === "Thunderstorm" && <Icon name="thunderstorm-outline" color='white'/>}
                                    </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{ color: 'rgba(39, 145, 205, 1)' }}>
                                            {Math.round(min6)}°/
                                        </Text>
                                        <Text style={{ color: 'rgba(241,112,34,1)' }}>
                                            {Math.round(max6)}°
                                        </Text>
                                    </View>
                                </View>

                            </View>

        </>
    );
};

export default Fivedays;



const styles = StyleSheet.create({


    inContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column", // 세로 방향으로 배치
        alignItems: "center", // 가운데 정렬
        justifyContent: "space-between",
        backgroundColor: 'rgba(50, 50, 54)',
        padding: '10%'
    }
})
