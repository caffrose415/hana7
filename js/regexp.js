const assert = require("assert");

const str = "Senior Coding Learning JS";
const a = /[A-z\d]/.test(str);
console.log(" a:", a);
const b = /(A-z\d)/.test(str); // ?
console.log(" b:", b);
const c = /(A-z\d)/.test("XA-z2"); // ?
console.log(" c:", c);
const d = /(A-z\d)/.test("XAz2"); // ?
console.log(" d:", d);

const r1 = str.replace(/[A-Z]/g, "*");
console.log(" r1:", r1);

const regexp1 = /[A-Z]/;
const r11 = regexp1.test(str);
console.log(" r11:", r11);
const r12 = regexp1.exec(str);
console.log(" r12:", r12);

const regexp = /senior|coding/gi;
if (regexp.test("Junior Developer")) console.log("11OK");
if (regexp.test("Senior Developer")) console.log("22OK");
if (regexp.test("JS Coding")) console.log("33OK");
if (regexp.test("JavaScript Coding")) console.log("44OK");

console.log(
    "1234-2323-2323-2323".replace(/(\d{4})-(\d{4})-(.*)$/, "$1-####-$3")
);

function xx(...args) {
    console.log("xxx>>", ...args);
}
const str123 = "Senior Coding Learning JS".replace(
    /[A-Z]/g,
    (foundStr, position) => {
        if (foundStr === "L") return "X" + position;
        return foundStr;
    }
);
console.log(str123);

console.log("----------------------------------------");
const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

function fmt(txts, value) {
    return `${txts[0]}${value.toLocaleString().padStart(8)}${txts[1]}`;
}

console.log("-----------------------------------");

//ex1
const upperToLower = (str) =>
    str.replace(/[A-Z]/g, (foundStr) => foundStr.toLowerCase());
const low = upperToLower("Senior Coding Learning JS");
console.log(" low:", low);

console.log("-------------------------------------");
//ex2
const swapCase = (str) =>
    str.replace(/[A-Za-z]/g, (foundStr) => foundStr>='A' && foundStr<='Z' ? foundStr.toLowerCase() : foundStr.toUpperCase());

assert.equal(
    swapCase("Senior Coding Learning JS"),
    "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 4 Class"), "hANARO 4 cLASS");

console.log("-------------------------------------");

//ex3

const telfmt = (str) => {
  if (str.length === 8) return str.replace(/(\d{4})(\d{4})/, "$1-$2");
  else if(str.length===11)return str.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1-$2-$3");
  else if((str.length===10 || str.length===9) && str.startsWith('02')) return str.replace(/^(\d{2})(\d{3,4})(\d{4})$/, "$1-$2-$3");
  else if(str.length===10) return str.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
  else return str.replace(/^(\d{4})(\d{4})(\d{4})$/,"$1-$2-$3");
};


assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');
