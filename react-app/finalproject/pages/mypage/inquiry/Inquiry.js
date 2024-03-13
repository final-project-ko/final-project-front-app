import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import useStore from "../../../../store";
const Inquiry = () => {

    const navigation = useNavigation();
    const { userId } = useStore();

    const authPress = () => {
        if (userId) {
            navigation.navigate("Callcenter");
        } else {
            alert("로그인이 필요합니다");
        }
    }

    return(
        <View style={styles.container}>

            <View style={styles.suggest}>
                <View style={styles.memberName}>
                    <Text style={{color:'white', fontSize:16}}>문의 및 알림</Text>
                </View>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between", height:'30%', alignItems:'center', marginTop:'10%'}}>


                    <TouchableOpacity style={{flexDirection:'row' , width: '33%' ,  gap: 10 }} onPress={authPress}>
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

        </View>
        )

}

export default Inquiry;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
    },


    suggest: {
        height: '70%',
        width: '100%', // Adjust the width as per your requirement
        backgroundColor: 'rgba(50,50,54, 1)',
        borderRadius: 20,
        alignItems: 'center',
    },
    memberName:{
        width:'100%',
        height:'25%',
        borderBottomWidth:7,
        borderColor:'rgba(34,35,38, 0.6)',
        justifyContent:'center',
        paddingLeft:'5%'
    }

});