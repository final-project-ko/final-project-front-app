import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Ionicons } from '@expo/vector-icons';
import { dataString, dataString2, dataString3, dataString4, dataString5 } from './shortnews';
import {homeUrl} from "../../../ifconfig/Inet";

export default function Screen() {

    const navigation = useNavigation();
    const currentDate = new Date();
    const formattedDate = ` ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일, 오늘은?`;

    const [summary, setSummary] = useState({});

    useEffect(  () => {
        const findSummaryNews = () => {
            fetch(`http://${homeUrl}:8080/api/AINews/summaryNews/${1}`)
                .then(r => r.json())
                .then(data => {
                    setSummary(data);
                })
                .catch(error => console.log(error));
        };

        findSummaryNews();
    }, []);


    return (


        <View style={styles.container}>
            {/*<Swiper>*/}

                {/* ===== 1번 쇼츠 */}


                <View style={[styles.slideContainer, styles.slide1]}>
                    {/* 내용 */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {formattedDate}
                        </Text>

                        <View style={styles.desContainer}>
                            <Text style={styles.descriptionFont}>
                                {summary.summaryNews1}
                            </Text>
                        </View>
                    </View>

                    {/* 버튼 */}
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('BottomNavigator')}>
                        <View style={styles.closeButton}>
                            <Ionicons name='close' size={27} color="#4AB9F8" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>




                {/* ===== 2번 쇼츠 */}


                <View style={[styles.slideContainer, styles.slide2]}>
                    {/* 내용 */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {formattedDate}
                        </Text>

                        <View style={styles.desContainer}>
                            <Text style={styles.descriptionFont}>
                                {dataString2}
                            </Text>
                        </View>
                    </View>

                    {/* 버튼 */}
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('BottomNavigator')}>
                        <View style={styles.closeButton}>
                            <Ionicons name='close' size={27} color="#4AB9F8" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>




                {/* ===== 3번 쇼츠 */}


                <View style={[styles.slideContainer, styles.slide3]}>
                    {/* 내용 */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {formattedDate}
                        </Text>

                        <View style={styles.desContainer}>
                            <Text style={styles.descriptionFont}>
                                {dataString3}
                            </Text>
                        </View>
                    </View>

                    {/* 버튼 */}
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('BottomNavigator')}>
                        <View style={styles.closeButton}>
                            <Ionicons name='close' size={27} color="#4AB9F8" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>



                {/* ===== 4번 쇼츠 */}


                <View style={[styles.slideContainer, styles.slide4]}>
                    {/* 내용 */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {formattedDate}
                        </Text>

                        <View style={styles.desContainer}>
                            <Text style={styles.descriptionFont}>
                                {dataString4}
                            </Text>
                        </View>
                    </View>

                    {/* 버튼 */}
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('BottomNavigator')}>
                        <View style={styles.closeButton}>
                            <Ionicons name='close' size={27} color="#4AB9F8" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>



                {/* ===== 5번 쇼츠 */}


                <View style={[styles.slideContainer, styles.slide5]}>
                    {/* 내용 */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {formattedDate}
                        </Text>

                        <View style={styles.desContainer}>
                            <Text style={styles.descriptionFont}>
                                {dataString5}
                            </Text>
                        </View>
                    </View>

                    {/* 버튼 */}
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('BottomNavigator')}>
                        <View style={styles.closeButton}>
                            <Ionicons name='close' size={27} color="#4AB9F8" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            {/*</Swiper>*/}
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222326'
    },
    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide1: {
        backgroundColor: '#323236',
    },
    slide2: {
        backgroundColor: '#222326',
    },
    slide3: {
        backgroundColor: '#323236',
    },
    slide4: {
        backgroundColor: '#222326',
    },
    slide5: {
        backgroundColor: '#323236',
    },
    closeButton: {
        position: 'absolute',
        top: 60,
        right: 30,
        backgroundColor: 'transparent',
    },
    titleContainer: {
        width: '96%',
        height: 'auto',
        borderColor: 'grey',
        justifyContent: 'space-between',
        paddingTop: '5%',
        paddingBottom: '5%',
        marginTop: 30,
        marginRight: 'auto',
        marginBottom: 10,
        marginLeft: 'auto',
        alignSelf: 'center',
    },
    articleText:{
        marginLeft: 10,
        margin: 5,
        fontSize:20,
        fontWeight:'bold',
        color:'rgba(74,185,248,1)',

    },
    descriptionFont:{
        margin: 20,
        fontSize:16,
        color:'white',
        // fontWeight:'bold',
        // borderBottomWidth: 2,
        borderTopWidth:2,
        borderColor:'grey',
    }
});