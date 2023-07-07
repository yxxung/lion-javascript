/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // 객체안에 hasOwnProperty를 정의시키면 제 역할을 다하지 못함
  // hasOwnProperty() {
  //   return '이게 된다고..?'
  // }
};

// in 문 : 객체 안에 내가 원하는 값(property)가 있어?
const key = 'hasOwnProperty';
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

Object.prototype.nickname = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty(key));

// 진짜 객체로 접근하여 속성 확인
// call : 다른 데이터 타입의 능력을 빌려쓰겠다..
console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
for (const key in javaScript) {
  // 정말 javaScript 객체 안에 있는 속성만
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}


// - 배열 객체 순환에 사용할 경우?
const tens = [10, 100, 1000, 10000];
for (const key in tens) {
  console.log(tens[key])
}

// for...in 객체를 순환하는 용도로 사용이 가능함
// 배열은 좀 그럼..for ...in은 객체에 양보하세요