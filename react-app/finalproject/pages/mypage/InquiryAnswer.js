import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView} from "react-native";
import useStore from "../../../store";
import HTML from 'react-native-render-html';
import {homeUrl} from "../../../ifconfig/Inet";
import {useIsFocused} from "@react-navigation/native";

const InquiryAnswer = () => {
    const [articles, setArticles] = useState([]);
    const { userId } = useStore();
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){
            const fetchArticles = async () => {
                try {
                    const response = await fetch(`http://${homeUrl}:8080/api/qna/findInquiry/${userId}`);
                    const data = await response.json();
                    setArticles(data);
                } catch (error) {
                    console.log("Error fetching data", error);
                }
            };
            fetchArticles();
        }

    }, [isFocused]);


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViews}>
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <>
                            <Text style={{color:'grey'}}>{index+1}번 문의</Text>
                            <View key={index} style={styles.inquiryOne}>

                                <View style={{marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:17, fontWeight:'bold'}}>{article.inquiryTitle}</Text>
                                    <Text style={{fontSize:11,color:'grey'}}>{article.inquiryDate}</Text>
                                </View>

                                <View style={{ marginBottom:10}}>
                                    <HTML source={{ html: article.inquiryContent }} />
                                </View>

                                <View style={styles.answer}>
                                    {article.replyText ? (
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize:13, color:'grey'}}>운영진 : </Text>
                                                <Text>{article.replyText}</Text>
                                            </View>

                                    ) : (
                                        <Text style={{color:'grey'}}>답변 기다리는 중...</Text>
                                    )}
                                </View>

                            </View>
                        </>

                    ))
                ) : (
                    <Text>No articles found</Text>
                )}
            </ScrollView>
        </View>
    );

}


export default InquiryAnswer;



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
        alignItems:"center",
        justifyContent:"center",
    },
    scrollViews:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(50,50,54, 1)',
        borderRadius: 20,
        padding:'5%',
    },
    inquiryOne:{
        backgroundColor:'rgba(173,209,230, 1)',
        borderColor:'grey',
        marginBottom:'5%',
        marginTop:5,
        borderRadius:10,
        padding:10
    },
    answer:{
        backgroundColor:'white',
        borderRadius:5,
        padding:10

    }

})