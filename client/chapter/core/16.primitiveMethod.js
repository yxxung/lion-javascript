/* ---------------------------------------------------------------------- */
/* Primitives Methods (Object Wrapper)                                    */
/* ---------------------------------------------------------------------- */

let message = '원시 값은 객체가 아닙니다.';

// 그런데 어떻게 객체처럼 메서드를 사용할 수 있는 걸까요?
console.log(message.split(' '));

// 이유는 JavaScript는 원시 값을 단일 값 형태로 유지하되,
// string, number, boolean, Symbol 등 메서드와 프로퍼티에
// 접근할 수 있도록 언어 차원에서 허용합니다. (최적화 목적)

// 이를 가능하게 하기 위해 JavaScript는 각 원시 값에서 메서드나
// 프로퍼티를 사용할 수 있도록 특수한 객체인 래퍼 객체를 만들어 줍니다.
// 래퍼 객체는 메서드 또는 프로퍼티 사용 후 바로 삭제됩니다.

// ※ 원시 값에 메서드를 호출하려 하면 임시 래퍼 객체가 만들어집니다.
// 그리고 JavaScript 엔진은 내부 최적화가 잘 되어있어 메서드를 호출해도
// 많은 리소스를 쓰지 않습니다.

// 래퍼 객체의 이름은 데이터 타입 이름과 동일합니다.
// String, Number, Boolean, Symbol 등

// ※ null, undefined는 래퍼 객체를 제공하지 않는 데이터 타입입니다.