"use strict";

const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hing" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

Object.defineProperties(Array.prototype, {
    firstObject: {
        get() {
            return this[0];
        },
        set(value) {
            this[0] = value;
        },
    },
    lastObject: {
        get() {
            return this.at(-1);
        },
        set(value) {
            this[this.length - 1] = value;
        },
    },
});

console.log([arr.firstObject, arr.lastObject]);
console.log(users.firstObject);
console.log(users.lastObject);

Array.prototype.mapBy = function (prop) {
    return this.map((a) => a[prop]);
};

console.log(users.mapBy("id"));
console.log(users.mapBy("name"));

Array.prototype.filterBy = function (key, value, isInclude) {
    let cb = isInclude
        ? (a) => a[key].includes(value)
        : (a) => a[key] === value;
    return this.filter(cb);
};

console.log(users.filterBy("id", 2));
console.log(users.filterBy("name", "i", true));

Array.prototype.rejectBy = function (key, value, isInclude) {
    let cb = isInclude
        ? (a) => !a[key].includes(value)
        : (a) => a[key] !== value;
    return this.filter(cb);
};

console.log(users.rejectBy("id", 2));
console.log(users.rejectBy("name", "i", true));

Array.prototype.findBy = function (prop, value) {
    return this.find((a) => a[prop] === value);
};

console.log(users.findBy("name", "Kim"));

Array.prototype.sortBy = function (prop) {
    const [key, direction = "asc"] = prop.split(":");
    const sign = direction === "desc" ? -1 : 1;
    return this.sort((a, b) => (a[key] > b[key] ? 1 * sign : -1 * sign));
};

console.log(users.sortBy("name"));
console.log(users.sortBy("name:desc"));
