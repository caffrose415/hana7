function plength(n) {
    // 0.1 ==> '0.1'
    if (Number.isInteger(n)) return 0;
    return n.toString().length - Math.trunc(n).toString().length - 1;
}
function addPoints1(a, b) {
    const alen = plength(a);
    const blen = plength(b);
    console.log('🚀 alen:', a, b, alen, blen);
    const ret = (a + b).toFixed(alen > blen ? alen : blen);
    console.log(a, '+', b, '= ', +ret);
}
function addPoints2(a, b) {
    // console.log(a, '+', b, '=', a + b);
    const p = 10 ** 10;
    const ai = a * p;
    const bi = b * p;
    const ret = Math.trunc(ai + bi) / p;
    console.log(a, '+', b, '= ', +ret);
}
function addPoints3(...args) {
    const p = 10 ** 10;
    let ret = 0;
    for (const n of args) {
      ret += Math.trunc(n * p);
    }
    ret = ret / p;
    console.log('🚀 ret:', ret);
}

function subPoints(...args) {
    calc(-1, ...args);
}
function addPoints(...args) {
    calc(+1, ...args);
}
function calc(signFlag, ...args) {
    p = 10 ** 10;
    let ret = 0;
    for (const [i, n] of Object.entries(args)) {
        console.log(i, n);
        const signNum = i != 0 ? n * signFlag : n;
        ret += Math.trunc(signNum * p);
    }
    ret = ret / p;
    console.log(args.join(` ${signFlag > 0 ? '+' : '-'} `), '=', ret);
}
addPoints1(22, 23);
  // subPoints(0.45, 0.12);
  // addPoints(0.21354, 0.1, 0.2); // 0.51354
  // addPoints(0.14, 0.28, 0.3, 0.5, 0.92); // 0.42
  // addPoints(0.34, 0.226); // 0.566
  // addPoints(10.34, 200.226); // 210.566
  // addPoints(0.143, -10.28); // -10.137
  // addPoints(0.143, -10); // -9.857
return;

  // ex3)
const today = new Date().getDay();
let weekName = '일월화수목금토'[today];
console.log('🚀 weekName:', weekName);
switch (today) {
    case 0:
        weekName = '일';
        break;
    case 1:
        weekName = '월';
        break;
    case 2:
        weekName = '화';
        break;
    // ... 3 ~ 5
    case 6:
        weekName = '토';
        break;
    default:
        weekName = '알 수 없음!';
      // throw new Error('알 수 없는 요일!!')
        break;
}
  // console.log('오늘은 ' + weekName + '요일입니다');
console.log(`오늘은 ${weekName}요일입니다.`);

  // ex2)
for (let i = 1; i <= 10; i += 1) {
    const root = Math.sqrt(i);
    if (root % 1) console.log(i, root.toFixed(3));
}

  // ex1)
  // for (let i = 1; i <= 10; i = i + 1)
  //   console.log(i / 10);
for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(+i.toFixed(1));
}