import { Student, person } from './actions';
// function calculatePrice(price:number, discount?:number):number{
//     return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// function calculateScore(initialScore:number, penaltyPoints:number = 0):number {
//     return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 20);
// let scoreWithoutPenalty = calculateScore(300);


// function sum(message:string, ...numbers: number[]):string {
//     const doubled = numbers.map((num) => num * 2);
//     console.log(doubled);

//     let total = numbers.reduce((previous, current) => {
//         return previous + current;
//     }, 0);

//     return `${message}${total}`;
// }

// let result = sum('The total is : ', 1, 2, 3, 4, 5);

// function logMessage(message: string): void {
//     console.log(message);
// }

// logMessage('Hello, Typescript');

// function processInput(input: string | number) {
//     if(typeof(input) === 'number') {
//         console.log(input * 2);
//     }
//     else {
//         console.log(input.toLowerCase())
//     }
// }

//  processInput(10);
//  processInput('Hello');

// function createEmployee({id}:{id:number}): {
//     id:number; isActive:boolean
// } {
//     return {id, isActive: id % 2 === 0};
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 1 });
// console.log(first, second)

// // alternative

// function createStudent(student: {id:number, name: string}):void {
//     console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//     id: 5,
//     name: "anna",
// }

// createStudent(newStudent);
// createStudent({id: 1, name: 'bob'})

// function processData(input: string | number, config: {reverse:boolean}
//     ={reverse:false}
// ): string | number {
//     if(typeof input === 'number'){
//         return input * input;
//     }
//     else {
//         return config.reverse ? input.toUpperCase().split('').reverse().join('')
//         : input.toUpperCase();
//     }
// }

// console.log(processData(10));
// console.log(processData('Hello'));
// console.log(processData('Hello', { reverse: true}));


// interface Person {
//     name: string;
//     getDetails(): string;
// }

//  interface DogOwner {
//     dogName: string;
//     getDogDetails(): string;
//  }

//  interface Person {
//     age: number;
//  }

// const person: Person = {
//     name: 'John',
//     age: 40,
//     getDetails() {
//         return `Name ${this.name}, Age: ${this.age}`;
//     }
// }

// interface Employee extends Person {
//     employeeId: number;
// }

// const employee:Employee = {
//     name: 'Jane',
//     age: 40,
//     employeeId: 123,
//     getDetails() {
//         return `Name ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//     }
// }

// console.log(employee.getDetails());

// interface Manager extends Person, DogOwner {
//     managePeople(): void;
// }

// const manager:Manager = {
//     name: 'Bob',
//     age: 35,
//     dogName: 'rex',
//     getDetails() {
//         return `Name ${this.name}, Age: ${this.age}`;
//     },
//     getDogDetails() {
//         return `Name ${this.dogName}`;
//     },
//     managePeople() {
//         console.log('Managing people...');
//     }
// }

// manager.managePeople();

// function getEmployee():Person | DogOwner | Manager {
//     const random = Math.random();

//     if(random < 0.33) {
//         return {
//             name: 'john',
//         }
//     } else if (random < 0.66) {
//         return {
//             name: 'sarah',
//             dogName: 'rex'
//         }
//     } else {
//         return {
//             name: 'bob',
//             managePeople() {
//                 console.log('Managing people...')
//             },
//             delegateTasks() {
//                 console.log('Delegating tasks...')
//             }
//         }
//     }
// }

// interface Person {
//     name: string;
// }

// interface DogOwner extends Person {
//     dogName: string;
// }

// interface Manager extends Person {
//     managePeople(): void;
//     delegateTasks(): void;
// }

// const employee:Person | DogOwner | Manager = getEmployee();

// // console.log(employee);

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//     return 'managePeople' in obj
// }

// if(isManager(employee)) {
//     employee.delegateTasks();
// }

// enum UserRole {
//     Admin,
//     Manager,
//     Empolyee
// }

// type User = {
//     id: number;
//     name: string;
//     role: UserRole;
//     contact: [string, string];
// }

// function createUser(user: User): User {
//     return user;
// }

// const user: User = createUser({
//     id: 1,
//     name: 'Owen',
//     role: UserRole.Admin,
//     contact: ['owen@gmail.com', '123-456-789']
// });

// console.log(user);

// let someValue: any = 'this is a string';

// let strLength: number = (someValue as string).length;

// type Bird = {
//     name: string;
// }

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//     Pending = 'pending',
//     Declined = 'declined'
// }

// type User = {
//     name: string;
//     status: Status;
// };

// const statusValue = 'pending';

// const user: User = {name: 'John', status: statusValue as Status};

// let unknownValue:unknown;

// unknownValue = 'Hello world';
// unknownValue = [1, 2, 3];
// unknownValue = 42.33455;

// if(typeof unknownValue === 'number') {
//     unknownValue.toFixed(2);
// }

// function runSomeCode () {
//     const random = Math.random();
//     if(random < 0.5) {
//         throw new Error('there was error...');
//     } else {
//         throw 'some error'
//     }
// }

// try {
//     runSomeCode();
// } catch(error) {
//     if(error instanceof Error){
//         console.log(error.message);
//     } else {
//         console.log(error);
//     }
// }

// let soneValue: never = 'hello world';

// type Theme = 'ligth' | "dark"

// function checkTheme(theme: Theme):void {
//     if(theme === 'ligth') {
//         console.log ('light theme');
//         return;
//     }
//     if(theme = 'dark') {
//         console.log('dark theme');
//         return;
//     }
//     theme
// }

// enum Color {
//     Red,
//     Blue,
//     Green
// }

// function getColorName(color:Color) {
//     switch(color){
//         case Color.Red:
//             return 'Red';
//         case Color.Blue:
//             return 'Blue';
//         case Color.Green:
//             return 'Green';
//         default:
//             // at build time
//             let unexpectedColot:never = color
//             // at runtime
//             throw new Error(`Unexpected color value: ${color}`);
//     }
// }

// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));

// import newStudent, {sayHello, person, type Student} from "./actions";

// sayHello('Typescript');
// console.log(newStudent);
// console.log(person)


// const anotherStudent:Student = {
//     name: 'bob',
//     age:  24
// }

// console.log(anotherStudent);

// type ValueType = string | number | boolean;

// let value: ValueType;

// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

// function checkValue(value: ValueType): void {
//     if(typeof value === 'string') {
//         console.log(value.toLowerCase());
//         return;
//     }
//     if(typeof value === 'number') {
//         console.log(value.toFixed(2));
//         return;
//     }
//     console.log(`boolean: ${value}`);
// }

// checkValue(value);

// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//     if(animal.type === 'dog'){
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

// function makeSound(animal:Animal) {
//     if('bark' in animal) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

// function printLength(str: string | null | undefined) {
//     if(str) {
//         console.log(str.length);
//     } else {
//         console.log('no string provided');
//     }
// }

// try {
//     throw 'some error';
//     // throw new Error("This is an error");
// } catch(error) {
//     if(error instanceof Error) {
//         console.log(`Caught an Error object: ${error.message}`);
//     } else {
//         console.log('unknown error...')
//     }
// }

// function checkInput(input:Date | string): string {
//     if(input instanceof Date) {
//         return input.getFullYear().toString();
//     }
//     return input;
// }

// const year = checkInput(new Date())
// const random = checkInput('2020-05-05')

// console.log(year);
// console.log(random);

// type Student = {
//     name: string;
//     study: () => void;
// };

// type User = {
//     name: string;
//     login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//     return Math.random() > 0.5
//         ? { name: 'John', study: () => console.log('Studying')}
//         : { name: 'Mary', login: () => console.log('Logging in') };
// };

// // const person = randomPerson();

// const person:Person = {
//     name: 'anna',
//     login: () => console.log('study...')
// }

// function isStudent(person: Person):person is Student {
//     // return 'study' in person
//     return (person as Student).study !== undefined;
// }

// if(isStudent(person)) {
//     person.study();
// } else {
//     person.login();
// }

// type IncrementAction = {
//     type: 'increment';
//     amount: number;
//     timestamp: number;
//     user: string;
// }

// type DecrementAction = {
//     type: 'decrement';
//     amount: number;
//     timestamp: number;
//     user: string;
// }

// type Action = IncrementAction | DecrementAction;

// function reducer(state:number, action:Action) {
//     switch(action.type) {
//         case 'increment':
//             return state + action.amount;
//         case 'decrement':
//             return state - action.amount;
//         default:
//             const unexpectedAction:never = action
//             throw new Error(`Unexpected action : ${unexpectedAction}`);
//     }
// }

// const newState = reducer(15, {
//     type: 'increment',
//     user: "john",
//     amount: 5,
//     timestamp: 123456
// })

let array1: string[] = ['Apple', 'Banana', 'Mango'];
let array2: number[] = [1, 2, 3];
let array3: boolean[] = [true, false, true];