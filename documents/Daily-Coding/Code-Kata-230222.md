# 문제

String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

str: 텍스트
return: 중복되지 않은 알파벳 길이 (숫자 반환)

예를 들어,
str = "abcabcabc"
return 은 3
=> 'abc' 가 제일 길기 때문

str = "aaaaa"
return 은 1
=> 'a' 가 제일 길기 때문

str = "sttrg"
return 은 3
=> 'trg' 가 제일 길기 때문

<br><br>

# 풀이

```js
const getLengthOfStr = (str) => {
  let arr = str.split("");

  let newArr = [];
  let anotherArr = 0;

  for (i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);

      if (anotherArr < newArr.length) {
        anotherArr = newArr.length;
      }
    } else {
      newArr = [];
      newArr.push(arr[i]);
    }
  }
  return anotherArr;
};

console.log(getLengthOfStr("abcddddddefgeh"));
// 6 (defgeh의 길이)
```

<br>

1. 문자열 str를 배열로 변환, 변수 arr에 할당

   ```js
   // str이 문자열이므로 split을 사용해 바로 배열로 변환
   let arr = str.split("");
   ```

2. 빈 배열과 값 선언

   ```js
   let newArr = [];
   let anotherArr = 0;
   ```

3. for문 및 if문 작성

   ```js
   // arr[i]가 중복이 아닐 때 새 배열에 push
   for (i = 0; i < arr.length; i++) {
     if (newArr.indexOf(arr[i]) === -1) {
       newArr.push(arr[i]);
     }
   }
   ```

4. 중첩된 if문 작성

   ```js
   // newArr 의 길이가 더 길 경우 anotherArr 에 해당 값을 할당하면서 계속 진행
   for (i = 0; i < arr.length; i++) {
     if (newArr.indexOf(arr[i]) === -1) {
       newArr.push(arr[i]);

       if (anotherArr < newArr.length) {
         anotherArr = newArr.length;
       }
     }
   }
   ```

5. if 문의 else 조건 추가, anotherArr 반환

   ```js
   // if 문 조건을 충족하지 않을 경우 기존 배열을 비우고 새로 push
   // ex.
   // str = "abcddddddefgeh"일 경우: abcd < defgeh
   // anotherArr = 4
   // anotherArr = 5
   // anotherArr = 6
   // 이런 식으로 계속 재할당해서 최종 결과로 6 반환

   for (i = 0; i < arr.length; i++) {
     if (newArr.indexOf(arr[i]) === -1) {
       newArr.push(arr[i]);

       if (anotherArr < newArr.length) {
         anotherArr = newArr.length;
       } else {
         newArr = [];
         newArr.push(arr[i]);
       }
     }
     return anotherArr;
   }
   ```
