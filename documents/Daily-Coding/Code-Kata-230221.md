# 문제

reverse 함수에 정수인 숫자를 인자로 받습니다.
그 숫자를 뒤집어서 return해주세요.

x: 숫자
return: 뒤집어진 숫자를 반환!

예들 들어,
x: 1234
return: 4321

x: -1234
return: -4321

x: 1230
return: 321

<br>

# 풀이

```js
const reverse = (x) => {
  let arr = String(Math.abs(x)).split("");

  let result = arr.reverse().join("");

  x < 0 ? (final = result * -1) : (final = result);
  return final;
};

console.log(reverse(-12300000)); // -321
```

<br>

1. 문자열 x를 split 해서 배열로 전환

   ```js
   // 숫자 x를 문자로 바꿔줌
   String(x);

   // 음수일 경우 '-'를 없애기 위해 Math.abs()로 절댓값 변환
   String(Math.abs(x));

   // 문자열을 split 해서 배열로 변환, 변수 arr에 할당
   let arr = String(Math.abs(x)).split("");
   ```

2. 배열을 뒤집은 후 join 해서 다시 문자열로 만들기

   ```js
   // 배열 뒤집기
   arr.reverse();

   // 뒤집은 배열 문자열로 전환, result 에 할당
   let result = arr.reverse().join("");
   ```

3. x가 음수일 때 결과를 음수로 변환해 출력하기

   ```js
   // x < 0 이면 결과값에 -1 곱하고, 양수일 경우 그대로 출력
   x < 0 ? (final = result * -1) : (final = result);
   return final;
   ```
