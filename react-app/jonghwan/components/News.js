// import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
// import {useNavigation} from "@react-navigation/native";
// import {useEffect, useState} from "react";
// import SettingScreen2 from "../../chaehyeon/components/SettingScreen2";
//
// const News =()=>{
//
//     const navigation = useNavigation();
//     const [newsUrl, setNewsUrl] = useState([]);
//
//     return(
//         <View style={styles.container}>
//
//             <View style={styles.categoryContainer1}>
//                 <ScrollView horizontal = {true}  contentContainerStyle={styles.categoryContainer}  showsHorizontalScrollIndicator={false}>
//
//                     <TouchableOpacity onPress={() => navigation.navigate("SettingScreen2")}>
//                         <View style={styles.categoryList}>
//                             <Text style={{color:'white' }}>전체</Text>
//                         </View>
//                     </TouchableOpacity>
//
//
//                     <View style={styles.categoryList}>
//                         <Text style={{color:'white' }}>비즈니스</Text>
//                     </View>
//
//                     <View style={styles.categoryList}>
//                         <Text style={{color:'white' }}>엔터테인</Text>
//                     </View>
//
//                     <View style={styles.categoryList}>
//                         <Text style={{color:'white' }}>기술</Text>
//                     </View>
//
//                     <View style={styles.categoryList}>
//                         <Text style={{color:'white' }}>과학</Text>
//                     </View>
//
//                     <View style={styles.categoryList}>
//                         <Text style={{color:'white' }}>스포츠</Text>
//                     </View>
//
//                     <View style={{ width: 100, alignItems:"center", justifyContent:"center"}}>
//                         <Text style={{color:'white' }}>건강</Text>
//                     </View>
//
//                 </ScrollView>
//             </View>
//
//
//             <ScrollView style={styles.totalScrollView} showsVerticalScrollIndicator={false}>
//
//                 <Text style={styles.categoryText}>비즈니스</Text>
//                 <ScrollView style={styles.scrollView} horizontal = {true}  contentContainerStyle={styles.contentContainer } showsHorizontalScrollIndicator={false} >
//                     {/*{newsUrl.map((newsUrl, index) => (*/}
//                     <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
//                         <View style={styles.content}>
//                             <Image/>
//                             <Text></Text>
//                         </View>
//                     </TouchableOpacity>
//                     {/*))}*/}
//                 </ScrollView>
//
//
//                 <Text style={styles.categoryText}>엔터테인먼트</Text>
//                 <ScrollView style={styles.scrollView} horizontal = {true}  contentContainerStyle={styles.contentContainer}  showsHorizontalScrollIndicator={false}>
//
//                     <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
//                         <View style={styles.content}>
//                             <Image/>
//                             <Text></Text>
//                         </View>
//                     </TouchableOpacity>
//
//
//
//                 </ScrollView>
//
//
//                 <Text style={styles.categoryText}>기술</Text>
//                 <ScrollView style={styles.scrollView} horizontal = {true}  contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false}>
//
//                     <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
//                         <View style={styles.content}>
//                             <Image/>
//                             <Text></Text>
//                         </View>
//                     </TouchableOpacity>
//
//
//                 </ScrollView>
//
//
//                 <Text style={styles.categoryText}>과학</Text>
//                 <ScrollView style={styles.scrollView} horizontal = {true}  contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false}>
//
//                     <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
//                         <View style={styles.content}>
//                             <Image/>
//                             <Text></Text>
//                         </View>
//                     </TouchableOpacity>
//
//                 </ScrollView>
//
//
//                 <Text style={styles.categoryText}>스포츠</Text>
//                 <ScrollView style={styles.scrollView} horizontal = {true}  contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false}>
//
//                     <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
//                         <View style={styles.content}>
//                             <Image/>
//                             <Text></Text>
//                         </View>
//                     </TouchableOpacity>
//
//                 </ScrollView>
//
//
//                 <Text style={styles.categoryText}>건강</Text>
//                 <ScrollView style={styles.scrollView} horizontal = {true}  contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false}>
//
//                     <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
//                         <View style={styles.content}>
//                             <Image/>
//                             <Text></Text>
//                         </View>
//                     </TouchableOpacity>
//
//                 </ScrollView>
//             </ScrollView>
//         </View>
//     )
//
// }
//
// export default News;
//
// const styles= StyleSheet.create({
//     container: {
//         backgroundColor: 'rgba(34,35,38, 1)',
//         width:'100%',
//         height:'100%',
//         padding:'5%'
//     },
//     categoryList:{
//         borderRightWidth: 1,
//         borderRightColor: 'grey',
//         width: 90,
//         alignItems:"center",
//         justifyContent:"center"
//     },
//     categoryContainer:{
//         width:630,
//         // height:50,
//         // backgroundColor:'rgba(50,50,54, 1)',
//         // borderRadius: 15,
//         // marginBottom: 20,
//         // alignItems:"center",
//         // justifyContent:"space-between"
//     },
//     categoryContainer1:{
//         width:'100%',
//         height:50,
//         backgroundColor:'rgba(50,50,54, 1)',
//         borderRadius: 15,
//         marginBottom: 20,
//         alignItems:"center",
//         flexDirection: 'row',
//         paddingRight: 10,
//         paddingLeft: 10,
//     },
//     categoryText:{
//         color: 'rgba(74,185,248, 1)',
//         fontSize:16,
//         fontWeight: 'bold',
//         width:'100%',
//         height:30,
//         // paddingTop:'5%'
//     },
//     content:{
//         height:180,
//         width:170,
//         backgroundColor:'rgba(50,50,54, 1)',
//         borderRadius: 30,
//         marginRight: 10
//     },
//     scrollView:{
//         borderTopWidth: 2,
//         borderTopColor: 'grey',
//         paddingTop: '5%',
//         backgroundColor: 'rgba(34,35,38, 1)',
//
//     },
//     contentContainer: {
//         flexDirection: 'row', // 컨텐츠를 가로로 배열하기 위해 필요
//         paddingRight: 10,
//         height:200,
//     },
//     totalScrollView:{
//         height:'100%',
//         width:'100%',
//         backgroundColor: 'rgba(34,35,38, 1)',
//     },
//
// })