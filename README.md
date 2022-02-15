## 1. 💁 프로젝트 소개

- 주제 : 3주차 니콘내콘 프로젝트
- 기간 : 22.02.14 ~ 22.02.16

---

## 2. 🛠️ 기술 스택

<p align="center">
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript" src = "https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="styled" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
<img alt="styled" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />  
</p>

---

## 3. 👋🏻 팀원 소개

|조은총|전수현|최병현|조용우|
|----|---|---|---|
|<img width="200px" src='https://avatars.githubusercontent.com/u/66837741?v=4'/>|<img width="200px" src="https://avatars.githubusercontent.com/u/89771577?v=4"/>|<img width="200px" src="https://avatars.githubusercontent.com/u/65222200?v=4"/>|<img width="200px" src='https://avatars.githubusercontent.com/u/89348550?v=4'>|
---

## 4. 🔗 배포 링크

[배포 링크 바로가기]()

---

## 5. 📄 기능 목록 명세

### 1. 기능 분배

### 1) **홈/카테고리/브랜드(조은총, 전수현)**

[홈] 

- 이미지 슬라이더 구현 (3가지 버튼을 추가 후 버튼을 누를 때마다 지정된 페이지로 이동)
- 카테고리 테이블 구현 및 링크 기능 추가
- 땡처리콘 리스트 추가 , 땡처리 API호출로 데이터를 받아온 후 리스트로 출력

[카테고리/브랜드]

- 메인 페이지에서 선택된 카테고리 명을 가져와서 카테고리 페이지에 정보 렌더링
- 비슷한 방식으로 카테고리에 있는 브랜드 명을 클릭하였을 때 brands 주소로 이동함과 동시에 프로퍼티 넘겨주기


### **2) 상품 상세 페이지(최병현)**

- getStaticProps 및 getStaticPaths 메서드를 사용하여 상품 상세 정보 페이지 정적 렌더링
- 현재 가져온 데이터 값에 따라 상세 페이지 정보 동적 랜더링

### **3) 마이페이지/고객센터(조용우)**

- 메뉴 버튼 클릭 시 Modal창 호출
- 고객센터 구매,판매 API 호출
- 구매, 판매 API를 이용한 질문(question) 내용 호출
- 질문 내용 클릭 시 ID값을 이용해 답변(answer) 내용 호출

---

## 6. 💿 설치 및 실행 방법

Project Clone

`$ git clone https://github.com/Team15-wanted-pre-onboarding/15_06th_doubleNC.git` 

Project Setup

`$ npm install`

Project Start For Development

`$ npm run dev`

---

## 7. 🌲 프로젝트 구조

```
📦components
 ┣ 📂brands
 ┣ 📂categories
 ┣ 📂common
 ┣ 📂contacts
 ┣ 📂items
 ┣ 📂main
 ┣ 📂nav
 ┣ 📂utils
 ┗ 📜GlobalLayout.tsx
📦pages
 ┣ 📂api
 ┣ 📂brands
 ┃ ┗ 📂[id]
 ┣ 📂categories
 ┃ ┗ 📂[id]
 ┣ 📂items
 ┃ ┗ 📂[id]
 ┣ 📂main
 ┣ 📜contacts.tsx
 ┣ 📜index.tsx
 ┣ 📜_app.tsx
 ┗ 📜_document.tsx
```

## 8. 📕 레퍼런스

- 이 프로젝트는 <u>[원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6) 기업 과제를 토대로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
