# 문제

`twoSum`함수에 숫자배열과 '특정 수'를 인자로 넘기면,
더해서 '특정 수'가 나오는 index를 배열에 담아 return해 주세요.
<br> (target으로 보내는 합계의 조합은 배열 전체 중에 2개 밖에 없다고 가정하겠습니다.)

```
nums: 숫자 배열
target: 두 수를 더해서 나올 수 있는 합계
return: 두 수의 index를 가진 숫자 배열
```

예를 들어,

```
nums은 [4, 9, 11, 14]
target은 13

nums[0] + nums[1] = 4 + 9 = 13 이죠?

그러면 [0, 1]이 return 되어야 합니다.
```

<br><br>

# 풀이

```js
const twoSum = (nums, target) => {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([1, 2, 3, 4], 4));
// [0, 2]
```

<br>

1. 배열의 두 요소의 합이 target일 때 (이중 for문 사용)

```js
// nums 배열의 i번째와 그 다음 수의 합이 target과 같을 경우

for (i = 0; i < nums.length - 1; i++) {
  for (j = i + 1; j < nums.length; j++) {
    if (target === nums[i] + nums[j]) {
      // 코드 위치
    }
  }
}
```

2. 그때의 i, j 값을 배열로 반환

```js
// 별도로 빈 배열을 선언해 push 하지 않고, [i, j] 형태로 반환

for (i = 0; i < nums.length - 1; i++) {
  for (j = i + 1; j < nums.length; j++) {
    if (target === nums[i] + nums[j]) {
      return [i, j];
    }
  }
}
```
