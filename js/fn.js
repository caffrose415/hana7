globalThis.name = "GlobalName";
this.name = "ModuleName";

function f() {
    console.log("f.this=", this.name);
}

f();

const af = () => console.log("af.this=", this.name);
af();
const obj = {
    name: "ObjName",
    bark() {
        // good!(호출한 객체)
        console.log("bark=", this.name);
    },
    bark2: () =>
        // bad!! (this=전역/module)
        console.log("bark2=", this.name),
};

obj.bark();
obj.bark2();

const expressFn = function (name) {
    // if, 'use strict' ?
    "use strict";
    if (this?.name) this.name = name;
    console.log(new.target, this?.name, name);
};

const arrowFn = (name) => {
    this.name = name;
    console.log(this, this.name, name);
};

expressFn.bind({})("expfn");
arrowFn("afn");

const dfn = new expressFn("D");
//   const afn = new arrowFn('A'); // error!

console.log("----------------------------");
const Dog = function (name) {
    console.log(this, new.target, this instanceof Dog);
    this.name = name;
    this.bark = function () {
        console.log("bark=", new.target, this.name, name);
    };
    this.bark2 = () => console.log("bark2=", new.target, this.name, name);
};

const dog = Dog("Doggy");
const lucy = new Dog("Lucy");
// Dog.bark(); // ?
lucy.bark(); // ?
lucy.bark2(); // ?
console.log("dog type=", typeof dog); // ?
console.log("lucy type=", typeof lucy); // ?
