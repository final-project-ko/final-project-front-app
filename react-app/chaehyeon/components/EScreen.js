import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from "react";

const EScreen = () =>{
    const navigation = useNavigation();

    const [scienceArticles, setScienceArticles] = useState([]);

    let science = "kr_science";


    useEffect(() => {
        const fetchCategoryNews = async () => {
            try {
                const responseSci = await fetch(`http://192.168.0.63:8080/api/news/categoryNews/${science}`);
                const dataSci = await responseSci.json();
                setScienceArticles(dataSci.articles);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchCategoryNews();
    }, [science]);

    const renderArticles = () => {
        const itemsPerRow = 2;
        const rows = [];
        for (let i = 0; i < scienceArticles.length; i += itemsPerRow) {
            const rowItems = [];
            for (let j = i; j < i + itemsPerRow && j < scienceArticles.length; j++) {
                rowItems.push(
                    <TouchableOpacity
                        key={j}
                        onPress={() => navigation.navigate("DetailNews", { article: scienceArticles[j], scienceArticles })}
                    >
                        <View style={styles.content}>
                            <Image source={{ uri: scienceArticles[j].image }} style={styles.image} />
                            <Text style={styles.articleText}>
                                {scienceArticles[j].title.length > 24 ? scienceArticles[j].title.substring(0, 24) + '...' : scienceArticles[j].title}
                            </Text>
                        </View>
                    </TouchableOpacity>
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

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderArticles()}
            </ScrollView>
        </View>
    );
};

export default EScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
        padding: '5%',
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
});