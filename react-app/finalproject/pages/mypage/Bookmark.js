import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import useStore from "../../../store";
import React, {useEffect, useState} from "react";
import {homeUrl} from "../../../ifconfig/Inet";
import HTML from "react-native-render-html";
import {useNavigation} from "@react-navigation/native";

const Bookmark = () => {
    const navigation = useNavigation();

    const { userId } = useStore();

    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        if(userId) {
            const bookmarkList = async () => {
                await fetch(`http://${homeUrl}:8080/api/bookmark/find/${userId}`, {
                    method: "GET",
                }).then(res => res.json())
                    .then(data => {
                        setBookmark(data);

                    })
                    .catch(error => {
                        console.log(error);
                    });

            };
            bookmarkList();
        }
    },[userId]);



    const deleteBookmark = async (index) => {
        try {
            const response = await fetch(`http://${homeUrl}:8080/api/bookmark/delete/${userId}/${bookmark[index].bookmarkCode}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setBookmark(prevBookmarks => prevBookmarks.filter((_, i) => i !== index));
                Alert.alert("북마크 삭제 완료");
            } else {
                throw new Error('Failed to delete bookmark');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const renderBookmark = () => {
        const itemsPerRow = 2;
        const rows = [];
        for (let i = 0; i < bookmark.length; i += itemsPerRow) {
            const rowItems = [];
            for (let j = i; j < i + itemsPerRow && j < bookmark.length; j++) {
                rowItems.push(
                    <View key={j} style={styles.item}>
                        <TouchableOpacity onPress={() => deleteBookmark(j)}>
                            <Ionicons name="close-circle-outline" size={20} color={"white"}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("DetailBookmark", { bookmarks: bookmark[j], bookmark })}>
                            <View style={styles.content}>
                                <Image source={{ uri: bookmark[j].image }} style={styles.image} />
                                <Text style={styles.articleText}>
                                    {bookmark[j].title.length > 24 ? bookmark[j].title.substring(0, 24) + '...' : bookmark[j].title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            }
            rows.push(
                <View key={i} style={styles.row}>
                    {rowItems}
                </View>
            );
        }
        return rows;
    };



    return(

        <View style={styles.container}>

            {bookmark.length > 0 ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {renderBookmark()}
                </ScrollView>
            ) : (
                <View style={{alignItems:'center'}}>
                    <Ionicons name="chatbubble-ellipses-outline" size={130} style={styles.iconStyle}/>
                    {userId ? (
                        <Text style={styles.fontBook}>북마크가 비어있습니다.</Text>
                    ) : (
                        <Text style={styles.loginText}>로그인이 필요합니다.</Text>
                    )}
                </View>
            )}
        </View>





    )
}

export default Bookmark;

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
    },
    fontBook:{
        fontSize:17,
        color:'rgba(65 , 174 , 236, 1)'
    },
    iconStyle:{
        color:'rgba(65 , 174 , 236, 1)'
    },
    loginText:{
        color:'white',
        fontSize:22
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    content: {
        height: 180,
        width: 180, // Adjust the width as per your requirement
        backgroundColor: 'rgba(50,50,54, 1)',
        borderRadius: 20,
        alignItems: 'center',
    },
    image: {
        marginTop: '5%',
        width: '90%',
        height: '65%',
        borderRadius: 20
    },
    articleText: {
        fontSize: 10,
        color: 'white',
        width: "90%",
        marginTop: '5%',
        textAlign: "center"
    },

})


