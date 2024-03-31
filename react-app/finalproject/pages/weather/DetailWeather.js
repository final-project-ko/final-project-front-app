import {useEffect, useState} from "react";
import {Alert, Button, ImageBackground, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import { TouchableOpacity } from 'react-native';
// import {Tab} from "react-native-elements";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useNavigation} from "@react-navigation/native";
import Fivedays from "../../components/weatherCompo/fivedays";
import BottomNavigator from "../../components/navigator/BottomNavigator";
import defaultImg from "../../../assets/sunny.jpg";
import snowImg from "../../../assets/snow.jpeg";
import rainImg from "../../../assets/rain.jpg";
import clearImg from "../../../assets/sunny.jpg";
import cloudsImg from "../../../assets/clouds.jpg";


const DetailWeather = () =>{
    const [isLoading , setIsLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState('');
    const [temp, setTemp] = useState('');
    const [summary, setSummary] = useState('');
    const [max, setMax] = useState('');
    const [min, setMin] = useState('');
    const [error, setError] = useState(false);


    const [selected, setSelected] = useState("");

    const snowImg = require('../../../assets/snow.jpeg');
    const rainImg = require('../../../assets/rain.jpg');
    const clearImg = require('../../../assets/sunny.jpg');
    const cloudsImg = require('../../../assets/clouds.jpg');

    const defaultImg = require('../../../assets/sunny.jpg');

    // const Tab = createBottomTabNavigator();
    const API_KEY = process.env.API_KEY;
    const latitude = 38;
    const longitude = 127;

    const navigation = useNavigation();



    useEffect(() => {
        let mounted = true;
        const getWeather = async (latitude, longitude) => {
            try {
                const resWeather = await axios.get(
                    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`
                ).then(response => {
                    // console.log("-")
                    // console.log(response.data.daily[0].temp.day)
                    // console.log("--")
                    if(mounted) {
                        let summary = response.data.daily[0].summary;
                        let main = response.data.daily[0].weather[0].main;
                        let temp = response.data.daily[0].temp.day;
                        let minTemp =response.data.daily[0].temp.min;
                        let maxTemp =response.data.daily[0].temp.max;

                        setCurrentWeather(main);
                        setTemp(temp);
                        setSummary(summary);
                        setMax(maxTemp);
                        setMin(minTemp);
                        setIsLoading(false);

                        let selectedImg = defaultImg;

                        if(currentWeather === "Snow"){
                            selectedImg = snowImg;
                        } else if (currentWeather === "Rain"){
                            selectedImg = rainImg;
                        } else if (currentWeather === "Clear"){
                            selectedImg = clearImg;
                        } else if (currentWeather === "Clouds"){
                            selectedImg = cloudsImg;
                        }

                        setSelected(selectedImg);
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
    <ImageBackground style={styles.container}  imageStyle={styles.imgWrapper} source={selected}>
        {isLoading || error
            ? (<Text> Waiting.. </Text>)
            : (
                <>
                    <View style={styles.topContainer}>
                        <View style={styles.inContainer}>

                            <View style={{width:'50%'}}>
                                <Text style={styles.nowTemp}> {Math.round(temp)}° </Text>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={{fontSize:20, fontWeight:'bold'}}>서울특별시</Text>
                                <Text style={{fontWeight:400}}> {currentWeather} </Text>
                                <Text style={{fontWeight:400}}>최저:<Text style={{color:'blue'}}>{Math.round(min)}°</Text>
                                    최고:<Text style={{color:'red'}}>{Math.round(max)}°</Text>
                                </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.summaryContainer}>
                        <Text style={{fontSize:15, fontWeight:'bold'}}> {summary} </Text>
                    </View>

                    <View style={styles.weekContainer}>
                        <Fivedays/>
                    </View>

                </>

            )
        }
    </ImageBackground>
</>
    );
};

export default DetailWeather;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekContainer:{
        width:'90%',
        height:'40%',
        position:"absolute",
        top:'53%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(50, 50, 54,1)',
        borderRadius: 30
    },
    summaryContainer:{
        width:'90%',
        height:'20%',
        position:"absolute",
        top:'32%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 30
    },
    topContainer: {
        position: "absolute",
        top: "6%",
        width: "90%",
        height: "25%",
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 30,
    },
    inContainer: {
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",
        width:'50%'
    },
    nowTemp: {
        fontSize: 50,
        fontWeight: 'bold'
    }



})

