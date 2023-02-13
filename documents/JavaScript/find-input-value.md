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

적용 화면 
- input 값이 없을 때
<img width="1128" alt="스크린샷 2023-02-13 오후 8 39 03" src="https://user-images.githubusercontent.com/71865277/218448455-48a60b45-fa72-4dd0-891b-5497878c280e.png">

- input 에 값이 입력되었을 때
<img width="1124" alt="스크린샷 2023-02-13 오후 8 39 28" src="https://user-images.githubusercontent.com/71865277/218448576-09f39c96-f128-4dfe-8d59-d45551454778.png">

