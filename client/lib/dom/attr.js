// 1. 위와 같은 메서드를 유틸 함수로 만들기
function getAttr(node, attr) {
  if(typeof node === 'string'){
    node = getNode(node);
  } else {
    throw new Error('함수의 인수는 문자 타입 이어야 합니다.');
  }

  return node.getAttribute(attr);
}


// 2. attribute를 세팅할 수 있는 유틸 함수 만들기
function setAttr(node, attr, value) {
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof attr !== 'string') {
    throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  // 비표준 속성일 때 data-*으로 할당하고 싶다
  // 그럼 attr이 dom의 프로퍼티인지 확인해야 함
  // 이미 정의된 값을 가져오므로 각괄호 표기법 사용
  if (!node[attr] && attr !== 'class' && attr !== 'title') {
    node.dataset[attr] = value;
    return;
  }

  node.setAttribute(attr, value);
}



// 사용자 관점에서 보기 - value 인수 유무로 get, set이 작동하면 좋지 않을까?
const arrowAttr = (node, attr, value) => !value ? getAttr(node, attr) : setAttr(node, attr, value);

function attr(node, attr, value) {
  // if (!value) {
  //   return getAttr(node, attr);
  // }else {
  //   setAttr(node, attr, value);
  // }
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}


// IIFE 패턴 적용 가능