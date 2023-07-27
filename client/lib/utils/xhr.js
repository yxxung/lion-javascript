/*
readyState

0: uninitialized
1: loading
2: loaded
3: interacive
4: complete

*/

import { refError } from "../error/refError.js";

/* ------------------------- callback ---------------------------- */

// onSuccess에 함수 본문 넘김
export const xhr = ({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) => {
  // 비동기 통신에 필요한 xml을 가져오겠다 - 생성자 함수 - 객체 반환
  const xhr = new XMLHttpRequest();

  // console.log(xhr.readyState); // readyState == 0 open 전

  // open method 사용 - 안에 사용할 방식 지정
  xhr.open(method, url);

  // header 설정
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // console.log(xhr.readyState); // readyState == 1 open 후

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        // 통신된 결과를 가져오기 위해 콜백함수 사용
        // 현재 비동기 방식이기 때문에 return 방식으로 처리 불가능
        // arguments
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }

    // console.log(xhr.status);
    // console.log(xhr.readyState);
  });

  // GET : 위 내용을 다시 전송하겠다
  // POST : POST 방식으로 body에 전달할 내용을 담아 전송
  xhr.send(JSON.stringify(body));
};

// method, url, onSuccess, onFail, body, headers
// xhr({
//   method: 'POST',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess: (result) => {
//     console.log(result);
//   },
//   onFail: (err) => {
//     console.log(err);
//   },
//   body: {
//     name: 'tiger',
//   },
// });




// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업 개발자) 입장 : 쉽게 쓰자
// 3. 설계자 : 함수 안에 메서드(객체)를 넣어버리자


/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */


xhr.get = (url, onSuccess, onFail) => {
  // xhr을 전달해주자
  xhr({
    url,
    onSuccess,
    onFail
  })
}

xhr.post = (url, body, onSuccess, onFail) => {
  // xhr을 전달해주자
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.put = (url, body, onSuccess, onFail) => {
  // xhr 함수 실행
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url, onSuccess, onFail) => {
  // xhr 함수를 전달해주자
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}

// xhr.get('https://jsonplaceholder.typicode.com/users',
// (result)=>{console.log(result);},
// (err)=>{console.log(err);})


// xhr.post('https://jsonplaceholder.typicode.com/users',
// {name: 'tiger'},
// (result)=>{console.log(result);},
// (err)=>{console.log(err);})


// xhr.put('https://jsonplaceholder.typicode.com/users',
// {name: 'simseonbeom'},
// (result)=>{console.log(result);},
// (err)=>{console.log(err);})


// xhr.delete('https://jsonplaceholder.typicode.com/users',
// (result)=>{console.log(result);},
// (err)=>{console.log(err);})


/* ---------------- promise API ------------------------ */

const defaultOptions = {
  method: 'GET',
  url : '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export function xhrPromise(options) {

  // mixin

  // 객체 합성
  // const config = Object.assign({}, defaultOptions, options)
  const {method, url, body, errorMessage, headers} = {...defaultOptions, ...options}

  if(!url) refError('서버와 통신할 url은 필수값 입니다.')

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value)
  })

  xhr.send(JSON.stringify(body))

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {

      if(xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({message: errorMessage});
        }
      }
    })

  })
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users'
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch(({message})=>{
//   console.log(message);
// })

// 객체의 메소드 호출
xhrPromise.get = (url) => {
  // 사용자 정의 함수 호출 => return 되는 promise 객체 존재 => xhrPromise의 결과값을 리턴해주기 위해 재리턴 필요
  return xhrPromise({
    url,
  })
}

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST'
  })
}

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE'
  })
}

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "PUT"
  })
}

// 함수는 return 값이 없으면 undefined
// console.log(xhrPromise.get('https://jsonplaceholder.typicode.com/users'));