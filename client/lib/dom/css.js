/* class -------------------------------------------------------------------- */

function addClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.add(className);
}

function removeClass(node,className){

  if(typeof node === 'string') node = getNode(node);
  // 특정 클래스를 지정하지 않았으면 모든 클래스를 제거
  if(!className) {
    node.className = '';
    return;
  }
  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.remove(className);

}


const toggleClass = (node,className)=>{
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  return node.classList.toggle(className);
}




/* css ---------------------------------------------------------------------- */


function setCss(node,prop,value){

  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

  // 객체의 속성에 접근할 때 .표기법은 사용할 수 없다.
  // computed property [ ]로 접근
  node.style[prop] = value;
}



function getCss(node,prop){
  if(typeof node === 'string') node = getNode(node);

  // 객체 안에 키 값이 있는지 확인하는 방법 => in문으로 확인
  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node).getPropertyValue(prop);
}



const css = (node,prop,value) => {
  return !value ? getCss(node,prop) : setCss(node,prop,value);
}






















