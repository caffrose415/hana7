type S = string;    //alias

const myName:S = 'Youmin';
let age;
age = 33;

let lastName:string | boolean = "King";
lastName = true;
console.log(myName,age,lastName);

type Name = 'Hong' | 'Kim' | 'Lee';

type SomeType ={
    id:string |number;
    name:Name;
    age:number;
    address:string;
}

const something = ({ id, name, age, address }:SomeType) => {
    // Do something...
    console.log(id,name,age,address);
}

const user:SomeType = {id:'1',name:'Hong',age:33,address:"seoul"};
something(user);

let x:string | undefined = Math.random()>0.5 ? 'str' : undefined;
let y:string|number | undefined = x;
let z:string;

if(x){
    z=x;
}
if(typeof x ==='string'){
    z=x;
}

type Member = {
    name: string,
    addr: string,
    discountRate: number;
};
type Guest = {
name: string,
age: number,
};

type Customer = Member | Guest;
type MemberGuest = Member | Guest;

let cust: Customer;

let g:Guest;
let m:Member;
let mg:MemberGuest;

cust = {
    name:'홍길동',
    addr: '용산구',
    discountRate: 0.1,
}
m=cust;
mg=cust;

cust = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    age: 26,
}

//g = cust;
mg=cust;

let arr: number[];
let xarr = Math.random() >0.5 ? [1,2,3] : 123;

if(Array.isArray(xarr)){
    arr = xarr;
}

let gildong = Math.random() > 0.5 && 'HongGilDong';

if (gildong) {
   gildong.toUpperCase(); // string
} else {
   gildong; // false | string
}
