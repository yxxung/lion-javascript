/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? : arguments

  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구해보자

  // 1. for...of 문
  let total = 0;
  // for (const e of arguments) {
  //   total += e;
  // }

  // 2. Array의 forEach 능력을 빌려쓸게~
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // 3. slice 를 빌려써서 배열로
  // instance method
  // let realArray = Array.prototype.slice.call(arguments);
  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // 4. static method - Array.from()
  // let realArray = Array.from(arguments)
  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // Object.prototype.toString() - instance method
  // Object.entries() - static method

  // 5. spread syntax
  // return [...arguments].reduce((acc, cur) => acc += cur);

  return total;
};

// 위에서 호출하면 에러
console.log(calculateTotal(1000, 500, 200, 2500));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {

};

// 객체처럼 사용이 가능
// anonymousFunctionExpression.isActive = true;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {

};

// 콜백 함수 (표현)식
// 1.
let callbackFunctionExpression = function(callback) {
  callback();
};

callbackFunctionExpression(
  function() {
    console.log('콜백 함수 실행!');
  }
);

// 2.
const movePage = function(url,success,fail){

  if(url.match(/http.+www/) && typeof url === 'string'){
    success(url)
  }else{
    fail()
  }
}

movePage(
  'www.naver.com',
  function(url){
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

    setTimeout(() => {
      window.location.href = url
    }, 3000);

  },
  function(){
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
)

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// 함수를 만드는 것과 동시에 실행을 수행
// Immediately Invoked Function Expression
let IIFE;

// 변수의 보호
// 은닉화 incapsulation(캡슐화)
// 함수 스코프를 강제로 생성해서 변수 탈출 방지

// 클로저 관련하여 IIFE 패턴 암기~

const MASTER = (function(g){
  console.log(g);

  var x = 10;
  let uid = 'ajttk753@!'

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    }
  }

})(window)

console.log(MASTER.setKey('새로운 비밀번호'));