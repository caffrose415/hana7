const n = 1;
const b = true;
const nb = n+b;
console.log(" nb:", nb)

const nil = null;
const bnil = [];
const n_nil = n+nil;
console.log(" n_nil:", n_nil);
console.log(" b_nil:", n+bnil);

const undef = undefined;
const n_undef = n+undef;
console.log(" n_undef:", n_undef);

console.log("+'' =", +'');
console.log('+undefined : ', +undefined);

console.log('-------------------------------');
let x = 5;
console.log(3 - -x);
console.log(10 + -x * 2);
console.log(-10 * -x * -2);
console.log((-10 /-x) * -2);
console.log(2 **(3 **2));
console.log(x,x++,x,++x);

console.log('----------------------------------------');
for(let i = 0.1; i<1; i+=0.1) {
    console.log(+i.toFixed(1));
}

console.log('-----------------------------------------');
for(let i = 1; i<=10; i++){
    if(!Number.isInteger(Math.sqrt(i))){
        console.log(i,Math.sqrt(i).toFixed(3));
    }
}

console.log('-----------------------------------------');
const today = new Date();
const day =['일','월','화','수','목','금','토'];
console.log(`오늘은 ${day[today.getDay()]}요일입니다.`);

console.log('-----------------------------------------');

function getLength(num){
    const str = num.toString();
    if(str.includes('.')){
        return str.split('.')[1].length;
    }else{
        return 0;
    }
}
function addPoints(a,b){
    const a_length = getLength(a);
    const b_length = getLength(b);

    let len = Math.max(a_length,b_length);

    console.log((a+b).toFixed(len));
}
console.log('-------------------------------------');
function addPoints(...args){
    p = 10 *10;
    let ret = 0;
    for(const n of args){
        ret += Math.trunc(n*p);
    }
    ret = ret/p;
    console.log(" addPoints ret:", ret)
    

}

addPoints(0.21354,0.1,0.2)
addPoints(0.21354, 0.1)   // 0.31354
addPoints(0.14, 0.28)     // 0.42
addPoints(0.34, 0.226)    // 0.566
addPoints(10.34, 200.226) // 210.566
addPoints(0.143, -10.28)  // -10.137
addPoints(0.143, -10)     // -9.857

console.log('----------------------------------');

const prices = [10.34, 'xxx', 5.678,null, 20.9, 1.005,0,19,undefined,0.5];
let result = 0;
let count = 0;
for(let i = 0; i<prices.length; i++){
    if(typeof prices[i]=='number'){
        result+=prices[i];
        count++;
    }
}

console.log(`avg: ${Math.round((result/count)*100)/100}`);
// const sum = prices
//             .filter(item => typeof item==="number")
//             .reduce((result, val) => {
//                     result.sum +=val;
//                     result.count+=1;
//                     return result;
//                     },
//                     {sum: 0, count:0}
//             );

// console.log(`1. avg: ${Math.round((sum.sum/sum.count) * 100)/100}`)

