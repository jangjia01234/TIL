# React Intro

<br>

> [Westudy - React Intro](https://study.wecode.co.kr/session/113) 참고

<br>

## 목차

- React의 등장, 왜 가장 많이 사용되는지
- React가 무엇인지
  - Component의 개념과 종류
  - JSX에 대한 정의와 기본 특성
- 어떻게 사용하는지에 대해서 알아보겠습니다.
  - CRA 설치
  - 폴더 및 파일 구조 세팅

<br>

---

## React의 등장

<br>

- HTML/CSS, JS, DOM, Event -> jQuery -> Angular, Vue, React
- 규모가 커진 웹 애플리케이션을 개발하며 생산성을 향상시키고, 방대한 데이터 관리와 코드의 유지 보수를 위해 다양한 프레임워크와 라이브러리 등장
- 프레임워크: 다른 사람이 만들어둔 코드의 정해진 틀(frame) 속에서만 수동적으로 작업(work) 해야 함
  <br> ex. 모든 도구가 갖춰진 주방 (프레임워크)
- 라이브러리: 개발자가 작업을 진행할 때 필요한 기능을 찾고(library) 능동적으로 가져와서 사용할 수 있음
  <br> ex. 용도에 따라 가져다 쓰는 도구 (라이브러리)
- 리액트는 자바스크립트의 활용도가 높으며 개발 생태계가 활성화되어있고 생산성을 높여준다는 점과 같은 장점이 있어 많이 사용됨

<br>

---

## React의 정의와 특징

<br>

### React의 정의

- 사용자 인터페이스(UI)를 만들기 위한 자바스크립트 라이브러리
- UI를 자동으로 업데이트해준다는 장점이 있음
  - 데이터 기반의 선언적 개발 가능
  - 자동으로 UI를 업데이트하는 과정에서 Virtual DOM(가상 돔) 을 통해 최적화된 업데이트 가능
  - 컴포넌트 기반의 개발을 통해 복잡한 UI를 효과적으로 구성
  - JSX 문법으로 컴포넌트를 편리하게 작성

<br>

### React의 특징

- 선언적
- 가상 돔(Virtual DOM)
- 컴포넌트(Component)

<br>

- JSX

  - 특징
    - 한 JS 파일에서 HTML 마크업과 JS 스크립트 로직을 동시에 작성 가능
  - 문법

    - JSX element
      - JS 파일 어디에서나 필요한 곳에 HTML처럼 작성 가능
        ```js
        const hi = <p>Hi</p>;
        ```
    - Javascript 표현식

      - JSX 내부에서 자바스크립트 값을 출력하고 싶다면, { ... JavaScript... } 와 같이 { } 안에 자바스크립트 표현식을 작성할 수 있음

        ```js
        import React from "react";

        const Greetings = () => {
          const name = "김개발";

          return <h1>{name}님, Welcome to Wecode!</h1>;
        };

        export default Greetings;
        ```

    - JSX attribute

      - 태그의 attribute name(속성명)은 camelCase로 작성해야 함
      - attribute를 추가하고 싶을 때는 실제 HTML에서 쓰는 attribute name(속성명)과 다를 수 있으니 React 공식문서를 참고 (ex. class -> className)

    - Event 처리하기

      - 태그를 작성할 때 직접 이벤트와 이벤트 핸들러(Event Handler)를 부여할 수 있음

        - 이벤트는 앞에 on을 붙여 camelCase로 작성합니다.
        - 문자열이 아닌 함수로 이벤트 핸들러를 전달

        ```js
        // JS
        const title = document.getElementsByClassName("title")[0];
        title.addEventListener("click", handleClick);

        // JSX
        <h1 className="title" onClick={handleClick}>
          Welcome to Wecode!
        </h1>;
        ```

    - Inline Styling

      - style 속성은 camelCase 요소인 자바스크립트 객체로 받음
      - 괄호를 두 번 겹쳐서 씀: 바깥쪽 {}은 JSX 문법, 안쪽 {}은 자바스크립트 객체

        ```js
        // JS
        <h1 style={{ color: "red", backgroundImage: "yellow" }}>
          Welcome to Wecode!
        </h1>
        ```

    - Self-Closing Tag

      - 어떤 태그라도 self closing tag로 사용할 수 있음

    - Nested JSX

      - 반드시 최상위를 감싸고 있는 하나의 태그가 있어야 함
      - 이유: 리액트의 Virtual DOM에서 컴포넌트 변화를 효율적으로 비교할 수 있도록 한 컴포넌트는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문

        ```js
        const Greetings = () => {
          return (
            <div>
              <h1>김개발님!</h1>
              <h2>위코드에 오신 걸 환영합니다!</h2>
            </div>
          );
        };
        ```

    - React.Fragment

      - 추가적인 DOM element를 생성하지 않고 하나의 컴포넌트 안에 여러 요소(자식)를 간단하게 그룹화할 수 있는 기능
      - 축약형인 <> ... </> 문법으로도 동일하게 사용 가능

        ```js
        const Greetings = () => {
          return (
            <>
              <h1>김개발님!</h1>
              <h2>위코드에 오신 걸 환영합니다!</h2>
            </>
          );
        };
        ```

<br>

---
