//const assert = require("assert"); // commonJS
import assert from "assert";
import moment from "moment";
import aaf, { PI } from "./aa.js";

const hello = "Hello Module!";
console.log(" hello:", hello, moment().startOf("days").fromNow());

assert.equal(hello, "Hello Module!");

const aa = aaf();
console.log(" aa:", aa);
console.log("PI: ", PI);

export { PI };
