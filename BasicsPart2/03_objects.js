// Singleton
// Object.create

// object literals

const  mySym = Symbol("key1")


const JsUser = {
    name: "Madhvi",
    "full name": "Madhvi Saxena",
    [mySym]: "mykey1",
    age: 18,
    location: "Kanpur",
    email: "madhvi@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Friday"]
}

console.log(JsUser.email); // madhvi@gmail.com
console.log(JsUser["email"]); // madhvi@gmail.com
console.log(JsUser["full name"]); // Madhvi Saxena
console.log(JsUser[mySym]); // mykey1

JsUser.email = "madhvi@google.com"
//Object.freeze(JsUser)
JsUser.email = "madhvi@apple.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());