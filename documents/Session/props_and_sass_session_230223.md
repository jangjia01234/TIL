# Props & State

#### 김명성 멘토님 (FE)

<br>

> [Westudy - Props & State](https://study.wecode.co.kr/session/116) 참고

<br>

- props 랑 state 중에서는 state가 더 중요한 개념
- UI를 그릴 때 state가 중요한 역할을 함

<br>

---

## Hook

- 클래스형 컴포넌트에서만 사용할 수 있는 기능(상태관리, 라이프사이클 관리)을 hook이 함수 컴포넌트에서도 할 수 있도록 함
  <br>-> hook 은 함수 컴포넌트 **내부**에서만 사용해야 함
- 리액트에 기본적으로 내장된 훅(ex.useState)도 있고, 그걸 이용해서 내가 원하는 훅을 만들 수도(커스텀 훅) 있음
- 최상위에서 호출 -> (주의) return 문 위쪽을 최상위라고 부름
- 조건문, 반복문 등 (중첩되는 코드 블럭) 안에서는 훅을 선언해서 사용할 수 없음

<br>

---

## Props

- 비슷한 예시: 부모 컴포넌트가 로그인이라고 할 때 그 안에서 사용하는 컴포넌트는 로그인의 자식 컴포넌트. 부모 -> 자식 순서로 원하는 어떤 데이터든 전달 가능
- 문자는 중괄호를 안씌우고 ""로 넘길 수 있다. 그 외에는 다 중괄호 씌워야 함!
- props 는 **객체 (object)** 형태로 전달 -> 그래서 animal.name 이런 식으로 찾아서 씀
- 부모에서 작성하는 animail = {animal} -> 앞이 key 값, 뒤에가 value 값인 객체를 만들어주는 코드임
- {props.animal} 중괄호를 안씌우면 그냥 텍스트가 됨. 씌워야 JSX에 맞춰서 쓰는 것.
- (esLint) 구조 분해 할당:

  - 종류: 배열 구조분해할당 / 객체 구조분해할당 두 가지
  - 사용하는 이유: 코드의 가독성을 좋게 하기 위함
    <br>-> 지금 예시에서는 props 객체에 animal 키를 찾으려고 '.'을 썼음 but 계속해서 .animal.pet.color 이렇게 하다 보면 코드가 길어짐
    <br>-> 필요한 코드만 간결하게 가져와서 쓰는 게 **구조분해할당**
  - 객체 구조분해할당: props는 객체. 객체를 아래와 같이 변경

    ```js
    const { animal, age, click } = props;
    ```

  - 위 내용을 선언하면 {props.animal} 라고 하지 않아도 {animal} 만 써서 사용할 수 있게 됨

<br>

---

## State

- State: 컴포넌트의 상태값, UI에 보여줄 정보를 결정 (나의 '상태'를 말함)
- props는 변경할 수 없음. (자식 컴포넌트에서 props로 받은 데이터 원본을 변경할 수 없음.) but state는 상태이기 때문에 바꿔줄 수 있음
- 앞에 있는 state 이름을 차용해서 camelCase로 작성 + set 붙이기 ex.[name, setName]
- 일반 변수 선언과의 차이는?
  <br>-> 앞의 state 이름을 변경하고자 하면 setName 사용
- useState의 특징: state 값이 변경되면 변경을 일으키는 동작이 끝났을 때 리액트가 다시 그려줌(렌더링)
- state를 쓰는 이유: 변경이 되면 필요한 부분만 바로 다시 그려지도록 하기 위해

<br>

---

## Props & State

- Props 로는 뭐든지 넘길 수 있는데, 역시 state, setState도 보낼 수 있다!
- 자식 컴포넌트에서 일어난 동작으로 인해 부모의 state가 변경되는 걸 끌어올리기라고 함. ex. 부모의 name state -> 자식에서 onclick event 로 setState('43기') 해서 변경
- 데이터는 단방향 (부모 -> 자식) 성을 지니고 있음. 자식 -> 부모는 (거의) 불가능. 지금 배운걸로는 불가능함.
- 데이터가 양쪽에서 변경되려면 어떻게 하냐? 부모에서 state를 선언해서 양쪽으로 분리 -> ex. 형제끼리 넘겨주려면 child one 에서 state와 setCount를 props로 넘겨주고, child two 에서 count를 넘겨줘서 이벤트 활성화
- 클래스명에 따라 색상 변경 isBlackColor

<br>

---

## [Review] Props & State 활용

- state는 동작에 따라 변화하는 값을 관리하기 위해 사용
- 따라서 '어떤 부분이 변하는지'를 확인하면서 진행하기!
- template literal: 문자열 안에서 자바스크립트 코드를 쓰고 싶을 때, 전체를 중괄호로 감싸고 벡틱으로 내부를 감싼 후 넣고자 하는 자바스크립트 코드에 ${}로 감싸서 사용

  ```js
  className = {`selected ${color}`}
  ```

<br>

- state가 변경되면 렌더링이 다시 이루어지게 됨 -> 보이는 화면을 (바뀌는 값만) 다시 그려주게 된다 (화면을 그리는 것 = 렌더링)
  <br> -> 조건부 렌더링: 조건에 따라서 변경
- 삼항연산자는 동작이 한 줄일 때 간결하게 조건문을 작성하기 위해 사용함

- 삼항연산자: 조건에 따라 true, false 값이 명확할 때 사용

  - isOpen 이 true면 div를 보여주고 아니면 비우기
  - css를 사용하지 않고 구현 가능한 방법

  ```js
  { isOpen ? (
    <div className="reviewMainContents">
      주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
      <br />
      다음에도 필요하면 또 여기서 시킬 것 같아요.
    </div>;) : ""
  }
  ```

- && 연산자 활용 : 앞 조건이 true일 때만 실행할 때 사용함 (false면 아예 사라짐)

  ```js
  { isOpen && (
    <div className="reviewMainContents">
      주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
      <br />
      다음에도 필요하면 또 여기서 시킬 것 같아요.
    </div>;)
  }
  ```

- prop는 부모로부터 전달받은 객체. color={colorname} 일 때 props의 key는 color -> props.color 형태로 사용

<br>

\*\*질문 : product 페이지에다가 컴포넌트를 붙였을 때는 잘 나오는데, 각각의 페이지에 가면 Text가 안보이는 이유가 뭔지? (부모 product로 옮기기 전까지는 잘 나왔음)
