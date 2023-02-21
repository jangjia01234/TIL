# Router & Sass

<br>

> [Westudy - Router & Sass](https://study.wecode.co.kr/session/114) 참고

<br>

## 목차

- SPA의 정의
- react-router-dom 이용하기
  - Router Component 구현
  - Routing 방법 2가지와 차이점
- <Link> Component와 <a> tag의 차이점
  - CSS Preprocessor(CSS 전처리기)의 역할
  - Sass 문법을 활용한 css -> scss 변환

<br>

---

## Router

<br>

- Routing

  - 리액트는 라이브러리이기 때문에 라우팅 기능이 없어 별도로 설치해야 함
  - Route: 경로 / Routing: 경로를 찾는 행위
  - Router: Routing(경로를 찾는) 도구
    <br> -> 다른 경로(url 주소)에 따라 다른 View(화면)를 보여줌

<br>

- SPA의 정의

  - SPA(Single Page Application): 페이지(html 파일)가 하나인 웹 애플리케이션
    <br> <-> MPA(Multi Page Application)
  - html 파일이 하나이기 때문에 하나의 html에서 경로(url)에 따라 다른 UI를 보여주는 라우팅 기능이 필요

  <br>

- React-Router

  - react-router-dom

    - 리액트에서의 라우팅을 위해 가장 많이 사용되는 라이브러리
    - 다음 명령어로 설치
      ```c
      npm install react-router-dom
      ```
    - package.json의 dependencies에서 잘 설치됐는지 확인

    <br>

  - Router 컴포넌트 구현 방법

    - Router 컴포넌트를 만드는 이유
      - CRA를 통해 프로젝트를 만들면 최초 화면에서 App 컴포넌트의 내용을 볼 수 있게 됨
      - url을 변경해서 이동하려면 별도의 Router 컴포넌트를 만들어야 함
    - Router 컴포넌트 위치
      - Router.js 파일은 src 폴더 안 index.js와 같은 위치에 생성
    - Router 컴포넌트 구현

      - BrowserRouter, Routes, Route 컴포넌트 import

        ```js
        // Router.js
        import React from "react";
        import { BrowserRouter, Routes, Route } from "react-router-dom";
        ```

    - **라우터 구현 절차**

      1.  BrowserRouter, Routes, Route 컴포넌트 import 및 삽입
      2.  Route path 및 element 작성
      3.  element에 들어간 js 파일 import
      4.  index.js 수정: App 컴포넌트 -> Router 컴포넌트 대체

      <br>

    - **라우터 구현하기**

      - BrowserRouter 컴포넌트로 전체를 감싸줌
      - BrowserRouter 컴포넌트의 자식 요소로 Routes 컴포넌트를 넣어줌
      - Routes 컴포넌트의 자식 요소로 Route 컴포넌트를 넣어줌

        ```js
        // Router.js

        import React from "react";
        import { BrowserRouter, Routes, Route } from "react-router-dom";

        const Router = () => {
          return (
            <BrowserRouter>
              {" "}
              // 1<Routes>
                {" "}
                // 2
                <Route path="/" element={<Components />} /> // 3
              </Routes>
            </BrowserRouter>
          );
        };

        export default Router;
        ```

    - 라우터 구성요소

      - BrowserRouter
        - 주소 변경에 대해 다양한 편의 기능을 제공해 주는 컴포넌트
        - 페이지가 새로고침 되지 않아도 주소 변경이 가능하게 하는 기능
      - Routes
        - 여러 Route를 감싸서 그중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할
      - Route

        - 규칙을 설정할 수 있는 컴포넌트
        - 사용법

          - Route 컴포넌트의 path 속성에 따라 화면에 그려줄 UI를 담은 컴포넌트 import
          - Route 컴포넌트의 path 속성을 설정해 주고, 설정한 경로(url)로 이동했을 때, 화면에 그려질 UI를 담은 컴포넌트를 element 속성에 설정

          <br>

          ```js
            // Router.js

            import React from 'react';
            import { BrowserRouter, Routes, Route } from 'react-router-dom';
            import Login from './pages/Login/Login';                    ⌉
            import Signup from './pages/Signup/Signup';                 ⎮ // 1
            import Main from './pages/Main/Main';                       ⌋

            const Router = () => {
                return (
                    <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />              ⌉
                        <Route path='/signup' element={<Signup />} >        ⎮ // 2
                        <Route path='/main' element={<Main />} />           ⌋
                    </Routes>
                    </BrowserRouter>
                );
            };

            export default Router;
          ```

    <br>

    - Router 컴포넌트 활용

      - 경로에 상관없이 모든 화면에서 표시되어야 하는 컴포넌트 띄우기
        <br> -> Routes 컴포넌트는 여러 Route를 감싸서 그중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜줌
        <br> -> 경로에 상관없이 보여주고 싶은 컴포넌트는 이 규칙에 포함되지 않도록 Routes 컴포넌트 밖에 위치
        <br> -> 아래 예시에서 Nav와 Footer 컴포넌트는 특정 경로에 따라 보여지는 것이 아니라 어떤 경로가 오더라도 항상 화면에 보여짐

        ```js
        const Router = () => {
          return (
            <BrowserRouter>
              <Nav /> // nav 컴포넌트
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/main" element={<Main />} />
              </Routes>
              <Footer /> // footer 컴포넌트
            </BrowserRouter>
          );
        };
        ```

    - 마지막 단계🔥 index.js 수정하기

      - index.js에서 App 컴포넌트가 있는 위치에 Router 컴포넌트로 대체
      - npm start -> Router 컴포넌트에서 설정한 path 값을 직접 url에 입력해서 UI 변경 확인
        <br> ex. http://localhost:3000/login 입력해서 로그인 페이지 뜨는지 확인

    <br>

    - 특정 동작을 통한 라우팅 구현 (Route 이동하기)
      - Link 컴포넌트 사용
      - useNavigate hook 사용
      - 정리
        1. Link 컴포넌트
           - 클릭 시 바로 페이지를 이동하기 때문에, 조건 없이 페이지를 이동할 때 적합
             <br> ex. Nav바 메뉴 혹은 Aside Menu 등 바로 페이지를 이동하는 경우
        2. useNavigate hook
           - 조건에 따라 페이지를 전환해야 할 때 사용
             <br> ex. 로그인 버튼 클릭 시에 백엔드 API로 데이터를 전송하는 작업을 한 뒤 페이지를 이동하거나 userData의 인증 혹은 인가가 필요한 경우, 혹은 로그인 작업 이후 응답 메시지에 따른 분기 처리를

<br>

- Summary
  1. Routing은 다른 경로(url 주소)에 따라 다른 View(화면)를 보여주는 것
  2. react-router-dom은 React에서 라우팅 기능을 구현할 수 있도록 도와주는 패키지로, 패키지 안에 있는 컴포넌트를 이용해 Router 컴포넌트를 구성할 수 있음
  3. 동작에 의해 라우팅 기능을 구현하는 방법으로는 Link 컴포넌트를 이용하거나 useNavigate hook을 사용하는 방법이 있음 (상황에 따라 사용)

<br><br>

---

## Sass

<br>

- CSS Preprocessor

<br>

- Sass

  - Sass 설치하기 (설치 후 dependencies 확인)

    ```c
     npm install sass
    ```

  - Sass vs Scss

    - Sass를 작성하는 문법은 Sass / Scss 로 나뉨
    - Scss가 더 넓은 범용성과 CSS의 호환성 등의 장점이 있어 사용 권장됨

  - Sass 적용하기

    - CSS 파일의 확장자명을 scss로 변경
    - ⚠️ 스타일 깨짐 현상
      - SPA 환경에서는 각각의 JS 파일에서 독립적으로 CSS 파일을 import 했다 하더라도, Router.js에 모든 페이지 컴포넌트가 모이고, index.js를 거쳐 결국 index.html에 모이게 되는 구조기 때문에 각각의 CSS 파일에서 겹치는 선택자가 있다면,스타일이 깨짐
    - 문제 해결

      - [비추 ❌] 모든 태그에 className을 다르게 주기 -> 유지보수 어려움
      - [추천 👍] CSS의 자손결합자 사용

        ```scss
        // src/pages/Login/Login.scss

        .login .title {
          // 2
          color: red;
        }
        ```

        1. 가장 최상위 부모 태그의 className에 컴포넌트 이름과 동일한 className 부여
           - ❗️ 최상위 부모 태그의 className은 카멜 케이스(camelCase)로 작성
        2. scss 파일에서 자손결합자를 활용해 스타일을 적용하고자 하는 선택자 앞에 최상위 부모 태그의 className으로 부여했던 선택자를 작성해서 컴포넌트별로 스타일이 적용될 수 있도록 구현

  - Sass의 활용

    - Nesting

      - className을 전부 다르게 적용하거나, 자손결합자 기능을 활용하는 방법은 문제점이 많음 -> nesting 으로 해결 가능

        ```scss
        // src/pages/Login/Login.scss

        nav {
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          li {
            display: inline-block;
          }

          a {
            display: block;
            padding: 6px 12px;
            text-decoration: none;
          }
        }
        ```

    - 변수
    - & 선택자
    - mixin
    - variables.scss 적용

<br>

- Summary
  - Sass:
    1. CSS 문법을 조금 더 편하게 작성할 수 있게 하고
    2. scss 문법으로 작성한 파일을 실행 전에 처리를 해줘서
    3. 브라우저가 읽을 수 있는 CSS 파일로 변환해 주는 CSS 전처리기
  - 기존 .css -> .scss로 변경하면 scss 문법 사용 가능
  - nesting, mixin 등 다양한 기능으로 편하게 스타일링 가능
