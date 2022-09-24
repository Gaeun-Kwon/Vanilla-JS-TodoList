# 바닐라JS를 이용한 To-do list 웹 어플리케이션
---
<br> 2022년 9월 진행한, 바닐라JS를 이용한 To-do list 웹 어플리케이션 토이 프로젝트입니다. <br>
https://gaeun-kwon.github.io/Vanilla-JS-TodoList/login.html
<br><br>
### 사용 기술

- HTML, CSS, Vanilla JavaScript 
- 미디어쿼리 이용해 반응형 웹 구성 (width 500px 기준으로 모바일/웹)
- CSS Grid 레이아웃 적용 (grid 내부는 필요에 따라 Flex 레이아웃 적용)
<br><br>
### 어플리케이션 모습
#### Web version (min-width: 500px) 
login.html<br>
- localStorage에 user 정보 없는 경우 login.html 로 이동
- 로그인 시 localStorage에 user 정보 저장 후 index.html 로 이동 <br><br>
<img src="https://user-images.githubusercontent.com/65700066/192098763-ef9cdab2-68bd-4881-9c31-f8c16dbc2d8d.JPG" width=800>
<img src="https://user-images.githubusercontent.com/65700066/192098764-5bc7634d-d746-4c82-89ac-1e340a6c01da.JPG" width=800>


index.html<br>
- background.js<br>
: 시간 별로 배경이미지 다르게 적용<br>
(0~5시는 새벽, 5~9시는 아침, 9~18시는 낮, 18~22시는 저녁, 22~24시는 밤
- weather.js<br>
: 날씨 위젯.<br>
OpenWeatherMap API 이용 - 사용자 위치 / 해당 위치 날씨 이미지, 현재 온도 / 해당 위치 날씨 텍스트 / 최고 기온, 최저 기온
- quotes.js<br>
: 새로고침 할 때마다 매번 다른 명언 표시
- clock.js<br>
: 오늘 날짜(월,일,요일) 와 현재 시간 표시<br>
- todosVer2.js<br>
: todo 입력시 완료 버튼, todo 항목 표시<br>
: 완료 버튼 클릭시 리스트 취소선,회색 적용 후 맨 밑에 표시
- greetings.js<br>
: user 정보 표시
- logout.js<br>
: 로그아웃 버튼. <br>
클릭 시 경고 창 팝업 (확인/취소)<br>
확인 버튼 클릭시 유저 정보, todos, done todos 모두 삭제 후 login.html 이동

<img src="https://user-images.githubusercontent.com/65700066/192098757-25a09dda-1cf9-4011-9733-188aa3594e0b.JPG" width=800>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192098760-c41990fb-7b92-4698-ba93-467d36884b74.JPG" width=800>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192098759-09db9b4a-92f3-4552-9b70-fe11f6ec1be8.JPG" width=800>
<br>

#### Mobile version (max-width: 500px)
미디어 쿼리 적용해, 모바일 화면의 경우 <br>
user 정보, 로그아웃 버튼 / 현재 날짜, 현재 시간 / todol list 만 표시 <br><br>

<img src="https://user-images.githubusercontent.com/65700066/192098920-6ebd731c-57b9-464c-8dd6-536927468e34.png" width=300>
<img src="https://user-images.githubusercontent.com/65700066/192098921-18785c55-0c3f-406b-b74b-2f38c2b446cf.png" width=300>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192098910-94776ac7-e144-443c-a57a-c15d10db620a.png" width=300>
<img src="https://user-images.githubusercontent.com/65700066/192098917-9a179a61-ebf5-4cf2-95e3-61bfa9c75146.png" width=300>
<img src="https://user-images.githubusercontent.com/65700066/192098916-d26ae131-dd5f-47e0-8d68-82861f7cf853.png" width=300>
