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

 console.log(userInput);

//end-here
});


//Q1: You are given three numbers A, B & C. Print the largest amongst these three numbers.

 let A = userInput[0];
 let B = userInput[1];
 let C = userInput[2];
 if(A>B && A>C)
 {
     console.log(A);
 } else if(B>A && B>C)
 {
     console.log(B);
 } else
 {
     console.log(C);
 }
 
 //Q2: You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.

 let A = parseInt(userInput[0]);
 let B = A * 1000;
 let C = B * 100;
 console.log(B);
 console.log(C);

//Q3: You are provided with the radius of a circle "A". Find the length of its circumference.
//Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".

let A = parseFloat(userInput[0]);
let C;
if(A<0)
{
    console.log("Error")
}
else
{
    C = 2 * Math.PI * A;
    console.log(C.toFixed(2));
}


//Q4: You will be provided with a number. Print the number of days in the month corresponding to that number.
//Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

 let month = +userInput[0];
 if(month<1 || month>12)
 {
    console.log("Error");
 }
 else
 {
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)
    {
        console.log(31);
    }
    else if(month === 2)
    {
        console.log(28);
    }
    else
    {
        console.log(30);
    }
 }  


//Q5: You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......
// (Print "Error" if N = negative value and 0 if N = 0).

let N = +userInput[0];
if(N<0)
{
    console.log("Error");
}
else if (N === 0)
{
    console.log(0);
}
else
{
    console.log(N*N);
}

//Q6: The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.
//Input Description: The side of an equilateral triangle is provided as the input.
//Output Description: Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

let a = parseFloat(userInput[0]);
let area = ((Math.sqrt(3))*a*a)/4;
console.log(area.toFixed(2));


//Q7: You are provided with a number check whether its odd or even. 
// Print "Odd" or "Even" for the corresponding cases.
// Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".

let num = parseFloat(userInput[0]);
let out = num.toFixed(0);
if(num === 0)
{
    console.log("Zero");
}
else if(out%2 === 0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

//Q8: Using the method of looping, write a program to print the table of 9 till N in the format as follows:
//(N is input by the user)
//9 18 27...
//Print NULL if 0 is input
//Input Description:A positive integer is provided as an input.
//Output Description: Print the table of nine with single space between the elements till the number that is input.

let N = +userInput[0];
let multiply = [];
if(N===0)
{
    console.log("NULL");
}
else
{
    for(i=1;i<=N;i++)
    {
        multiply[i-1] = 9 * i;
    }
    console.log(multiply.join(" "));
}

//Q9: You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.
//Print the output up to two decimal places (Round-off if necessary). (S.I. = P*T*R/100)

let data = userInput[0].split(" ");
let P = parseFloat(data[0]);
let R = parseFloat(data[1]);
let T = parseFloat(data[2]);
let SI = (P*T*R)/100;
console.log(SI.toFixed(2));

//Q10: Print the First 3 multiples of the given number "N". (N is a positive integer)
//Note: print the characters with a single space between them.
//Input Description: A positive integer is provided to you as an input.
//Output Description: Print the First 3 multiples of the number with single spaces between them as an output.

let N = +userInput[0];
let multiply = [];
for(i=1;i<4;i++)
    {
        multiply[i-1] = i * N;
    }
console.log(multiply.join(" "));

//Q12: You are given Two Numbers, A and B. If C = A + B. Find C.
//Note: Round off the output to a single decimal place.

let A = parseFloat(userInput[0]);
let B = parseFloat(userInput[1]);
let C = A + B;
console.log(C.toFixed(1));


//Q13: You are provided with a number, "N". Find its factorial.

let N = +userInput[0];
let fact = 1;
if(N===0 || N===1)
{
    return fact;
}
else
{
    for(i=N;i>=1;i--)
    {
        fact = fact * i;
    }
console.log(fact);
}


//Q14: You are given the coefficients of a quadratic equation in order A, B & C.
//Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.
//Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.
//Write a program to find all of the roots of the quadratic.
//Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.
//Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

let coeff = userInput[0].split(" ");
let a = parseFloat(coeff[0]);
let b = parseFloat(coeff[1]);
let c = parseFloat(coeff[2]);
let X1 = ((-b + Math.sqrt((b*b)-4*a*c)))/(2*a);
let X2 = ((-b - Math.sqrt((b*b)-4*a*c)))/(2*a);
console.log(X1.toFixed(2));
console.log(X2.toFixed(2));


//Q15: You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”. (A and B are natural numbers)

let A = +userInput[0];
let B = +userInput[1];
let C = A * B;
console.log(C.toFixed(1));


//Q16: Write a code to get an integer N and print the sum of  values from 1 to N.

let N = +userInput[0];
let sum = 0;
for(let i = 1; i<=N; i++)
{
    sum = sum + i;
}
console.log(sum);


//Q17: Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

let num = userInput[0].split(" ");
let A = +num[0];
let N = +num[1];
for(let i=N;i>=1;i--)
{
    console.log(A);
}


//Q18: Write a code to get an integer N and print the values from N to 1.
//Input Description: A single line contains an integer N.
//Output Description: Print the values from N to 1 in a separate line.

let N = +userInput[0];
for (let i = N; i>=1; i--)
{
    console.log(i);
}


//Q19: Let "A"  be a string. Remove all the whitespaces and find it's length.
//Input Description: A string is provide as an input
//Output Description: Remove all the whitespaces and then print the length of the remaining string.

let str = userInput[0].split(" ");
str1 = str.join("");
console.log(str1.length);


//Q20: Write a program to get a string as input and reverse the string without using temporary variable.
//Input Description:A single line containing a string.
//Output Description:Print the reversed string.

let str = userInput[0].split("");
let revstr = "";
for (let i = str.length-1; i>=0; i--)
{
    revstr = revstr + str[i];
}
console.log(revstr);


//Q21: Write a code to get an integer N and print the even values from 1 till N in a separate line.
//Input Description:A single line contains an integer N.
//Output Description:Print the even values from 1 to N in a separate line.

let N = +userInput[0];
for (let i=1; i<=N; i++)
{
    if(i%2 === 0)
    {
        console.log(i);
    }
}


//Q22: You are given with a number "N", find its cube.
//Input Description: A positive integer is provided.
//Output Description: Find the cube of the number.

let N = +userInput[0];
console.log(Math.pow(N,3));


//Q23: You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit. 
//Note: In case of decimal values, round-off to two decimal places. (Oc * (9/5))+ 32 = 1F

let ctemp = parseFloat(userInput[0]);
let ftemp = (ctemp * (9/5)) + 32;
console.log(ftemp.toFixed(2));


//Q24: Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.
//Input Description: A single line containing 2 integers separated by space.
//Output Description: Print the HCF of the integers.

let num = userInput[0].split(" ").map(Number);
let a = num[0];
let b = num[1];
let chkl;
let hcf;
if(a>b)
{
    chkl = a;
}
else
{
    chkl = b;
}
for(let i=1; i<=chkl; i++)
{
    if((a%i === 0) && (b%i === 0))
    {
        hcf = i;
    }
}
console.log(hcf);


//Q25: You are provided with two numbers. Find and print the smaller number

let num = userInput[0].split(" ").map(Number);
if(num[0]<num[1])
{
    console.log(num[0]);
}
else
{
    console.log(num[1]);
}


//Q26: Write a code get an integer number as input and print the odd and even digits of the number separately.
//Input Description:A single line containing an integer.
//Output Description: Print the even and odd integers of the integer in a separate line.

let num = userInput[0].split("").map(Number);
let even = "";
let odd = "";
for(let i=0;i<num.length;i++)
{
    if(num[i]%2 === 0)
    {
        even = even + num[i]+" ";
    }
    else
    {
        odd = odd + num[i]+" ";
    }
}
let aeven = (even.trim()).split(" ");
let aodd = (odd.trim()).split(" ");
console.log(aeven.sort().join(" "));
console.log(aodd.sort().join(" "));


//Q27: Write a code to get the input and print it 5 times.
//Input Description: A single line contains an integer N.
//Output Description: Output contains 5 lines with each line having the value N.

let N = +userInput[0];
for(let i=0; i<5; i++)
{
    console.log(N);
}


//Q28: Write a code get an integer number as input and print the sum of the digits.
//Input Description: A single line containing an integer.
//Output Description: Print the sum of the digits of the integer.

let num = userInput[0].split("").map(Number);
let sum = 0;
for(let i=0; i<num.length; i++)
{
    sum = sum + num[i];
}
console.log(sum);


//Q29: Write a code to get an integer N and print the digits of the integer.
//Input Description: A single line contains an integer N.
//Output Description: Print the digits of the integer in a single line separated by space,

let num = userInput[0].split("").map(Number);
let dis ="";
for(let i=0; i<num.length; i++)
{
    dis = dis + num[i] + " ";
}
console.log(dis.trim());


//Q30: Write a code to get an integer N and print values from 1 till N in a separate line.
//Input Description: A single line contains an integer N.
//Output Description: Print the values from 1 to N in a separate line.

let N = +userInput[0];
for(let i=1; i<=N; i++)
{
    console.log(i);
}


//Q11: Let "A" be a year, write a program to check whether this year is a leap year or not.
//Print "Y" if its a leap year and "N" if its a common year.
//Input Description: A Year is the input in the form of a positive integer.
//Output Description: Print "Y" if its a leap year and "N" if its a common year.

let A = +userInput[0];
if(A%100 === 0 && A%400 === 0)
{
    console.log("Y");
}
else if(A%4 === 0)
{
    console.log("Y");
}
else
{
    console.log("N")
}