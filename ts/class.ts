class WithProperty {
    myProperty!: () => void;
    // Type 정의
}
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!

const instance = new WithProperty();
//instance.myProperty(); // OK?

class WithProperty2 {
    myProperty: () => void; // call signature
    constructor() {
        this.myProperty = () => {
            console.log('Hello, this is myProperty!');
        };
    }
}
const instance2 = new WithProperty2();
instance2.myProperty();

console.log('--------------------------------------');

class Teacher {
    sayHello() {
        console.log('Take chances, make mistakes, get messy!');
    }
} // Teacher 클래스의 이름은 teacher 변수에 주석(타입정의)을 다는데 사용됨

let teacher: Teacher;
// teacher 변수에는 Teacher 클래스의 자체 인스턴스처럼 Teacher 클래스에 할당할 수 있은 값만 할당해야함을 타입스크립트에 알려줌

teacher = new Teacher(); // OK
teacher.sayHello(); // OK
//teacher = 'Hello'; // Error : Type 'string' is not assignable to type 'Teacher'.
teacher = { sayHello: () => {} }; // Error

teacher = {
    sayHello() {},
}; // Is this OK?? (:구조적 타입 체킹 - 구조만 같으면 통과! Exact-matching은 freshness 체크 X)

console.log('-----------------------------------------------------');

interface Learner {
    mouse: string | number;
    study(hours: number): void;
}

class Student implements Learner {
    mouse = 'aa';
    study(hours: number): void {
        this.mouse = `${hours}`;
    }
}

console.log('----------------------------------');

class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject;
    }
}

class OnlineLesson extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
        super(subject);
        this.url = url;
        this.subject = '';
    }
}

console.log('---------------------------------------');

class PastGrades {
    grades: number[] = [];
}

class LabeledPastGrades extends PastGrades {
    label?: string; // 있으나 마나! ==> 부모와 동일구조
}
let subClass: LabeledPastGrades;

subClass = new LabeledPastGrades(); // OK
subClass = new PastGrades(); // OK  (: Structurally TypeChecking)
// LabeledPastGrades는 선택적 속성인 PastGrades만 추가하므로 하위 클래스 대신 기본 클래스의 인스턴스를 사용할 수 있음

console.log('-------------------------------------');

class Assignment {
    grade?: number; // 기본 클래스에서 number | undefined로 선언
    // grade : number | undefined; // cf. 이것도 OK??
}

class GradedAssignment extends Assignment {
    grade: number;

    // 하위 클래스에서 grade를 필수(항상 존재하는) number 타입으로 선언
    constructor(grade: number) {
        super();
        this.grade = grade;
    }
}

console.log('-----------------------------------------');

class Animal {
    constructor(public name: string, public mouse: string = 'x') {
        this.mouse = mouse;
    }

    feed(food: string): this {
        this.mouse = food;
        console.log(food, 'feed to', this.name);
        return this;
    }

    print(age: number) {
        console.log('AnimalName is', this.name);
    }
}

class Dog extends Animal {
    print() {
        console.log('Dog Name is', this.name);
    }
}
class Cat extends Animal {
    print() {
        console.log(this.constructor.name, 'name is ', this.name);
    }
}

const maxx: Dog = new Dog('Maxx');
const navee: Cat = new Cat('Navee');

let animal: Animal = maxx;
animal.feed('banana').print(123);

const jake: Dog = new Dog('Jake');
jake.feed('apple').print();

animal = navee;
animal.feed('fish').print(123);

console.log('-----------------------------------------');

const isString = (value: unknown) => typeof value === 'string';

const f1 = (value: number | string | boolean | [string, number]) => {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
};

export {};
