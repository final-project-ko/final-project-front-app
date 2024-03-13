import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {homeUrl} from "../../../../ifconfig/Inet";
import HTML from 'react-native-render-html';

const Notice = () => {

    const navigation = useNavigation();


    const [visibleContentIndex, setVisibleContentIndex] = useState(-1);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const noticeList = async () => {
            await fetch(`http://${homeUrl}:8080/api/notice/allNotice`, {
                method: "GET",
            }).then(res => res.json())
                .then(data => {
                    setArticles(data);

                })
                .catch(error => {
                    console.log(error);
                });

        };
        noticeList();
    },[]);

    const onClickHandler = (index) => {
        if (visibleContentIndex === index) {
            setVisibleContentIndex(-1);
        } else {
            setVisibleContentIndex(index);
        }
    };


    return(

        <>

        <View style={styles.container}>

            <View style={styles.suggest}>
                <View style={styles.memberName}>
                    <Text style={{color:'rgba(65,174,236,1)', fontSize:16}}>공지사항</Text>
                </View>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between", height:'20%', alignItems:'center',}}>

                    <TouchableOpacity style={{flexDirection:'row' , width: '33%' ,  gap: 10 }} onPress={() => navigation.navigate("Callcenter")}>
                        <Ionicons name="ellipse-outline" size={15} color={'white'}/>
                        <Text style={{color:'white', }}>고객센터</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{flexDirection:'row' , width: '51%' ,  gap: 10 }} onPress={() => navigation.navigate("Questions")}>
                        <Ionicons name="ellipse-outline" size={15} color={'white'}/>
                        <Text style={{color:'white', }}>자주 묻는 질문</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between", height:'30%', alignItems:'center'}}>



                    <TouchableOpacity style={{flexDirection:'row' , width: '33%' ,  gap: 10 }} onPress={() => navigation.navigate("Notice")}>
                        <Ionicons name="ellipse-outline" size={15} color={'white'}/>
                        <Text style={{color:'white', }}>공지사항</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{flexDirection:'row' , width: '51%' ,  gap: 10 }} onPress={() => navigation.navigate("Policy")}>
                        <Ionicons name="ellipse-outline" size={15} color={'white'}/>
                        <Text style={{color:'white', }}>약관 및 정책</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <ScrollView style={styles.detailNotice} >
                <View style={{   borderBottomWidth:7, borderColor:'rgba(34,35,38, 0.6)',height:60 , marginBottom: 30}}>
                    <Text style={{color:'white', fontSize:20}}>공지</Text>
                </View>


                {articles.map((article, index) => (
                    <View style={styles.noticeItem} key={index}>
                        <TouchableOpacity
                            onPress={() => onClickHandler(index)} style={{justifyContent: 'space-between'}}
                        >
                            <View style={{flexDirection:'row'}}>
                                {visibleContentIndex === index ? (
                                    <Ionicons name="caret-down-outline" color={'white'} size={25} />
                                    ): (
                                    <Ionicons name="caret-forward-outline" color={'white'} size={25} />
                                    )}
                                <Text style={styles.noticeTitle}>
                                    {article.notice_title}
                                </Text>
                            </View>

                            {visibleContentIndex === index && (
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:'5%'}}>
                                    <HTML  tagsStyles={tagsStyles} source={{ html: article.notice_content }} />
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                ))}



            </ScrollView>

        </View>


            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.home} onPress={() => navigation.navigate("홈")}>
                    <Ionicons name="home" color={'grey'} size={30} />
                    <Text style={{color:'grey', fontSize: 12}}>홈</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.krNews} onPress={() => navigation.navigate("국내 뉴스")}>
                    <Ionicons name="newspaper-outline" color={'grey'} size={30} />
                    <Text style={{color:'grey', fontSize: 12}}>국내 누스</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.glNews} onPress={() => navigation.navigate("해외 뉴스")}>
                    <Ionicons name="globe-outline" color={'grey'} size={30} />
                    <Text style={{color:'grey', fontSize: 12}}>해외 뉴스</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.mypage} onPress={() => navigation.navigate("마이 페이지")}>
                    <Ionicons name="person-circle-outline" color={'grey'} size={30} />
                    <Text style={{color:'grey', fontSize: 12}}>마이 페이지</Text>
                </TouchableOpacity>

            </View>
            </>
    )

}

export default Notice;

const styles = StyleSheet.create({

    noticeTitle:{
        color:'white',
        fontSize:17
    },
    noticeItem:{
        height:'auto',
        marginBottom:'10%',

        // flex:1
    },
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '90%',
        padding: '5%'
    },


    suggest: {
        height: '25%',
        width: '100%', // Adjust the width as per your requirement
        backgroundColor: 'rgba(50,50,54, 1)',
        borderRadius: 20,
        alignItems: 'center',
        marginTop:'20%'
    },
    memberName:{
        width:'100%',
        height:'25%',
        borderBottomWidth:7,
        borderColor:'rgba(34,35,38, 0.6)',
        justifyContent:'center',
        paddingLeft:'5%',
        marginBottom:'7%'
    },
    detailNotice:{
        backgroundColor: 'rgba(50,50,54, 1)',
        width:'100%',
        height:'100%',
        marginTop:'5%',
        borderRadius:20,
        padding:'5%',
    },
    bottomTab:{
        backgroundColor: 'rgba(50,50,54, 1)',
        height: '10%',
        width:'100%',
        flexDirection:"row",
        borderTopWidth:2,
        borderColor:'grey',
        justifyContent:'space-between',
        paddingTop:'2%'
    },
    home:{
        width:'25%',
        alignItems:'center'
    },
    krNews:{
        width:'25%',
        alignItems:'center'
    },
    glNews:{
        width:'25%',
        alignItems:'center'
    },
    mypage:{
        width:'25%',
        alignItems:'center'
    }

});

const tagsStyles = {
    p: {
        color: 'white',
        fontSize: 13,
    },
};
