
import {Image, ScrollView, StatusBar, StyleSheet, Text, View, Linking, Button, TouchableOpacity} from "react-native";
import SwipeButtons from "../../components/button/SwipeableButton";
import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {homeUrl} from "../../../ifconfig/Inet";
import useStore from "../../../store";

const DetailBookmark = ({ route })=>{

    const {bookmarks} = route.params;
    const {userId} = useStore();
    console.log("sdsd"+bookmarks.title);





    return(
        <>
            <StatusBar />
            <View style={styles.container}>

                <View style={styles.content}>
                    <Image source={{uri: bookmarks.image}} style={styles.image}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {bookmarks.title}
                        </Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.desContainer}>
                            <Text style={styles.descriptionFont}>
                                {bookmarks.description}
                            </Text>
                        </View>
                    </ScrollView>

                </View>

                <View style={styles.goUrl}>
                    <Text style={styles.descriptionFont}>더 자세한 소식이 궁금하다면?</Text>
                    <SwipeButtons message="계속 읽어보기" backgroundSource={require('../../../assets/SwipeBar_1loop.gif')} widthsize={320} article={bookmarks.url} />


                </View>

            </View>



        </>

    )
}

export default DetailBookmark;

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