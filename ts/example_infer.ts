function add1(a: number) {
    return `${a}`;
}
function add2(a: number, b: string) {
    return `${a} - ${b}`;
}
function add(a: number, b: string, c: boolean) {
    return `${a} - ${b}`;
}

type FirstArgs<F> = F extends (a: infer First, ...rest: any) => any
    ? First
    : never;

type SecondArgs<F> = F extends (a: any, b: infer Second, ...rest: any) => any
    ? Second
    : never;

type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

type A1 = FirstArgs<typeof add1>; // number
type A2 = FirstArgs<typeof add2>; // number
type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string | boolean
let a: A = 0;
let b: B = 'abc';
let c: C = Math.random() > 0.5 ? 1 : 'abc';
console.log('🚀 abc:', a, b, c);

type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
let ax: AX = 'str';
ax = 0;

export {};
