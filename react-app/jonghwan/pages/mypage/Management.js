import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {useNavigation} from "@react-navigation/native";


const Management = () => {

    const navigation = useNavigation();


    return(
        <View style={styles.container}>

            <View style={styles.suggest}>

                <TouchableOpacity style={styles.memberName} onPress={() => navigation.navigate("Login")}>
                    <Text style={{color:'white', fontSize:16}}>연동 정보</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between",  alignItems:'center', marginTop:'15%'}}>

                    <View style={{flexDirection:'row' , width: '33%' ,  gap: 10 }}>
                        <Ionicons name="ellipse-outline" size={10} color={'grey'}/>
                        <Text style={{color:'rgba(183,184,188,1)', }}>계정</Text>
                    </View>



                    <View style={{flexDirection:'row' , width: '51%' ,  gap: 10 }}>
                        <Text style={{color:'white', }}></Text>
                    </View>

                </View>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between", alignItems:'center', marginTop:'10%'}}>

                    <View style={{flexDirection:'row' , width: '33%' ,  gap: 10 }}>
                        <Ionicons name="ellipse-outline" size={10} color={'grey'}/>
                        <Text style={{color:'rgba(183,184,188,1)', }}>아이디</Text>
                    </View>



                    <View style={{flexDirection:'row' , width: '51%' ,  gap: 10 }}>
                        <Text style={{color:'white', }}></Text>
                    </View>

                </View>

                <View style={{flexDirection:'row' , width:'70%', justifyContent:"space-between",  alignItems:'center', marginTop:'10%'}}>

                    <View style={{flexDirection:'row' , width: '33%' ,  gap: 10 }}>
                        <Ionicons name="ellipse-outline" size={10} color={'grey'}/>
                        <Text style={{color:'rgba(183,184,188,1)', }}>가입 일시</Text>
                    </View>



                    <View style={{flexDirection:'row' , width: '51%' ,  gap: 10 }}>
                        <Text style={{color:'white', }}></Text>
                    </View>

                </View>

                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.secessionBtn}>회원탈퇴</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Management;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34,35,38, 1)',
        width: '100%',
        height: '100%',
        alignItems:"center",
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
    },
    button:{
        width:'100%',
        paddingRight:'10%',
        alignItems:"flex-end",
        position:"absolute",
        bottom:'7%'
    },
    secessionBtn:{
        fontSize: 11,
        color:'grey'
    }
})