/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

// 복사의 종류 - 참조복사 or 얕은복사 or 깊은복사
let text = message;
// 참조 복사
let conversationTool = messenger;

// 객체를 참조에 의한 복사를 하게 되면 원본도 변경이 되어벌임..
// 그렇다고 참조에 의한 복사 === 얕은 복사인 것은 아님
conversationTool.name = 'line';

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사

const cloneObject = {}
for (const key in messenger) {
  cloneObject[key] = message[key];
}

// 2. Object.assign()을 사용한 복사(얕은 복사)
// Object.assign({}, 넘길 객체)
const copyObject = Object.assign({}, messenger);


// 3. 전개 연산자(...)를 사용한 복사
const spreadObject = {...messenger};


// 4. 객체를 복사해주는 유틸 함수
// const copiedObject = (object) => {
//   return Object.assign({}, object);
// }
const copiedObject = object => Object.assign({}, object);

copiedObject(messenger);


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// a의 기존 값을 b가 덮어쓰는 형태
let combinedCssMap = {...cssMapA, ...cssMapB};
// assign으로 하면?
// let combinedCssMap = Object.assign({}, cssMapA, cssMapB)


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

// 얕은 복사 - 원본 객체도 변경
let copyedContainerStyles = {...containerStyles};


// 1. 깊은 복사 유틸리티 함수 => 재귀함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

// 깊은 복사
let copyedContainerStyles2 = cloneDeep(containerStyles)


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
