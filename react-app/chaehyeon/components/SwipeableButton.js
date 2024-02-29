import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import SwipeButton from 'rn-swipe-button';

export default class SwipeButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
    };
  }

  render() {
    const { showButton } = this.state;
    const { message, backgroundSource, widthsize } = this.props; // Prop으로 message와 backgroundSource를 받아옵니다.

    return (
      <View>
        {showButton && (
          <ImageBackground
            source={backgroundSource} // Use the passed backgroundSource prop
            style={{
              height: 70, // 배경 바 높이
              borderRadius: 15, // 배경 바 시작점 모서리 둥글게
              width: widthsize,  // 배경 바 넓이
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', // 이미지가 borderRadius를 가질 수 있도록 overflow 속성 추가
            }}
            imageStyle={{
              borderRadius: 18, // 이미지 배경에 borderRadius 적용
            }}
          >
            <SwipeButton
              containerStyles={{
                height: 70,
                borderRadius: 18, // SwipeButton도 같은 borderRadius 적용
              }}
              height={72} // 채워지는 바 높이(일반 넓이 +2)
              width={330} // 채워지는 바 넓이 (일반 넓이 +10)
              swipeSuccessThreshold={50} // 스와이프가 성공적으로 간주되는 임계값 ((ex. 70 = 70%이상 채우면 자동으로 채워짐)
              railBackgroundColor={'transparent'} // 스와이프 버튼의 기본 배경 색
              railBorderColor={'transparent'} // 스와이프 버튼의 기본 테두리 색
              railStyles={{ borderRadius: 20 }} //  채워지는 바 스타일
              railFillBackgroundColor={'#2791CD'} // 스와이프가 진행될 때 채워지는 배경 색
              railFillBorderColor={'#2791CD'} // 스와이프가 진행될 때 채워지는 테두리 색상
              thumbIconBackgroundColor={'#2791CD'} // 스와이프 아이콘의 배경색
              thumbIconBorderColor={'#2791CD'} // 스와이프 아이콘의 테두리 색상
              thumbIconStyles={{ borderRadius: 20 }} // 스와이프 아이콘 스타일
              thumbIconWidth={50} // 스와이프 아이콘의 너비를 설정
              title={message} // 스와이프 버튼에 표시될 텍스트
              titleStyles={{ color: '#2791CD', fontSize: 19, fontWeight: 'bold', marginLeft: 10 }}
              enableReverseSwipe={true} // 오른쪽에서 왼쪽으로 스와이프(=리버스 스와이프)
              disabled={false} // 비활성화 상태
              disabledRailBackgroundColor={'#666666'} // 비활성화시 색상
            >
            </SwipeButton>
          </ImageBackground>
        )}
      </View>
    );
  }
}
