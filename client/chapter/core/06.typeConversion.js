/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;
console.log(typeof String(YEAR));
console.log(YEAR + ''); // 암시적 형변환

// undefined, null
let days = null;
console.log(typeof String(null));
console.log(null + ''); // 암시적 형변환

let undef = undefined;
console.log(typeof String(undef));
console.log(undef + ''); // 암시적 형변환

// boolean
let isClicked = true;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); // NaN 출력

// null
let bankbook = null;
console.log(Number(bankbook)); // 0 출력

// boolean
let cutie = true;
console.log(Number(cutie)); // 1 출력

// string
let num = '250';
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(width);
console.log(+width); // 문자 -> 숫자 변환은 에러

let w = window.parseFloat(width);
console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// 명시적 형변환
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));

// 암시적 형변환
console.log(!false);
