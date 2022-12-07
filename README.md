# Albatross-FE

### 📌 서비스 소개

- 딥러닝을 활용한 글씨 연습 어플
- 자체적인 바른 글씨 기준에 따라 사용자의 글씨를 평가하고, 그 결과에 따라 사용자의 글씨에 대한 피드백을 주는 어플입니다.
- 이 프로젝트의 개발 과정은 https://55wldms.tistory.com/category/%EC%A1%B8%EC%97%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8 에서 찾아볼 수 있습니다.

<br/>

### 📌 Stacks

<img src="https://img.shields.io/badge/ReactNative-FE2E2E?style=flat-square&logo=React&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JavaScript-F7D358?style=flat-square&logo=JavaScript&logoColor=white"/></a>

<br/>

### 📌 핵심 기능

**[1] 글씨 연습 기능**

- 글씨 연습에 기초가 되는 자음 모음 연습과 줄 긋기 연습 제공

**[2] 글씨 검사 기능**

- 원하는 글씨체 선택 후 필사하고 싶은 문학작품을 선택하여 연습
- 검사 버튼 선택 시 글씨 측정 후 점수와 피드백 제공

**[3] 글씨 연습 기록 기능**

- 검사 시 글씨 연습 화면과 점수를 앱에 저장
- 저장 결과는 내 서랍 화면에서 확인 가능
- 다운로드 버튼으로 글씨 연습 결과 갤러리에 저장 가능

<br/>

### 📌 기여한 부분

**[1] 프로젝트 통솔**

- 프로젝트의 기획부터, figma를 이용한 디자인까지 모두 주도
- 팀의 리더로서 교수님, 멘토님과의 컨택에 주도적으로 참여
- 프로젝트의 전반적인 계획 수립 with 노션

**[2] 스피커**

- 수업 내 대부분의 발표 세션에서 스피커로 활동
    - 3-2 : 중간발표, 기말발표
    - 4-1 : 엘레베이터 스피치, 포스터세션, 최종발표
- 한국정보처리학회의 춘계학술대회에서 논문 발표
- 포스터 세션에서는 장려상 수상

**[3] 기능 구현**

*앱의 프론트 단의 모든 화면을 구현하였습니다.*

*아래는 제가 자체적으로 구현한 것 외에 라이브러리를 사용해 구현한 부분입니다.*

**1. 로그인 화면**
- apple 소셜 로그인 구현 with [expo-apple-authentication](https://docs.expo.dev/versions/latest/sdk/apple-authentication/)
- 로그인 정보, 사용자 설정 값 로컬스토리지에 저장
    
    with [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
    
**2. 글씨 연습 화면**
- 글씨 연습을 위한 캔버스 구현 with [@benjeau/react-native-draw](https://www.npmjs.com/package/@benjeau/react-native-draw)
- 글씨 결과 스크린샷 구현 with [react-native-view-shot](https://github.com/gre/react-native-view-shot)
- 스크린샷 갤러리에 저장 with [expo-media-library](https://docs.expo.dev/versions/latest/sdk/media-library/)

**3. 글씨 결과 화면**
- 글씨 결과 이미지 그리드 형식으로 띄우는 기능 with [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler?activeTab=readme)
- 글씨 연습 결과 점수 그래프화 with [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit)

**4. 기타 설정 화면**
- 다양한 글씨체로 글씨 연습 가능 with [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)

**[4] 테스트**

- TestFlight를 이용해 테스터들에게 링크를 배포하고 테스트하였습니다.
<br/>

### 📌 미리보기

<img src="https://user-images.githubusercontent.com/76611903/170242040-d4187334-4fe0-404b-88f9-fb7e9be8abf1.png" align="left" width="30%" height="30%"/>
<img width="30%" alt="image" src="https://user-images.githubusercontent.com/86579242/170249351-4d0513fe-ba8c-4d6b-849f-0879f405000f.png" align="left">
<img src="https://user-images.githubusercontent.com/76611903/170242713-6e49a9e9-3693-4110-8092-d811e81b5424.png"  width="30%" height="30%"/> 
<div style="margin-bottom:50px">
 </div>
 
<img src="https://user-images.githubusercontent.com/76611903/170242737-9e477887-b6d5-4c3e-8f72-bd9f0c273e70.png" align="left" width="30%" height="30%"/>
<img src="https://user-images.githubusercontent.com/76611903/170242756-06468441-2027-4108-b38a-98bc1519ec1a.png" align="left" width="30%" height="30%"/>
<img src="https://user-images.githubusercontent.com/76611903/170242836-334acdfb-d0b2-43bb-acd5-ed8eec7a972e.png" width="30%" height="30%"/> 

<br/>

### 📌 Design

<img src="https://user-images.githubusercontent.com/65931227/170225530-b9b5882f-5bdb-4e89-b7ed-f22595f7c9ca.png" align="left" width="30%" height="30%"/>
<img width="30%" alt="image" src="https://user-images.githubusercontent.com/65931227/170225293-ed2b6c6e-6903-4277-a466-47864847cc2e.png" align="left">
<img src="https://user-images.githubusercontent.com/65931227/170225567-c2b9aad9-0b21-44cf-9feb-4e04259171e3.png" width="30%" height="30%"/> 

<div style="margin-bottom:50px"> </div>
 
<img src="https://user-images.githubusercontent.com/65931227/170225335-cdb6be82-a764-43ed-b5d8-f9f1d0e7dd98.png" align="left" width="30%" height="30%"/>
<img src="https://user-images.githubusercontent.com/65931227/170225411-87574d1d-64d6-401b-911a-dd585c05c8f6.png" align="left" width="30%" height="30%"/>

<div style="margin-bottom:50px"> </div>

<img src="https://user-images.githubusercontent.com/65931227/170225469-d5e5ab50-3393-48fa-ad30-59c5b03dab95.png" align="left" width="30%" height="30%"/>
<img src="https://user-images.githubusercontent.com/65931227/170225639-b761524a-5526-4327-8c0f-759f7c467d9b.png" width="30%" height="30%"/> 
