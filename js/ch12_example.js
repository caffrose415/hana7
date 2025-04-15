const assert = require("assert");
// p. 159
function push(array, ...args) {
    return [...array, ...args];
}

// const pop = (array, count) => (count ? array.slice(-count) : array.at(-1));
const pop = (array, count = 1) =>
    count > 1 ? array.slice(-count) : array.at(-count);

let arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!

const unshift = (array, ...args) => [...args, ...array];
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

const shift = (array, count = 1) => [array.slice(0, count), array.slice(count)];

console.log("shift>>", arr, "==>", shift(arr));
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [ [shift되는 원소들], [남은 원소들] ]

assert.deepStrictEqual(shift(arr, 2), [
    [1, 2],
    [3, 4],
]); // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

console.log("-------------------------------------------------");

const deleteArray = (array, startOrKey, endOrValue) => {
    if (typeof startOrKey === "string") {
        return array.filter((a) => a[startOrKey] !== endOrValue);
    } else {
        return array.filter((_, i) => i < startOrKey || i >= endOrValue);
    }
};

console.log(deleteArray(arr, 2));
console.log(deleteArray(arr, 1, 3));

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
let users = [Hong, Kim, Lee];

console.log(deleteArray(users, 2));
console.log(deleteArray(users, 1, 2));
console.log(deleteArray(users, "id", 2));
console.log(deleteArray(users, "name", "Lee"));

console.log("-----------------------------------------------");

const Choi = { id: 5, name: "Choi" };
const Park = { id: 4, name: "Park" };
users = [Kim, Lee, Park];

const addUser = (name) => [...users, name];
console.log(addUser(Hong));

const removeUser = ({ id: pid }) => users.filter(({ id }) => id !== pid);
console.log(removeUser(Lee));

const changeUser = ({ id: fromId }, to) => {
    return users.map((user) => (user.id === fromId ? to : user));
};
console.log(changeUser(Kim, Choi));

console.log("---------------------------------------");

arr.push(true);
console.log(arr);

const ret1 = arr.map(String);
console.log(ret1);

const classNames = (...args) => args.filter(Boolean).join(" ");
const ret2 = classNames("", "a b c", "d", "", "e");
console.log(ret2);

console.log("---------------------------------------");

const reduce = (arr, fn, initValue) => {
    let acc, start;

    if (initValue !== undefined) {
        acc = initValue;
        start = 0;
    } else {
        acc = arr[0];
        start = 1;
    }

    for (let i = start; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }

    return acc;
};

console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
console.log(reduce([2, 2, 2], (a, b) => a * b));
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));

console.log("-------------------------");
arr = [1, 2, 3, 4, 5];
const square = (n) => n ** 2;
const sqrt = Math.sqrt;
const cube = (n) => n ** 3;

const xr1 = arr.map(square).map(sqrt).map(cube);
assert.deepStrictEqual(xr1, [1, 8, 27, 64, 125]);

const xr2 = arr.map((a) =>
    [square, sqrt, cube].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr2:", xr2);
const xr3 = arr.map((a) =>
    [cube, square, sqrt].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr3:", xr3);
const xr4 = arr.map((a) =>
    [square, cube, (n) => n + 1].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr4:", xr4);

console.log("--------------------------------------");

const range = (start, end, step = start > end ? -1 : 1) => {
    if (step === 0 || start === end) return [start];

    if ((start - end) * step > 0) return [];

    if (end === undefined && start === 0) return 0;

    const t = start;
    end = end ?? (start > 0 ? ((start = 1), t) : -1);

    let result = [];
    for (let i = start; start > end ? i >= end : i <= end; i += step) {
        result.push(i);
    }

    return result;
};

console.log(range(1, 10, 1));
console.log(range(1, 10, 2));
console.log(range(10, 1));
console.log(range(100));
console.log(range(5, 5));
console.log(range(1, 5, -1));
console.log(range(-3, 0));

console.log("------------------------------------");

function keyPaironSquare(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return [i, j];
            }
        }
    }
}

const keyPair = (arr, sum) => {
    const cache = {};
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (cache[value]) return [cache[value], i];
        cache[sum - value] = i;
    }
};
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
