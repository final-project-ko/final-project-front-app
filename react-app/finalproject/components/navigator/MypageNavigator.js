import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Bookmark from "../../pages/mypage/Bookmark";
import React, {useEffect, useState} from "react";
import Management from "../../pages/mypage/management/Management";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Inquiry from "../../pages/mypage/inquiry/Inquiry";
import useStore from "../../../store";
import {useNavigation} from "@react-navigation/native";
import InquiryAnswer from "../../pages/mypage/InquiryAnswer";

const Tab = createMaterialTopTabNavigator();

const MypageNavigator =()=>{

    const { userName } = useStore();
    const navigation = useNavigation();


    return(

<>
    <Tab.Navigator
        initialRouteName={null}
        tabBar={(props) => <CustomTabBar {...props}/>}
    >
        <Tab.Screen
            name="Inquiry."
            component={Inquiry}
            options={{
                tabBarLabel: userName ? userName + "님" : "로그인이 필요합니다" ,

            }}

        />


        <Tab.Screen
            name="Bookmark"
            component={Bookmark}
            options={{
                tabBarLabel: "북마크",
                tabBarIcon: () => (
                    <Ionicons name="bookmark-outline" size={20} color={'white'}/>
                ),

            }}

        />

        <Tab.Screen
            name="InquiryAnswer"
            component={InquiryAnswer}
            options={{
                tabBarLabel: "문의사항 답변",
                tabBarIcon: () => (
                    <Ionicons name="mail-open-outline" size={20} color={'white'}/>
                ),
            }}
        />
        <Tab.Screen
            name="Management"
            component={Management}
            options={{
                tabBarLabel: "계정관리",
                tabBarIcon: () => (
                    <Ionicons name="settings-outline" size={20} color={'white'} />
                ),
            }}
        />



    </Tab.Navigator>
</>


    );

}



const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' , height:'30%' }}>
            <View style={{ flexDirection: 'row' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    if (index === 0) {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(route.name)}
                                style={[{ padding: 10 }, index === 0 && styles.CustomTab1]}
                                key={route.key}
                            >
                                <Text style={{ color: 'white' }}>{label}</Text>
                            </TouchableOpacity>
                        );
                    } else {
                        return null;
                    }
                })}
            </View>
            <View style={{height:'60%',width:'100%',flexDirection: 'row' , borderBottomRightRadius:20, borderBottomLeftRadius:20, backgroundColor: 'rgba(50,50,54, 1)',}}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    // 아이콘 설정을 위해 새로운 변수 추가
                    let iconName;

                    // 각 탭에 따라 아이콘을 다르게 설정
                    switch (route.name) {
                        case 'Bookmark':
                            iconName = 'bookmark-outline';
                            break;
                        case 'InquiryAnswer':
                            iconName = 'mail-open-outline';
                            break;
                        case 'Management':
                            iconName = 'settings-outline';
                            break;
                        default:
                            iconName = 'default-icon'; // 기본값으로 설정할 아이콘 이름
                            break;
                    }

                    if (index !== 0) {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(route.name)}
                                style={styles.CustomTab2}
                                key={route.key}
                            >
                                {/* 아이콘 설정 */}
                                <Ionicons name={iconName} size={30} color={'white'}  style={{marginBottom:'10%'}}
                                />
                                <Text style={{ color: 'white' , fontSize:11 }}>{label}</Text>
                            </TouchableOpacity>
                        );
                    } else {
                        return null;
                    }
                })}
            </View>
        </View>
    );
};



export default MypageNavigator;

const styles = StyleSheet.create({
    CustomTab1: {
        width:'100%',
        justifyContent:'center',
        borderBottomWidth:7,
        borderColor:'rgba(34,35,38, 0.6)',
        backgroundColor: 'rgba(50,50,54, 1)',
        padding:'5%',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },

    CustomTab2: {
        width:'33.3%',
        alignItems:'center',
        justifyContent:'center',
        padding:'5%',
    },

})