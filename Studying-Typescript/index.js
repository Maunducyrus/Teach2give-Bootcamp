// let username: string = "Cyrus@2024";
// console.log(username)
var num1 = 55;
var num2 = 77.55;
var num3 = Infinity;
console.log(num1, num2, num3);
var str1 = "Cyrus";
var str2 = "Maundu Cyrus";
console.log("My name is".concat(str2));
var isMale = true;
var isFemale = false;
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
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Student;
}());
var cyrus = new Student("Cyrus", "Maundu", 28);
console.log(cyrus);
