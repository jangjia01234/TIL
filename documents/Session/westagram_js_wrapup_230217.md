# Westagram Js Wrap Up

### 전하은 멘토님 (FE)

<br><br>

##

1. 코드를 작성하는 데에는 정답이 없다. 가장 효율적인 코드가 좋은 코드.
2. html

   - 시맨틱 태그(= 의미있는 태그)를 사용해야 브라우저와 사용자 모두에게 가독성을 높일 수 있다
   - form: 제출 양식을 지정
   - html은 위에서부터 순서대로 (동기적으로) 진행하기 때문에 script 태그를 밑에 작성해서 js 파일을 연결해줘야 한다. 자바스크립트 파일이 무거울 경우 js를 불러온 다음에 html 파일을 불러오면서 문제가 생김. html을 먼저 불러오고 그 다음에 js를 불러오는 게 좋다.

   - 천천히 데려온다(비동기적으로) -> defer, async (더 공부하기)

   - link 태그: rel(=relationship)

3. css

   - flex jus alg center
     -> display: grid; place-items:center; 두 가지로 간단하게 표현 가능
     -> body에 position: relative + 자식 태그에 position absolute, top 50%, left 50% 해도 가능할 것 같지만.. 상자 시작점을 기준으로 배치되므로 transform:translate(-50%, -50%)

4. js

login.js

- use strict: (js가 자동으로 감지해줘서) 에러가 나올 수 있는 부분을 엄격하게 확인해줌
- DOM에 접근하는 방법 4가지
  - getElementById
  - getElementsByClassName <br>
    => 위 두 방법은 요소를 가져오고, 아래 방법은 노드를 가져옴
  - querySelector
    -> 가장 먼저 찾은 노드를 가져옴
  - querySelectorAll
    -> 여러 노드를 가져올 수 있음
- 함수 작성법: 함수표현식/함수선언식 -> 호이스팅 차이 (추가 공부)
- 이벤트 위임(=이벤트를 주는 것)
  form 태그 하나에만 적용해도 inputs 라고 하면 input태그에 모두 적용됨
- 함수를 나눠서 작성하는 습관을 들이자
  - addEventListener끼리도 묶어서 실행하거나..
  - 이렇게 하는 이유는 유지보수 때문임! 안되는 부분을 바로 찾고 해결하기 위해
  - **동작을 기준으로 함수를 나누기** <br>
    -> **✅하나의 함수에는 하나의 동작만 들어간다!**
- init 함수:
  <br> 위 함수를 실행하기 위해 맨 처음에 해야 하는 초기 함수를 모아놓은 것: 선언을 먼저 해주고, 호출하는데 init 함수를 어디에 쓰는지는 사람에 따라 다름. 보통은 화면에 보여주는 태그 순서대로, 먼저 발생하는 순서대로 작성

<br>

main.js

- !input.value.length === 0 === 값이 없을 때
- !input.value.length 가 값이 없다고 여겨지는 것은 0이 falsy로 여겨지기 때문? truthy/falsy 공부 필요
- **template literal** : innerHTML = `안에 ${ } 붙여가면서 html 태그 사용 가능 
<br>
=>` 안에 ${ } 쓰면서 작성하는 것은 변수와 html 태그를 같이 쓰기 위함임
- 태그 안에 텍스트는 innerText, 태그 자체를 innerHTML
  -> 처음 안 것. 이걸로 js 코드 개선할 수 있겠다!

<br>

### 기타

- js 테스트할 수 있는 프로그램: run.js
