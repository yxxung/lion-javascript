/* ---------------------------------------------------------------------- */
/* Object Methods and This                                                */
/* ---------------------------------------------------------------------- */


// 객체 안에 메서드는 무조건 concise method(간결한 메소드)
// method안에 함수(콜백함수?)는 무조건 arrow function


// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  total: 0,
  date: '2022. 7. 6',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '곰곰 삼계탕', price: 20000, count: 5 },
    { name: '곰곰 해장국', price: 8000, count: 10 },
  ],
  totalPrice() {
    // this.menu.forEach((item) => {
    //   this.total += item.price * item.count;
    // })

    // arrow function은 중괄호를 생략하면 값을 반환함
    return this.menu.reduce((acc, cur) => {
      return acc += (cur.price * cur.count)
    }, 0)
  }
};

// (shopOrder.menu[0].count * shopOrder.menu[0].price) + (shopOrder.menu[1].price * shopOrder.menu[1].count)

// let total = 0;
// shopOrder.menu.forEach((item) => {
//   total += item.price;
// });

// console.log(total);

shopOrder.totalPrice() // => 216000






// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this
// 일반함수 : 나를 호출한(.)대상을 this로 바인딩
// 화살표함수 : this 바인딩 x 상위 컨텍스트에서 this를 가져옴

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem(newItem) {
    this.items.push(newItem);
  },
};

navigationMenu.addItem()