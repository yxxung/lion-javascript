/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Documnet Object model(브라우저 문서에 접근할 수 있는 모델들)

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName




getNode('.first')

const first = getNode('.first')
const span = getNodes('span')

console.log(span);

// - querySelector
// const first = document.querySelector('.first')
console.log(first);

// - querySelectorAll
const [firstSpan, secondSpan] = document.querySelectorAll('span')

// - closest : 형제 요소가 아닌 가장 가까운 부모 요소를 찾아감
console.log( first.closest('h1') ); // event delegation


/* 문서 대상 확인 */
// - matches

//  선택자 안에 class | id 를 가지고 있는 대상이 있어?
console.log( first.matches('#message') );

// - contains

// 선택자의 자식들 중에 해당 element가 있어?
// console.log( first.contains(secondSpan) );

// 클래스를 포함하고 있어?
// node.classList.contains()

