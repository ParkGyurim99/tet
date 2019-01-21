// let a = "abc"
// const b = 4
// const c = true

// //a = 7
// //b = 9

// console.log(a)
// console.log(b)
// console.log(c)


// // Object literal
// const person = {
//     name : "parkgyurim",
//     age : 21,
// }
// console.log(person)


// //최초 존재하던 문법
// const print = function(name) {
//     console.log(name)
//     return 1
// }
// // //최신 문법
// // const print = (name) => {
// //     console.log(name)
// //     return 1
// // }

// print('Hello')

// const array = [1, 'hello', 3]

// console.log(array)

// const p = null
// const o = undefined
// let l

// console.log(p, o, l)
// //null undefined undefined

// const arr = [1, 2, 3, 8]
// for (item of arr) {
//     console.log(item)
// }

// const array2 = []

// array2.push(1)
// array2.push(2)

// for (item of array2) {
//     console.log(item)
// }

// function add (x, y) {
//     var total = x + y
//     return total
// }

// console.log(add(1,9))

// const person = {
//     age : 27,
//     getAge : function() {
//         console.log(this.age)
//     },
// }
// person.getAge()

// function Person(age) {
//     this.age = 27
// }

// class Person {
//     constructor(age) {
//         this.age = 27
//     }
// }
// const Person = new Person()



// const express = require('express')
// console.log(express)

const world = require("./world")

console.log(world)
console.log(world.age)