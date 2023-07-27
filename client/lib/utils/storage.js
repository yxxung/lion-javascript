import { typeError } from '../error/typeError.js';
import { isString } from './typeOf.js';



const { localStorage: storage } = globalThis;




export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve();
      storage.setItem(key, JSON.stringify(value));
    } else {
      reject({ message: 'key 값은 문자 타입 이어야 입니다.' });
    }
  });
}


export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'key 값은 문자 타입 이어야 입니다.' });
    }
  })
}

// console.log(await getStorage('user'));

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })
}