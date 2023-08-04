function one() {
    const username = "Madhvi"

    function two(){
        const website = "Github"
        console.log(username);
    }
    //console.log(website);

    two()

}

//one()

if (true) {
    const username = "Madhvi"
    if (username === "Madhvi") {
        const website = " Github"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// *************************** Intersting ************************************

//console.log(addone(5))  => It does not give any error because we declare here.
function addone(num){
    return num + 1
}

addone(5)


//console.log(addtwo(5));   =>It gives error because we declared and hold it on a variable.
const addtwo = function(num) {       // Sometimes it is called expression
    return num + 2
}

addtwo(5)