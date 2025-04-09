const DC_RATE = 0.5;

function discount() {
  const dcRate = 0.5;
  return function (price) {
    return price * dcRate;
  };
}

const discount2 = () => (price) => price * DC_RATE;
// const Button = (mode) =>()=><Button mode = {mode}/>
// const darkButton = Button('dark');

//curring

const MENU = { chinese: ["짜장면", "탕수육"], italian: ["피자", "파스타"] };
function restaurant(kind) {
  const menu = MENU[kind]; //menu.['chinese']
  return function (foodIndex) {
    return menu[foodIndex];
  };
}

const lunch = restaurant("chinese");
console.log(lunch(1));

const dinner = restaurant("italian");
console.log(dinner(0), dinner(1));

//출입자 수를 게이트 별로 구하는 함수를 작성하세요

function getCounter() {
  let currCount = 0;
  return {
    plus() {
      currCount += 1;
    },
    minus() {
      currCount -= 1;
    },
    count() {
      return currCount;
    },
  };
}

class Counter {
  #currCount = 0;
  plus() {
    this.#currCount += 1;
  }
  minus() {
    this.#currCount -= 1;
  }
}

const gate1 = getCounter();
const gate2 = getCounter();

gate1.plus();
gate1.plus();
gate2.plus();
gate2.plus();
gate1.minus();
gate2.minus();

console.log("gate1>>", gate1.count());
console.log("gate2>>", gate2.count());

console.log("---------------------------------");
let cnt = 0;
function factorial(n) {
  cnt++;
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

const f3 = factorial(3);
console.log(" f3:", f3, cnt);
cnt = 0;
const f5 = factorial(5);
console.log(" f5:", f5, cnt);

let n = 3;
let sum = 1;
for (let i = n; i > 0; i--) {
  sum *= i;
}
console.log(" sum:", sum);

console.log("-----------------");

function factorialTCO(n, acc = 1) {
  if (n === 1) {
    return acc;
  }
  return factorialTCO(n - 1, acc * n);
}

const f10 = factorialTCO(3);
console.log(" f3:", f10);
const f50 = factorialTCO(5);
console.log(" f5:", f50);

console.log("----------------------");
