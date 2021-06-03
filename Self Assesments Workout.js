//Compulsory lines
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

//end-here
});


//Q1. the first 3 multiples of the given number N

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
 let N = parseInt(userInput[0]);
 let out ="";
 for(let i=1; i<4;i++)
 {
  out = out + N*i + " ";
 }
 console.log(out.trim(" "));

//end-here
});

//Q2. Add 2 number and print
//input 1 2 and output 3

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let num = userInput[0].split(" ").map(Number);
console.log(num[0]+num[1]);

//end-here
});

//Q3. You are provided with 2 numbers single line, find the smallest number

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let num = userInput[0].split(" ").map(Number);
if(num[0]<num[1])
{
  console.log(num[0]);
}
else
{
  console.log(num[1]);
}

//end-here
});

//Q4. You are provided with 2 numbers multi line, find the smallest number among two

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let num1 = +userInput[0];
let num2 = +userInput[1];
if(num1<num2)
{
  console.log(num1);
}
else
{
  console.log(num2);
}

//end-here
});

//Q5. Declare four variables without assigning values and print them in console
//Output - undefined in all lines

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let a;
let b;
let c;
let d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//end-here
});

//Q6. How to get value of the variable myvar as output

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let myvar = 1;
console.log("myvar");
console.log(myvar);

//end-here
});

//Q7. Declare variables to store your first name, last name, marital status, country and age in multiple lines

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let fname = userInput[0];
let lname = userInput[1];
let mstatus = userInput[2];
let country = userInput[3];
let age = parseFloat(userInput[4]);

//end-here
});

//Q8. Declare variables to store your first name, last name, marital status, country and age in single line.

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let data = userInput[0].split(" ");
let fname = data[0];
let lname = data[1];
let mstatus = data[2];
let country = data[3];
let age = parseFloat(data[4]);
console.log(data);
//end-here
});

//Q9. Declare variables and assign string, boolean, undefined and null data types

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let strvar1 = userInput[0];
let strvar2 = userInput[1];
let bvar = (userInput[2] === true);
let undata;
let nodata =null;

console.log(typeof(strvar1));
console.log(typeof(bvar));
console.log(undata);
console.log(nodata);

//end-here
});

//Q10. Convert the string to integer using parseInt(),Number(),Plus sign(+)

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let num1 = parseInt(userInput[0]);
let num2 = Number(userInput[0]);
let num3 = +(userInput[0]);

console.log(typeof(userInput[0]));
console.log(typeof(num1),typeof(num2),typeof(num3));

//end-here
});

//Q11.Square of a number

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let num1 = parseInt(userInput[0]);
console.log(Math.pow(num1,2));

//end-here
});

//Q13.Swapping 2 numbers

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let num1 = parseInt(userInput[0]);
let num2 = parseInt(userInput[1]);
console.log(num1,num2);
let swap = num1;
num1 = num2;
num2 = swap;
console.log(num1,num2);

//end-here
});

//Q14. Celsius to Fahrenheit conversion
//(0°C × 9/5) + 32 = 32°F

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let c_deg = parseInt(userInput);
let f_deg = (c_deg*(9/5))+32;
console.log(c_deg+"°C is "+f_deg+"°F");

//end-here
});

//Q15. Meter to Miles
// divide meter by 1609;

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let meter = +userInput[0];
let mile = meter/1609;
console.log(meter+" Meters is "+mile+" Miles");
console.log(meter+" Meters is "+mile.toFixed(7)+" Miles");
//end-here
});

//Q16. Pound to kilogram
// divide Pound by 2.205;

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let pound = parseFloat(userInput[0]);
let kg = pound/2.205;
console.log(pound+" Pound is "+kg+" Kg");
console.log(pound+" Pound is "+kg.toFixed(7)+" Kg");
//end-here
});

//Q17. Batting Average in Cricket
// Batting average is overall no of runs taken by player divide by overall no of times out

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let nrun = +userInput[0];
let nout = +userInput[1];
let bat_avg = parseFloat(nrun/nout);
console.log(bat_avg);
//end-here
});


//Q18. Calculate five test scores in single line and print their average

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

let grades = userInput[0].split(" ").map(Number);
let sum = 0;
for(let i=0;i<grades.length;i++)
{
   sum = sum + grades[i]; 
}
let avg = parseFloat(sum/grades.length);
console.log(avg.toFixed(2));
//end-here
});

// https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373