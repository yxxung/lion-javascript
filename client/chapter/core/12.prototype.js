/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// js 객체에서는 get, set을 만들 수 있는 메서드 제공 => set, get 키워드 사용
// 함수처럼 보이지만, 함수처럼 사용하진 않는다.
// set => animal.eat = '사료'; => 로 사용

// const animal = {
//   legs: 4,
//   tail: true,
//   stomach: [],
//   // setter
//   set eat(food) {
//     this.stomach.push(food);
//   },
//   // getter
//   get eat() {
//     return this.stomach
//   }
// }

// const tiger = {
//   pattern: '호랑의무늬',
//   prey: '',
//   hunt(target){
//     // 사냥한 target이 먹이로 등록
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`
//   },
//   // __proto__: animal
// }

// const fox = {
//   prey: ''
// }

// // animal 상속시키기
// fox.__proto__ = animal;
// tiger.__proto__ = animal;








// 함수는 두 가지 일을 할 수 있다.

// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수임

// 일반함수
function Button(name) {
  this.name = name;
}

function button() {}
// const a = button()

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

const person1 = new User('선범', 32, 'tiger@naver.com');

const a = Button(); // 일반 함수처럼 쓰거나
const b = new Button('버튼'); // 생성자 함수처럼 쓰거나 => Button {}
// 생성자 함수를 통해 객체를 생성할 수 있다.

// 객체 만드는 방법
// new Object(), 생성자 함수, {}, 일반함수








// 생성자 함수

function Animal() {
  this.stomach = [];
  this.legs = 4;
  this.tail = true;
  this.eat = function (food) {
    this.stomach.push(food);
  };
  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();

tiger.pattern = '호랑이 무늬'

tiger.hunt = function (target) {
  this.prey = target,
  console.log(`${target}에게 슬금슬금 접근합니다.`)
}

const cat = new Animal();

cat.say = () => '니야야야아옹';

// 위의 단계들을 es6 문법으로 재정의하기 위해서는 class 문법 사용