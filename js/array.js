var assert = require('assert');

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [hong, kim, lee, park];

const find3 = (a) => a.id === 3;
const idxId2 = users.findIndex(find3);

// Try this: id를 부여해서 실행하는 findId 함수를 작성하시오.
//const findId = <이 부분을 작성해 보세요>;
const findId = (id) => (user) => user.id === id;
const idxId11 = users.findLastIndex(findId(1));
console.log('🚀  idxId11:', idxId11);

// const findId = (id) => {
//     return function(user) {
//       return user.id === id;
//     };
//   };

const ids = users.map((a, i) => a.id);
console.log('console.log(); ~ ids:', ids);
// = user.map (finction(a) {return a.id;});

Array.prototype.pushx = function (x) {
    //   console.log("console.log(); ~ x:", x);
    this[this.length] = x;
};
const xx = users.pushx({ id: 100, name: 'sejong' });
Array.prototype.forEach = function (f) {
    for (let i = 0; i < this.length; i++) {
        f(this[i], i, this);
    }
};
users.forEach((a, i) => {
    console.log(i + 1, a.name);
});

Array.prototype.map = function (f) {
    //map의 실체
    const results = [];
    for (let i = 0; i < this.length; i++) {
        results[i] = f(this[i], i, this);
    }
    return results;
};

Array.prototype.mapBy = function (k) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(this[i][k]);
    }
    return results;
};
const ids2 = users.mapBy('id');
console.log('console.log(); ~ ids2:', ids2);

const names = users.mapBy('name');
console.log('console.log(); ~ names:', names);

console.log('--------------------------------------');

const arr2 = [1, 2, 3, 4, 5];
const a1 = arr2.slice(1, 3);
console.log(' a1:', a1);

const a2 = arr2.slice(2);
console.log(' a2:', a2);

const a3 = arr2.splice(1, 3);
console.log(' a3:', a3, '==>', arr2);

arr2.splice(1, 0, ...a3);
console.log(arr2);

const a4 = arr2.splice(2);
console.log(arr2);

arr2.splice(2, 0, ...a4);
console.log(arr2);

arr2.splice(2, Infinity, 'X', 'Y', 'Z', 4, 5);
console.log(arr2);

arr2.splice(2, Infinity, 3, 4, 5);
arr2.splice(2, 1, 'X', 'Y', 'Z');
console.log(arr2);

arr2.splice(2, Infinity, 3, 4, 5);

const a8 = [...arr2.slice(0, 2), 'X', 'Y', 'Z', ...arr2.slice(-2)];
assert.deepStrictEqual(a8, [1, 2, 'X', 'Y', 'Z', 4, 5]);
console.log('----------------------------------');
console.log(arr2);
