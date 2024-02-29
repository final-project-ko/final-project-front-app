import {Image, StatusBar, StyleSheet, Text, View} from "react-native";

const DetailNews = ({ detail })=>{

    const {article, businessArticles} = detail.params;

    return(
        <>
            <StatusBar />
            <View style={styles.container}>

                <View style={styles.content}>
                    <Image source={{uri: article.image}} style={styles.image}/>
                    <Text style={styles.articleText}>
                        {article.title.length > 24 ? article.title.substring(0, 24) + '...' : article.title}
                    </Text>
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
        padding:'20%'
    },
})