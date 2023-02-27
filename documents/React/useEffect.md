# useEffect

<br>

> [Westudy - useEffect](https://study.wecode.co.kr/session/123) 참고

<br>

---

## Lifecycle

<br>

- 컴포넌트에는 Lifecycle이라는 개념이 있다

<p align="center"><img src="https://info.keylimeinteractive.com/hubfs/Blog%20Q2.jpeg" width="600px"></p>

<br>

### 컴포넌트가 살아있다? 🦖

<br>

- 나름 열심히 사는 컴포넌트씨는 아래 세 가지 일을 하면서 지낸다

  1. 생성 (전문용어로 mount)
  2. 재렌더링 (전문용어로 update)
  3. 삭제 (전문용어로 unmount)

<br>

- 컴포넌트의 인생을 왜 알아야 하는데? 🧐
  - 이걸 알면 컴포넌트 인생 중간중간에 간섭할 수 있기 때문이다
  - 컴포넌트가 장착/업데이트/삭제 등 열일하고 있으면 원하는 시점에 낄겨해서 코드를 실행할 수 있다
  - 간섭 예시...
    <br> "Detail 컴포넌트 등장 전에 이것좀 해줘"
    <br> "Detail 컴포넌트 사라지기 전에 이것좀 해줘"
    <br> "Detail 컴포넌트 업데이트 되고나서 이것좀 해줘"

<br>

---

## Side Effect

<br>

### Side Effect가 뭔데? 🤷

- 개념

  - Side Effect는 부수효과(주요한 효과에 따라서 발생하는 효과)를 의미한다
  - 즉, 프로그래밍에서는 코드가 의도한 주된 효과 외에 추가적으로 발생하는 효과를 말한다
    - 함수의 목적인 Input을 받아서 output을 산출하는 것 이외의 모든 행위

- 예시

  - 순수 함수 🕊

    ```js
    const sum = (x) => {
      return x + 1;
    };
    ```

    - 위 예시에서 함수는 input을 받아서 output을 내는 행동밖에 하지 않는다
    - side effect가 없는 이러한 함수를 **순수 함수**라고 부른다
    - 함수가 함수 외부의 값을 변경시킨다면 _side effect가 발생했다_ 고 말한다

     <br>

  - 외부의 상태 읽기 / 변경하기

    ```js
    let num;

    const sum = (x) => {
      // 예시 1
      num = x + 1;
      // 예시 2
      console.log(x);
      // 예시 3
      const x = document.getElementById("x");
      x.innerText = newX;
    };
    ```

    - 위 예시에서 함수 외부의 값(num)을 바꾸고 있으므로 side effect가 있다고 할 수 있다
    - console.log를 사용하거나 DOM을 조작하는 행동도 함수 외부의 상태를 바꾸는 것!
    - 따라서 이때도 side effect가 발생한 게 맞다 ⭕️

    <br>

- 리액트에서 Side Effect.. 그거 언제 일어나는 건데? 🥊

  - Data Fetching
    - 프론트엔드가 백엔드 API를 통해서 기존에 저장된 데이터를 가져오는 경우
  - DOM 접근 및 조작
    - DOM에 접근하고 직접 조작을 해야 하는 경우
  - **구독(Subscribe)**
    - 프로그래밍에서의 **구독**이란 어떤 것의 변화를 계속해서 지켜보고 변화가 발생하면 특정한 액션을 취하는 것!
      <br>-> 웹 개발에서는 **시간⏰ **을 구독
      <br>-> ex. setTimeout / setInterval 등으로 시간 변화에 따라 특정 동작 실행

<br>

- 정리 📝
  - side effect란.. 🧐
    - 함수가 input을 받아서 output을 내는 과정에서 **외부의 값을 읽거나 변경하는 행위** 이다
  - side effect를 피하자! ⚡️
    - side effect가 있는 함수는 동작 결과를 예측하기 쉽지 않기 때문에 피하는 게 좋다
    - ex. const sum = (x) => x + num 이란 함수는 num이란 값이 어떻게 변할지 모르기 때문에 함수의 결과를 예측하기 어려움
    - 불가피한 경우에는 통제 가능하게 만들어서 유지보수에 악영향을 주지 않도록 주의할 것!

<br>

---

## useEffect

<br>

- side effect의 문제점 😈

<br>

1. side effect가 렌더링을 blocking 🏀

   ```js
   const App = () => {
     const doSideEffect = () => {
       // do some side effect
     };

     doSideEffect();

     return <h1>Hello World</h1>;
   };
   ```

- 코드는 위에서 아래로 실행되므로 App 컴포넌트는 doSideEffect() 동작이 끝날 때까지 JSX를 리턴하지 않음
- 결국 사이드 이펙트가 끝나기 전까지 렌더링을 하지 못하고 브라우저가 멈춤
- 사용자가 UI 업데이트를 보기까지 오랜 시간이 걸림

<br>

2. 매 렌더링마다 side effect가 수행됨

- 리액트에서 함수 컴포넌트의 리렌더링은 함수 컴포넌트를 다시 호출하는 방식으로 실행됨
- 특정 사이드 이펙트(ex, data fetching)는 매번 수행될 필요가 없는데, 매 렌더링(함수 호출)마다 무조건 발생하면 비효율적임

<br>

- React에서 side effect를 언제 발생시켜야 하는가?
  1. 렌더링이 모두 다 완료되고 난 후 실행 (렌더링을 Blocking 하지 않기 위해)
  2. 내가 원할 때만 조건부로 실행 (매 렌더링마다 실행 x)
- 위 요구사항을 모두 충족하는 hook -> **useEffect**

<br>

<p align="center"><img src="https://velog.velcdn.com/images/joahkim/post/fea1c6f7-0a6d-4a4d-ad11-70d95454a54a/image.jpg" width="500px"></p>

<br>

### useEffect 사용법

```js
import { useState, useEffect } from "react";

function Detail() {
  useEffect(() => {
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log("안녕");
  });

  let [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      버튼
    </button>
  );
}
```

<br>

### 조건부로 Side Effect 발생시키기

- 자식 컴포넌트에서의 전달받은 데이터 적용

<br>

### Rendering & Effect Cycle

- d
- d

<br>

### Clean Up Function

<p align="center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSfFN-2LaE8Ed-6MP2lsTDjGrjWOVcROKhg&usqp=CAU" width="400px"></p>

<br>

자 이제 사이드 이펙트를 깔끔하게 치워보자 🧼
<br> 복잡한 과제를 하기 전에 책상을 싹 치우면 잘되는 것처럼!
<br> useEffect 안의 코드를 실행할 때도 싹 치우고 깔끔한 마음으로 실행하는게 좋다는 거 🫧

<br>

- 간단 사용법
  - useEffect가 동작하기 전에 특정 코드를 실행하고 싶으면 return ()=>{} 안에 넣을 수 있다
  - 그럼 useEffect 안에 있는 코드를 실행하기 전에 return ()=>{ } 안에 있는 코드를 실행해준다

<br>

- 대표적인 예시로 setTimeout 타이머를 살펴보자

  - setTimeout() 쓸 때마다 브라우저 안에 타이머가 하나 생긴다
  - 근데 useEffect 안에 썼기 때문에 컴포넌트가 mount 될 때 마다 실행된다
  - 그럼 잘못 코드를 짜면 타이머가 1000개 생길 수도 있겠군.. 🫠
  - 이런 일을 막고 싶으면 useEffect에서 타이머를 만들기 전에 기존 타이머를 싹 지우라고 하면 된다!

<br>

- 예제 📝

  ```jsx
  useEffect(() => {
    let time = setTimeout(() => {
      console.log(1);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  ```

  <br>

### Summary

- React에서 Side Effect를 일으킬 때는 아래의 두 조건을 충족시켜야 한다
  1️⃣ 렌더링 이후에 발생할 것
  2️⃣ 매 렌더링 이후가 아니라 조건부로 원하는 순간에만 실행할 수 있어야 함
- React에서는 위의 조건을 충족시키면서 Side Effect를 발생시킬 수 있는 useEffect라는 hook을 제공해 줌
  <br> -> 손쉽게 Side Effect를 발생시킬 수 있음
- 일부 Side Effect는 발생 후 다시 Clean Up 하는 과정 필요
- useEffect에 인자로 전달한 콜백 함수에서 함수를 return 하면 '다음 effect가 실행되기 전'과, '컴포넌트가 unmount될 때' return 된 함수를 호출해 줌
  <br> -> 이를 통해 기존의 side effect를 clean up 가능
