// Dates

let myDate = new Date()
console.log(myDate.toString()); //Mon Jul 31 2023 08:45:40 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon Jul 31 2023
console.log(myDate.toISOString()); //2023-07-31T08:45:40.730Z
console.log(myDate.toLocaleDateString()); //7/31/2023
console.log(myDate.toLocaleString()); //7/31/2023, 8:45:40 AM
console.log(myDate.toLocaleTimeString()); //8:45:40 AM
console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

let myCreateDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreateDate.toLocaleString()); //1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1690793676000  Value in millisecond from 1st jan 1970
console.log(myCreatedDate.getTime()); //1674432000000
console.log(Math.floor(Date.now()/1000)); //1690793921

let newDate = new Date()
console.log(newDate);//2023-07-31T09:00:04.334Z
console.log(newDate.getMonth());// 6
console.log(newDate.toLocaleString('default', {
    weekday: "long"
})); //Monday

