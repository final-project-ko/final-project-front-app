import {useEffect, useState} from "react";
import {Alert, Button, ImageBackground, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import { TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";


const Weather = () =>{
    const [isLoading , setIsLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState('');
    const [temp, setTemp] = useState('');
    const [summary, setSummary] = useState('');
    const [min, setMin] = useState('');
    const [error, setError] = useState(false);


    const [selected, setSelected] = useState("");

    const snowImg = require('../../../assets/snow.jpeg');
    const rainImg = require('../../../assets/rain.jpg');
    const clearImg = require('../../../assets/sunny.jpg');
    const cloudsImg = require('../../../assets/clouds.jpg');

    const defaultImg = require('../../../assets/sunny.jpg');

    // const apikey = Config.API_KEY;

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

                    if(mounted) {
                        let summary = response.data.daily[0].weather[0].description;
                        let main = response.data.daily[0].weather[0].main;
                        let temp = response.data.daily[0].temp.day;
                        // let minTemp =resWeather.data.min;

                        setCurrentWeather(main);
                        setTemp(temp);
                        setSummary(summary);
                        // setMin(minTemp);
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
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("DetailWeather")}>
                <ImageBackground style={styles.picture}  imageStyle={styles.imgWrapper} source={selected}>
                    {isLoading || error
                        ? (<Text> Waiting.. </Text>)
                        : (
                            <>
                                <Text> {summary} </Text>
                                <View style={styles.weather}>
                                        {/*<Text> {currentWeather} </Text>*/}
                                        <Text style={styles.tempNum}> {Math.round(temp)} </Text>
                                        <Text style={styles.temp}>°C |°F</Text>
                                </View>
                            </>

                        )
                    }
                </ImageBackground>
            </TouchableOpacity>
    );
};

export default Weather;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 170,
        borderRadius: 15,
        alignItems:'center'
    },
    picture:{
        alignItems:'center',
        justifyContent: 'center',
        width: '90%',
        height: 170,
        position: 'absolute',
    },
    tempNum: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    temp: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imgWrapper: {
        width:'100%',
        height:'100%',
        borderRadius: 20
    },
    weather:{
        alignItems:'center'
    }
})
