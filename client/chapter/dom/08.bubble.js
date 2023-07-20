/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

// section > article > p
// 상위 요소가 아닌 하위 요소를 클릭할 경우, 중첩되어 있는 부분 전체가 실행이된다.
// 안을 찍고 보글보글 올라온다.


const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',(e)=>{
  // e.stopPropagation();
  console.log('%c section','color:orange');
}, true)

article.addEventListener('click',(e)=>{
  // e.stopPropagation();

  console.log('%c article','color:dodgerblue');
}, true)

p.addEventListener('click',(e)=>{
  // 이벤트 버블링을 막아줌
  // e.stopPropagation();

  console.log('%c p','color:hotpink');
}, true)


/* 캡처링 ----------------------------------------------------------------- */

// 버블링의 순서가 반대로