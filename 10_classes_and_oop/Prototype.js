// let myName = "Madhvi     "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Madhvi = function(){
    console.log(`Madhvi is present in all objects`);
}

Array.prototype.heyMadhvi = function(){
    console.log(`Madhvi says hello`);
}

// heroPower.Madhvi()
myHeros.Madhvi()
myHeros.heyMadhvi()
// heroPower.heyMadhvi()     => gives  error

// inheritance 

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignments",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Madhvi".trueLength()
"iceTea".trueLength()