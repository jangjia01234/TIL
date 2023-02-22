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

<br>

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

// abcddddddefgeh ->   abcd        defgeh
// anotherArr = 4 -> anotherArr = 5 -> anotherArr = 6
// 결과는 6

console.log(getLengthOfStr("abbbcde"));
```
