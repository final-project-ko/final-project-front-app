import {Button, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import React, {useMemo, useRef, useState} from "react";
import useStore from "../../../../store";
// import * as PropTypes from "prop-types";
// import ReactQuill from 'react-quill';
import {homeUrl} from "../../../../ifconfig/Inet";


const Callcenter = () => {


    const navigation = useNavigation();

    const { userId, auth, setUserInfo } = useStore();

    // 새로운 문의사항을 작성하기 위한 상태
    const [newInquiry, setNewInquiry] = useState("");

    const [title,setTitle] = useState("");

    const titleInputRef = useRef(null);
    const inquiryInputRef = useRef(null);


    const handleBackgroundPress = () => {
        // 터치한 위치가 TextInput 영역 내에 있는지 확인하고 포커스를 잃도록 하는 기능
        if (titleInputRef.current && titleInputRef.current.isFocused()) {
            titleInputRef.current.blur();
        }
        if (inquiryInputRef.current && inquiryInputRef.current.isFocused()) {
            inquiryInputRef.current.blur();
        }
        // 키보드를 감춥니다.
        Keyboard.dismiss();
    };





    // 문의사항을 서버에 제출하는 함수
    const submitInquiry = async () => {

        try {
            const response = await fetch(`http://${homeUrl}:8080/api/qna/insertInquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title:title,
                    id:userId,
                    text: newInquiry
                }),
            }).then(response => response.json())
                .then(alert("등록 완료")).then(setTitle(""),setNewInquiry(""))

        } catch (error) {
            alert("에러 발생")
        }
    };


    return(
<>
        <TouchableOpacity style={styles.container} onPress={handleBackgroundPress} activeOpacity={1}>

            <View style={styles.suggest}>
                <View style={styles.memberName}>
                    <Text style={{color:'rgba(65,174,236,1)', fontSize:16}}>고객 센터</Text>
                </View>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between", height:'20%', alignItems:'center', }}>

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

            <View style={styles.detailCall}>
                <View style={{   borderBottomWidth:7, borderColor:'rgba(34,35,38, 0.6)',height:60 , marginBottom: 30}}>
                    <Text style={{color:'white', fontSize:20}}>1:1 문의하기</Text>
                </View>

                <View>
                    <Text style={{color:'rgba(65,174,236,1)', fontSize:15, fontWeight:'bold'}}>제목</Text>
                    <TextInput
                        style={{borderWidth:1, borderColor:'grey', borderRadius:5, marginTop:10, height: 30, color:'white'}}
                        onChangeText={setTitle}
                        value={title}
                        placeholder="제목을 입력하세요"
                    />
                    <Text style={{color:'rgba(65,174,236,1)', fontSize:15, fontWeight:'bold',marginTop:10}}>내용</Text>

                    <ScrollView style={{borderWidth:1, borderColor:'grey',height:150, borderRadius:5, marginTop:10}}>
                        <TextInput
                            style={{ color:'white'}}
                            onChangeText={setNewInquiry}
                            value={newInquiry}
                            placeholder="문의 내용을 입력하세요"
                            multiline={true}
                        />
                    </ScrollView>

                    <View style={{marginTop:20}}>
                        <Button title="제출" onPress={submitInquiry} />
                    </View>
                </View>

            </View>

        </TouchableOpacity>




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

export default Callcenter;



const styles = StyleSheet.create({
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
    detailCall:{
        backgroundColor: 'rgba(50,50,54, 1)',
        width:'100%',
        height:'auto',
        marginTop:'10%',
        borderRadius:20,
        padding:'5%'
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