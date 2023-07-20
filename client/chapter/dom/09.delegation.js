/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
// 이벤트가 너무 많으면 성능 저하 및 유지보수가 힘들다.
// 자식들 각각에 이벤트를 주기보단, 부모에게 이벤트를 걸자.

// const buttonA = getNode('.a')
// const buttonB = getNode('.b')
// const buttonC = getNode('.c')
// const buttonD = getNode('.d')

// const buttons = getNodes('button');

// buttons.forEach(e => {
//   e.addEventListener('click', ()=>{
//     console.log('hit');
//   })
// });

const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;
  let li = target.closest('li')

  console.log(li) // li 밖을 벗어나게 되면 null이 나옴 => className을 가져올 수 없음

  if (!li) return;


  let className = attr(li, 'class')
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }

  // 이벤트 위임의 타겟 = 우리가 누른 첫 번째 대상이 타겟
  // console.log(target); // li만 클릭이 되는 것이 아닌(원하는 대상만) button, li.. 다 같이 나온다
  // console.log(target.closest('li')); // closest을 이용해 자식을 선택했을 때 인접한 부모 요소를 찾아준다.
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */


















// 타겟을 잡고 이벤트를 정의하고 싶어..
target.addEventListener('click',handler) // 이벤트 생성
target.removeEventListener('click',handler) // 이벤트 제거

// 근데 제거는 왜 해?
// 만약 화면 변화 시 더이상 필요없는 요소의 이벤트는 더 이상 이벤트를 유지시킬 필요가 없다.
// 따라서, 필요 없는 이벤트의 경우 이벤트를 삭제해준다.

function bindEvent(node, type, callback) {
  node.addEventListener(type, callback);

  // closure
  return function remove() {
    return node.removeEventListener(type, callback) // 값 => 리턴 받아서 쓰기 위해 내부 스코프에도 return
  }

}

// remove에 담겨져 있는 함수는 node.removeEventListener(type, callback)
const remove = bindEvent('.first', 'click', ()=> {

})