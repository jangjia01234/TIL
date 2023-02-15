//falsy,truthy
//논리연산자
//parameter를 console.log로 확인
//template literal

function formatDate(year, month, date) {
  console.log(year, month, date);

  if (year && !month && !date) {
    return `${year}년`;
  } else if (year && month && !date) {
    return `${year}년 ${month}월`;
  } else if (year && month && date) {
    return `${year}/${month}/${date}`;
  }
}

console.log(formatDate(1234));
console.log(formatDate(1234, 5));
console.log(formatDate(1234, 5, 10));
