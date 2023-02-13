input 입력시 로그인 버튼 활성화

```js

let loginIdInput = document.querySelector(".id-input");
let loginPwInput = document.querySelector(".pw-input");
let loginBtn = document.querySelector(".login-btn");

function checkInput() {
  if (loginIdInput.value.length != 0 && loginPwInput.value.length != 0) {
    loginBtn.style.backgroundColor = "blue";
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}

loginIdInput.addEventListener("change", checkInput);
loginPwInput.addEventListener("change", checkInput);

```

코멘트
- input 값에 change 이벤트가 감지되면 함수를 실행시켜준다는 점을 작성하는 데에 조금 시간이 걸렸다.
- if문의 조건은 금방 작성했으나 event를 처음에는 keydown 으로 입력하는 등 헤매다가 change event를 발견하고 적용해봤더니 바로 잘 작동했다.
- loginIdInput 부분에 오타가 있었다. 오타 각별히 주의하기!

적용 화면 
- input 값이 없을 때
<img width="1128" alt="스크린샷 2023-02-13 오후 8 39 03" src="https://user-images.githubusercontent.com/71865277/218448455-48a60b45-fa72-4dd0-891b-5497878c280e.png">

- input 에 값이 입력되었을 때
<img width="1124" alt="스크린샷 2023-02-13 오후 8 39 28" src="https://user-images.githubusercontent.com/71865277/218448576-09f39c96-f128-4dfe-8d59-d45551454778.png">

