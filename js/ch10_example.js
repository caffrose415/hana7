const arr = [100, 200, 300, 400, 500, 600, 700];
console.log("1-1");
for (let i in arr) {
    console.log(i);
}
console.log("1-2");

for (let i of arr) {
    console.log(i);
}

console.log("1-3");

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

for (let i in obj) {
    console.log(i);
}

console.log("1-4");

for (let i in obj) {
    console.log(obj[i]);
}

console.log("1-5");

for (let i of Object.values(obj)) {
    console.log(i);
}

console.log("1-6");

Object.defineProperty(obj, "level", { enumerable: false });

console.log("1-7");
console.log(Object.defineProperty(obj, "role", { writable: false }));

console.log("-------------------------");
console.log("2");

const data = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
    const obj = {};
    for (let item of arr) {
        const [key, ...values] = item;
        obj[key] = values;
    }
    return obj;
}

console.log(makeObjectFromArray(data));

const dataObj = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };
function makeArrayFromObject(arr) {
    const li = [];
    for (let [key, values] of Object.entries(arr)) {
        li.push([key, ...values]);
    }
    return li;
}

console.log(makeArrayFromObject(dataObj));

console.log("------------------------------");
console.log("3");

const Kim = { nid: 3, nm: "Kim", addr: "Pusan" };
const newKim1 = clone(Kim);
newKim1.addr = "Daegu";
console.log(Kim.addr !== newKim1.addr);

const Kim2 = {
    nid: 3,
    nm: "Kim",
    addr: { city: "Pusan", road: "Haeundaero", zip: null },
};

function clone(li) {
    const arr = {};
    for (let [key, value] of Object.entries(li)) {
        arr[key] = value;
    }
    return arr;
}
const newKim2 = clone(Kim2);
newKim2.addr = "Daegu";
console.log(Kim2.addr !== newKim2.addr);
