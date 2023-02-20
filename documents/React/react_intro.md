# React Intro

<br>

> [Westudy - React Intro](https://study.wecode.co.kr/session/113) 참고

<br>

## 목차

- React의 등장, 왜 가장 많이 사용되는지
- React가 무엇인지
  - Component의 개념과 종류
  - JSX에 대한 정의와 기본 특성
- 어떻게 사용하는지
  - CRA 설치
  - 폴더 및 파일 구조 세팅

<br>

---

## React의 등장

<br>

- HTML/CSS, JS, DOM, Event -> jQuery -> Angular, Vue, React
- 규모가 커진 웹 애플리케이션을 개발하며 생산성을 향상시키고, 방대한 데이터 관리와 코드의 유지 보수를 위해 다양한 프레임워크와 라이브러리 등장

- 프레임워크: 코드의 정해진 틀(frame) 속에서만 수동적으로 작업(work)
  <br> ex. 모든 도구가 갖춰진 주방 (프레임워크)
- 라이브러리: 필요한 기능을 가져와서 사용할 수 있음
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
  - Virtual DOM(가상 돔) 을 통해 최적화된 업데이트 가능
  - 컴포넌트 기반의 개발을 통해 복잡한 UI를 효과적으로 구성
  - JSX 문법으로 컴포넌트를 편리하게 작성

<br>

### React의 특징

- 선언적

  - 절차적 vs 선언적

    - 절차적(명령적) 프로그래밍: 문제를 "어떻게" 해결할 것인가?
      - ex. 전방에 다리를 건널 때까지 직진해주시고, 소방서가 있는 블록에서 우회전 후 300m 앞에서 내려주세요.
      - ex. Vanilla JavaScript
    - 선언적 프로그래밍: "무엇을" 해결할 것인가?
      - ex. OO으로 가주세요.
      - ex. React

  - 원하는 결과(View)에만 초점을 두고 원하는 모습을 선언해서 리액트에게 전달 -> “어떻게" 하는지에 대한 중간과정은 리액트가 알아서 처리

<br>

- 가상 돔(Virtual DOM)

  리액트에서 UI를 업데이트할 때, “어떻게" 하는지에 대한 중간과정을 처리함. (DOM 요소에 변화를 주기 전, 내부적으로 가상 DOM을 이용해서 실제 DOM에 일어나야 하는 변화를 계산) 왜 중간 과정이 추가됐을까?

  - 문제
    - 웹 브라우저는 DOM 요소에 변화가 발생하면 다시 렌더 트리(DOM 트리 + CSSOM 트리)를 그리고, 레이아웃 위치를 계산하고(layout), 화면에 그리는 작업(paint) 수행
    - 복잡한 웹에서 매번 새로 그리면 성능이 저하됨
  - 해결방안
    - 리액트는 이전 UI 상태를 메모리에 유지하는 가상 DOM을 통해 변경될 UI의 최소 집합을 계산하여 DOM 처리 횟수를 최소화하고 효율적으로 진행
    - view에 변화가 있다면 실제 DOM에 적용되기 전에 가상 DOM에 먼저 적용시키고, 그 최종 결과를 실제 DOM으로 전달
      <br> -> 브라우저 내 연산의 양을 줄이면서 성능 저하 개선

<br>

- 컴포넌트(Component)

  - 정의
    - 재활용 가능한 UI 구성 단위
    - UI를 여러 조각으로 나누고 개별적으로 사용
  - 특징

    - 필요한 곳에서 재사용 가능
    - 독립적으로 사용할 수 있기 때문에 코드의 유지보수에 좋음
    - 다른 컴포넌트를 포함할 수 있음
    - 페이지가 어떻게 구성되어 있는지 한눈에 파악 가능

  - 종류

    - 클래스 컴포넌트(Class Component)

      - 반드시 render() 메서드가 있어야 함
      - 그 안에서 화면에 보여줄 JSX를 반환
      - state 및 lifecycle API를 통해 관련 기능 사용 가능

        ```js
        import React from "react";

        class App extends React.Component {
          render() {
            return <h1>This is Class Component!</h1>;
          }
        }

        export default App;
        ```

    - 함수 컴포넌트 (Function Component)

      - render() 메서드 없이 JSX를 반환

        ```js
        import React from "react";

        const App = () => {
          return <h1>This is Function Component!</h1>;
        };

        export default App;
        ```

  - 사용
    - 항상 첫 글자가 대문자가 되도록 작성
    - 선언한 컴포넌트는 다른 곳에서 import하여 사용할 수 있음

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

## Node.js & npm

<br>

### Node.js 과 npm

- Node.js: 자바스크립트가 브라우저 밖에서도 동작하게 하는 js 실행환경
- npm: Node.js 환경에서 사용할 수 있는 패키지들을 관리할 수 있는 도구(node package manager)
- ex. Node.js는 iOS / npm은 iOS 프로그램을 관리하는 App Store

<br>

### 설치하기

- LTS(Long Term Support) 버전 Node.js 설치 (mac은 HomeBrew로 설치 지양)
- 설치 후 터미널에 node -v , npm -v 를 입력해 버전 확인

<br>

---

## CRA

<br>

### CRA란?

- Node.js: 자바스크립트가 브라우저 밖에서도 동작하게 하는 js 실행환경

<br>

### CRA 초기 세팅

- 리액트 프로젝트 시작에 필요한 개발 환경 세팅 도구인 CRA로 프로젝트 구축
- 초기 세팅 과정

  - 터미널에서 프로젝트를 시작하고자 하는 폴더에 진입
    ```c
    cd [프로젝트를 구축하고자 하는 폴더]
    ```
  - 프로젝트 설치
    ```c
    npx create-react-app [프로젝트명]
    ```
  - 프로젝트 폴더 진입
    ```c
      cd [프로젝트명]
    ```
  - 로컬 서버 띄우기

    ```c
      npm start
    ```

  - 로컬 서버 확인
    - 성공 메시지와 로컬 서버 주소(http://localhost:3000) 확인

<br>

### CRA를 통한 프로젝트 구축

- CRA 초기 폴더 및 파일 구성
  - public 폴더의 index.html, src 폴더의 index.js, package.json 를 제외한 파일은 데모를 위한 파일이므로 삭제 가능
  - 이외에 폴더 및 파일은 프로젝트의 기획에 맞게 새롭게 구성
- node_modules, .gitignore, package.json

  - node_modules
    - npm으로 다운받은 패키지들의 소스 코드가 존재하는 폴더
    - 추가로 패키지를 설치할 때의 실제 코드는 node_modules 폴더 하위에 생성됨
    - 많은 용량을 차지하는 node_modules는 .gitignore에 추가 -> Git과 Github를 통해 관리 X
  - .gitignore
    - 용량, 보안 등 여러가지 문제로 Github 에 올리지 않아야 하는 파일 추가
  - package.json
    - CRA 기본 패키지 외에 추가로 설치된 라이브러리 혹은 패키지의 종류, 버전 등의 정보가 기록되는 파일
    - npm으로 설치하면, package.json의 dependencies에 라이브러리 혹은 패키지의 정보가 자동으로 추가됨
      - dependencies
        - npm을 통해서 설치한 모든 패키지 리스트와 버전 확인
        - 관련된 패키지의 실제 코드는 node_modules 폴더에 존재
      - scripts
        - 리액트 프로젝트를 실행하기 위해서 사용할 수 있는 명령어 관리 (ex. npm (run) start, npm (run) build)
      - package-lock.json
        - npm을 사용해서 패키지를 설치하거나 업데이트하면 자동으로 생성되거나 수정되는 파일
        - 설치된 패키지의 정확한 버전이 명시됨

- index.html, index.js, App.js

  - public/index.html

    - public: 실제 서버에 배포되는 폴더
    - 리액트에서는 index.html 파일을 직접 수정하는 것이 아니라, index.js 파일을 통해 index.html 파일의 id가 root인 div 내부에 코드를 추가하여 화면에 그려지게 됨

  - src/index.js

    - src: 개발에 사용되는 소스 파일을 모아두는 폴더
    - src/index.js

      - 리액트의 시작(Entry Point)이 되는 파일

        ```js
        import React from "react";
        import ReactDOM from "react-dom/client";
        import App from "./App";

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<App />);
        ```

  - App.js
    - CRA설치 후, 웹 애플리케이션의 첫 화면에 그려지는 파일
    - 데모를 위한 초기 컴포넌트

- README.md ([예시](https://github.com/wecode-bootcamp-korea/readme-collection/blob/main/project.md))
  - 프로젝트에 대한 정보를 나타내기 위해 작성하는 파일
