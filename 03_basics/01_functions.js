
function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("V");
    console.log("I");
}

//sayMyName()

//function addTwoNumbers(num1, num2){
//    console.log(num1 + num2);
//}

function addTwoNumbers(num1, num2){
    //let result = num1 + num2
    //return result
//    **console.log("Madhvi"); // After return nothing is printed.**
    return num1 + num2
}

addTwoNumbers(3, 5)
const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username){  //function loginUserMessage(username = "sam") <= we can give default value like this so undefined can't be printed.
    if(username === undefined){
    //if(!username){ => We can use it also.
        console.log("Please enter a username");
        return
}
    return `${username} just logged in`
}

//console.log(loginUserMessage("Madhvi"));
//console.log(loginUserMessage());

function calculateCartprice(...num1){
//function calculateCartprice(val1, val2, ...num1){ //Output:- [ 600 ]
    return num1
}

//console.log(calculateCartprice(200, 500, 600));

const user = {
    username: "Madhvi",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 399, 895, 1000]));