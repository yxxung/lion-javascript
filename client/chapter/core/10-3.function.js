/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// rest parameter
let calcAllMoney = (...args) => {
  return args.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

const result = calcAllMoney(1000, 500, 200, 2000);
// console.log(result);

// 화살표 함수와 this
// this를 왜 쓰는가?
// 함수선언문과 표현식은 일반 함수이기 때문에 this를 사용했을 때
// 일반함수 : 나를 호출한 대상을 this로 바인딩 한다.
// 화살표함수 : this를 바인딩하지 않음. 찾아야 한다면 내 부모꺼 가져옴.

// 함수선언문
function normalFunction() {
  console.log(this);
}
// 윈도우가 호출
// window.normalFunction();

// 함수표현식
const expressionFunction = function () {
  console.log(this);
};
// 윈도우가 호출
// window.expressionFunction();

// 화살표함수식
const arrowFunction = () => {
  console.log(this);
};
// 화살표 함수에는 this가 없다
// 상위 컨텍스트(글로벌) > 함수 컨텍스트
// arrowFunction(); // 나보다 상위 컨텍스트(부모)를 찾는다 => 여기선 window

// 객체 안에서 this

// 객체에 메서드를 정의할 때는 화살표 함수보다 일반 함수가 더 좋은게 아닌가요? yes
// 메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋나? yes

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    // 나를 호출한 대상 = user
    console.log();

    // forEach문 안의 일반함수 형태의 콜백함수는 this를 찾아올 수 없음(window를 찾아옴)
    // arrow function은 상위 컨텍스트(totalGrades의 this는 user)를 찾아옴
    this.grades.forEach((item) => {
      console.log(this);
      // this.total += item;
    });
    return this.total;
  },
  totalGrades2: () => {
    // 얘의 부모는 객체 아냐...? 응 아님
    // user(객체)는 this가 없음. this 역할을 하지 않음
    // 함수도 아니고 더 상위 환경인 글로벌 컨텍스트에서 this를 가져옴
    console.log(this.grades);
  },
  totalGrades3: function() {
    function sayHi() {
      console.log(this);
    }
    // 누구에 의해 호출된 게 아님. window에 바인딩된 건 아니지만 window가 호출시켰다
    sayHi();
  }
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;


