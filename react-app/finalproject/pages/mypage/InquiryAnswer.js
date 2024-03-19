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
                        <View key={index} style={styles.inquiryOne}>

                            <View style={{borderBottomWidth: 1, borderColor:'grey', marginBottom:10}}>
                                <Text>{article.inquiryTitle}</Text>
                            </View>

                            <View style={{borderBottomWidth: 1, borderColor:'grey', marginBottom:10}}>
                                <HTML source={{ html: article.inquiryContent }} />
                            </View>

                            <View>
                                {article.replyText ? (
                                    <Text>{`답변 : ${article.replyText}`}</Text>
                                ) : (
                                    <Text>미작성</Text>
                                )}
                            </View>

                        </View>
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
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'grey',
        marginBottom:'5%',
        borderRadius:5
    }

})