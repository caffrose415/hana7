//11111111111111111111111111111111111111111111111111111111

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

type CombineExclude<T, U, E extends keyof any> = {
    [K in Exclude<keyof (T & U), E>]: K extends keyof T & keyof U
        ? T[K] | U[K]
        : (T & U)[K];
};

type ICombineExclude = CombineExclude<IUser, IDept, 'name' | 'dname'>;

let combineExclude: ICombineExclude = {
    id: 0,
    age: 33,
    captain: 'ccc',
};

//222222222222222222222222222222222222222222222222222222
function registUserObj({ name, age }: { name: string; age: number }) {
    const id = 100;
    return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[0];

const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('🚀  newUser2:', newUser2);

//3333333333333333333333333333333333333333333333333333333
function debounce(cb: Function, delay: number) {
    let timer: any;

    return (...args: any[]) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args);
    };
}

function throttle(cb: Function, delay: number) {
    let timer: any;
    return (...args: any[]) => {
        if (timer) return;
        timer = setTimeout(() => {
            cb(...args);
            timer = null;
        }, delay);
    };
}

// test
const debo = debounce((a: number, b: string) => console.log(a + 1, b), 1000);
for (let i = 10; i < 15; i++) debo(i, 'abc'); // 15, 'abc'

const thro = throttle((a: number) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i); // 11

//44444444444444444444444444444444444444444444444444444444444
function memoized() {
    let dp: {};

    function fn(a: number, b: number) {
        return dp[aa+b;
    }
}

const memoizeAdd = memoized((a: number, b: number) => {
    return a + b;
  });
  
  console.log(memoizeAdd(1, 2))); // 3
  console.log(memoizeAdd(3, 4))); // 7
export {};
