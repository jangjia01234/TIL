# 문제

숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.

num: 숫자
return: true or false (뒤집은 모양이 num와 똑같은지 여부)

<br>

예를 들어,<br>
num = 123
return false
=> 뒤집은 모양이 321 이기 때문

num = 1221
return true
=> 뒤집은 모양이 1221 이기 때문

num = -121
return false
=> 뒤집은 모양이 121- 이기 때문

num = 10
return false
=> 뒤집은 모양이 01 이기 때문

<br><br>

# 풀이

```js
const sameReverse = (num) => {
  let arr = String(num).split("");
  let result = arr.join("");
  let reverseResult = arr.reverse().join("");

  return result === reverseResult ? true : false;
};

console.log(sameReverse(-121));
// false
```

<br>

1. 숫자 num을 문자열로 전환 후 배열로 변환, 변수 arr에 할당

   ```js
   // num이 숫자이므로 String()을 사용해 문자열로 바꾼 후 split을 사용해 바로 배열로 변환
   let arr = String(num).split("");
   ```

2. 뒤집히지 않은 값(result)과 뒤집힌 값(reverseResult) 선언

   ```js
   let result = arr.join("");
   let reverseResult = arr.reverse().join("");
   ```

3. 두 값이 같으면 true, 다르면 false 반환

   ```js
   // 삼항연산자를 활용해 간결하게 작성
   // 삼항연산자 사용시 return을 앞에만 한 번 작성하면 됨
   return result === reverseResult ? true : false;
   ```
