## Advanced Router

### 이정일 멘토님

<br>

- 현재 사용중인 router는 정적인 형태
- id에 따라 url이 달라지는 동적 라우터를 배워보자

  - 데이터가 얼마나 들어올지, 어떤 데이터가 들어올지 모르기 때문에 해당 데이터가 가진 고유의 id를 가지고 url에 담아서 보내주는 형태
  - ex. /productDetail/:id
  - : 뒤에 붙는 id와 같은 문자열을 **path parameter**라고 함 (경로 매개변수)
  - useParams hook 사용하여 호출하면 path params의 값을 객체 형태로 반환

    - **useParams는 주소창에 있는 path parameter 값을 객체 형태로 가져오는 점** 꼭 기억하기 !!!

    <br>

    ```js
    // 주소창에 아래 주소 입력했을 때
    // http://localhost3000/detail/2

    import { useParams } from "react-router-dom";

    function Detail = () => {
        const params = useParams();
        console.log(param.id);
        // output: 2
    }
    ```

    <br>

### 활용 순서

1. useNavigate나 Link와 같이 주소를 바꾸는 함수를 사용 (url 바뀌게 설정, navigate/Link의 해당 url에 넣고 싶은 id 넣기)
2. path parameter params로 가져온다 (const 선언)
3. 백엔드 api에 가져온 path parameter를 넣어서 요청한다 (fetch url에 path parameter 넣기)

<br>

### 활용 예시

```js
// src/Detail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams(); // 1
  const userId = params.id; // 2
  // 아래와 같이 줄일 수 있음
  // const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`) // 3 (백틱(template literal)으로 작성하는 점 주의)
      .then((response) => response.json())
      .then((result) => setUser(result.data));
  }, [userId]); // 4

  const { first_name, email, avatar } = user;

  return (
    <section>
      <article>
        <p>
          <strong>{first_name}</strong>
        </p>
        <p>{email}</p>
        <img alt="avatar" src={avatar} />
      </article>
    </section>
  );
};

export default Detail;
```

<br>

### TIP

- 연습 자료: dynamic routing assignment 과제로 연습할 것 (동적 라우팅 연습 과제 westudy 참고)
- 유저를 3초 이상 기다리게 하지 말 것. 데이터를 빠르게 화면에 가져올 수 있도록 효율적으로 구성하는 것이 중요하다.

<br>

## query string

<br>

- query string (query parameter 라고도 부름)
- 주소 표시줄의 물음표 이후가 query string 이다
- ?key=value 로 기본 구성 (물음표는 무조건 1개)
- & (seperator)를 뒤에 붙여서 key, value 조합을 여러 개 계속 이어붙일 수 있음
- useLocation()를 선언하는 location도 객체 형태를 반환
- 사용하는 경우
  - 특정 정보만 받아서 사용해야 할 때
    - ex. 필터링
  - 대량의 데이터를 잘라서 작게 받고 싶을 때
    - ex.
    1. 페이지네이션 (페이지를 추적해서 url로 데이터 받기)
    2. 무한 스크롤 (스크롤 위치를 추적해서 스크롤이 어느 지점까지 내려왔을 때 데이터를 받는 원리)
    3. 추천/최신/가격순 정렬(queryString에 담아서 최신/추천순으로 sorting 해서 달라고 백엔드로 요청을 보내면 백엔드에서 처리해서 다시 보내줌)
- 사용 순서

  1. navigate로 올리고
  2. useLocation, useSearchParams hook으로 가져와서
  3. 백엔드로 전달

- 예시 (useLocation)

<br>

```js
// src/List.js

// 경로: localhost:3000/list?sort=popular

import React from "react";
import { useLocation } from "react-router-dom";

const List = () => {
  const location = useLocation();
  // {search:"",state:"", key: ""}
  const queryString = location.search;
  // loaction.search로 주소창 끝의 내용 불러올 수 있음
  // ?sort=popular

  return (
    <section>
      <h1>This is List Page</h1>
      <p>
        쿼리 스트링: <b>{queryString}</b>
      </p>
    </section>
  );
};

export default List;
```

<br>

- 예시 (useSearchParams)
  - state 와 유사하게 사용하지만 다른 점도 존재
  - searchParams의 get으로 특정 key에 접근하면 value가 나오게 할수도 있음
    - ex. searchParams.get("key값") // 주소창 value 출력
  - getAll은 해당하는 모든 value를 배열로 리턴
  - 더 많은 예시는 [westudy](https://study.wecode.co.kr/session/content/354) 참고

<br>

```js
// src/List.js
// URL: /list?sort=popular&sort=latest

import React from "react";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSortParams = () => {
    searchParams.set("sort", "clear");
    setSearchParams(searchParams);
  };

  const appendSortParams = () => {
    searchParams.append("sort", "hello-world");
    setSearchParams(searchParams);
  };

  return (
    <section>
      <h1>This is List Page</h1>
      <p>
        toString: <b>{searchParams.toString()}</b>
      </p>
      <p>
        get("sort"): <b>{searchParams.get("sort")}</b>
      </p>
      <p>
        getAll("sort"):
        {searchParams.getAll("sort").map((value) => (
          <b key={value}>{value} </b>
        ))}
      </p>
      <button onClick={setSortParams}>setSortParams</button>
      <button onClick={appendSortParams}>appendSortParams</button>
    </section>
  );
};

export default List;
```

<br>

### 페이지네이션

- 페이지네이션: 백엔드한테 여기서 여기까지 잘라서 달라고 요청하는 쿼리
- useNavigate 로 다음과 같은 링크 전달 (offset: 시작점, limit: 개수)
  - ex. localhost:3000/list?offest=40&limit=20
- 의존성배열에 query 꼭 넣어보기!

<br>

### TIP

- 연습 자료: query string assignment 과제로 연습할 것 (쿼리 스트링 연습 과제 westudy 참고)
