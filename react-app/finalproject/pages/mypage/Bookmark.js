import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";


const Bookmark = () => {

    return(
        <View style={styles.container}>
            <Ionicons name="chatbubble-ellipses-outline" size={130} style={styles.iconStyle}/>
            <Text style={styles.fontBook}>북마크가 비어있습니다.</Text>
        </View>

        )
}

export default Bookmark;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
        padding: '5%',
        alignItems:"center",
        justifyContent:"center"
    },
    fontBook:{
        fontSize:17,
        color:'rgba(65 , 174 , 236, 1)'
    },
    iconStyle:{
        color:'rgba(65 , 174 , 236, 1)'
    }

})