# Props & State

<br>

> [Westudy - Props & State](https://study.wecode.co.kr/session/116) 참고

<br>

## 목차

- Hook의 개념, 상황별 활용
- props의 개념
- state의 개념
- useState hook을 활용한 함수 컴포넌트 상태 관리
- state로 UI 변경 표현하기
- 이벤트로 state 변경
- props 활용하기
  - 부모 요소의 state를 자식 요소에 반영
  - 자식에서 일어난 이벤트로 부모의 state 값 변경 (state 끌올)

<br>

---

## Hook

<br>

### Hook이란?

- 정의
  - Hook: 클래스 컴포넌트에서만 사용할 수 있었던 state(상태) 관리와 lifecycle(라이프 사이클) 관리 기능을 함수 컴포넌트에서도 사용할 수 있도록 연동(hook in)해주는 함수
  - Hooks: (이러한) Hook들의 모음
- 등장 배경
  - React에서 컴포넌트를 만드는 방법 2가지: 클래스 컴포넌트, 함수 컴포넌트
  - Hook은 클래스 컴포넌트에서만 가능했던 상태(state) 관리와 라이프사이클 관리 기능을 함수 컴포넌트에서도 사용할 수 있게 해줌
- 특징
  - 리액트에 내장 Hook 존재 (ex. useState, useEffect)
  - custom hook (Hook을 직접 만드는 것)도 가능
  - Hook은 only **함수 컴포넌트 내에서만** 사용해야 함
  - 이름이 반드시 use- 로 시작함 (ex. useNavigate)

<br>

### Hook 사용 규칙

- 함수 컴포넌트 내에서 호출
  - Hook을 호출할 수 있는 곳은 아래 두 곳 뿐임!
    - 함수 컴포넌트 내부
    - custom Hook 내부
- 최상위에서 호출

  - Hook은 항상 함수 컴포넌트 내의 최상위에서만 호출해야 함
    <br>-> 리액트가 이들을 구분하는 유일한 정보는 훅이 사용된 순서이기 때문
  - 반복문, 조건문, 중첩된 함수 내에서는 Hook 호출 X
    <br>-> 여러 조건에 따라 훅이 사용된 순서 섞이는 것 방지

    ```js
    // useState Hook을 최상위에서 호출한 경우
    // Test.js

    import React, { useState } from "react";

    const Test = () => {
      // if문 안에 useState 넣지 말 것
      const [color, setColor] = useState("red");

      if (5 > 3) {
        console.log("true");
      }

      return <div>Hello!</div>;
    };

    export default Test;
    ```

<br>

### Summary

- Hook은 클래스 컴포넌트에서만 사용 가능했던 state(상태) 관리와 lifecycle 관리 기능을 함수 컴포넌트에서도 사용할 수 있도록 연동(hook in)해주는 함수임
- Hook 사용 규칙
  - 함수 컴포넌트 내부와 커스텀 훅 내부에서 호출
  - 최상위에서 호출

<br>

---

## Props

<br>

### Props란?

- 정의
  - 컴포넌트의 속성값
  - 부모 컴포넌트로부터 전달받은 데이터를 지니고 있는 객체
  - props로 전달하고자 하는 어떤 값이든 모두 자식 컴포넌트로 전달 가능 (ex. 변수, 함수, state 값, event handler ...)

<br>

### Props 사용

- 부모 컴포넌트에서의 데이터 전달

  - 부모 컴포넌트에서 ‘호랑이’ 라는 문자열을 animal 이라는 변수에 담아 관리하고 있을 때, **{animal}** 과 같이 화면에 표현 가능
  - 만약 자식 컴포넌트에서도 부모와 똑같이 '호랑이'라는 문자열을 표현하고자 한다면 -> props 사용
  - 전달 방법

    1. Child 컴포넌트를 만든 후 import
    2. <Child /> 컴포넌트를 return 문 안에 넣어줌
    3. '어떤 데이터를 자식 컴포넌트로 보내주어야 하는지' 파악
       <br> -> 여기서는 변수 'animal'
    4. tag에 속성을 주입하듯 자식 컴포넌트에 속성값 추가
       <br> -> **pet={animal}**
       <br> -> 이때 pet은 자식 컴포넌트에서 데이터를 받을 때 사용되는 인식표 역할
       <br> => 예시처럼 변수(pet)를 넘겨줄 수도 있고, 직접 값을 할당(’tiger’)해서 넘겨줄 수도 있음

    <br>

    ```js
    // Parent.js(부모 컴포넌트)

    import React from "react";
    import Child from "./Child";

    const Parent = () => {
      const animal = "호랑이";

      return (
        <>
          <h1>부모 컴포넌트입니다.</h1>
          <p>{animal}</p>
          <Child pet={animal} englishName="tiger" />
        </>
      );
    };

    export default Parent;
    ```

    <br>

- 자식 컴포넌트에서의 전달받은 데이터 적용

  - 함수에서 인자를 받아서 사용하듯, 함수 컴포넌트 또한 _const Child = (매개변수) ⇒ {}_ 와 같이 부모 컴포넌트에서 보내준 데이터를 받아서 사용할 수 있음
  - 부모 컴포넌트가 전달해 준 props는 하나의 객체로 합쳐져서 함수 컴포넌트에 전달됨
  - 컨벤션: 부모 컴포넌트로부터 받은 props를 표현한다는 것을 명시적으로 나타내기 위해 _const Child = (props) ⇒ {}_ 라고 매개변수 네이밍
  - 실제로 값이 어떻게 넘어오는지 확인
    <br> 입력 -> _console.log(props)_
    <br> 출력 -> _{pet: '호랑이', englishName: 'tiger'}_
  - 객체로 받아온 값 적용시키기 (객체 접근방법 사용)
    <br> -> _props.pet, props[”englishName”]_

    <br>

  ```js
  // Child.js(자식 컴포넌트)

  import React from "react";

  const Child = (props) => {
    console.log(props); // {pet: '호랑이', englishName: 'tiger'}

    return (
      <>
        <h2>자식 컴포넌트입니다.</h2>
        <p>{props.pet}</p> // 호랑이
        <p>{props.englishName}</p> // tiger
      </>
    );
  };

  export default Child;
  ```

<br>

- 함수 전달과 적용

  - 부모 컴포넌트에서는 testConsole이라는 함수를 선언하고, 이 함수가 버튼을 클릭할 때마다 실행될 수 있도록 클릭 이벤트 핸들러에 걸어줌
  - 해당 함수를 자식 컴포넌트에서도 사용해야 하는 상황이라면? -> 부모 컴포넌트에서 전달할 testConsole 함수를 어떤 이름으로 넘겨줄지 네이밍만 정하면 됨

  <br>

  ```js
  import React from "react";
  import Child from "./Child";

  const Parent = () => {
    const testConsole = () => {
      console.log("테스트 입니다.");
    };

    return (
      <>
        <h1>부모 컴포넌트입니다.</h1>
        <button onClick={testConsole}>클릭</button>
        <Child test={testConsole} />
      </>
    );
  };

  export default Parent;
  ```

  <br>

  - 부모 컴포넌트에서 전달하고자 하는 함수를 test라는 그릇에 담아 전달함
  - 자식 컴포넌트에서 함수를 props로 받아오는 부분도 변수를 받는 예제와 동일
    <br> -> but, 받아온 값이 바뀌었으므로 console.log(props) 를 통해 확인 -> 함수 자체가 넘어오는 것을 확인
  - button 태그에 이벤트 핸들러로 클릭마다 실행되는 함수를 (부모로부터 받은) test 함수로 정의
    <br> -> 클릭할 때마다 부모 컴포넌트에 있는 testConsole 함수 실행

    ```js
    // Child.js (자식 컴포넌트)

    import React from "react";

    const Child = (props) => {
      console.log(props); // {test: () => {console.log('테스트 입니다.')}}

      return (
        <>
          <h2>자식 컴포넌트입니다.</h2>
          <button onClick={props.test}>클릭</button>
        </>
      );
    };

    export default Child;
    ```

<br>

### Summary

- Props란 부모 컴포넌트로부터 전달받은 데이터를 지니고 있는 객체를 의미함
- 부모 컴포넌트에서는 (태그에 속성을 넣듯이) 자식 컴포넌트에 전달하고자 하는 데이터를 추가함

  ```html
  <!-- ex. -->
  <Child pet="{animal}" englishName="tiger" />
  ```

- 모든 타입의 데이터와 함수는 props로 전달 가능
- 넘겨주고자 하는 값이 둘 이상이면 넘겨줄 값 사이를 띄워서 구분함 -> 원하는 만큼 추가 가능

<br>

---

## State

<br>

### State란?

- 정의
  - 컴포넌트 내부에서 갖고 있는 컴포넌트의 상태값
  - 해당 컴포넌트가 UI에 보여줄 정보를 결정할 때 사용 가능한 상태값
  - state는 컴포넌트 내에서 정의하고, 쓰면서 계속 변경 가능함

### State 사용

- 버튼을 추가하고, 해당 버튼을 클릭하면 h1 태그의 배경색이 바뀐다는 내용 작성

  - color는 useState hook에 넘겨준 인자 “red”가 담겨 있음
    <br> -> 해당 state의 초기값이라 부름
    <br> -> 매번 state를 선언할 때 초기값을 useState hook의 인자로 넘겨줌
    <br> -> 초기값은 문자열 외에도 모든 타입의 데이터가 들어갈 수 있음

  - setColor는 선언된 state 즉, color 값을 변경할 때 사용하는 함수
  - color의 값을 변경할 때 단순히 다른 값을 할당하는 것이 아니라 useState 함수로부터 반환된 두 번째 요소인 setColor를 사용해야 함

  <br>

  ```js
  // Main.js

  import React, { useState } from "react";

  const Main = () => {
    // 변수 color, setColor는 다름 이름으로 바뀔 수 있습니다.
    const [color, setColor] = useState("red");

    return <h1>여기는 메인페이지입니다.</h1>;
  };

  export default Main;
  ```

  - => color의 초기값은 red, color를 변경하고 싶다면 setColor 함수 사용

  <br>

  1. state 사용을 위해 useState 함수 import
     - import한 useState hook은 컴포넌트 선언문 내 최상위 블록에서 사용 (return문 위)
  2. useState hook은 반환값을 구조 분해 할당을 통해 각각의 변수에 담아서 사용함
     - 예시에서는 useState hook을 호출할 때 “red”라는 문자열을 인자로 넘겨주었고, 해당 함수의 결과를 각각 color와 setColor에 구조 분해 할당했음
     - useState hook의 실행 결과는 배열임
     - 즉, seState hook을 실행하면 [1, 2]와 같이 배열의 형태로 값이 반환되고 그 결과 중 첫 번째 요소를 color라는 변수에 두 번째 요소를 setColor라는 변수에 할당함
  3. useState hook의 호출 결과로 반환되는 배열의 요소 알아보기

     ```js
     const [state, setState function] = useState(defaultValue)
     ```

     - 첫번째 요소(state)

       - 동적으로 관리하고자 하는 상태값
       - 해당 상태의 초기값은 useState hook을 호출할 때 인자(defaultValue)로 넘겨줌
       - 자유롭게 작명 가능

     - 두번째 요소(setState function)
       - 첫번째 요소(상태값)를 업데이트하는 함수
       - setState를 통해 state를 초기값에서 다른 값으로 변경 가능
       - **화면에 변화를 주고 싶을 때**는 반드시 setState 사용해 state의 값을 업로드해야 함
       - set-으로 작명

<br>

### State 적용

```js
// Main.js

import React, { useState } from "react";

const Main = () => {
  const [color, setColor] = useState("red"); // 4 ~ 5

  return (
    <h1 style={{ backgroundColor: color }}>여기는 메인페이지입니다.</h1> // 1 ~ 3
  );
};

export default Main;
```

1. h1 태그에 인라인 스타일 적용

   ```html
   <h1 style="{}"></h1>
   ```

2. 변경하고자 하는 속성이 배경 색상이므로 backgroundColor 적용

   ```html
   <h1 style={backgroundColor: ""}>
   ```

3. 미리 선언한 state 값 넣기

- 만약 backgroundColor의 value로서 정적인 값이 들어가게 된다면, 배경 색상을 동적으로 활용할 수 없게 되기 때문

  ```js
  backgroundColor: color;
  ```

4. 그렇다면 처음 화면이 렌더링될 때 useState hook의 초기값인 “red”에 따라 h1 태그의 첫 배경색은 빨간색으로 그려지게 됨

5. 아래처럼 초기값을 변경하면 화면에 그려지는 배경색 또한 파란색으로 나타남

   ```js
   useState(’blue’)
   ```

<br>

### State & Event

- 이전처럼 작업하면 여전히 직접 state의 초기값을 수정해줘야 한다는 문제점 발생
  <br> -> **setState function** (useState hook의 반환 값 중 두번째 요소)을 통해 해결

  ```js
  // Main.js

  import React, { useState } from "react";

  const Main = () => {
    const [color, setColor] = useState("red");

    return (
      <>
        <h1 style={{ backgroundColor: color }}>여기는 메인페이지입니다.</h1>
        <button onClick={() => setColor("blue")}>색상 바꾸기</button>
      </>
    );
  };

  export default Main;
  ```

- 실행시키고자 하는 바는 color 값을 “blue”로 바꿔주는 것이므로 setColor 함수를 실행시키고 인자로 바꾸고자 하는 값인 “blue”를 넘겨줌
- “색상 바꾸기”라는 버튼을 클릭하면 h1의 배경 색상은 빨간색에서 파란색으로 바뀜

<br>

### Summary

- state는 해당 컴포넌트가 UI에 보여줄 정보를 결정할 때 사용할 수 있는 상태값임
- useState hook을 호출하고, 구조 분해 할당을 통해 반환된 값을 사용할 수 있음
- 첫 번째 요소인 state를 통해 동적으로 관리하고자 하는 값을 할당할 수 있음
- 두 번째 요소인 setState function을 통해 state를 업데이트할 수 있음

<br>

---

## Props & State 활용

<br>

### State 전달

- 부모 컴포넌트에서 사용되는 state 값을 자식 컴포넌트에 props로 전달해서 활용하는 방법
- useState hook을 통해 state를 선언하고, 그 값을 알맞은 이름으로 넘기기
- 예시:

  - **state로 관리하고 있는 color 값**을 color라는 이름으로 넘겨줌
  - state 값을 업데이트하는 함수 **setColor**는 chageColor 함수를 만들어서 change라는 이름으로 넘겨줌

  <br>

  ```js
  // Parent.js (부모 컴포넌트)

  import React, { useState } from "react";
  import Child from "./Child";

  const Parent = () => {
    const [color, setColor] = useState("red");

    const changeColor = () => {
      setColor("blue");
    };

    return (
      <>
        <div>부모 컴포넌트입니다.</div>
        <Child color={color} change={changeColor} />
      </>
    );
  };

  export default Parent;
  ```

<br>

### State 적용

- 부모 컴포넌트에서의 데이터 전달

  - 부모 컴포넌트에서 ‘호랑이’ 라는 문자열을 animal 이라는 변수에 담아 관리하고 있는 예시

  <br>

  ```js
  // Child.js (자식 컴포넌트)

  import React from "react";

  const Child = (props) => {
    console.log(props); // {color: 'red', change: () => {setColor('blue')}}

    return (
      <>
        <div>자식 컴포넌트입니다.</div>
        <p>{props.color}</p>
        <button onClick={props.change}>색상 바꾸기</button>
      </>
    );
  };

  export default Child;
  ```
