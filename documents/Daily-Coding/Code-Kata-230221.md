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

  for (i = 0; i < arr.length; i++) {
    if (Number(arr[arr.length - i]) === 0) {
      arr.splice(arr.length - i);
    }
  }

  let result = arr.reverse().join("");

  x < 0 ? (final = result * -1) : (final = result);
  return final;
};

console.log(reverse(-123000));
```

<br>
