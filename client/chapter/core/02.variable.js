/* ------------------ */
/* Variables          */
/* ------------------ */
let admin; // undefined
let name; // undefined

// 참조에 의한 복사
name = 'John';
admin = name;
name = 'beom';

// console.log(admin);

/* ----------- */

let planet = 'earth';
let currentUserName = 'young';

/* ----------- */

const BIRTHDAY = '18.04.152'
// age는 하드 코딩된 값이 아니고 계산 후 바뀌는 값이니 대문자로 쓰는 것이 적절하지 않다.
let age = someCode(BIRTHDAY);

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보


/* variables ----------------------------------------------------------- */
// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;

// - 구매 결제 여부
let isPayment;

// - 구매 결제 내역
let paymentHistory;

// - 브랜드 접두사
const BRAND_PREFIX = 'chanel';

// - 오늘의 운세
let fortuneOfToday;

// - 상품 정보
let productInformaion;



/* constant variables -------------------------------------------------- */

