/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first')
console.log(first.className); // getter
// 클래스 이름이 두 개가 동시에 들어가진 않음(띄어쓰기는 가능)
// console.log(first.className = 'box second'); // setter
// console.log(first.className = 'second'); // setter


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// - 자주쓰이는 4가지
// add
// remove
// toggle
// contains

first.classList.add('hello')

first.classList.remove('hello')

// class를 한 번에 다 지우고 싶으면?
// first.className = '';

first.classList.toggle('is-active') // boolean 값 반환

// first element에 hello 라는 class가 포함되어있나?
console.log(first.classList.contains('hello'));




addClass('.first', 'hello')


/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'orange'; // setter
console.log(first.style.backgroundColor); // getter => js property를 통해 bgcolor를 직접 할당해서 가져올 수 있는 것

console.log(first.style.fontSize); // 출력 x => js handling을 하지 않고 가져오려면 못가져옴



/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first).fontSize);
console.log( getComputedStyle(first).getPropertyValue('font-size') );




setCss('.first', 'color', '#fff')
console.log(css('.first', 'background-color', 'red'));