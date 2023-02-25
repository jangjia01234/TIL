# 문제

strs은 단어가 담긴 배열입니다.
공통된 시작 단어(prefix)를 반환해주세요.

예를 들어 <br>

```c
strs = ['start', 'stair', 'step']
// return은 'st'

strs = ['start', 'wework', 'today']
// return은 ''
```

<br><br>

# 풀이

```js
const getPrefix = (strs) => {
  let endNum = 0;
  let ans = "";

  for (let k = 0; k < strs.length - 1; k++) {
    if (strs[k].length < strs[k + 1]) {
      endNum = strs[k].length;
    } else {
      endNum = strs[k + 1].length;
    }
  }

  for (let i = 0; i < endNum; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != strs[0][i]) {
        break;
      } else {
        if (j === strs.length - 1) {
          ans += strs[j][i];
        } else {
          continue;
        }
      }
    }
  }

  return ans;
};

console.log(getPrefix(["start", "stair", "step"]));
// st
```
