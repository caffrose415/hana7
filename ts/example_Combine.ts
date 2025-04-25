interface IUser {
    id: number;
    age: number;
    name: string;
}
interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

type Combine2<T, U> = {
    [x in keyof (T & U)]: x extends keyof T & keyof U
        ? T[x] | U[x]
        : x extends keyof T
        ? T[x]
        : x extends keyof U
        ? U[x]
        : never;
};

type Combine<T, U> = {
    [k in keyof (T & U)]: k extends keyof T & keyof U
        ? T[k] | U[k]
        : (T & U)[k];
};

type ICombined = Combine<IUser, IDept>;

let combineX: ICombined = {
    id: 0,
    age: 33,
    name: 'aaa',
    dname: 'bbb',
    captain: 'ccc',
};
let combineY: ICombined = {
    id: 0,
    age: '33세',
    name: 'aaa',
    dname: 'bbb',
    captain: 'ccc',
};

//------------------------------------------------------------

type ArrayItems<T> = T extends (infer X)[] // T extends unknown[] ? T[number] : T // '참'이라면 Item이라는 Generic Type을 선언(생성)
    ? X
    : T; // '거짓'일 때는 정확히 추론할 수 없으므로 사용하면 안됨!

type StringItem = ArrayItems<string>; // string
type StringArrayItem = ArrayItems<string[]>; // string
type NumberArrayItem = ArrayItems<number[]>; // number
type BooleanArrayItem = ArrayItems<boolean[]>; // boolean
type StringArrayItem2 = ArrayItems<Array<string>>; // string[] ⇒ string
type String2DItem = ArrayItems<string[][]>; // string[]

//------------------------------------------------------------------------------------
type Excludex<T, U> = T extends U ? never : T;

type Ee = Exclude<string | number, string>;
type Ex = Excludex<string | number, string>;

//--------------------------------------------------------------------------------------
type Berry = `${string}berry`;

const x1: Berry = 'Strawberry';
const x2: Berry = 'blueberry';
const x3: Berry = 'cloudberry';
const x4: Berry = 'blackberry';

const page: `Page.${number}` = 'Page.1';

//---------------------------------------------------------------------------------
type ItemPrice = Record<string, number>;
