# Data 활용 Session

### 이정일 멘토님

<br>

> [Westudy - Data 활용](https://study.wecode.co.kr/session/124) 참고

<br>

## 목차

- 상수 데이터
- mock data

<br>

---

## 상수 데이터

- 정의

  - 변하지 않는 값을 상수 데이터라고 함
  - 배열과 객체로 이루어져 있음
  - 화면상은 그대로이지만 코드상은 간결하게 표현됨

  <br>

- 특징
  - 하드코딩: 직접 타이핑해서 하나하나씩 넣는 것 -> 하드코딩으로 하나하나 하면 길어져서 가독성이 낮아짐
  - 반복되는 UI는 상수 데이터로 만들어줄 것
  - ex. footer 리스트, menu 탭 등
  - 상수데이터로 하나만 만들어놓고 그 데이터를 활용해서 UI를 그리는 게 훨씬 가독성이 좋고, 유지보수에도 용이함
  - 상수데이터 안에 배열로 만들어주는 이유는 배열에서 사용하는 map 메소드를 사용하기 위함임
  - 길어질 경우 별도의 파일로 분리한 후 가져와서 사용해도 됨
    - 사용하는 파일과 동일한 위치에 추가
  - inline 으로 작성할 경우 export 밑에다가 사용
    - 컴포넌트 밖에 작성하면 state의 영향을 안받기 때문 (어차피 상수데이터는 바뀌지 않는 값이니..)
  - 주의
    - 데이터를 직접 작성하기 전에 그 구조를 먼저 구상하기
    - 배열 map 메서드 작성하는 방법 연습하기
    - [modern javascript tutorial](https://ko.javascript.info/array-methods) 설명과 연습문제 참고

<br>

- 사용법 (예시)

  ```js
  FOOTER_LIST.map(function (list) {
    return list.id; // 이런 식으로 원하는 데이터를 뽑아서 사용
  });
  ```

<br>

### map

- map은 원래 있던 요소로 (배열 안의 숫자(개수)만큼) 새로운 요소를 만들어주는 메소드
- 사용 방법

  - 인자 자리에 함수를 보내줌
  - 함수의 매개변수 자리에다가는 배열에 있는 Element가 뭔지 설명/예상할 수 있는 단어를 넣어줌(ex.num)
  - 함수 안에서 매개변수를 받아서 원하는 동작 작성 후, return

  <br>

  ```js
  const arr = [1, 2, 3, 4, 5];

  arr.map(function (num) {
    return num * 10;
  });

  /// [10, 20, 30, 40, 50]
  ```

---

## Mock Data

<br>

- 🔥 주의
  - 상수 데이터는 자바스크립트
  - Mock data는 JSON

<br>

- 기본적으로 UI를 구성하는 것 중에 바뀌는 것들은 백엔드에서 온다 (ex. 이미지, 상품 데이터, 카테고리 등..)
  - 백엔드에서 저장하고 있다가 프론트에서 요청하면 끄집어내준다
  - 백엔드에서 만들지 않는 것들(=안바뀌는 것들)만! 상수데이터로 만드는 것

<br>

- 프론트엔드에서 mock data란.. (백에서 자료를 주기 전에) 프론트에서 필요에 의해 백엔드의 데이터를 모방한 샘플을 만드는 것
  - 키값 등을 백엔드에서 구성한 그대로 작성해야 함
  - 이 샘플 데이터로 테스트를 미리 해볼 수 있음, 미리 구성을 맞춰볼 수 있음

<br>

- mock data 경로
  - public/data/mockData.json
- json
  - 객체와 거의 비슷하지만 key에 쌍따옴표/따옴표를 붙이는 형태
- fetch

  - public 안에 있는 데이터는 직접 접근이 안되고 통신으로 받아와야 함
  - fetch 를 사용해서 불러옴
    - 요청
      - 첫번째 인자는 API 주소
      - 두번째 인자는 옵션 (객체 형태)
        - ex. method, headers, body ..
    - 응답
      - then에서 함수가 화살표 함수의 형태로 들어감
      - 첫번째 then 에서는 응답(response) 안의 body 코드를 js 형식으로 바꿔줌 + ()해주면 리턴됨
      - 리턴된 코드를 다음 then에서 받을 수 있게 됨
      - 첫번째 then에서 받은(반환된) 데이터가 매개변수로 들어가고, state에 저장된 상태로 화면에 그릴 수 있게 setState 안에 넣음
  - 통신 시점은 useEffect를 쓸건지, onClick 때 쓸건지, 등등...

    - ex. 클릭시 넣으려면 onClick 안에 fetch를 걸어서 사용

  - 예시
    <br>

    ```js
    // 요청
    fetch("/data/recommendData.json", {
      method: "GET",
    })
      // 응답
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });

    // .............
    // return 문

    return (
      <div>
        {listData.map((list) => {
          return <p>{list.title}</p>;
        })}
      </div>
    );
    ```
