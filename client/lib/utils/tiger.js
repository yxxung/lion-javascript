
/*
fetch는 프로미스 객체를 반환한다!!
await은 바로뒤 promise객체의 result를 반환한다!!
*/

/*
promise 객체의 결과값을 얻기 위해서는
1. then()을 사용하거나
2. await 사용
*/


const URL = 'https://jsonplaceholder.typicode.com/users'

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}


export const tiger = async (options) => {
  // 객체 합성
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    // 깊은 복사
    headers:{
      ...defaultOptions.headers,
      ...options.headers
      }
    }

  // response == 객체, ok, status,,, 등등을 포함 = 응답이 된 각체 자체
  const response = await fetch(url, restOptions); // 정보 x, 통신이 어떻게 이루어졌는지 결과를 반환

  // 실제 결과물을 얻는 과정
  if (response.ok) {
    // data라는 키 추가 - 객체 안에 결과 값을 넣고 반환하기 위해서
    response.data = await response.json(); // 결과 값에 접근 response.json()
  }

  return response;
};

// // 왜 호출 시에 await를 한 번 더 쓸까?
// const response = await tiger({
//   url: URL,
//   method: 'POST'
// });

// const userData = response.data;
// console.log(userData);

// userData.forEach(e => {
//   console.log(e);
// });


tiger.get = (url, options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options
  })
}

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}


const response = await tiger.get(URL)
const data = await response.data;
// console.log(data);


// // fetch : promise 객체 반환
// // fetch 요청은 두 개의 await 호출로 구성됨
// const response = await fetch('https://pokeapi.co/api/v2/pokemon/30', )
// console.log(response); // 정보 x, 통신이 어떻게 이루어졌는지 결과를 반환

// // 실제 결과물을 얻는 과정
// if (response.ok) {
//   const data = await response.json()
//   console.log(data);
// }






// async function f(){
//   let prom = '성공';

//   console.log(prom);

//   let result = prom;

//   return result;

// }
// const le = f().then((res)=>console.log(res));
// console.log(le);