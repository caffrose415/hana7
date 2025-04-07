var x;
var y;

x=100;
y=200;

var zz;
console.log(zz);

function add(a,b){
    var c;
    return a+b+c;
    c = 9;
};

zz = add(1,2);
console.log('11=' ,zz);
zz=9;
console.log('22= ', zz);
console.log(this);

console.log('--------------------------');

let i;
var x = undefined;
f = undefined;
function ff() { console.log('ff>', y); }
var y = undefined;
var xx = undefined;

console.log(i); // ReferenceError: Cannot access 'i' before initialization
i = 1;
console.log('x=', x); // x= undefined
x = 1;
console.log(ff, f);   // [Function: ff], undefined
//f();      // TypeError: f is not a function
{
    function f() { console.log('f>', x, xx); }  // 여기서 <f.o> 할당!!
    const b=1;
    f();      // 1, undefined (:LexicalScope)
    x = 2;
}
if (x > 2) {
let yy;
y = 5;
yy = 55;
}
xx = 100;
ff();  // ReferenceError: yy is not defined 
