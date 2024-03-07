import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";


const Policy = () => {

    const navigation = useNavigation();

    return(

        <>
        <View style={styles.container}>

            <View style={styles.suggest}>
                <View style={styles.memberName}>
                    <Text style={{color:'rgba(65,174,236,1)', fontSize:16}}>약관 및 정책</Text>
                </View>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between", height:'20%', alignItems:'center'}}>

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

            <ScrollView style={styles.detailPolicy}>
                <View style={{   borderBottomWidth:7, borderColor:'rgba(34,35,38, 0.6)',height:60 , marginBottom: 30}}>
                    <Text style={{color:'white', fontSize:20}}>이용 약관</Text>
                </View>
                <Text style={{color:'white', fontSize:12}}>
                    제 1 장 총칙{'\n\n'}
                    제 1 조 (목적){'\n'}
                    본 약관은 팀 코쟁이가 운영하는 웹 사이트의 제반 서비스의 이용조건 및 절차에 관한 사항 및 기타 필요한 사항을 규정함을 목적으로 한다.{'\n\n'}
                    제 2 조 (용어의 정의){'\n'}
                    본 약관에서 사용하는 용어는 다음과 같이 정의한다.{'\n'}
                    ①회원 : 기본 회원 정보를 입력하였고, 회사와 서비스 이용계약을 체결하여 아이디를 부여받은 개인{'\n'}
                    ②아이디(ID) : 회원식별과 회원의 서비스 이용을 위해 회원이 선정하고 회사가 승인하는 문자와 숫자의 조합{'\n'}
                    ③비밀번호(Password) : 회원이 통신상의 자신의 비밀을 보호하기 위해 선정한 문자와 숫자의 조합{'\n'}
                    ④해지 : 회사 또는 회원에 의한 이용계약의 종료{'\n\n'}
                    제 3 조 (약관의 공시 및 효력과 변경){'\n'}
                    ①본 약관은 회원가입 화면에 게시하여 공시하며 회사는 사정변경 및 영업상 중요한 사유가 있을 경우 약관을 변경할 수 있으며 변경된 약관은 공지사항을 통해 공시한다.{'\n'}
                    ②본 약관 및 차후 회사사정에 따라 변경된 약관은 이용자에게 공시함으로써 효력을 발생한다.{'\n\n'}
                    제 4 조 (약관 외 준칙){'\n'}
                    본 약관에 명시되지 않은 사항이 전기통신기본법, 전기통신사업법, 정보통신촉진법, ‘전자상거래등에서의 소비자 보호에 관한 법률’, ‘약관의 규제에관한법률’, ‘전자거래기본법’, ‘전자서명법’, ‘정보통신망 이용촉진등에 관한 법률’, ‘소비자보호법’ 등 기타 관계 법령에 규정되어 있을 경우에는 그 규정을 따르도록 한다.{'\n\n'}
                    제 2 장 이용계약{'\n\n'}
                    제 5 조 (이용신청){'\n'}
                    ①이용신청자가 회원가입 안내에서 본 약관과 개인정보보호정책에 동의하고 등록절차(회사의 소정 양식의 가입 신청서 작성)를 거쳐 '확인' 버튼을 누르면 이용신청을 할 수 있다.{'\n'}
                    ②이용신청자는 반드시 실명과 실제 정보를 사용해야 하며 1개의 생년월일에 대하여 1건의 이용신청을 할 수 있다.{'\n'}
                    ③실명이나 실제 정보를 입력하지 않은 이용자는 법적인 보호를 받을 수 없으며, 서비스 이용에 제한을 받을 수 있다.{'\n\n'}
                    제 6 조 (이용신청의 승낙){'\n'}
                    ①회사는 제5조에 따른 이용신청자에 대하여 제2항 및 제3항의 경우를 예외로 하여 서비스 이용을 승낙한다.{'\n'}
                    ②회사는 아래 사항에 해당하는 경우에 그 제한사유가 해소될 때까지 승낙을 유보할 수 있다.{'\n'}
                    가. 서비스 관련 설비에 여유가 없는 경우{'\n'}
                    나. 기술상 지장이 있는 경우{'\n'}
                    다. 기타 회사 사정상 필요하다고 인정되는 경우{'\n'}
                    ③회사는 아래 사항에 해당하는 경우에 승낙을 하지 않을 수 있다.{'\n'}
                    가. 다른 사람의 명의를 사용하여 신청한 경우{'\n'}
                    나. 이용자 정보를 허위로 기재하여 신청한 경우{'\n'}
                    다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우{'\n'}
                    라. 기타 회사가 정한 이용신청 요건이 미비한 경우{'\n'}
                </Text>

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

export default Policy;


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
    detailPolicy:{
        backgroundColor: 'rgba(50,50,54, 1)',
        width:'100%',
        height:'50%',
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