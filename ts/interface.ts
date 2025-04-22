type Xid = { id: number };
type Xname = { name: string } & Xid;
type Xage = { age: number } & Xid;
type X = Xname | Xage;
type Y = Xname & Xage;
type Z = string & number;

type P = Xid | (Xname & Xage);
type Q = Xid & (Xname | Xage);

let xx: X = { id: 1, name: 'Hong' };
xx = { id: 2, age: 33 };

let yy: Y = { id: 11, name: 'Hong', age: 33 };

let pp: P = { id: 33, name: 'Kim', age: 33 };
let qq: Q = { id: 33, name: 'Kang' };

console.log('----------------------------------');

interface CallSignature {
    (input: string): number;
    count: 0;
    greeting: (name: string) => void;
}

const typedCallSignature: CallSignature = (input) => input.length;

typedCallSignature.count = 0;
typedCallSignature.greeting = (name) => console.log(`H,${name}`);

console.log('---------------------------');

interface Novel {
    title: string;
    [key: string]: string | number | boolean;
}

console.log('------------------------------------');

interface User {
    id: number;
    name: string;
}

console.log('------------------------------------------');
