console.log("1. Loop를 이용하여 작성하시오");

function loop(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
}
console.time();
console.log(loop(30));
console.timeEnd();

console.log("2. 재귀함수만을 이용하여 작성하시오");

function recursion(n) {
    if (n <= 1) {
        return n;
    }
    return recursion(n - 1) + recursion(n - 2);
}
console.time();
console.log(recursion(30));
console.timeEnd();

console.log("3. memoized 함수를 이용하여 작성하시오");

function memoized() {
    const dp = {};

    function fn(n) {
        if (n <= 1) {
            return n;
        }
        return dp[n] ?? (dp[n] = fn(n - 1) + fn(n - 2));
    }
    return fn;
}

const fibo = memoized();
console.time("first:");
console.log(fibo(500));
console.timeEnd("first:");

console.time("second:");
console.log(fibo(500));
console.timeEnd("second:");

const memoFibonacci = memoized_2(function (n) {
    if (n <= 1) return n;
    return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

function memoized_2(fn) {
    const cache = {};
    return function (k) {
        return cache[k] || (cache[k] = fn(k));
    };
}
console.log(memoFibonacci(5));
