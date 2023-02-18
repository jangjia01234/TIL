# Westagram Js Wrap Up

### 전하은 멘토님 (FE)

<br><br>

## 1. Intro

코드를 작성하는 데에는 정답이 없다. 가장 효율적인 코드가 좋은 코드.

<br>

## 2. HTML

- 시맨틱 태그(= 의미있는 태그)를 사용해야 브라우저와 사용자 모두에게 가독성을 높일 수 있다
- form: 제출 양식을 지정
- script 태그의 위치:

  - html은 위에서부터 순서대로 (동기적으로) 읽기 때문에, script js 파일을 연결시 태그를 하단에 작성해야 한다.
  - 자바스크립트 파일이 무거울 경우 js를 불러온 다음에 html 파일을 불러오면서 문제가 생김
  - html을 먼저 불러오고 그 다음에 js를 불러오는 게 좋다.

- 천천히 데려오기 (비동기) -> defer, async (더 공부하기)

<br>

## 3. CSS

- 가운데 정렬하는 방법

  1.  flex

      ```css
      display: flex;
      jusify-content: center;
      align-items: center;
      ```

  2.  grid

      ```css
      display: grid;
      place-items: center;
      ```

  3.  position
      : 상자 시작점을 기준으로 배치되므로 transform으로 이동

      ```css
      <!-- 부모 태그 -->
      position: relative;

      <!-- 자식 태그 -->
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ```

<br>

## 4. JavaScript

> login.js

- **use strict**: (js가 자동으로 해주는 부분 때문에) 에러가 나올 수 있는 부분을 엄격하게 확인해줌

  - [MDN Strict mode](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode) 참고

    1. 기존에는 조용히 무시되던 에러들을 throwing합니다.
    2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
    3. 엄격 모드는 ECMAScript의 차기 버전에서 정의될 문법을 금지합니다.

    <br>

- DOM 접근법

  - 종류:

    - getElementById
    - getElementsByClassName
    - querySelector: 가장 먼저 찾은 노드를 가져옴
    - querySelectorAll: 여러 노드를 가져올 수 있음

    <br>

  - 위 두 방법은 **요소**를 가져오고, 아래 두 방법은 **노드**를 가져옴
  - Node는 태그 노드와 텍스트 노드 전체를 가리키며, Element는 텍스트 노드를 제외하고 태그(ex. a tag)만 가리킴 ([제로초 블로그](https://www.zerocho.com/category/JavaScript/post/573b4165a54b5e8427432948) 참고)

<br>

- 함수 작성하기

  - **✅ 동작을 기준으로 함수 나누기** <br>

    - addEventListener끼리도 init 함수로 묶어서 실행
    - init() 함수
    - 위 함수를 실행하기 위해 맨 처음에 해야 하는 초기 함수를 모아놓은 것
    - 선언을 먼저 해주고 호출하는 순서. 주의하기
    - init 함수를 어디에 쓰는지는 사람에 따라 다름
    - 대개 화면에 보이는 태그 순서 / 먼저 발생하는 순서대로 작성

    <br>

  - **✅ 하나의 함수에는 하나의 동작만 들어간다!**
    <br> -> 유지보수 측면에서 중요
    <br> -> 안되는 부분을 바로 찾고 해결하기 위해

  - 함수표현식/함수선언식 -> 호이스팅 차이 (추가 공부)

  - **이벤트 위임** <-> **이벤트 버블링**
    - 이벤트 위임: 하위 태그에 이벤트를 주는 것 <br>
      ex. form 태그에 적용한 이벤트가 하위 태그에도 적용됨
    - 이벤트 버블링:

<br>

- 기타
  - (동작 관련해서) 뭐가 안되면 바로 **콘솔**부터 보기, 스타일이 안되면 elements를 수정해가면서 진행
    - 행동 플로우: 오류 발견 -> 콘솔 확인 -> 구글링
  - 이번 과제에서 자바스크립트의 어떤 부분이 어려웠는지 스스로 파악 -> 리액트로 어떻게 해소되는지 확인

<br>

> main.js

- !input.value.length -> 값이 없을 때
- truthy/falsy 추가로 공부하기
- **template literal** :
  - innerHTML = 백틱 안에 ${ } 붙여가면서 html 태그 사용 가능
  - ${ }는 변수와 html 태그를 같이 쓰기 위해 사용
- 태그 안에 텍스트는 innerText, 태그 자체는 innerHTML
- input 내용 비우기 -> input.value = ""
- 이벤트리스너 이벤트에 input을 쓰셨다. 따로 알아보자!

<br>

### 기타

- js 테스트할 수 있는 프로그램: run.js
