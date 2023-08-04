// Immediately Invoked Function Expressions (IIFE)


(function one() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();
//one()

// ( function two() {
//     console.log(`DB CONNECTED TWO`);
// })()

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Madhvi')