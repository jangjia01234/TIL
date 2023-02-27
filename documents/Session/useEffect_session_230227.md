# useEffect Session

<br>

> [Westudy - useEffect](https://study.wecode.co.kr/session/123) 참고

<br>

## 목차

- React에서 UI Rendering과 Side Effect의 차이
- useEffect hook을 활용해 원하는 타이밍에 Side Effect 발생시키기
- 위 과정에서 일어나는 컴포넌트 렌더링 과정 설명

<br>

---

## Side Effect

- useEffect: side effect를 관리하기 위해 사용하는 hook
- useEffect를 활용하면 원하는 타이밍에 side effect를 일으킬 수 있다
- 프로그래밍에서의 side effect: 내가 의도하지 않은 다른 동작이 일어나는 것
  - 함수 내부에서 원하는 동작이 다 이루어지는 것은 side effect가 없다고 함
  - 함수 외부에서 값을 가져오거나 / 가져와서 다른 값을 도출/변경하는 행위는 side effect가 있다고 함
    - console.log() 는 side effect가 있는 것 (console.log라는 외부 메소드를 가져와서 사용하는 것이기 때문)

<br>

## useEffect

- data fetching에서 가장 많이 사용됨
- 렌더링 과정에 대해서 잘 이해하는 게 중요
  - useEffect 안에 console.log 넣어보면서 계속 순서 연습해볼 것
- 사용법
  - useEffect(() => {},[])
- 장점
  - side effect는 위에서 아래로 읽어내려옴
  - useEffect는 렌더링이 다 된 이후에 실행됨 -> side effect가 렌더링을 blocking하는 문제 해결
  - useEffect의 빈 배열(= **의존성 배열**) 활용 -> 매 렌더링마다 side effect 실행되는 것 막기
- Tip

  - 배열이 비어있으면 최초 렌더링시 1번만 실행됨
  - => side effect를 통제 가능하게 만들 수 있음
  - 동시에 두 가지 값을 추적하려면 배열 안에 쉼표로 두 개 넣어주기

- Quiz 1 (click, key event)

  - mount -> 클릭 -> input창에 입력했을 때 console에 찍히는 순서:

  - 처음에 3개(3,1,2) + 클릭시 1번(3) + 입력시 2번(3,2) = 6번
  - 클릭시 1번만 실행되는 이유: (state가 변하면 처음부터 리렌더링 -> )빈 배열은 최초 렌더링시 1번만 실행되기 때문
  - 처음 렌더링이 될 때에는 배열이 비어있든 비어있지 않든 무조건 실행됨 (막으려면 조건문 넣어야 함)

- Quiz 2 (child component)
  - state의 변화는 해당 컴포넌트에만 영향을 미침
  - 자식 컴포넌트에 변화가 일어나면 해당 컴포넌트만 렌더링되기 때문에 부모의 console.log가 실행되지 않음. 부모 -> 자식은 영향을 미치는데 자식 -> 부모는 영향 x

<br>

- useEffect 활용 예시

  ```js
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  ```

<br>

### Clean up effect

```js
useEffect(() => {
  const time = setInterval(() => {
    console.log(1);
  }, 1000);

  return () => {
    clearInterval(time);
  };
}, []);
```

- 특정 페이지에서만 추적 동작이 필요하고 다른 페이지로 넘어간 이후에는 필요 없을 때 clean up이 필요
- 흔히 setInterval 이나 setTimeout 사용 후 clearInterval return 해서 끝냄

<br>

## 기타

- API: 통신을 할 때 프론트가 서버에게 데이터를 요청하는 주소
- fetch("API 주소", {})
- 연습은 codesandbox 활용하기
