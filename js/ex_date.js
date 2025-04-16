const d = new Date();
d.setTime(0);
console.log(" d:", d);
const time1 = d.getTime();
d.setDate(5);
console.log(" d:", d, (d.getTime() - time1) / 1000);

console.log("--------------------------");
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const today = new Date();
today.setMonth(today.getMonth() + 1);
today.setDate(0);
const endOfDay = today.getDate();
console.log("today:", today);

const days = [];

do {
    const r = rand(1, endOfDay);
    if (!days.includes(r)) days.push(r);
} while (days.length < 5);
console.log("days: ", days);

const yyyy = today.getFullYear();
const mm = (today.getMonth() + 1).toString().padStart(2, 0);
const result = days
    .sort((a, b) => b - a)
    .map((day) => `${yyyy}-${mm}-${day.toString().padStart(2, 0)}`);

console.log(result);

console.log("------------------------------");

const today1 = new Date();
today1.setFullYear(today1.getFullYear() + 1);
console.log("NextYear>>", "일월화수목금토"[today1.getDay()]);

console.log("--------------------------------------");

const today2 = new Date();
today2.setDate(today2.getDate() + 99);
console.log(" today2:", today2);
