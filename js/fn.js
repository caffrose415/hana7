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
    console.log("efn -->", this.name, name, this instanceof expressFn);
};

const arrowFn = (name) => {
    console.log("afn -->", this, this.name, name);
};

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };

expressFn.bind(hong)("expfn");
arrowFn.bind(kim)("afn");
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

console.log("------------------------");
this.name = "Module Name";
globalThis.name = "GlobalName";
const Cat = (name) => {
    console.log("Cat>>", this);
    this.name = name;

    this.bark = function () {
        console.log("bark=", new.target, this.name, name);
    };

    this.bark2 = () => console.log("bark2=", this.name, name);

    return this;
};

const cat = Cat("Coco");
console.log("##########", cat, this);
// const cat = new Cat(''); // error!!
cat.bark(); // ?
// cat.bark2(); // ?
// Cat().bark(); // ?
// console.log("type=", typeof cat); // ?

console.log("---------------------");

const o1 = Object.assign({}, obj);
const o2 = Object.create(obj);
Object.prototype.xxx = "XXX";
Array.prototype.xxx = function () {
    return this.length ** 2;
};
console.log(" o1:", o1);
console.log(" o2:", o2);

const arr = [1, 2, 3];
console.log(" arr:", arr);

Array.prototype.firstObject = function () {
    return this[0];
};
const fo = arr.firstObject();
console.log(" fo:", fo);
