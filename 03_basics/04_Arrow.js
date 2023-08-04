const user = {
    username: "Madhvi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "Harshit"
//user.welcomeMessage()

//console.log(this); // {}

// function chai(){
//     let username = "Madhvi"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "Madhvi"
//         console.log(this.username);
// }

const chai = () => {
    let username = "Madhvi"
        console.log(this);
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   // Implicit Return method

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Madhvi"})   // Object return karna


console.log(addTwo(3,9));


// const myArray = [1, 2, 3, 4, 5]

// myArray.forEach()