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

const removeUser = (name) => users.filter((a) => a !== name);
console.log(removeUser(Lee));

const changeUser = (beforeName, afterName) => {
    return users.map((user) => (user === beforeName ? afterName : user));
};
console.log(changeUser(Kim, Choi));

console.log("---------------------------------------");

arr.push(true);
console.log(arr);

const ret1 = arr.map((n) => String(n));
console.log(ret1);

const classNames = (...args) => args.filter((a) => !!a).join(" ");
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
const square = (arr) => arr.map((a) => a ** 2);
const sqrt = (arr) => arr.map((a) => Math.sqrt(a));
const cube = (arr) => arr.map((a) => a ** 3);

console.log(cube(sqrt(square(arr))));
