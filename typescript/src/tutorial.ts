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

function getEmployee():Person | DogOwner | Manager {
    const random = Math.random();

    if(random < 0.33) {
        return {
            name: 'john',
        }
    } else if (random < 0.66) {
        return {
            name: 'sarah',
            dogName: 'rex'
        }
    } else {
        return {
            name: 'bob',
            managePeople() {
                console.log('Managing people...')
            },
            delegateTasks() {
                console.log('Delegating tasks...')
            }
        }
    }
}

interface Person {
    name: string;
}

interface DogOwner extends Person {
    dogName: string;
}

interface Manager extends Person {
    managePeople(): void;
    delegateTasks(): void;
}

const employee:Person | DogOwner | Manager = getEmployee();

// console.log(employee);

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
    return 'managePeople' in obj
}

if(isManager(employee)) {
    employee.delegateTasks();
}