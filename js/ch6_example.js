'use strict'

console.log('-----------------------');

const user = {id:1, name:'Hong', addr:{city:'Seoul'}};
const lee = {id:2, name:'Lee'};

function f1(obj){
    const{id,name} = obj;
    console.log(id,name);
}

function f2({id,name}){
    console.log(id,name);
}

f1(user);
f2(lee);

console.log('-----------------------');


const user1 = {id:1, name:'Hong', passwd: 'xxx', addr:'Seoul'};
const {passwd,...userInfo} = user1;
console.log(userInfo);

console.log('----------------------------');

const arr = [[{id:1}],[{id:2},{id:3}]];

const {0:[{id:id1}],1:[{id:id2},{id:id3}]} = arr;
console.log(id1,id2,id3);


console.log('---------------------------');

function getUserValueExceptInitial(k) {
    const { [k]: val} = user1;
    const [, ...ret] = val;
    return ret.join('');
}
console.log(getUserValueExceptInitial('name')); // 'ong'
console.log(getUserValueExceptInitial('passwd')); // 'yz'
console.log(getUserValueExceptInitial('addr')); // 'eoul'
