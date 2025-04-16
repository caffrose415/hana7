const assert = require("assert");

const hing = { id: 1, name: "Hong" };
const m = new Map();

m.set(1, 100);
m.set(2, 200);
m.set(hing, hing.name);
m.set(2, 222);
m.set(3, undefined);

m.delete(1);
console.log(" m:", m.has(3));

const keys = m.keys();
console.log(" keys:", keys);

const set2 = new Set([1, 2, "3"]);
set2.add(4);
set2.add(hing);
console.log(" set2:", set2);

console.log(set2.has(hing), set2.has(3));

console.log("------------------------------------");

const ws = new WeakSet();
const s = new Set();
{
    let obj1 = { id: 1 };
    const obj2 = { id: 2 };
    ws.add(obj1);
    s.add(obj1);

    ws.add(obj2);
    s.add(obj2);

    obj1 = null; // obj1 주소 변경
    console.log(ws, ws.has(obj1));
    console.log(s, s.has(obj1));
}

console.log(s.size, ws.size);
console.log("ws>", ws);
console.log("s>>", s);

console.log("-------------------------------");

const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];

const deptMap = new Map(depts.map((dept) => [dept.id, dept]));
const hix = { id: 1, name: "Hong", dept: 1 }; // hix.dept.dname ⇒ deptMap.get(hix.dept)?.dname
const kix = { id: 2, name: "Kim", dept: 2 };
const emps = [
    hix,
    kix,
    { id: 3, name: "Park", dept: 2 },
    { id: 4, name: "Choi", dept: 2 },
];

const empMap = new Map(emps.map((emp) => [emp.id, emp]));

const empDept = new Map(
    // emps.map(({ id, name, dept }) => [{ id, name }, deptMap.get(dept)])
    emps.map((emp) => {
        const tempDept = emp.dept;
        delete emp.dept;
        return [emp, deptMap.get(tempDept)];
    })
);
console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)

console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kix).dname); // '개발팀'

console.log("----------------------------------------------");

Array.prototype.uniqBy = function (prop) {
    return [...new Set(this.map((a) => a[prop]))];
};
const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hix, kix, lee, park, ko, loon, choi];
users.uniqBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]
