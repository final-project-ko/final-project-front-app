import {Image, ScrollView, StatusBar, StyleSheet, Text, View, Linking, Button, TouchableOpacity} from "react-native";
import SwipeButtons from "../../components/button/SwipeableButton";
import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {homeUrl} from "../../../ifconfig/Inet";
import useStore from "../../../store";

const DetailNews = ({ route })=>{

    const {article} = route.params;
    const {userId} = useStore();
    console.log("sdsd"+article.code);



    const [isBookmarked, setIsBookmarked] = useState(false);

    const handlePress = async () => {
        if (isBookmarked) {
            // 북마크가 이미 등록되어 있는 경우
            // 북마크를 삭제하는 로직을 수행
            setIsBookmarked(false);
            // 여기에 북마크를 삭제하는 API 호출 등의 로직을 추가할 수 있습니다.
        } else {
            // 북마크가 등록되어 있지 않은 경우
            // 북마크를 등록하는 로직을 수행
            await registBookmark();
            setIsBookmarked(true);
        }
    };


    const registBookmark = async () =>{

        try {
            const response = await fetch(`http://${homeUrl}:8080/api/bookmark/regist`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newsCode: article.code,
                    userId: userId,
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    image: article.image,


                }),
            }).then(response =>response.json())
                .then(alert("등록 완료"))
        } catch (error){
            alert("에러 발생")
        }
    };



    return(
        <>
            <StatusBar />
            <View style={styles.container}>

                <View style={styles.content}>
                    <Image source={{uri: article.image}} style={styles.image}/>
                    <TouchableOpacity
                        onPress={() => {handlePress()}}
                    >
                        <Ionicons name="heart-outline" size={30} color={isBookmarked ? 'red' : "black"}/>
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {article.title}
                        </Text>

                        <Text style={styles.dateFont}>
                            {article.date}
                        </Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.desContainer}>
                            <Text style={styles.descriptionFont}>
                                {article.description}
                            </Text>
                        </View>
                    </ScrollView>

                </View>

                <View style={styles.goUrl}>
                    <Text style={styles.descriptionFont}>더 자세한 소식이 궁금하다면?</Text>
                    <SwipeButtons message="계속 읽어보기" backgroundSource={require('../../../assets/SwipeBar_1loop.gif')} widthsize={320} article={article.url} />


                </View>

            </View>



        </>

    )
}

export default DetailNews;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    titleContainer:{
        width:'90%',
        height:'20%',
        borderBottomWidth: 2,
        borderTopWidth:2,
        borderColor:'grey',
        marginTop: '5%',
        padding:'5%',
        justifyContent:'space-between'
    },
    content:{
        height:'60%',
        width:'90%',
        backgroundColor:'rgba(50,50,54, 1)',
        borderRadius: 20,
        marginRight: 10,
        alignItems:'center',

    },
    image:{
        width:'90%',
        height:'50%',
        marginTop:'5%',
        borderRadius:20
    },
    articleText:{
        fontSize:17,
        fontWeight:'bold',
        color:'rgba(74,185,248,1)',
    },
    dateFont:{
        fontSize:12,
        color:'grey'

    },
    descriptionFont:{
        fontSize:14,
        color:'white'
    },
    desContainer:{
        width:'90%',
        marginTop:'5%'
    },
    goUrl:{
        height:'12%',
        width:'90%',
        alignItems:'center',
        marginTop:'10%',
        justifyContent:'space-between'
    }
})