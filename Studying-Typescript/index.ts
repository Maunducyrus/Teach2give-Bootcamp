// let username: string = "Cyrus@2024";
// console.log(username)
let num1: number = 55;
let num2: number = 77.55;
let  num3: number = Infinity;
console.log(num1, num2, num3);

let str1: string = "Cyrus";
let str2: string = `Maundu Cyrus`;
console.log("My name is".concat(str2))

const isMale: boolean = true;
const isFemale: boolean = false;
console.log(isMale);

// let myVar = null;
// myVar = 55;
// myVar = "str"

// let mayVar: any = 55;
// mayVar = "Hello there"
// myVar = true
// mayVar = undefined
// myVar = [3. 4, 5]
// myVar = {}

// TS interfaces
// interface Student {
//     firstName: string
//     lastName: string
//     age?: number
//     readonly course: string // means the course can't be changed
// }
// interface ClassRep extends Student{
//     designation: string
//     retirementYear: number
// }

// let cyrus: Student = {
//     firstName: "John",
//     lastName: "Kioko",
//     age: 30,
//     course: "BBIT"
// }

// const joshua: ClassRep = {
//     firstName: "Ben",
//     lastName: "Msk",
//     age: 34,
//     course: "CS",
//     designation: "Class of 2025",
//     retirementYear: 2026
// }
// console.log(cyrus)
// console.log(joshua)

class Student {
    firstName: string
    lastName: string
    age: number

    constructor (firstName: string, lastName: string, age: number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

const cyrus = new Student("Cyrus", "Maundu", 28)
console.log(cyrus)

// const ages: (number | string | boolean)[] = [45,, 55, 80, 20]
// console.log(ages)