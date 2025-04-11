const once = (f) => {
    let done = false;
    return (...args) => {
        if (done) {
            return;
        }
        done = true;
        return f(...args);
    };
};
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

function fivePart(x, y) {
    return `fivePart ${x}, ${y}, id: ${this.id}`;
}

const onceAgain = (f, rebirthDelay) => {
    let done = false;
    return (...args) => {
        if (done) return;
        done = true;
        setTimeout(() => (done = !done), rebirthDelay);
        return f(...args);
    };
};

// const fn1sec = onceAgain(fivePart, 1000);
// let cnt = 0;
// const cb = () => console.log(`${++cnt * 0.1}초`, fn1sec(cnt, 0.1));
// setInterval(cb, 100);

console.log("----------------------");

const before = () => console.log("before....");
const after = (result) => console.log("after...", result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
    `${id}/${nickname}/${email}/${level}`;

const template =
    (fn) =>
    (...args) => {
        before();
        const result = fn(...args);
        // setTimeout(function () {
        //     after(result);
        // }, 1000);

        process.nextTick(after, result);
        return result;
    };

const temp = template(someFn);
const temp2 = template(someFn2);

console.log("temp1>>", temp("sico", "hello"));
console.log("temp2>>", temp2(1, "sico", "sico@gmail.com", 5));

console.log("------------------------------");

// const getNextWeekBad = () => {
//     widx += 1; // side-effect!
//     if (widx >= weeks.length) widx = 0;
//     return `${weeks[widx]}요일`;
// };

const getNextWeek = (() => {
    const weeks = ["일", "월", "화", "수", "목", "금", "토"];
    let widx = -1;
    return () => {
        return `${weeks[++widx]}요일`;
    };
})();

let cnt = 0;
const intl = setInterval(() => {
    console.log("call", cnt, getNextWeek());
    if ((cnt += 1) === 7) clearInterval(intl);
}, 1000); //FIXME: 1000
