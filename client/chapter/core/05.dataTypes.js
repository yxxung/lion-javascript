// 자바스크립트는 동적 타입 => 이를 엄격하게 관리하기 위해 정적 타입을 부여한게 타입스크립트

// 1. 숫자형
// 정수 및 부동소수점 숫자를 나타냅니다
// 일반적인 숫자 외에 Infinity, -Infinity, NaN와 같은 '특수 숫자 값'을 포함합니다.

// 2. BigInt

// 3. 문자형

// 4. 불린형

// 5. null
// 다른 언어에선 null을 존재하지 않는 객체에 대한 참조나 널 포인터를 나타날 때 사용
// 자바스크립트에선 존재하지 않는 값, 비어 있는 값, 알 수 없는 값을 나타내는 데 사용

// 6. undefined

// 7. 객체(array, function..)와 심볼
// 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시 자료형이라 부릅니다
// 반면 객체는 데이터 컬렉션이나 복잡한 개체를 표현할 수 있습니다

// 8. 심볼
// 심볼형은 객체의 고유한 식별자를 만들 때 사용됩니다

// 8+. typeof
// 인수의 자료형을 반환
// Math -> 수학 연산을 제공하는 내장 객체라 object 반환
// null -> 하위 호환성을 위해 오류지만 남겨둠. 객체 아님
// function -> function 반환

/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;

// 2. 값이 할당되지 않은 상태
let unknown;

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const hi = new String('hello'); // 문자 생성자(constructor)
// 생성자로 string을 만들 시 데이터 타입은 object

const double = 'hello'; // 문자 리터럴
const single = 'hello';
const backtick = `hello  ${1 + 3}`;

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(12323);

const integer = 123;
const floatingPointNumber = 10.45;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123);

const bigInteger = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({});

const obj = {};

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid');
console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof (1 + 2));

// 언어 상, 오류

// Object
const user = {
  // 객체의 properties
  name: 'tiger',
  age: 28,
  // 객체의 메소드
  sayHi: function () {
    console.log('say hi');
  },
};

// Array
const newArray = new Array();

const arr = [10, 100, 1000, 1, 2, 3];

const count = 0;

`li:nth-child(${count + 1})`;

// function
function 붕어빵틀() {
  
}


// this
