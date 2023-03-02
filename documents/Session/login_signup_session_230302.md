# [Session] 로그인 & 회원가입

### 이정일 멘토님

<br>

> westudy - [로그인 & 회원가입 (공통)](https://study.wecode.co.kr/session/51) / [(프론트)](https://study.wecode.co.kr/session/125) 참고

<br>

## 목차

- fetch 함수, 서버에 HTTP 요청 보내기
- Access Token과 JWT의 개념
- Access Token 관리하기

<br>

---

## 로그인 & 회원가입 실습

- 4번 fetch 응답(response) (+ 실습중 FAQ) 참고
- 콘솔탭, 네트워크, 라우터 확인해가면서 진행하기
- fetch는 어디로 요청하느냐가 중요하므로 버튼이 하나라고 하더라도 두 가지 동작(로그인/회원가입)이 가능해짐

```js
// fetch 요청 전문 예시

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  // 아래 headers 설정은 필수로 들어가야 함
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  // body 는 JSON 형태로 바꾸는 메소드(JSON.stringify({}))를
  // 사용해서 요청해야 함
  // 아래에서 콘솔 찍었을 때 body 부분을 여기서 변환해줌
  body: JSON.stringify({
    title: "update title",
    content: "서버에 요청할때 담아서 보내는 정보",
  }),
})
  //////////////////// 여기까지가 요청
  .then((response) => response.json())
  // 반환된 값이 data로 들어감. 콘솔 찍어서 확인. 데이터가 뭔지 콘솔에서 꼭 확인하기.
  // 아래 data 콘솔로그 자리가 본문 함수 자리이므로 처리하고 싶은 코드를 적으면 됨
  // ex. 로그인이 되면 메인으로 보내고 싶다 => navigate
  // ex. 로그인 안됨 경고 => alert 창 띄우기
  .then((data) => console.log(data));
//////////////////// 여기는 응답
```

```js

// 다른 예시
fetch("api주소 http://10/58/12/188:8000/user/signin", {
  method: "POST",
  headers: {
    'Content-Type': application/json;charset=utf-8',
  },
  body: JSON.stringify({
    id: id,
    password: password
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data))

```

## JWT

- 실습 후에 반드시 읽을 것
- [참고 자료](https://study.wecode.co.kr/session/content/337)
