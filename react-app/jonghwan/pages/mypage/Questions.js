import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";


const Questions = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.suggest}>
                <View style={styles.memberName}>
                    <Text style={{color:'rgba(65,174,236,1)', fontSize:16}}>자주 묻는 질문</Text>
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

            <ScrollView style={styles.detailQuestion}>
                <View style={{   borderBottomWidth:7, borderColor:'rgba(34,35,38, 0.6)',height:60 , marginBottom: 30}}>
                    <Text style={{color:'white', fontSize:20}}>FAQ</Text>
                </View>


            </ScrollView>

        </View>
    )

}

export default Questions;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
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
    detailQuestion:{
        backgroundColor: 'rgba(50,50,54, 1)',
        width:'100%',
        height:'50%',
        marginTop:'10%',
        borderRadius:20,
        padding:'5%'
    },

});