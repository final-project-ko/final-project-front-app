import {Image, ScrollView, StatusBar, StyleSheet, Text, View, Linking, Button} from "react-native";
import SwipeButtons from "../../chaehyeon/components/SwipeableButton";
import React from "react";

const DetailNews = ({ route })=>{

    const {article, businessArticles} = route.params;

    const openUrl = () =>{
        Linking.openURL(article.url);
    }

    return(
        <>
            <StatusBar />
            <View style={styles.container}>

                <View style={styles.content}>
                    <Image source={{uri: article.image}} style={styles.image}/>

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

                <View>
                    <Text>더 자세한 소식이 궁금하다면?</Text>
                    <SwipeButtons message="오늘의 뉴스 일기" backgroundSource={require('../../assets/SwipeBar_1loop.gif')} widthsize={320} onPress={openUrl}/>
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
        height:'70%',
        width:'90%',
        backgroundColor:'rgba(50,50,54, 1)',
        borderRadius: 20,
        marginRight: 10,
        alignItems:'center',

    },
    image:{
        width:'90%',
        height:'40%',
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
    }
})