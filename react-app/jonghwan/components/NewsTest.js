// import React, { useEffect, useState } from "react";
// import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import {useParams} from "react-router-dom";
//
// const NewsTest = () => {
//     // let { category } = useParams();
//     //
//     // let category = "kr_business";
//     //
//     // if (category === undefined) {
//     //     category = "kr_total";
//     // }
//     // console.log(category);
//     //
//     // const navigation = useNavigation();
//     //
//     // const onClickHandler = (article) => {
//     //     navigation.navigate(`/detailNews/${article.code}`, { state: { article } });
//     // }
//     //
//     // const [articles, setArticles] = useState([]);
//     //
//     useEffect(() => {
//         const fetchCategoryNews = async () => {
//             try {
//                 const response = await fetch(`http://192.168.0.63:8080/api/news/categoryNews/${category}`);
//                 const data = await response.json();
//                 setArticles(data.articles);
//                 console.log("data", data);
//             } catch (error) {
//                 console.log("Error fetching data", error);
//             }
//         };
//         fetchCategoryNews();
//     }, [category]);
//
//     return (
//         <>
//             {articles.map((article, index) => (
//                     <View style={styles.content}>
//                         <Image source={{ uri: article.image }} style={styles.image} />
//                         <Text>{article.title}</Text>
//                     </View>
//             ))}
//         </>
//     );
// }
//
// const styles = StyleSheet.create({
//     content: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     image: {
//         width: 100,
//         height: 100,
//     },
// });
//
// export default NewsTest;