// const students = ["Ieva", "Tomas", "Kristina"];

// localStorage.setItem("studentlist", JSON.stringify(students));

// console.log(JSON.parse(localStorage.getItem("studentList")));

//localStorage.remove("studentList")

//localStorage.clear()

//---------------------------------------------------


// "use strict"
// //firstName = "Jonas";
// //Array destructing
// let [ firstName, lastName, email] = ["Jonas", "Jonaitis", "jonas@gmail.com"];
// firstName = "Kristina";
// console.log(firstName , email);


//------------------------------------------------------

//Object destructing

// const personalInformation = {
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     email: "jonas@gmail.com",
//     products: [
//         {id:1},
//         {id:2},
//         {id:3},

// ]
// };
// const {firstName: fn, lastName: ln, products:prod} = personalInformation;

// //firstName = "Kristina";
// console.log(fn, prod);

//-------------------------------------------------------------


// let items = ["Computer", "Tablet", "Phone"];
// if(items.includes("Tablet")){
//     console.log("Item found")
// } else {
//     console.log("Item not found")
// }

//-------------------------------------------------------------
//spred operator
// const sum = (...numbers)=> {
//     console.log(numbers)
// }
// sum(22, 33, 44, 55, 66)
// console.log(sum)


//------------------------------------------------------------------
"use strict"
// setTimeout(()=>{
//     console.log("Labas")
// }, 5000)
//---------------------




//Call back funkcija
const syHi = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const firstName="Kristina";
            resolve(firstName);
    }, 2000)
    })
}
// syHi()
// .then((firstName)=>{console.log(firstName)})
// .then(()=>{console.log("Viskas veikia")})

const greet = async()=>{
    const firstname = await syHi();
    console.log("Labas, " + firstname)
}
greet()