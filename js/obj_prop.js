const sym = Symbol();
const user = {
    "": 1,
    " ": 1, // 'id': 1, '0y': 2 모두 OK!
    123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
    12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
    true: 1, // OK  user[true]  user.true
    id: 2,
    [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
    [sym]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
    [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
    "my-friends": ["Han", "Kim"],
    getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
    getInfo() {
        return `${this.id}-${this.name}`;
    }, // OK! getInfo의 최종 <f.o>
};
const keys = Object.keys(user);
user.xxx = 123;
console.log(" keys:", keys, Reflect.ownKeys(user));

const k = "id";
const { [k]: kk } = user;
console.log(" kk:", kk);

const oth = user[123];
console.log(" oth:", oth, user["my-friends"]);
console.log("------------------------------------");

const a = {};
const b = { k: 1 };
const c = { k: 2 };
a[b] = 77; // a['object Object']=77
a[c] = 99; // a['object Object']=99
console.log(a[b], a[c]); // ?

const entries1 = Object.entries(user);
console.log(" entries1:", entries1); //symbol이 안보임

const entries2 = [];
for (let k of Reflect.ownKeys(user)) {
    entries2.push([k, user[k]]);
}
console.log(" entries2:", entries2);

delete user[sym];
//const hasId = "id" in user;
const hasId = user.hasOwnProperty("id");
console.log(" hasId:", hasId);
console.log(" user:", user);

const values = Object.values(user);
console.log(" values:", values);

const ooo = new Object(123);
console.log(" ooo:", ooo);

class Dog {
    id = 1;
    static X = 2;
}

const dogId = Dog.id;
console.log(" dogId:", dogId);
const dogX = Dog.X;
console.log(" dogX:", dogX);

const maxx = new Dog();
console.log(" maxx:", maxx);

console.log("----------------------------------");
const des = Object.getOwnPropertyDescriptors(user);
console.log(" des:", des);
user["123"] = 999;
user.age = 33;

Object.defineProperty(user, "age", { value: 39, writable: false });

const des1 = Object.getOwnPropertyDescriptors(user);
console.log(" des1:", des1);

const userJosnString = JSON.stringify(user, null, "  ");
console.log(" userJosnString:", userJosnString);

const userObj = JSON.parse(userJosnString);
console.log(" userObj:", userObj);

const str = '{"id": 1, "name": "Hong"}';
const p1 = JSON.parse(str, function (k, v) {
    console.log("kkkkkkkkkkkkkk ----->", k, v);
    return typeof v === "number" ? v * 2 : v;
});

console.log("--------------------------------");

let value = JSON.rawJSON("1234");
value = JSON.rawJSON('"str"');

if (JSON.isRawJSON(value)) {
    const rj = value.rawJSON;
    console.log(" rj:", rj);
}
const svalue = JSON.stringify({ value });

console.log(" svalue:", svalue);
