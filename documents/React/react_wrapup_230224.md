# React Wrap-up

<br>

### Lifecycle

- mount -> rerendering -> unmount
- 이런 라이프사이클을 hook 으로 관리 _ex. useState, useRef_
- JSX 작성시 주의사항
  - 중괄호 안에 **문** 이 안되고 **식** 만 들어갈 수 있음
  - class가 **예약어** 라서 className 으로 써야함
  - 컨텐츠가 없으면 self closing 하는게 좋음

<br>

### JavaScript 식, 문, 갑

- 식: 특정 값을 반환하는 것
  - ex. 삼항연산자
  - () ? a : b
- 문: 중괄호 단위로 만들어지는 것, 코드를 하나의 단위로 묶어놓을 수 있는 것
  - ex. if문, for문
  - if(){}, for(){}

<br>

---

### Virtual DOM

- 원본과 복사한 virtual dom을 비교해서 바뀐 부분을 원본 dom에 반영하는 방식
- critical render path 공부할 것

<br>

### react-router-dom 쓰는 이유

- 리액트: 사용자 인터페이스(UI, view)를 만드는 자바스크립트 라이브러리, 나머지 더 필요한 작업은 react-router-dom이 해줌
- html 은 하나인데 보여주고 싶은 부분을 갈아끼우고 싶을 때 씀
- 라우터 경로에 따라 다른 컴포넌트를 넣어가면서 사용

<br>

### React Event

- on~ 이벤트 종류는 리액트 공식문서 참고
- keypress, keydown, keyup 등 대동소이한 이벤트들이지만 작은 차이로 인해 기능 구현이 정상적으로 안될수도 있으므로 주의해서 사용하기

<br>

### React Inline Styling

- 리액트에서 inline style을 넣는 것
  - 사실 style이 props인 것! 중괄호를 두 번 쓰는데 바깥 중괄호는 자바스크립트 표현식을 위한 것이고, 내부 중괄호는 자바스크립트 객체. 자바스크립트 문법이기 떄문에 바깥에 중괄호를 싸서 JSX로 바꾸는 것.
    - 바깥 중괄호: 표현식을 위한 것
    - 내부 중괄호: 객체라서 씌워져 있음

<br>

### import, export

- import, export 문법 꼭 따로 공부할 것!
  - import할 때 중괄호를 씌우는 경우
  - export할 때 default를 붙이는 경우

<br>

### Router

- 일치하는 경로가 없을 떄 보여주는 컴포넌트

  ```js
  <Route component={<NotFound />} />
  ```

- Link, useNavigate, a tag

  - Link **컴포넌트**는 조건이 없이 바로 링크 이동
  - useNavigate는 url을 바꿔주는 함수. 바꾸고 싶은 url을 인자 앞에 넣으먼 **함수** 호출문 이라서 조건을 달아주거나 비교를 하거나 하는 등의 상황 컨트롤이 가능해짐
  - a 태그는 외부 링크로 이동할 때 사용
    - 같은 페이지지만 외부 서버로 이동하는 소셜로그인이나 본인인증같은 경우에도 a태그 사용

<br>

### Props

- props 는 **객체** 형태
- 헷갈릴 경우 props 를 콘솔로그로 찍어서 확인해보면서 진행할 것
- 구조분해할당 (destructuring assignment)

  - 주로 객체나 배열에 쓰임
  - props. 이 계속 반복해서 사용될 때 원하는 키에 바로 접근하고자 하기 위해서 구조를 분해하는 것
  - 구조분해할당 중첩하는 법도 찾아보기

  <br>

  ```js
  const { pet, englishName } = props;
  console.log(englishName);
  console.log(pet);
  console.log(pet);
  console.log(pet);
  ```

  <br>

- 매개변수 자리에서 바로 구조분해할당하는 법

  ```js
  function child({ pet, englishName }) {
    pet; // props.pet 으로 안써도 됨
    englishName;
  }
  ```

  <br>

- 매개변수가 길어졌을 때

  ```js
  function child (props) {
    const {pet, englishName, englishName, elglishMe, petName, petNumber}
  }
  ```

<br>

### State

- state(상태): 화면에 보이는 모습, 상태

  - ex. 장바구니에 물건이 1개 있었는데 추가 버튼을 누르면 2개로 화면이 바뀌어 보이는 것 -> 싱테가 바뀜

- state 선언도 사실 destructuring 과 유사한 형식, but 배열로 불러오는 것
- 반드시 [state, setState] 두 가지를 다 써줘야함
- setState 함수를 다른 함수 안에 넣는 이유 (ex. handleChange)

  - state 가 바뀌면 선언과 할당을 처음부터 다시 함
  - setState 를 그냥 setState()로 호출하면 처음부터 setState까지 계속 렌더링을 다시 함. 무조건 실행하기 위해.. -> too many re-renders error 발생
  - 함수 안에 setState를 넣으면 안에 함수 안에 있는 게 계속 실행되지는 않음. 감싼 함수만 실행됨

- props는 위에서 아래로만 내려감, but state는 끌어올리기를 통해 자식에서 데이터 바꿈으로써 부모의 state 까지 변경하며 흐름을 역행할 수 있음
  - ex. (대표적으로) 장바구니 기능
    <br>-> 감싼것 전체가 부모 컴포넌트, 수량 +하는 게 자식 컴포넌트. 자식 컴포넌트에서 값을 1씩 증가시켜서 더 담으면 부모 컴포넌트에서 보이는 전체 수량 등이 다르게 보임 (끌어올리기)

<br>

---

### 네이밍은 ' **_목적_** ' 을 생각할 것

- css 작성 시 id, class, tag 선택자는 지양하기

  - 단점1) 원하지 않는 곳에 적용될 수 있음
  - 단점2) 그 목적을 이름만으로 알기 어려움

- 클래스명 작성 시 순서, 위치, 방향으로 작명하지 말 것
  - ex. left, right, bottom ...
  - -> left 클래스 요소가 위치를 이동할 경우 이름을 다시 바꿔줘야 함
  - -> '**목적**'에 맞춰서 작성할 것

<br>

### 기타

- 상호작용하는 태그를 중첩해서 쓰면 최적화에 좋지 않으니 지양하라는 규칙이 있으니 찾아볼 것
  - ex. 버튼 안에 버튼을 넣는다거나..
- SCSS
  - css nesting을 하는 이유: 컴포넌트끼리 겹치지 않도록 하기 위해
  - 변수를 사용하는 이유: 반복적으로 사용하는 코드를 한 번에 적용시키기 위해. 수정할 사항이 있을 때 한 번에 변경 가능
  - mixin 은 실제 함수처럼 사용할 수 있음
    - argument 사용 가능 -> optional argument 키워드 검색
    - 두 인수 중에 하나만 쓰고 싶은 경우에는 안쓰는 argument에 _null_ 을 입력하면 됨! (안쓴다고 비우지 말고 null 쓸 것)
- hook
  - 최상단 return() 앞에서만 사용
  - 이름은 hook 이지만 사실 함수다!
- 위코드 컨벤션
  - 대문자로 시작하면 컴포넌트
  - 소문자로 시작하면 함수
- Tip
  - 천재가 아닌 당신.. 콘솔로그 꼭 찍으면서 개발하세요 🔥
