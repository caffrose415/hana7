const assert = require("assert");

function makeArray(n) {
    if (n === 1) {
        return [1];
    }
    return [...makeArray(n - 1), n];
}

function makeReverseArray(n) {
    if (n === 1) {
        return [1];
    }
    return [n, ...makeReverseArray(n - 1)];
}

function makeArrayTCO(n, acc = []) {
    if (n === 0) {
        return acc;
    }
    return makeArrayTCO(n - 1, [n, ...acc]);
}

function makeReverseArrayTCO(n, acc = []) {
    if (n === 0) {
        return acc;
    }
    return makeReverseArrayTCO(n - 1, [...acc, n]);
}

console.log(makeArray(10));
console.log(makeReverseArray(10));
console.log("-------------------------");

console.log(makeArrayTCO(10));
console.log(makeReverseArrayTCO(10));

console.log("-------------");
assert.deepEqual(makeArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepEqual(makeArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
