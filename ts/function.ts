function add(a: number, b: number) {
    return a + b;
}

const add2 = (a: number, b: number): number => a + b;

const add3 = (a: number, b: number) => a + b; //확실한 경우 타입을 안적는게 속도면에서 유리

const introduce = (name: string, height = 0) => {
    console.log(`이름 : ${name}`);
    console.log(`키 : ${height + 10}`);
    //Error : 'height' is possibly 'undefined'.
};

introduce('김현준'); // OK
introduce('김현준', undefined); // OK
introduce('김현준', 170); // OK

const introduce2 = (name: string, height: number | undefined) => {
    console.log(`이름 : ${name}`);
    if (typeof height === 'number') {
        console.log(`키 : ${height + 10}`);
    }
};

//introduce2("김현준"); // Error : Expected 2 arguments, but got 1.
introduce2('김현준', undefined); // OK
introduce2('김현준', 170); // OK

console.log('-------------------------------------------');

const introduce4 = (name: string, height = 0) => {
    console.log(`이름 : ${name}`);
    console.log(`키 : ${height + 10}`);
};

introduce4('김현준'); // OK
introduce4('김현준', undefined);
introduce4('김현준', 170);

//introduce4('김현준', '이재현');
//Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log('-----------------------------------');

function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const factorialx = (n: number): number => {
    if (n <= 1) return 1;
    return n * factorialx(n - 1);
};

const af = (n: number): number => (n <= 1 ? 1 : n * af(n - 1));

console.log(af(5));

console.log('----------------------------------------------');

let singer: (song: string) => string;

singer = function (song) {
    // song : string의 타입
    return `Singing : ${song.toUpperCase()}!`; // OK
};

const arr3 = [1, 2, 3];
arr3.map((a, i) => a + i);
