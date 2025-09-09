// // let name = "berdia"

// // console.log(`hello, ${name}`) // f"hello, {name}"

// // switch (key) {
// //     case value: // case: if
// //         for (let i = 0; i < 6; i++) {
// //             console.log(`${key}: ${value}`)
// //         }
// //     default: // default: else
// //         console.log("idk")
// // }

// // const age = prompt("Enter your age: ")

// // const ternaryOp = age < 18 ? console.log("You are an child") : console.log("You are an adult")

// // console.log(ternaryOp)

// // setInterval(function() {
// //     const date = new Date();

// //     console.log(date)
// // }, 3000)

// // string

// console.log(String(1 + 1) + "11")

// // integer

// console.log(Number("5"))

// // List

// const name = "berdia"

// const obj = {
//     name: name
// }

// console.log(Array(obj))

// // Boolean

// console.log(Boolean(1)) 


// const num = prompt("Enter your number: ")

// console.log(typeof(num))

// const numTypeOf = typeof(Number(num))

// console.log(numTypeOf)

// function discountFunc() {
//     const age = Number(prompt("Enter your age: "))

//     if (age < 18) {
//         return "20%"
//     } else if (age >= 18 && age < 65) {
//         return "5%"
//     } else {
//         return "10%"
//     }
// }

// console.log(discountFunc())

// function compareNums(num1, num2) {
//     if (num1 > num2) {
//         return num1
//     } else if (num1 < num2) {
//         return num2
//     } else {
//         return "Numbers are equal"
//     }
// }

// console.log(compareNums(5, 3)) 

// const num = prompt("Enter a number: ") // 5

// console.log(typeof(num)) // String

// const number = typeof(Number(num)) // 5: Number

// console.log(number) // Number

// Output:
//      String
//      Number

// non-numeric string

// console.log(String(5))
// console.log(String(true))
// console.log(Number("5"))
// console.log(Number(true))
// console.log(Number("Hello")) // Error

// const num = Number(prompt("Enter a number: "))

// if (num < 0) {
//     console.log("The number you entered is negative")
// } else {
//     console.log("The number you entered is positive")
// }

// const age = Number(prompt("Enter your age: "))

// if (age >= 18) {
//     console.log("You can vote!")
// } else {
//     console.log("You are not eligible to vote")
// }

// const num1 = Number(prompt("Enter a first number: ")) // 5

// const num2 = Number(prompt("Enter a second number: ")) // 4

// if (num1 > num2) {
//     console.log(`The first number ${num1} is larger then the second number ${num2}`)
// } else if (num1 < num2) {
//     console.log(`The second number ${num2} is larger then the first number ${num1}`)
// } else {
//     console.log(`The numbers ${num1} and ${num2} are equal`)
// }

// const num = Number(prompt("Enter a number: "))

// if (num % 2 === 0) {
//     console.log(`The number ${num} is even`)
// } else {
//     console.log(`The number ${num} is odd`)
// }

// const person = {
//     name: {
//         name1: "Berdia",
//         name2: "Marta",
//         name3: "Giorgi"
//     },
//     age: {
//         age1: 12,
//         age2: 18,
//         age3: 13
//     }
// }

// person.name.name1 = "Nika"

// console.log(person)

// const form = document.getElementById("form");

// const btn = document.getElementById("btn")

// const func = () => {
//     const name = form.username.value;

//     if (name === "") {
//         alert("Please enter your name");
//         return;
//     }

//     alert(name)
// }

// btn.onclick = func;

// console.log(String(123))

// console.log(String(true))

// console.log(Number("456"))

// console.log(Number(false))

// console.log(Number("Hello"))

// const number = Number(prompt("Enter a number: "));

// if (number < 0) {
//     alert("The number is negative");
// } else if (number === 0) {
//     alert("The number is zero");
// } else {
//     alert("The number is positive");
// }

// const num1 = Number(prompt("Enter a first number: "))
// const num2 = Number(prompt("Enter a second number: "))

// if (num1 > num2) {
//     console.log("First number is larger")
// } else if (num1 < num2) {
//     console.log("Second number is larger")
// } else {
//     console.log("Both are equal")
// }

// let person = {
//     name: "Berdia",
//     age: "12",
//     city: "zhis ubani"
// }

// console.log(person["name"])

// person = {
//     name: "Berdia",
//     age: "12",
//     city: "zhis ubani",
//     hobby: "programming"
// }

// person["city"] = "Tbilisi"

// console.log(person)

// let student = {
//     name: "Anna",
//     info: {
//         age: 17,
//         school: "Green high school",
//         grade: "11th"
//     }
// }

// const newGrade = student.info.grade = "12th"

// student = {
//     name: "Anna",
//     info: {
//         age: 17,
//         school: "Green high school",
//         grade: newGrade
//     },
//     club: "Drama"
// }

// console.log(student)

// const num1 = Number(prompt("Enter the first number: "))
// const num2 = Number(prompt("Enter the second number: "))

// if (num1 > 10 && num2 > 10) {
//     console.log("Both numbers are greater then 10");
// } else {
//     console.log("Both of the number must be greater then 10")
// }

// const age = Number(prompt("Enter your age: "))
// const city = prompt("Enter your city: ")

// if (!age < 18) {
//     console.log("You dont meet the requirements")
// } else if (age >= 18 || city === "Tbilisi") {
//     console.log("You meet the requirements")
// } else {
//     console.log("You dont meet the requirements")
// }

// const number = Number(prompt("Enter a number: "))

// if (number % 2 === 0) {
//     console.log("Even")
// } else {
//     console.log("Odd")
// }

// const img = document.getElementById("img");
// const showBtn = document.getElementById("showBtn");
// const hideBtn = document.getElementById("hideBtn");

// const showImg = () => {
//     img.src = "./assets/img/img.png"
// }

// showBtn.onclick = showImg

// const hideImg = () => {
//     img.src = ""
// }

// hideBtn.onclick = hideImg;

// const person = {
//     name: "Berdia",
//     age: "19",
//     city: "Tbilisi"
// }

// if (person["age"] >= 18 && person["city"] === "Tbilisi") {
//     console.log("You can vote in tbilisi")
// } else {
//     console.log("You cannot vote in tbilisi")
// }

// const age1 = Number(prompt("Enter a first age: "))
// const age2 = Number(pormpt("Enter a second age: "))

// const city1 = prompt("Enter a first city: ")
// const city2 = prompt("Enter a second city: ")

// const person1 = {
//     age: age1,
//     city: city1
// }

// const person2 = {
//     age: age2,
//     city: city2
// }

// if (age1 > age2) {
//     console.log("The first person is older")
// } else if (age1 < age2) {
//     console.log("The second person is older")
// } else if (age1 === age2) {
//     console.log("They are the same age");
// }

// if (city1 === "tbilisi" && city2 === "rustavi") {
//     console.log("the first city has more people");
// } else if (city2 === "rustavi" && city1 === "tbilisi") {
//     console.log("the second city has more people")
// } else if (city1 === city2) {
//     console.log("Both of the cities have same amount of people");
// }