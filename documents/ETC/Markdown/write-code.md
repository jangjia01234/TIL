## 마크다운으로 코드 작성하기

> 코드블럭은 다음 2가지 방식으로 입력할 수 있다.

- `<pre><code>{code}</code></pre>` 이용방식

```
<pre>
<code>
function checkYear() {
  const year = 2023;
  return year;
}

console.log(checkYear());
</code>
</pre>
```

<pre>
<code>
function checkYear() {
  const year = 2023;
  return year;
}

console.log(checkYear());
</code>
</pre>

- 코드블럭코드("\```") 을 이용하는 방법

<pre>
<code>
```
function checkYear() {
  const year = 2023;
  return year;
}

console.log(checkYear());
```
</code>
</pre>

```
function checkYear() {
  const year = 2023;
  return year;
}

console.log(checkYear());
}
```

**깃헙**에서는 코드블럭코드("\```") 시작점에 사용하는 언어를 선언하여 [문법강조(Syntax highlighting)](https://docs.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks#syntax-highlighting)가 가능하다.

<pre>
<code>
```js
function checkYear() {
  const year = 2023;
  return year;
}

console.log(checkYear());
```
</code>
</pre>

```js
function checkYear() {
  const year = 2023;
  return year;
}

console.log(checkYear());
```
