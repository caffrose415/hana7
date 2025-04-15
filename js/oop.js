class Animal {
    static ID = 1;
    constructor(name) {
        this.name = name;
    }

    feed(nutrient) {
        console.log(`feed to ${this.name} :`, nutrient);
    }
}
const petMixin = {
    likePeople() {
        console.log(`${this.name} like…`);
    },
};
class Dog extends Animal {
    #age = 0;
    constructor(name, age) {
        super(name);
        //this.name = name;
        this.#age = age;
    }

    setName(newName) {
        this.name = newName;
    }
    getAge() {
        return this.#age;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        this.#age = newAge;
    }
    f() {
        return this.ID;
    }
    static sf() {
        return this.ID;
    }
}

const ani = new Animal();
const dog = new Dog("Dog", 3);
const aid = ani.ID;
console.log(" aid:", aid);
console.log(" dog:", Dog.sf());
console.log("name:", dog.name, dog.getAge());
dog.setName("Maxx");
console.log("name:", dog.name, dog.age);
dog.age = 5;
console.log("name:", dog.name, dog.age);

dog.feed("VC");
Object.assign(Dog.prototype, petMixin);
dog.likePeople();

return;
console.log("-------------------------------");

function wrapFullname(user) {
    return new Proxy(user, {
        get(target, prop) {
            if (prop === "fullname") {
                return `${target.firstName} ${target.lastName}`;
            } else {
                return target[prop];
            }
        },
        set(target, prop, value) {
            if (prop === "fullname") {
                [target.firstName, target.lastName] = value.split(" ");
            } else {
                target[prop] = value;
            }
            return target;
        },
    });
}
const hongOrg = {
    id: 1,
    firstName: "Kildong",
    lastName: "Hong",
    // get fullname() {
    //     return `${this.firstName} ${this.lastName}`;
    // },
    // set fullname(fname) {
    //     [this.firstName, this.lastName] = fname.split(" ");
    // },
};

const hong = wrapFullname(hongOrg);

let fullName = hong.fullname;
console.log(" fullName11:", fullName);
hong.fullname = "Jhon Hong";
fullName = hong.fullname;
console.log(" fullName22:", fullName);

const kim = wrapFullname({ id: 2, firstName: "Kildong", lastName: "Kim" });

console.log(kim.fullname, kim.id);
kim.id = 100;
console.log(kim.fullname, kim.id);
