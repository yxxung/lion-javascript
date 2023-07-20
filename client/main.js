
// 모듈 프로그래밍

// getNode 가져오기
// 타 프레임워크는 import 시 확장자 생략이 가능
// 하지만 vanila js 에서는 생략 ㄴ

import { getNode, attr, css, clearContents } from "./lib/index.js";

function page1() {
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');

  function handleInput() {
    let firstValue = +first.value;
    let secondValue = second.value / 1;
    let total = firstValue + secondValue;

    clearContents(result);
    result.textContent = total;
  }

  // clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요
  const clear = getNode('#clear');

  function handleClear() {
    clearContents(first);
    clearContents(second);
    // clearContents(result)
    result.textContent = '-';
  }
  clear.addEventListener('click', handleClear);
  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
}

function page2() {
  const calculator = getNode('.calculator');
  const clear = getNode('#clear');
  const result = getNode('.result');
  const numberInputs = Array.from(document.querySelectorAll('input:not(#clear)'));

  console.log(numberInputs);

  function handleInput() {
    const total = numberInputs.reduce(
      (total, input) => total + Number(input.value),
      0
    );

    console.log();

    clearContents(result);
    result.textContent = total;
  }

  function handleClick() {
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClick);
}

page2()