import { getNode, getStorage, setStorage } from "./lib/index.js";

const textField = getNode('#textField')


function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}


// 초기화
function init() {
  getStorage('text').then((res)=>{
    textField.value = res;
  })
}

textField.addEventListener('input', handleTextField);
window.addEventListener('DOMContentLoaded', init)