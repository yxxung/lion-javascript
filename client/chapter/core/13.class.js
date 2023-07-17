/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


// animal => tiger
class Animal {
  legs = 4;
  tail = true;
  stomach = [];

    constructor(name) {
    this.name = name;
    console.log('객체 생성시 무조건 최초 1회 실행하게 된다.')
  }

  set eat(food) {
    this.stomach.push(food);
  }

  get eat() {
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이')

class Tiger extends Animal {

  prey = '';

  constructor(name, pattern) {
    // 내 상위(부모)의 property를 가져오겠다
    super(name)
    this.pattern = pattern;
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다..`
  }

  attack() {
    return `강렬한 발톱 공격으로 ${this.prey}가 죽었습니다.`
  }

  // static은 클래스의 종속적인 메서드
  // 즉, 클래스와 해당 메서드는 연결되어 있지만
  // 해당 클래스의 특정 인스턴스와는 연결되어있지 않다.
  // 그래서 정적 메서드는 특정 객체(클래스)에 저장된 데이터에 접근할 수 없다.

  // static 키워드를 붙이면 class Tiger가 가진 능력으로 생성합니다.
  // 따라서 beom.sleep('이름')가 아니라 Tiger.sleep('이름')로 실행해야 합니다
  static sleep(name) {
    console.log(name + '이 잠을잔다.');
  }
}

const beom = new Tiger('범','호랑이무늬')
const hoho = new Tiger('hoho', '호피무늬');



class Champion {
  q = '';
  w = '';

  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }

  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue:'사르르탄',
  wValue:'너랑유미랑',
  dValue:'점멸',
  fValue:'회복'
});