// import {Text, TextInput, TouchableOpacity, View} from "react-native";
// import React, {useState} from "react";
// import {homeUrl} from "../../../../ifconfig/Inet";
// import useStore from "../../../../store";
//
//
// const Comment = ({article}) => {
//
//
//     const {userId, userEmail} = useStore();
//
//     const userCode = userId;
//
//     const [comment, setComment] = useState();
//
//     /* comment input 값 핸들러 */
//     const onInputChangeHandler = (text) => {
//         setComment(text);
//     }
//
//     /* 댓글 등록 */
//     const registComment = async (homeUrl, article, userCode, userEmail, comment) => {
//         try {
//             const response = await fetch(`http://${homeUrl}:8080/api/comments/regist`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     newsCode: article.code,
//                     userId: userCode,
//                     email: userEmail,
//                     content: comment
//                 })
//             });
//
//             if (response.status === 401) {
//                 alert('로그인이 필요합니다.');
//             } else if (response.status === 402) {
//                 alert('댓글 내용이 없습니다. 다시 입력해주세요');
//             } else if (!response.ok) {
//                 throw new Error('서버 응답이 실패했습니다.');
//             } else {
//                 console.log('comment submit success : ' + comment);
//                 alert('댓글이 등록되었습니다.');
//
//                 setComment(''); // 댓글 등록 후 input 박스 값 초기화
//             }
//
//         } catch (error) {
//             console.log('Error submit comment : ', error.message);
//         }
//     }
//     return(
//         <View>
//             <TextInput
//                 placeholder={userCode ? '여기에 댓글을 입력하세요' : '댓글을 작성하려면 로그인 해주세요'}
//                 value={comment}
//                 onChangeText={onInputChangeHandler}
//             />
//             <TouchableOpacity onPress={registComment}>
//                 <Text>등록</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
//
// export default Comment;