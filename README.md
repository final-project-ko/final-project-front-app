# 오늘의 뉴스 앱

## 프로젝트 개요

**프로젝트명:** 오늘의 해외 뉴스  
**개발 언어:** React Native  


## 기능

1. 해외 뉴스 기사 제공
2. 카테고리별 인기 기사 제공
3. 주요 이슈 기사 요약 제공
4. 날씨 정보 제공
5. AI 번역
6. AI 요약
7. AI 키워드

## 기술 스택

**프론트엔드:**
- React Native



## 아키텍처

![아키텍처](https://github.com/final-project-ko/final-project-front-app/assets/60908387/10d220e6-f3e0-4cbd-b3b1-16ecb638cbd5)

##
## React Navigation에서 사용된 각 네비게이터와 해당하는 스크린의 요약입니다:

### Stack.Navigator:
- **SplashScreen:** 앱이 시작될 때 보여지는 스플래시 화면
- **BottomNavigator:** 하단 탭 네비게이터
- **Weather:** 날씨 정보 화면
- **DetailWeather:** 날씨 상세 정보 화면
- **DetailNews:** 뉴스 상세 정보 화면
- **MypageNavigator:** 마이페이지 탭 네비게이터
- **Callcenter:** 고객센터 화면
- **Questions:** 질문 목록 화면
- **Notice:** 공지사항 화면
- **Policy:** 약관 화면
- **Login:** 로그인 화면
- **LoginHandler:** 로그인 처리 화면
- **NaverHandeler:** 네이버 처리 화면
- **DetailBookmark:** 북마크 상세 화면
- **ShortNewsScreen:** 짧은 뉴스 화면

### BottomTab.Navigator:
- **홈 탭**
- **국내 뉴스 탭**
- **해외 뉴스 탭**
- **마이 페이지 탭**

### Tab.Navigator:
- **Inquiry:** 문의 화면
- **Bookmark:** 북마크 화면
- **InquiryAnswer:** 문의 답변 화면
- **계정관리:** 계정 관리 화면
