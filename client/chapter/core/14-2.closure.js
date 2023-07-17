// 클로저 - 가비지 컬렉터에 수집되지 않도록 그 공간 자체를 폐쇄시킨다

function earth(){
  // 이 변수들은 함수 외부에서 접근이 불가능
  let water = true;
  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }
  let gravity = 10;

  // tiger는 자신이 생성된 환경을 기억함 = 클로저
  // 따라서 earth 내부의 변수들에 접근이 가능함

  // 함수의 이름은 명시하지 않아도 된다.
  return function tiger (value){
    gravity = value;
    console.log( gravity );
  }


  // return tiger

}



const ufo = earth()



ufo(5)


// 그럼 클로저를 통해 earth() 안의 정보를 가져오고 싶을 때는
// 내부 function에 적어줘야만 가져올 수 있는 건가요?

// 호랑이는 earth의 환경을 기억하는데
// ufo로 tiger에 접근이 가능하기 때문에
// 월E에 의해 제거되지 않는다

// 보통 외부 function에는  변수를 지정하고 내부 function에는 실행시킬내용을 지정