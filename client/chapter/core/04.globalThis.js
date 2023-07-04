// 전역 객체
// window = browser

// 브라우저 환경에선 전역 객체를 window,
// node.js 환경에선 global이라고 부릅니다

// 이게 불편하니 전역 객체의 이름을 globalThis로 표준화하자는 내용이 자바스크립트 명세에 추가되었습니다.

// 전역 객체의 모든 프로퍼티는 window.name 으로 접근이 가능합니다.

// 브라우저에서 let이나 const가 아닌 var로 선언한 전역함수나 변수는
// 전역 객체의 프로퍼티가 됩니다.




/* ------------------ */
/* Global This        */
/* ------------------ */

var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
// object environment(var)와 declation environment의 차이 - figma js 참조
console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVariable); // 불가능

// 전역 객체는 이전 버전과의 호환성으로 인해 JavaScript가 제거할 수 없는 실수로 간주됩니다.
// 성능에 부정적인 영향을 미치며 일반적으로 혼란스럽습니다. 전역 객체를 사용한 변수 사용은
// 문제를 발생시킬 소지가 있고, 테스트가 어려우니 가급적 사용하지 않는 것이 좋습니다.

// scope = 변수의 사용 범위
// scope의 범위 => 블록(중괄호 선언), 함수

// var : 블록({})의 영향을 받지 않지만, 함수 안에 선언될 경우 scope가 형성 된다.
// let, const : 블록과 함수에 대한 scope를 가진다.

// var는 if, for 등의 코드 블록을 관통합니다.

// 선생님께서 설명해주신 js figma의 context 환경과 호이스팅을 같이 이해할 수 있다 :)

// 선언은 호이스팅 되지만 할당은 호이스팅 되지 않습니다!!!