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
//Your code goes here … replace this line with your code logic 
 
 
 
//end-here
});


//Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
//Sample Testcase :
//INPUT
//4 2
//1 2 3 3
//OUTPUT
//yes

let data1 = userInput[0].split(" ").map(Number);
let eleN = userInput[1].split(" ").map(Number);

let N = data1[0];
let K = data1[1];
let out =[];
let fout="no";
for(let i=0; i<N; i++)
{
  if(eleN[i] == K)
  {
    out[i] = "yes";
  }
  else
  {
    out[i] = "no";
  }
}
//console.log(out);
for(let j=0; j<out.length; j++)
{
    if(out[j] == "no")
    {
        continue;
    }
    else if(out[j] == "yes")
    {
        fout = "yes";
    }
}
console.log(fout);


//Q2: Write a program to print the sum of the first K natural numbers.
//Input Size : n <= 100000 Sample Testcase : INPUT  3 OUTPUT 6

let K = +userInput[0];
let sum = 0;
for(i=1;i<=K; i++)
{
  sum = sum + i;
}
console.log(sum);


//Q4: Given a number N, print 'yes' if it is composite else print 'no'.
//Sample Testcase : INPUT 123 OUTPUT yes
//hint:factors more than 2; number divisible by otherthan 1 and itself  is called composite numbers

let N = parseInt(4);
let count = 0;
for(let i=2; i<=N; i++)
{
  if(N%i === 0)
  {
    count++;
  }
}
if(count>1)
{
  console.log("yes");
}
else
{
  console.log("no");
}

//Q5:Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
//Sample Testcase :
//INPUT
//3
//2 6
//OUTPUT
//yes

let N = +userInput[0]; 
let numbers = userInput[1].split(" ").map(Number);
let L = numbers[0];
let R = numbers[1];
if(N>L && N<R)
{
  console.log("yes");
}
else console.log("no");

/*Q7: Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.
Sample Testcase :
INPUT
9 2
OUTPUT
odd
*/

let numbers = userInput[0].split(" ").map(Number);
let N = numbers[0];
let M = numbers[1];
let sum = N + M;
if(sum%2 === 0)
{
  console.log("even");
}
else
{
  console.log("odd");
}

/* Q8: Find the minimum among 10 numbers.
Sample Testcase :
INPUT
5 4 3 2 1 7 6 10 8 9
OUTPUT
1
*/

let numbers = userInput[0].split(" ").map(Number);
let minVal = Math.min(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6],numbers[7],numbers[8],numbers[9]);
console.log(minVal);

/*Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found.
Sample Testcase :
INPUT
6 2
1 2 3 5 7 8
OUTPUT
0
*/

let number1 = userInput[0].split(" ").map(Number);
let N = number1[0];
let K = number1[1];
let numbers2 = userInput[1].split(" ").map(Number);
let count = -1;
if(N === numbers2.length)
{
  for(let i = 0; i<numbers2.length; i++)
  {
    if(numbers2[i] === K)
    {
      count = count + 1;
    }
    else
    {
      continue;
    }
  }
  console.log(count);
}
else
{
  console.log("Kindly enter only "+N+" elements and try again");
}

/* Q10. Given numbers A,B find A^B.
Input Size : 1 <= A <= 5 <= B <= 50
Sample Testcase :
INPUT
3 4
OUTPUT
81
*/

let num = userInput[0].split(" ").map(Number);
let A = num[0];
let B = num[1];
let out = Math.pow(A,B);
console.log(out);

/*Q13: Given base(B) and height(H) of a triangle find its area.
Input Size : N <= 1000000
Sample Testcase :
INPUT
2 4
OUTPUT
4
*/

let num = userInput[0].split(" ").map(Number);
let B = num[0];
let H = num[1];
let areaTri = (H*B)/2;
console.log(areaTri);

/*Q14: Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'.
Input Size : A,B,C <= 100000
Sample Testcase :
INPUT
3 4 5
OUTPUT
yes
*/

let nums = userInput[0].split(" ").map(Number);
let A = nums[0];
let B = nums[1];
let C = nums[2];

if(A !== B && A !== C && B !== C )
{
  console.log("yes");
}
else
{
  console.log("no");
}


/*Q15: Given a string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0).
Input Size : |s| <= 10000000(complexity O(n))
Sample Testcase :
INPUT
codekata
OUTPUT
ocedakat
*/

let str = userInput[0];
let spltstr = str.split("");
//console.log(spltstr.length);
let dum = "";
for (let i=0; i<spltstr.length; i++)
{
  if( i === (spltstr.length-1))
  {
        if(i%2 === 0)
        {
            dum = dum + spltstr[i];
        }
        else
        {
            dum = dum + spltstr[i-1];
        }
  }
  else if(i%2 === 0)
  {
      dum = dum + spltstr[i+1];
  }
  else
  {
      dum = dum + spltstr[i-1];
  }
}
console.log(dum);


/*Q17: Write a code to get a integer n as input and calculate the smallest perfect power of 2 greater than n.

Input Description:
A single line containing an integer,n.

Output Description:
Print the smallest perfect power of 2 greater than n.

Sample Input :
48
Sample Output :
64

Formula: next = pow(2, ceil(log(x)/log(2))); */

let n = +userInput[0];
let next = Math.pow(2, Math.ceil((Math.log(n))/(Math.log(2))));
let next2;
if(next === n)
{
    next2 = Math.pow(2, Math.ceil((Math.log(next+1))/(Math.log(2))));
    console.log(next2);
}else
{
console.log(next);
}

/*Q18: Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
Sample Testcase :
INPUT
5 5
OUTPUT
yes
*/

let nums = userInput[0].split(" ").map(Number);
let N = nums[0];
let M = nums[1];
if(N === M)
{
  console.log("yes");
}
else
{
  console.log("no");
}

/* Q19: Given 3 numbers A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no'.
Input Size : A,B,C <= 100000
Sample Testcase :
INPUT
3 4 5
OUTPUT
yes
*/

let num = userInput[0].split(" ").map(Number);
let A = num[0];
let B = num[1];
let C = num[2];
if(((A*A)+(B*B))===(C*C))
{
  console.log("yes");
}
else
{
  console.log("no");
}

/*Q26: Given 3 numbers A,B,C process and print 'yes' if they can form the sides of a triangle otherwise print 'no'.
Input Size : A,B,C <= 100000
Sample Testcase :
INPUT
3 4 5
OUTPUT
yes
*/

let num = userInput[0].split(" ").map(Number);
let A = num[0];
let B = num[1];
let C = num[2];
if((A+B) > C && (A+C) > B && (B+C) > A)
{
  console.log("yes");
}
else
{
  console.log("no");
}


///* No Duplicate array*/
/*concept learned is value of both index only printed*/


let a = userInput[0].split(" ").map(Number);
let nodup = "";
for(let i=0; i<a.length; i++)
{
    for(let j=0; j<a.length; j++)
    {
        if(i !== j)
        {
            if(a[i] === a[j])
            {
                break;
            }
        }
        else
        {
            nodup = nodup + a[i];
        }
    }
}
noduparr = nodup.split("");
console.log(noduparr);


/*Q27: Write a code to get 2 integers as input and add the integers without any carry.

Input Description:
A single line containing 2 integers.

Output Description:
Print sum of the 2 integers without carry

Sample Input :
44 66
Sample Output :
0
*/

let n = userInput[0].split(" ").map(Number);
let sum = 0;
let mul = 0;

while(n[0]||n[1])
{
  sum = (n[0]%10) + (n[1]%10);
  sum = sum%10;
  let res = (sum * mul) + res;
  n[0] = n[0]/10;
  n[1] = n[1]/10;
  mul = mul * 10;
}
console.log(res);



/* Q30: Given an array of N elements switch(swap) the element with the adjacent element and print the output.
Sample Testcase :
INPUT
5
3 2 1 2 3
OUTPUT
2 3 2 1 3
*/

let Num = +userInput[0]; 
let N = userInput[1].split(" ").map(Number);
if(Num === N.length)
{
let temp = 0;
for(let i = 0; i<N.length; i=i+2)
{
  if(i === (N.length -1))
  {
      continue;
  }
  else
  {
  for(let j = 0; j<N.length; j++)
  {
    if(i === j)
    {
      temp = N[j];
      N[j] = N[j+1];
      N[j+1] = temp;
    }
  }
  }
}
console.log(N.join(" "));
}
else 
{ 
    console.log("Enter exact size of elements");
}


/* Given a string S consisting of 2 words reverse the order of two words .
Input Size : |S| <= 10000000
Sample Testcase :
INPUT
hello world
OUTPUT
world hello
*/

let words = userInput[0].split(" ");
let swap = "";
swap = words[0];
words[0] = words[1];
words[1] = swap;
console.log(words.join(" "));

/* Q33: Kabali is a brave warrior who with his group of young ninjas moves from one place to another to fight against his opponents. 
Before Fighting he just calculates one thing, the difference between his ninja number and the opponent's ninja number. 
From this difference he decides whether to fight or not. Kabali's ninja number is never greater than his opponent.
Input
The input contains two numbers in every line. These two numbers in each line denotes the number ninjas in Kabali's clan and his opponent's clan . print the absolute difference of number of ninjas between Kabali's clan and his opponent's clan. Each output should be in seperate line.
Sample Testcase :
INPUT
100 200
OUTPUT
100
*/

let clanNinjanum = userInput;
for(let i = 0; i<clanNinjanum.length; i++)
{
  let clan = clanNinjanum[i].split(" ");
  for (let j=0; j<clan.length; j++)
  {
    if(clan[j]<clan[j+1])
    {
      let diff = clan[j+1] - clan[j];
      console.log(diff);
    }
  }
}


/* Given a list of N coins, their values (V1, V2, … , VN), and the total sum S. 
Find the minimum number of coins the sum of which is S (we can use as many coins of one type as we want), 
if it is not possible to select coins in such a way that they sum up to S then print '-1'.
Example: Given coins with values 1, 3, and 5. And the sum S is 11.
Output: 3, 2 coins of 3 and 1 coin of 5
Input Size : N<=10000
Example:
INPUT
3 11
1 3 5
OUTPUT
3
*/

let coins = userInput[0].split(" ").map(Number);
let N = coins[0];
let S = coins[1];
let listOfN = userInput[1].split(" ").map(Number);
let out;
if(N === listOfN.length)
{
let sumOflist=0;
for(let i = 0; i<listOfN.length; i++)
{
  sumOflist = sumOflist + listOfN[i];
}
out = S - sumOflist;
console.log(out);
}
else
{
  console.log(-1);
}


/* Q40: Given a number N followed by N numbers.Find the smallest number and largest number and print both the indices(1 based indexing).
Input Size : N <= 100000
Sample Testcase :
INPUT
5
1 2 3 4 5
OUTPUT
1 5

*/

let N = +userInput[0];
let num = userInput[1].split(" ").map(Number);
let minNum = +num[0];
let maxNum = +num[0];
if(N === num.length)
{
  for (let i = 0; i<N; i++)
  {
    for(let j = 0; j<N; j++)
    {
      if(i!=j)
      {
        if(num[i]<num[j])
        {
        if (minNum>num[i])
        {
          minNum = num[i];
        }
        }
        else if(num[i]>num[j])
        {
          if(maxNum<num[i])
          {
              maxNum = num[i];
          }
        }
      }
    }
  }
console.log((num.indexOf(minNum)+1), (num.indexOf(maxNum)+1));
}
else
{
  console.log("enter numbers as per size N");
}


/* Q41: Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1
Sample Testcase :
INPUT
10 5
OUTPUT
5
*/


let nums = userInput[0].split(" ").map(Number);
let N = nums[0];
let M = nums[1];
let min = Math.min(N,M);
let gcd;
for(let i=1; i<=min; i++)
{
    if(N>0 && M>0)
    {
        if(N%i === 0 && M%i === 0)
        {
            gcd = i;
        }
        else
        {
            continue;
        }
    }
    else if(N < 0 || M<0)
    {
      gcd = 1;
    }
    else
    {
        gcd = -1
    }
}
console.log(gcd);