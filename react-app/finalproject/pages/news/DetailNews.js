import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Linking,
    Button,
    TouchableOpacity,
    TextInput
} from "react-native";
import SwipeButtons from "../../components/button/SwipeableButton";
import React, {useEffect, useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {homeUrl} from "../../../ifconfig/Inet";
import useStore from "../../../store";
import {useNavigation} from "@react-navigation/native";

const DetailNews = ({ route })=>{

    const {article} = route.params;
    const {userId, userEmail} = useStore();
    const navigation = useNavigation();
    console.log("호호"+ article.aidescription);

    const [isBookmarked, setIsBookmarked] = useState(false);

    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [replyToggle, setReplyToggle] = useState([]);
    const [reply, setReply] = useState("");
    const [replyCommentCode, setReplyCommentCode] = useState("");
    const [findReply, setFindReply] = useState([]);

    const userCode = userId;


    const showTransBtn = article.category.startsWith('us');

    const [showTitleButton, setShowTitleButton] = useState(false);


    const handleLanguageToggle = () => {
        setShowTitleButton(!showTitleButton);
    };

    /*====================================================================================================*/

    /* comment input 값 핸들러 */
    const onInputChangeHandler = (text) => {
        setComment(text);
    }

    /* 댓글 등록 */
    const registComment = async () => {
        try {
            const response = await fetch(`http://${homeUrl}:8080/api/comments/regist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newsCode: article.code,
                    userId: userId,
                    email: userEmail,
                    content: comment
                })
            });

            if (response.status === 401) {
                alert('로그인이 필요합니다.');
            } else if (response.status === 402) {
                alert('댓글 내용이 없습니다. 다시 입력해주세요');
            } else if (!response.ok) {
                throw new Error('서버 응답이 실패했습니다.');
            } else {
                console.log('comment submit success : ' + comment);
                alert('댓글이 등록되었습니다.');

                setComment(''); // 댓글 등록 후 input 박스 값 초기화
            }

        } catch (error) {
            console.log('Error submit comment : ', error.message);
        }
    }

    /* 해당 뉴스 댓글 조회*/
    const findCommentList = async () =>{
        try {
            const promise = await fetch(`http://${homeUrl}:8080/api/comments/find/${article.code}`)
                .then(res => res.json())
                .then(data => {
                    setCommentList(data);
                })
        }catch (error){
            console.log("Error fetch data", error);
        }
    }

    useEffect(() => {
        findCommentList();
    }, [article, comment]);



    useEffect(() => {
        if (commentList.length > 0) {
            commentList.forEach(comment => {
                findReplyList(comment.commentCode);
            });
        }
    }, [replyToggle]);

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
    /*====================================================================================================*/
    /* 답글 토글 함수 */
    const toggleReply = (commentCode) => {
        setReplyCommentCode(commentCode);
        setReplyToggle((prevToggle) => ({
            ...prevToggle,
            [commentCode]: !prevToggle[commentCode]
        }));

        setReply((prevInputs) => ({
            ...prevInputs,
            [commentCode]: ''
        }));

        // findReplyList(commentCode);

    }
    /*답글 등록*/
    const onReplyInputChangeHandler = (text, commentCode) => {
        setReply(text);
        setReplyCommentCode(commentCode);
    };

    const registReply = async () => {
        try {
            // 서버로 보낼 답글 데이터
            const response = await fetch(`http://${homeUrl}:8080/api/reply/regist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    commentCode: replyCommentCode,
                    userId: userId,
                    email: userEmail,
                    content: reply,
                }),
            });

            if (response.status === 401) {
                alert('로그인이 필요합니다.');
            } else if (response.status === 402) {
                alert('답글 내용이 없습니다. 다시 입력해주세요');
            } else if (!response.ok) {
                throw new Error('서버 응답이 실패했습니다.');
            } else {
                console.log('reply submit success : ' + reply);
                alert('답글이 등록되었습니다.');
                setReply('');
                findReplyList(replyCommentCode);
            }
        } catch (error) {
            console.log('Error submit reply : ', error.message);
        }
    };

    /* 댓글 별 답글 조회 */
    const findReplyList = async (commentCode) => {
        console.log('comment code: ', commentCode);
        try {
            const promise = await fetch(`http://${homeUrl}:8080/api/reply/find/${commentCode}`)
                .then(response => response.json())
                .then(data => {
                    setFindReply((prevReplies) => ({
                        ...prevReplies,
                        [commentCode]: data.replys
                    }));
                    console.log('findReply :', data)
                })
        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    /*====================================================================================================*/
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
    /*====================================================================================================*/

    const urlPress = (url) => {
        Linking.openURL(url).catch((err) => console.error('링크를 열 수 없습니다.', err));
    };

    return(
        <>
            <StatusBar />

            <View style={styles.container}>
                <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between', paddingBottom:5}}>
                    <View style={{ flexDirection: 'row', paddingLeft: '5%', paddingBottom: 10}}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="chevron-back-outline" size={30} color={"#007AFF"} />
                            <Text style={{ color: '#007AFF', marginLeft: 5}}>뒤로가기</Text>
                        </TouchableOpacity>

                    </View>
                    {showTransBtn&& (
                        <View style={styles.containerToggle}>
                            <TouchableOpacity style={[styles.switch, showTitleButton && styles.switchOn]} onPress={handleLanguageToggle}>
                                <View style={[styles.slider, showTitleButton && styles.sliderOn]} />
                            </TouchableOpacity>
                            <Text style={styles.text}>{showTitleButton ? 'ENG' : 'KOR'}</Text>
                        </View>
                    )}
                </View>

                <View style={styles.content}>


                        <View style={styles.bookmarkPoint}>
                            <TouchableOpacity
                                onPress={() => {handlePress()}} style={{position:'absolute', right:5, top:5}}
                            >
                                <Ionicons name="bookmark-outline" size={25} color={isBookmarked ? 'orange' : "white"}/>
                            </TouchableOpacity>
                        </View>



                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}}   persistentScrollbar={true}>
                    <Image source={{uri: article.image}} style={styles.image}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.articleText}>
                            {article.title}
                        </Text>

                        <Text style={styles.dateFont}>
                            {article.date}
                        </Text>
                    </View>


                        <View style={styles.desContainer}>
                            {showTitleButton? (
                                <Text style={styles.descriptionFont}>
                                    {article.transdescription}
                                </Text>
                            ):(
                                <Text style={styles.descriptionFont}>
                                    {article.aidescription}
                                </Text>
                            )}

                        </View>

                        <View style={{width:'100%',borderBottomWidth:1,borderColor:'white',marginTop:40, marginBottom:20}}>
                            <Text style={{marginBottom:5,color:'white', fontSize:17, fontWeight:'bold'}}>댓글</Text>
                        </View>

                        <View style={{width:'100%', height:'auto'}}>

                            <View>
                                {commentList.map(comment => (
                                    <>
                                        <View style={{flexDirection:'row'}}>
                                            <Ionicons name="return-down-forward-outline" size={20} color={"white"} style={{marginRight:5,color:'rgba(74,185,248,1)'}}/>
                                            <View style={{gap:5}}>
                                                <Text style={{color:'white', fontSize:13, fontWeight:'bold'}}>{comment.email.replace(/@.*/, '')}</Text>
                                                <Text style={{color:'white', fontSize:12}}>{comment.content}</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity
                                            onPress={() => toggleReply(comment.commentCode)}
                                            style={{marginBottom:20,marginTop:5,borderBottomWidth:1, width:60, borderColor:'white'}}
                                        >
                                            <Text style={{ fontSize: 12, color:'grey'}}>
                                                {replyToggle[comment.commentCode] ? '답글 닫기' : '답글 열기'}
                                            </Text>
                                        </TouchableOpacity>

                                        {replyToggle[comment.commentCode] && (
                                            <View>
                                                <View style={{backgroundColor:'grey', borderRadius:5, paddingLeft:20, paddingRight:20}}>
                                                    {Object.values(findReply[comment.commentCode] || []).map((reply, index) => (
                                                        <View key={index} style={{borderBottomWidth:1,borderColor:'white', marginBottom:5, paddingBottom:5}}>
                                                            <Text style={{color:'white', fontSize:12, fontWeight:'bold'}}>{reply.email.replace(/@.*/, '')}</Text>
                                                            <Text style={{color:'white', fontSize:11}}>{reply.content}</Text>
                                                        </View>
                                                    ))}
                                                </View>

                                                <View style={{flexDirection:'row',marginTop:10,marginBottom:30, gap:10}}>
                                                    <TextInput
                                                        style={{borderBottomWidth:1, borderColor:'rgba(255,255,255,0.5)', color:'white'}}
                                                        placeholderTextColor='rgba(255,255,255,0.7)'
                                                        placeholder={userId ? '답글을 입력하세요' : '답글을 작성하려면 로그인 해주세요'}
                                                        value={reply}
                                                        onChangeText={(text) =>
                                                            onReplyInputChangeHandler(text, comment.commentCode)
                                                        }
                                                    />
                                                    <TouchableOpacity
                                                        onPress={registReply}
                                                        style={{borderWidth:1, backgroundColor:'white'}}
                                                    >
                                                        <Text>답글 등록</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        )}
                                    </>
                                ))}
                            </View>

                            <View style={{marginBottom:15,height:40,flexDirection:'row',justifyContent:'space-between', borderWidth:1, borderColor:'rgba(74,185,248,1)', borderRadius:5}}>
                                <TextInput
                                    placeholderTextColor="gray"
                                    style={{color:'white'}}
                                    placeholder={userCode ? '여기에 댓글을 입력하세요' : '댓글을 작성하려면 로그인 해주세요'}
                                    value={comment}
                                    onChangeText={onInputChangeHandler}
                                />
                                <TouchableOpacity onPress={registComment} style={{width: '25%',borderRadius:5, backgroundColor:'rgba(74,185,248,1)', alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{ color:'white'}}>등록하기</Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                    </ScrollView>

                </View>

                <View style={styles.goUrl}>
                    <SwipeButtons message="계속 읽어보기"
                                  backgroundSource={require('../../../assets/SwipeBar_1loop.gif')}
                                  widthsize={320}
                                  Swipesuccessfully={() => urlPress(article.url)}
                    />
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
    bookmarkPoint:{
        width:'100%',
        height:30,
    },
    titleContainer:{
        width:'96%',
        height:'auto',
        borderBottomWidth: 2,
        borderTopWidth:2,
        borderColor:'grey',
        marginTop: '5%',
        justifyContent:'space-between',
        paddingTop:'5%',
        paddingBottom:'5%'
    },
    content:{
        height:'70%',
        width:'90%',
        backgroundColor:'rgba(50,50,54, 1)',
        borderTopLeftRadius: 20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        alignItems:'center',

    },
    image:{
        width:'95%',
        height:200,
        marginTop:10,
        borderRadius:20
    },
    articleText:{
        fontSize:17,
        fontWeight:'bold',
        color:'rgba(74,185,248,1)',
    },
    dateFont:{
        fontSize:12,
        color:'grey',
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
        width:'90%',
        alignItems:'center',
        marginTop:'10%',
        justifyContent:'space-between'
    },
    containerToggle: {
        paddingRight:'5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    switch: {
        width: 60,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#ccc',
        padding: 2,
    },
    switchOn: {
        backgroundColor: '#2196F3',
    },
    slider: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        position: 'relative',
        left: 0,
        top: 2,
    },
    sliderOn: {
        left: 30,
    },
    text: {
        marginLeft: 8,
        fontSize: 15,
        fontWeight: 'bold',
        color:'white'
    },
})