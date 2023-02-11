let name; // undefined
name = null; // null

console.log(null == undefined); // true
console.log(null === undefined); // false (엄격일치연산(===)는 value뿐만 아니라 type도 같아야 true가 나옵니다)

console.log(typeof null); // object
console.log(typeof undefined); // undefined
