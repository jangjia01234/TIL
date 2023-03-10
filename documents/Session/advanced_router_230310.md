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
