/* --------------- */
/* For Of Loop     */
/* --------------- */

// iterable : 반복가능한 객체
// iterable 종류 : String, Array, ArrayLike(배열처럼 생겼으나 배열이 아닌 것)

// 인덱스, length를 가지고 있다 => 배열 => 근데 이 둘을 가지고 있는데도 배열이 아닌 경우?
// 유사배열 like 객체

// 객체는 for of를 사용할 수 없다 = not iterable하기 때문
// itearble한지는 어떻게 구분?
// Symbol의 iterator를 사용하여 구분

// 객체 예시
const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
  // [Symbol.iterator]{...}
  // 반복 가능한 iterable한 요소로 바꿔줌
};

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

for (const value of languages) {
  const name = value.name;
  // if (name === 'Java') continue;
  // if (name === 'Java') break;
  if (name.includes('Java') && name.length < 5) break; // Javascript에도 Java가 포함되므로 출력 x
  // console.log(name);
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
for (let key in randomUser) {
  if ({}.hasOwnProperty.call(randomUser, key)) {
    let L1 = randomUser[key];
    // console.log('L1 :', L1);

    if (typeof L1 === 'object') {
      for (let key in L1) {
        if ({}.hasOwnProperty.call(L1, key)) {
          let L2 = L1[key];
          // console.log('L2: ', L2)

          if (typeof L2 === 'object') {
            for (let key in L2) {
              if ({}.hasOwnProperty.call(L2, key)) {
                let L3 = L2[key];
                // console.log('L3:', L3)
              }
            }
          }
        }
      }
    }
  }
}

// - for ~ of 문
// for of도 객체 순회를 가능하게 해줌
// Object.keys()
// Object.values()
// Object.entries() 객체 자체의 열거 가능한 속성 key, value를 가진 쌍의 배열을 반환

// 모든 키 값 배열로 반환
for (let keyValue of Object.entries(randomUser)) {
  let key = keyValue[0];
  let value = keyValue[1];
  console.log('L1 : ', value);

  if (typeof value === 'object') {
    for (let keyValue of Object.entries(value)) {
      let key = keyValue[0];
      let value = keyValue[1];
      console.log('\tL2 : ', value);

      if (typeof value === 'object') {
        for (let keyValue of Object.entries(value)) {
          let key = keyValue[0];
          let value = keyValue[1];
          console.log('\t\tL3 : ', value);
        }
      }
    }
  }
}
// console.log(Object.values(randomUser));

// - 성능 비교 진단
