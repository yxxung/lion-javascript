import { getNode } from "../dom/getNode.js";
import { insertLast } from "../dom/insert.js";
import { xhrPromise } from "./xhr.js";


function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}


const first = getNode('.first')
const second = getNode('.second')



// delay(() => {
//   console.log(1);
//   first.style.top = '-100px'

//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)'

//     delay(() => {
//       console.log(3);
//       first.style.top = '0'
//     });
//   });
// }, 1000);


// 객체 합성 mixin

const defaultOptions = {
  shouldReject: false,
  timeout : 1000,
  data: '성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options) {
  // defaultOptions를 바로 가져오지 않고 얕은 복사로 참조만..
  let config = {...defaultOptions};

  if (typeof options === 'number') {
    config.timeout = options
  }
  if (typeof options === 'object') {
    // override
    config = {...defaultOptions, ...options}
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  // new => 생성자 함수 => 객체 반환 => promise 객체 반환
  return new Promise((resolve, reject) => {
    // executor 안은 하나만 실행 가능
    // setTimeout == 비동기하는 시간
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data)
      } else {
        reject({message: errorMessage})
      }
    }, timeout);
  });
}

delayP({shouldReject: false})
.then((result)=>{
  // console.log(result);
})
.catch(({message})=>{
  // console.log(message);
})
.finally(()=>{
  // console.log('어쨌든 실행됩니다.');
})


// async : 일반 함수가 promise 객체를 반환하도록, 또한 내부적으로 await을 사용하도록
// await : 코드의 실행 흐름 제어 => 멈춰!!, result 값 가져오기

async function delayA(params) {
  return '성공!'
}
const data = await delayA();

// console.log(data);


// ------------------------------------------------------------------


async function 라면끓이기(){


  delayP({data:'물넣기'}).then((res)=>{
    console.log( res );
  })


  const 스프 = await delayP({data:'스프넣기'})
  console.log(스프);

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);

  const 접시 = await delayP({data:'접시'})
  console.log(접시);
}

// 라면끓이기()



// -------------------------------------------------------

async function getUserData(){
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon');
  console.log('promise: ', data);

  // then 결과 가져오기
  data.then((res)=>{
    console.log('result of then : ', res);
  })

  // await 결과 가져오기
  const result = await data;
  console.log('result of await : ', result);
}

// getUserData()

// -------------------------------------------------------


async function getData(){

  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/25')

  // data.then((res)=>{
  //   console.log( res );
  // })

  const pokemon = await data;

  console.log( pokemon.sprites['front_default'] );

  insertLast(document.body,`<img src="${pokemon.sprites['back_default']}" alt="" />`)

}

// getData()