function add(a: number, b: number) {
    return a + b;
}

const s = 'abc';

const add2 = (a: number, b: number): number => a + b;
const add3 = (a: number, b: number) => a + b;

const introduce = (name: string, height?: number) => {
    console.log(`이름 : ${name}`);
    // if (height) console.log(`키 : ${height + 10}`);
    // if (height && height > 0) console.log(`키 : ${height + 10}`);
    if (typeof height === 'number') console.log(`키 : ${height + 10}`);
    // console.log(`키 : ${(height ?? 0) + 10}`);
};

introduce('김현준'); // OK
introduce('김현준', undefined); // OK
introduce('김현준', 0); // OK
introduce('김현준', 170); // OK

// ----------------------------------
const introduce2 = (name: string, height: number | undefined) => {
    console.log(`이름 : ${name}`);
    if (typeof height === 'number') {
        console.log(`키 : ${height + 10}`);
    }
};

introduce2('김현준', 0);
introduce2('김현준', undefined); // OK
introduce2('김현준', 170); // OK

// -----------------------------------
const introduce4 = (name: string, height = 0) => {
    console.log(`이름 : ${name}`);
    console.log(`키 : ${height + 10}`);
    //  console.log(`키 : ${(height ?? 0) + 10}`);
};

introduce4('김현준4'); // OK
introduce4('김현준4', undefined);
introduce4('김현준4', 170);

// introduce4("김현준", "이재현");
//Error: Argument of type 'string' is not assignable to parameter of type 'number'.

function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const afactorial = (n: number): number => {
    if (n <= 1) return 1;
    return n * afactorial(n - 1);
};

const af = (n: number): number => (n <= 1 ? n : n * af(n - 1));

let singer: (song: number | string) => string;

singer = function (song) {
    // song : string의 타입
    return `Singing : ${typeof song === 'string' && song.toUpperCase()}!`; // OK
};

const arr3 = [1, 2, 3, '4', 's'];
console.log(arr3.map((a, i) => '' + a + i));
console.log(arr3.map((a, i) => Number(a) + i));

function ff(params: number): void {
    console.log('ff');
}

const rf1 = ff(1);

type F = () => void;
const f5: F = () => {};
const f6: Function = (n: string) => {};
const obj: Object = {};

function tfn(this: { id: number }, x: string) {
    console.log('tfn>>', this.id, x);
}

function ntfn(this: void, x: string) {
    console.log('ntfn>>', x);
}

tfn.bind({ id: 1 })('X');
ntfn('Y');

let u: Object = { id: 1 };
u = {
    toString() {
        return '1';
    },
};
u = [];
u = function () {};

let u2: {};
u2 = {
    toString() {
        return 1;
    },
};
u2 = u;

let u3: object;
u2 = {};

const t = setTimeout(console.log, 1000, '1');

const a: number[] = [1, 2, 3];
a[100]?.toFixed(); //noUncheckedIndexedAccess

const b = [4, 5, '6'];

const c = [...a, ...b];
// const d = a.concat(b);

// type A = {
//   name: string;
//   age: number;
// };
type OrgA = { name: string };
type A = { age: number } & OrgA;

// interface OrgA {
//   name: string;
// }

// interface A extends OrgA{
//   age: number;
// }

const yarr: Array<number> = [];
const zarr: number[] = [];

class AA implements A {
    name: string = 'abc';
    age: number = 0;
}

// class A {
//   constructor(name: string, age: number) {}
// }

type B = {
    name: string;
    addr: string;
};

const onlyA: A[] = [
    { name: 'lim', age: 10 },
    { name: 'hong', age: 20 },
];
const onlyB: B[] = [
    { name: 'jang', addr: 'Seoul' },
    { name: 'park', addr: 'Busan' },
];
const aOrB = [...onlyA, ...onlyB];
// (A|B)[]

const abobj = {
    name: 'Tan',
    age: 30,
    addr: 'Incheon',
    x: 1,
};

let abx: A | B = abobj;

aOrB.push(abobj);
aOrB.push({ name: 'X', age: 20, addr: 'xx' });

type IS = {
    [k: number]: number;
    [k: symbol]: boolean;
    [k: string]: string | number;
};

type IS2 = {
    [k: number]: string | number;
    id: number;
};

const sym1: unique symbol = Symbol('s1');
let isobj1: IS = { id: '1', name: 'Hong', 3: 5, [sym1]: false };

let isobj2: IS2 = { 3: 5, id: 3, 5: 55 };

{
    type A = { name: string; addr: string };
    const blockA: A = { name: 'Hong', addr: 'Pusan' };
    console.log('🚀 blockA:', blockA);
}

const outerA: A = { name: 'Kim', age: 33 };

function tuple() {
    const a: [number, string, boolean] = [1, 'lim', false];

    let b: [number, string] = [a[0], a[1]];
    console.log('🚀 b:', b);
}
tuple();

const greeting = (greet: 'Hi' | 'Hello', name: string, age: number) => {
    console.log(`${greet}~ ${name}, You are ${age}.`);

    return [name, age] as const;
    // return [name, age];
};

const gr1 = greeting('Hi', 'Hong', 33);
console.log('🚀 gr1:', gr1[1]);

const tup: [string, number] = ['Kim', 55];
greeting('Hello', ...tup);

const ary = ['Park', 44];
// greeting('Hello', ary[0], ary[1]);
// greeting('Hello', ...ary);

const greeting2 = (
    greet: 'Hi' | 'Hello',
    name: string,
    age: number
): [string, number] => {
    console.log(`${greet}~ ${name}, You are ${age}.`);

    return [name, age];
    // return [name, age];
};
const gr2 = greeting2('Hi', 'Hong', 33);
// gr2[1] = 'zzz';
const gr3 = [gr2[0], 'zzz'];
console.log('🚀 gr2:', gr2[1], gr3);

// ----------------------
const arr = [1, 2, 3];
const arr2: [number, number, number] = [4, 5, 6];
const arr22 = [4, 5, 6] as const;
console.log('🚀 arr22:', arr22);

type T1 = [string, number];

type AT1 = [number, string, number];
type AT2 = [number, T1]; // [number, [string, number]]
type AT3 = [number, ...T1]; // [number, string, number]

export {};
