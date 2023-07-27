/* global gsap */

import { getNode as $, attr, tiger, renderUserCard, changeColor, delayP, renderSpinner, renderEmptyCard, clearContents } from './lib/index.js';


// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//      - html template을 만든다.
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기


// [phase-2]
// 1. 에러가 발생 했을 때
// 2. empty svg를 생성하고 랜더링 해주세요
// 3. 함수 분리


// [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)



const userCardInner = $('.user-card-inner');

async function renderUserList() {

  renderSpinner(userCardInner);

  try {
    await delayP() // n초 기다렸다가 렌더링

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete(){
        $('.loadingSpinner').remove()
      }
    })

    // Node.remove() // dom 자체를 제거
    // $('.loadingSpinner').remove();
    // 위에 gsap으로 애니메이션과 complete됐을 때 상태를 같이 만듦

    const response = await tiger.get('http://localhost:3000/users');
    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card')

    gsap.to('.user-card', {
      x: 0, // x좌표
      opacity: 1,
      stagger: 0.2 // 순차적으로 0.1초씩 등장
    })
  } catch (error) {
    renderEmptyCard(userCardInner);
    console.log(error);
  }
}

renderUserList();




// delete 통신
function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article')

  if(!article || !button) return;


  let id = attr(article, 'data-index')
  // console.log(article.dataset)
  // let index = article.dataset.index

  id = +id.replace(/[^0-9]/g, '')
  // console.log(id);

  // fetch api
  tiger.delete(`http://localhost:3000/users/${id}`)
  .then(() => {
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    // 다시 불러오기
    renderUserList();
  })
}

userCardInner.addEventListener('click', handleDelete)





/* ----------------------- fetch ------------------ */

// const response = await fetch(URL);
// const data = await response.json();

// console.log( data );

// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })

/* ------------------------------------------------- */
