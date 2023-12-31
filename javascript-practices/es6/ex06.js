/**
 * 구조 분해(Destructing)
 */

//ex1 - basic
const user = {
  firstName: "둘",
  lastName: "리",
  email: "dooly@gmail.com",
};

console.log(user.firstName, user.lastName, user.email); //둘 리 dooly@gmail.com

// 이렇게 해도, 오류 발생 X
//const firstName = user.firstName
//const lastName = user.lastName
//const email = user.email
//console.log(firstName, lastName, email)

// 하지만, 구조분해 방식으로 해야 좋음.
const { firstName, lastName, email } = user;

console.log(firstName, lastName, email); //둘 리 dooly@gmail.com

// ex2 - default value
const goods = {
  name: "TV",
  price: 1000,
  countStock: 10,
};

const { name, price, discountPrice, countStock = 0, countSold = 0 } = goods;
console.log(name, price, discountPrice, countStock, countSold); //TV 1000 undefined 10 0

// ex2 - 구조 분해 대상이 되는 객체의 속성 이름과 변수 이름이 다를 경우,
const person = {
  n: "마이콜",
  c: "korea",
};

const { n: fullName, c: country } = person;
console.log(fullName, country); //마이콜 korea

// ex4 - 내부 객체(nested object)의 구조 분해
const student = {
  name: "둘리",
  age: 10,
  score: {
    math: 30,
    korean: 100,
    science: 70,
  },
};

const {
  name: studentName,
  score: { math, korean, science, music = 0 },
} = student;

console.log(`${studentName} 의 점수 
국어: ${korean}
수학: ${math}
과학: ${science}
음악: ${music}`); //둘리 의 점수 국어: 100 수학: 30 과학: 70 음악: 0

// ex5 - 함수 파라미터

const averageScore = ({ score: { math, korean, science, music = 0 } }) =>
  (math + korean + science + music) / 4;

console.log(averageScore(student)); //50

// ex6 - 배열의 구조 분해: 기본
const color = [155, 200, 75];
let [red, green, blue] = color;
console.log(red, green, blue); //155 200 75

// ex7 - 배열의 구조 분해: default value
[red, green, blue, alpha = 0] = color;
console.log(red, green, blue, alpha);

// ex8 - 배열이ㅡ 구조 분해 : skip value
const [, , colorOfBlue] = color;
console.log(colorOfBlue); //75

// ex9 - swap
let x = 10;
let y = 20;
console.log(x, y); //10 20

const temp = x;
x = y;
y = temp;
console.log(x, y); //20 10

[y, x] = [x, y];
console.log(x, y); //10 20

// ex10 - 배열의 구조분해: ...(array spread operator)
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [firstColor, secondColor, ...otherColors] = colors; // 마지막에 사용 가능

console.log(firstColor, secondColor, otherColors); //red orange (5) ['yellow', 'green', 'blue', 'indigo', 'violet']

// 함수 파라미터
console.log(colors); //(7) ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(...colors); //red orange yellow green blue indigo violet

// ex10 - 배열의 구조분해: ...를 함수의 파라미터로 사용하기, arguments 대용

const f = (...colors) => {
  console.log(colors); //(3) ['red', 'yellow', 'blue']
};

f("red", "yellow", "blue");
