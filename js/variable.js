const n  = 123; //8B
const bi =123n; //16B

const n___bi = n===bi;
const n__bi = n==bi;
console.log(" n__bi:", n__bi)
console.log("n___bi:", n___bi);

//null은 값이 없는데(1bit), undefined는 undefined(1byte)라는 값이 있음.

const nAddbi = BigInt(n)+bi;
console.log("nAddbi:", nAddbi, typeof nAddbi);

const s = 'abc'; //주소값 : 8B
const ss = new String('abc'); // 주소값 + 참조값 16B
const s__ss = s==ss;
console.log("s__ss:", s__ss, typeof s);
const s___ss = s===ss;
console.log("s___ss:", s___ss, typeof ss);

// Constant Pool: HashMap(Key:Value)
// 이쪽에 그냥String은 주소값이 저장, new 가 붙은 객체는 주소값 + 참조값이 붙음 -> 크기가 달라짐

const sNum = Number(s);
console.log("sNum:", sNum);
const ssNum = Number(s);
console.log("ssNum:", ssNum);
console.log('Number(s)==Number(ss): ',Number(s)==Number(ss), isNaN(sNum));

const sss = `${s} - ${n + Number(bi)}`;

console.log(" sss:", sss);

console.log("-----------------------------");

const s1 = Symbol('foo');
const s2 = Symbol('foo');
const s1__s2 = s1==s2;
console.log(" s1__s2:", s1__s2)

const seoulHong = Symbol.for('H');
const pusanHong = Symbol.for('H');
const s__p = seoulHong==pusanHong;
console.log(" s__p:", s__p);

const undef = undefined;
const nil = null;
const undef__nil = undef == nil;
console.log(" undef__nil:", undef__nil)
const undef___nil = undef===nil;
console.log(" undef___nil:", undef___nil)

console.log('--------------------------------');

const hong = {id:1,name:'Hong'};
let kim = {id:Symbol(),name: 'Kim'};
console.log(hong===kim);
kim = hong;
console.log(hong===kim);

const o1 = new Object();
const o2 = {};
console.log(" o1===o2:", o1===o2);

const nStr = n.toString();
const nStr2 = new Number(n).toString();
console.log(" nStr:", nStr);
console.log(" nStr2:", nStr2);

const nStr16 = n.toString(16);
console.log("nStr16: ",nStr16);
const nStr16d = parseInt(nStr, 16);
console.log("nStr16d: ",nStr16d);

console.log('----------------------------');
const d1 = Date();  //String
const d2 = new Date();  //Object
console.log(d1==d2);
