/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization : 권한
// authentication : 인증

authUser = {
  uid: 'user-id-skfsskjs',
  name: 'beom',
  email: 'lskjfkss@gmail.com',
  isSignin: true,
  permission: 'paid',
};

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uid']);
// console.log(authUser['email']);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  // 객체 반환 가능한~ 그러면 반환 값 때문에 user가 객체가 됨
  return {
    name: name,
    email: email,
    [computedProp]: number,
  };
}

const user1 = createUser('진승', 'sjfhs@naver.com', 'tel', '010-6454-6565');

// 프로퍼티 포함 여부 확인

// key in user1

// 자신(own)의 속성(property)를 가지고(has)있는지

for (const key in user1) {
  if (Object.hasOwnProperty.call(user1, key)) {
    // console.log(key);
  }
}

// 프로퍼티 나열

// key만 모아놓은 배열 만들어주세요 Onject.keys()
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

// console.log(keyArray);
// console.log(valueArray);

function getprop(object) {
  if (typeof object !== 'object') {
    throw new Error('getprop함수의 매개변수는 객체 타입이어야 합니다.');
  }
  return Object.keys(object);
}

let result = getprop(authUser); // ['uid', 'name', 'email', 'isSignin', 'permission']
// console.log(result);

// 프로퍼티 제거(remove) or 삭제(delete)
//            null           없앰

// 제거
authUser.name = null;
// 삭제
delete authUser.uid;

// .연산 사용 불가
function removeProperty(object, key) {
  if (key === 'all') {
    // Object.keys = getprop로 대체 가능
    for (const key of Object.keys(object)) {
      object[key] = null;
    }
    return object;
  }

  object[key] = null;

  return object;
}

// removeProperty(authUser, 'name');
// removeProperty(authUser, 'all');

function deleteProperty(object, key) {
  if (key === 'all') {
    // Object.keys = getprop로 대체 가능
    for (const key of Object.keys(object)) {
      delete object[key];
    }
    return object;
  }

  // object에 값이 없다면
  if (isEmptyObject(object)) {
    return;
  }

  delete object[key];

  return object;
}

// deleteProperty(authUser, 'name');

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// const student = {
//   name: name,
//   email:email,
//   authorization: authorization,
//   isLogin: isLogin
// }
// 위를 아래와 같이 씀

const student = {
  name,
  email,
  authorization,
  isLogin,
};
console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return Object.keys(object).length === 0 ? true : false;
}

isEmptyObject(authUser);

/* 배열 구조 분해 할당 */

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [, , green] = color;

// 배열의 구조 분해 할당
for (const [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];
  // console.log(key);
}

/* 객체 구조 분해 할당 */
const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};

const { 권혜미, 이수연, 강예나, 김태일 } = salaries;

// console.log(권혜미);

// 배열의 구조분해할당 : 순서가 정해져있다. 변수 이름을 바꿀 수 있다.
// 객체의 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀수 있을까? yes
// 아래와 같이 이름을 지정해주어 사용할 수 있다(별칭처럼)
// 기본값 지정도 가능하다

function setElementCss(options) {
  // 구조 분해 할당
  const { width: w = 10, height, overflow, color } = options;

  console.log(w, height);
}

const defaults = {
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange',
};
// 일일히 매개변수로 전달하기 귀찮으니까 객체로 전달
setElementCss(defaults);
