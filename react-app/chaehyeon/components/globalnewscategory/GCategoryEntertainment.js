import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const GEntertainmentAll = () => {
    const navigation = useNavigation();
    const [businessArticles, setBusinessArticles] = useState([]);

    let business = "kr_business";

    useEffect(() => {
        const fetchCategoryNews = async () => {
            try {
                const responseBusiness = await fetch(`http://192.168.0.63:8080/api/news/categoryNews/${entertainment}`);
                const dataBusiness = await responseBusiness.json();
                setBusinessArticles(dataBusiness.articles);
                console.log("data", dataBusiness);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchCategoryNews();
    }, [business]);

    const renderArticles = () => {
        const itemsPerRow = 2;
        const rows = [];
        for (let i = 0; i < businessArticles.length; i += itemsPerRow) {
            const rowItems = [];
            for (let j = i; j < i + itemsPerRow && j < businessArticles.length; j++) {
                rowItems.push(
                    <TouchableOpacity
                        key={j}
                        onPress={() => navigation.navigate("DetailNews", { article: businessArticles[j], businessArticles })}
                    >
                        <View style={styles.content}>
                            <Image source={{ uri: businessArticles[j].image }} style={styles.image} />
                            <Text style={styles.articleText}>
                                {businessArticles[j].title.length > 24 ? businessArticles[j].title.substring(0, 24) + '...' : businessArticles[j].title}
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

export default GEntertainmentAll;

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


