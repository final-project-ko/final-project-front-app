import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {homeUrl} from "../../../ifconfig/Inet";

const SplitKeywords = ({ text }) => {
  // 키워드를 , 단위로 나눕니다
  const keywords = text.split(',').map(keyword => keyword.trim());
  // 키워드 10개까지만
  const limitedKeywords = keywords.slice(0, 10);

  return (
    <View style={styles.buttonContainer}>
      {/* 나눈 키워드를 버튼(모양 틀로 쓸 예정)에 넣습니다 */}
      {limitedKeywords.map((keyword, index) => (
        <Button
        key={index}
        title={keyword}
        type="outline"
        onPress={() => console.log(keyword)}
        buttonStyle={styles.button}
        titleStyle={[styles.text, styles.buttonText]}
        disabled
        disabledStyle={{ borderColor: '#ffffff', backgroundColor: 'transparent' }} // Customize disabled color and background
        disabledTitleStyle={{ color: '#ffffff' }} // Customize disabled text color
      />
      ))}
    </View>
  );
};

const StringToButtons = () => {

  const [keywordNews, setKeyword] = useState({});

  useEffect(() => {
    const findKeywordNews = async () => {
      try {
        const responseKeyword = await fetch(`http://${homeUrl}:8080/api/AINews/keywordNews/${1}`)
        const dataKeyword = await responseKeyword.json();
        setKeyword(dataKeyword);
      } catch (error){
        console.log("error keyword", error);
      }
    };
    findKeywordNews();
  }, []);


  const keywordButtons = [];
  for (let i = 1; i <= 10; i++){
    const keyword = keywordNews[`keyword${i}`];
    if (keyword){
      keywordButtons.push(keyword);
    }
  }

  // 키워드 ai 출력 결과 (= ,(쉼표)로 나눠진 하나의 문자열이어야 합니다)

  const stringToSplit = keywordButtons.join(',');


  return (
    <View>
      <SplitKeywords text={stringToSplit} />
    </View>
  );
};

export default StringToButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // 가로로 정렬
    flexWrap: 'wrap', // 컨텐츠가 화면 넘으면 다음칸으로 이동
    alignItems: 'center', // 센터 정렬
    justifyContent: 'center', // 센터 정렬
    marginLeft: 12,
    marginRight: 12,
  },
  text: {
    fontSize: 12,
    // fontWeight: 'bold'
  },
  button: {
    borderWidth: 1.2, // Border width
    borderRadius: 50,
    margin: 3.5, // Adjust margin as per your requirement
  },
  buttonText: {
    marginHorizontal: 11, // 버튼 내부의 가로 마진
    marginVertical: -2, // 버튼 내부의 세로 마진
  },
});
