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
<img src="https://user-images.githubusercontent.com/65700066/192123155-9802bbd8-38bc-428a-8956-1f6e5b445139.JPG" width=800>
<img src="https://user-images.githubusercontent.com/65700066/192123154-3726fee3-49ba-42f4-9ec8-d11f9b4d9362.JPG" width=800>


index.html<br>
- background.js<br>
: 시간 별로 배경이미지 다르게 적용<br>
(0 to 5시는 새벽, 5 to 9시는 아침, 9 to 18시는 낮, 18 to 22시는 저녁, 22 to 24시는 밤
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
- delete.js<br>
: 완료 항목 삭제 버튼.<br>
클릭 시 완료된 todo lists 모두 삭제 후 새로고침

<img src="https://user-images.githubusercontent.com/65700066/192123143-7e98a96a-f96b-4a08-a431-c08e7a6d2b99.JPG" width=800>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192123158-98eb6f07-babf-4f5d-bfd9-4f36444a7522.JPG" width=800>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192123142-f2de2984-1f15-4570-9eb1-147cbf27750c.jpg" width=800>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192123141-27dda2f8-fd74-4fd9-ad02-2150149430b8.jpg" width=800>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192123157-0cb2bb18-7f32-4981-9362-55b8db2e84f3.JPG" width=800>
<br>
시간별 background image 적용된 모습 <br>
<img src="https://user-images.githubusercontent.com/65700066/192552683-3e6dd080-cb6b-44c5-b4e3-35e8ffa30f9e.JPG" width=800>
<img src="https://user-images.githubusercontent.com/65700066/192552695-a8a783da-0e5b-4cfe-968f-ecb1cdef7324.JPG" width=800>
<img src="https://user-images.githubusercontent.com/65700066/192552708-0a61b715-01fb-48cb-8a17-963c077524c3.JPG" width=800>
<img src="https://user-images.githubusercontent.com/65700066/192552727-e775fe08-4cda-41d7-8092-8e11cc57c547.JPG" width=800>
<img src="https://user-images.githubusercontent.com/65700066/192552750-e4d28539-e7b4-46c9-9f33-e3bb67ecef8d.JPG" width=800>
<br>

#### Mobile version (max-width: 500px)
미디어 쿼리 적용해, 모바일 화면의 경우 <br>
user 정보, 로그아웃 버튼 / 현재 날짜, 현재 시간 / todol list 만 표시 <br><br>

<img src="https://user-images.githubusercontent.com/65700066/192123323-0e7a414b-cc52-454e-92c2-1716202fd360.png" width=300>
<img src="https://user-images.githubusercontent.com/65700066/192123324-fceb4b33-9e11-4c90-a81e-09e50c459176.png" width=300>
<br>
<img src="https://user-images.githubusercontent.com/65700066/192123272-c53c2fd2-bce5-444a-a1de-48ed0171d763.png" width=300>
<img src="https://user-images.githubusercontent.com/65700066/192123273-e181f676-7eb0-4822-ae84-ee6d69b9e552.png" width=300>
<img src="https://user-images.githubusercontent.com/65700066/192123274-5e46f8b4-aa31-4acd-9251-d4b3e53f3fda.png" width=300>
