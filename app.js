// For loop

// Q No.01

// var mesage = "Hello World"

// for(let a = 0; a < 5; a++){
//     document.write(mesage + "<br>")
// }

// Q No.02

// for(let a = 0; a < 11; a++){
//     document.write(a + "<br>")
// }

// Q No.03

// var table = prompt("Enter any number for multiplication Table ")
// var tableLenght = prompt("Enter Lenght 0f multiplication Table ")
// document.write("<h1>Table</h1> <br>")
// for(let a = 1; a <= tableLenght; a++ ){
    
//     document.write(` ${table} x ${a} = ${(table)*(a)} <br>`)
// }

// Q No.04

// var table = prompt("Enter any number for multiplication Table ")
// document.write(`Multiplication Table is ${table} <br>`)
// var tableLenght = prompt("Enter Lenght 0f multiplication Table ")
// document.write(`Lenght of Table is ${tableLenght}`)
// document.write("<h1>Table</h1> <br>")
// for(let a = 1; a <= tableLenght; a++ ){
    
//     document.write(` ${table} x ${a} = ${(table)*(a)} <br>`)
// }

// Q No.05

// var Mobile = ["Nokia","Samsung","iPhone","Vivo","Redmi"]

// for(let a = 0; a < Mobile.length; a++){
//     document.write(Mobile[a] + "<br>")
// }

// Q No.06

// var fruits = ["apple","banana","mango","orange","strawberry"]

// for(let a = 0; a < fruits.length; a++){
//     document.write(fruits[a] + "<br>" + "Element at Index number " + a + " is " + fruits[a] + "<br>")
// }

// Q.07 

// var askUserWant = prompt("Enter what you want")

// for(let a = 0; a < askUserWant.length; a++){
//     alert(`${askUserWant}`)
// }

// Q.08

// for(let a = 0 ; a < 11 ; a++){
//     console.log(a)
// }

// for(let a = 10 ; a >= 1 ; a--){
//     console.log(a)
// }


// for(let a = 1; a <= 15; a++){

//    if(a % 2 == 0){
//       console.log(a);
//    }

// }

// for(let a = 1; a <= 15; a++){

//    if(a % 2 !== 0){
//       console.log(a);
//    }

// }

// var numOfSEries = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"]
// for(let a=0; a < numOfSEries.length; a++){
//    console.log(numOfSEries[a]);
// }

// Q.09


// var userAsk = prompt("any fruit")
// let value;
// var fruit = ["apple","Mango","orange","pineapple",]
// for(var a = 0; a < fruit.length; a++){
//     if(fruit[a] === userAsk){
//         value = true
//         boxNum = a
//     }
// }
// if(value){
//     console.log(`your item ${userAsk}  available at ${boxNum}`)
// }else{
//     console.log(`sorry`)
// }

// Q.10

// var A = [24,53,86,38,22,55];
// var CaptialNumber = A[0];
// for(let a = 0; a < A.length; a++){
//    if(A[a] > CaptialNumber ){
//       CaptialNumber = A[a];
//    }
// }

// console.log(CaptialNumber)

// Q.11

// var A = [24,53,86,38,22,55];
// var CaptialNumber = A[0];
// for(let a = 0; a < A.length; a++){
//    if(A[a] < CaptialNumber ){
//       CaptialNumber = A[a];
//    }
// }

// console.log(CaptialNumber)

// Q.12

// var range = 5;
// for(let a = 1; a <= 20; a++){
//    console.log(range*a)
// }

// Q.13

// var students = ["ali","amir","furqan","asad"]
// var score = [55,60,70,45];

// for(let a = 0; a < students.length; a++){
//    console.log(students[a],score[a])
// }

// var score2 = [12, 45, 23, 54, 28];
// var userInput = prompt("kch b");
// for (let a = 0; a < score2.length && score2[a] <= userInput; a++) {
//   console.log(score2[a]);
// }
 
// Q.14

// var score = [12,45,3,44,22,50]
// var newArray = []
// var personInput = prompt("ask number")

// for(let a = 0; a < score.length; a++){
//         if(score[a] == personInput){
//           console.log(newArray.push(score[a]))
//             break;
//         }else{
//         //    console.log(newArray.push(score[a]))

//         }
// }


// Q.15

// var A = [ [1,2,3] , [4,5,6] , [7,8,9] ]

// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//       console.log(A[i][j]);
//     }
//   }

// Q.16

// var input = prompt("enter a number")

// for(let a = input; a >= 0 ; a -= .5){
//     console.log(a)
// }

// Q.17

// for(let a = 0; a < 21 ; a ++ ){

//     if(a % 2 == 0){
//         console.log(`${a} even number`)
//     }else if(a % 2 !== 0){
//         console.log(`${a} odd number`)

//     }
// }

// Q.18


// for(a = 1 ; a <= 7; a += 1){
//     if(a % 2 !== 0){
//         console.log(a*a)
//     }
// }

// Q.19

// for(let a = 7; a >= 1; a--){
//     for(let i = 1; i <=a ; i++){
//         document.write("*")
//     }
//     document.write("<br>")

// }

// Q.20

// for(let a = 1; a <= 5; a++){
//     document.write("*****" + "<br>")

// }


// for(let a = 1; a <= 5; a++){
//     for(let i = 1; i <=a ; i++){
//         document.write("*")
//     }
//     document.write("<br>")

// }

// for(let a = 5; a >= 1; a--){
//     for(let i = 1; i <=a ; i++){
//         document.write("*")
//     }
//     document.write("<br>")

// }
