// // prompt("what is your name?")
// var myname="pc";
// // var is used to creat a variable 
// alert(myname);
// // alert is used in place of printf
// var yourname=prompt("what is your name?")
// // yourname=input("Enter your name") python anaue
// alert(yourname)
// alert("hello "+yourname+" welcome to my "+myname)

// var message="hello";
// var name="pc";

// alert (message+" and welcome "+name);

// var tweet=prompt("compose your tweet");
// alert(tweetlength+" is the length of your tweet and you have " + (140-tweetlength) +" charachters left")

// var neme="pradhuman";
// nameslice(0,1);

// var tweet= prompt("enter your tweet");
// var tweetunder140=tweetslice(0,140);
// alert(tweetunder140);

// var name="angela";
// nametoUpperCase();
//name=nametoUpperCase(); //we override on the older value of the variable and make it toUpperCase
//name=nametoLowerCase(); //we override on the older value of the variable and make it toLowerCase

// alert(name); //alert will not print it in thealert , instead it will display it in thealert

// video no-112

// var yourName=prompt("enter your name");
// // a)slicing the first letter of the name 
// var firstLetter=yourNameslice(0,1);
// // b)turn the firstLetter into capital
// var firstLetterCapital=firstLettertoUpperCase();
// // c)slicing the rest of the name
// var restName=yourNameslice(1,lengthyourName);
// // d)making the rest of the lettrs small
// restName=restNametoLowerCase();
// // e) concatinating the strings
// var final=firstLetterCapital+restName;
// // f) printing everything on the screen
// alert("hello, "+final);

// var dogAge = prompt("how old is your dog");
// var humanAge = ((dogAge - 2) * 4) + 21
// alert("your dog is " + humanAge + " years old in human years");

// This function will tell us the number of bootles of milk will be bought using the money

// function getMilk(money) {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var amtMoney = Math.floor(money / 1.5);
//     console.log("buy " + amtMoney + " of Milk ");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
// }

// getMilk(8);

// function lifeInWeeks(age) {

//     /************Don't change the code above************/

//     //Write your code here.
//     var yearsLeft = 90 - age;
//     var monthsLeft = yearsLeft * 12;
//     var daysLeft = yearsLeft * 365;
//     var weeksLeft = yearsLeft * 52;
//     alert("there are " + monthsLeft + " months left, " + weeksLeft + " weeks left, " + daysLeft + " Days left");

//     /*************Don't change the code below**********/

// }

// lifeInWeeks(50);

// function lifeInWeeks(age) {

//     /************Don't change the code above************/

//     //Write your code here.
//     var yearsLeft = 90 - age;
//     var monthsLeft = yearsLeft * 12;
//     var daysLeft = yearsLeft * 365;
//     var weeksLeft = yearsLeft * 52;
//     console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left");

//     /*************Don't change the code below**********/

// }
// lifeInWeeks(50);

// we are trying to use the return keyword and calling one function inside another function

// function getMilk(money) {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var amtMoney = Math.floor(money / 1.5);//math.floor will round off the value (money/1.5)
//     console.log("buy " + amtMoney + " of Milk ");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");

//     return money%1.5//(1.5 is the cost of a bottle of milk)
//     // this above statement will give us the remainder of division , which is the change left after buying the bottles
// }

// var change=getMilk(4); 
// console.log(change);

// function getMilk(money) // the 5 dollars come here inside the getMilk function    
// {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy" + numberOfBottles(money, 1.5) + "of milk");
//     //as soon as we reach this line we pass on the money,costPerBottle to numberOfBottles function
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");

//     return money % 1.5
//     //(1.5 is the cost of a bottle of milk)
//     // this above statement will give us the remainder of division , which is the change left after buying the bottles
// }

// var change = getMilk(4);
// console.log(change);

// function numberOfBottles(startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     //math.floor will round off the value (money/1.5)
//     return numberOfBottles;
// }

// getMilk(5);
// //suppose you gave 5 dollars to the robot and the 5 dollars gets suplied to the getMilk function

// function getMilk(money, costPerBottle) // the 5 dollars come here inside the getMilk function    
// {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy" + calcBottles(money, costPerBottle) + "of milk");
//     //as soon as we reach this line we pass on the money,costPerBottle to numberOfBottles function
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return calcChange(money, costPerBottle);

//     //(1.5 is the cost of a bottle of milk)
//     // this above statement will give us the remainder of division , which is the change left after buying the bottles
// }

// function calcBottles(startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     //math.floor will round off the value (money/1.5)
//     return numberOfBottles;
// }

// function calcChange(meriMarziKuchBhieNaamRakhuYahanParVaiseYahanPaiseAayenge, costPerBottle) //function jo bheek mangta hai i.e jo value recieve karne ki koshish karta hai voh dabbe mein value leta hai i.e variable mein cost per costPerBottle ek dabba hai uska naam kuch bhie ho sakta tha bass
// //ek baar jo variable ka naam hamne function ke normal brackets mein likh diya wohi naam aage bhie use hoga inside the function
// // to give a slight prospective i named a vichitra variable meriMarziKuchBhieNaamRakhuVaiseYahanPaiseAayenge
// // ek function ke andar variable nam tthroughout constant rakho agr input lete time variable name meriMarziKuchBhieNaamRakhuYahanParVaiseYahanPaiseAayenge
// // toh inside variable bhie wohi naam use karo
// // aur Piyush ne ek baar class mein bola tha ki variables which are defined inside a function are limited to the function 
// {
//     var change = meriMarziKuchBhieNaamRakhuYahanParVaiseYahanPaiseAayenge % costPerBottle;
//     return change;
// }

// console.log("Hey master " + "here is the " + getMilk(5, 1.5) + " change. ");
// //suppose you gave 5 dollars to the robot and the 5 dollars gets suplied to the getMilk function

// Create your function below this line.
// The first parameter should be the weight and the second should be the height.

// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// var bmi = bmiCalculator(65, 1.8); 

// bmi should equal 20 when it's rounded to the nearest whole number.

// function bmiCalculator(weight,height)
// {
//     bmi=(Math.floor(weight/(height*height)));

//     return bmi;
// }

// var bmi = bmiCalculator(65, 1.8);
// console.log= bmi;

// you can't just write 
// console.log=var bmi = bmiCalculator(65, 1.8);
// it will just gove you an error

//this is a random number generator (a dice basically)
// var n = Math.random();
// n=n*6;//this line changes the number generation from 0 to 5
// n=Math.floor(n)+1;//math.floor rounds of the float to a whole number and + 1 adds it to 
// console.log(n);

// Love calculator

// var a=prompt("enter your name");
// var b=prompt("enter their name");
// var love=Math.random()*100;
// love=Math.floor(love)+1;
// console.log(love);
// alert("your lovescore is "+ love);

// if (love>30 && love<=70){
//  alert("your lovescore is "+love);
// }
// if (love>70){
//  alert("your love is like kanye loves kanye"+"your lovescore is "+love);
// }
// if (love<=30){
//  alert("your lovescore is "+love + "your love is like oil and water");
// }

// var year= prompt("enter teh year?");
// if (year%400==0){
//  console.log("Leap Years");
// }
// if(year%4==0 && year%100==0){
//  console.log("not leap year");
// }
// if(year%4==0&&year%100!=0){
//  console.log("leap year");
// }

// 131. Collections: Working with Javascript Arrays
// this is an array-

// var guestList=["Pam","Angela","James","Jack","Lara","Jason"];
// console.log(guestList);
// console.log(guestList.length);

// console.log(guestList[0]);

// var guestName=prompt("What is your name");
// guestList.includes(guestName);

// // includes will return true or false
// if(guestList.includes(guestName))
//    {
// alert("welcome");
//   }
// else{
//  alert("Better Luck Next time");
// }

// 132. Adding Elements and Intermediate Array Techniques
// FizzBuzz Program
// var output =[];
// var count=1;

// function FizzBuzz(){

//  if(count%5===0&&count%3===0){
//   output.push("FizzBuzz");
//  }
//  else if(count%5===0){
//   output.push("Buzz");
//  }
//  else if(count%3===0){
//   output.push("Fizz");
//  }
//  else{
//   output.push(count);
//  }
//  count++

// console.log(output);
// }

// FizzBuzz();

// 133. Who's Buying Lunch Solution

// var names=["Pam","Angela","James","Jack","Lara","Jason"];

// function whoseBuyingLunch(names) {
//  var lengthOfArray=names.length;
//  var randomNames=Math.floor(Math.random()*lengthOfArray);//math.random generate snumbers from 0 to 0.9999999999999999999999999999999999999999
//  var luckyGuy=names[randomNames];

//  return(luckyGuy+" is going to buy Lunch");
// }
// console.log(whoseBuyingLunch(names));

// 134. Control Statements: While Loops

// adding while loops to our FizzBuzz problem
// The below program will print stuff 100 times

// var output = [];
// var count = 1;

// function FizzBuzz() {
//     while (count < 100) {
//         if (count % 5 === 0 && count % 3 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 5 === 0) {
//             output.push("Buzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");
//         } else {
//             output.push(count);
//         }
//         count++
//         console.log(output);
//     }
// }

// FizzBuzz();

// var output = [];
// var count = 1;

// function FizzBuzz() {
//     while (count <= 100) {
//         if (count % 5 === 0 && count % 3 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 5 === 0) {
//             output.push("Buzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");
//         } else {
//             output.push(count);
//         }
//         count++

//     }
//         console.log(output);

// }

// FizzBuzz();


// var output = [];

// function FizzBuzz() {
//     for(var count = 1;count<=100;count++) 
//         {
//         if (count % 5 === 0 && count % 3 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 5 === 0) {
//             output.push("Buzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");
//         } else {
//             output.push(count);
//         }

//     }
//         console.log(output);
// }

// FizzBuzz();

// 138. Fibonacci Solution
// Fibonacci generator

// we want that jitna number ham pass karein function ko , woh utnee numbers ka array bana de

function FibonacciGenerator(n) {
    var output [];
    if (n===1){
        output[0];
    }
    else if(n===2){
        output=[0,1];
    }
    else{
        output=[0,1];
        for (var i=2 ; i<n ; i++){
            output.push(output[output.length-2]+output[output.length-1]);
        }
        
    return output
    }