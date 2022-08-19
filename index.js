// alert("hello World");

// document.querySelector("h1").innerHTML="Good bye world";

// this will get the element from the HTML using query selector and change the inner HTML to the specified string

document.firstElementChild.lastElementChild.firstElementChild 
var heading=document.firstElementChild.lastElementChild.firstElementChild 
heading //this will show the h1 tag in the console
heading.innerHTML="goodbye"//this will change the html of the website
heading.style.color="red"

// so this looks inside our entire document for the object that has the selector of "input", and once I have that object selected then I'm going to call a method on it which is to say click, and what click does is that it simulates a mouse click,and because I've selected the input, or my checkbox, when it performs the click function then it will check that checkbox.

document.querySelector("input").click()

// So you can see that our objects inside the DOM can have properties and methods. Now properties describe something about the object and the methods are the things that the object can do. So, for example, let's say that our object isn't an HTML button, but instead it's a car object. Well, the car object also has properties and methods. The car object might have properties such as the color of the car, the number of seats, the number of doors. So these are things that describe something about the object. But it also might have methods, so the things that it can do, namely brake, drive, park. So we can use Javascript to manipulate our objects, and it's all done using the dot notation. So if our object was called car, then we can say car.color to get the value of the property.

/*So if our object was called car, then we can say car.color to get the value of the property. So this is called a getter. 

Car.color;--> will give the output red

Car.color="blue"--> will change the color to blue

similarly

heading.style.color="blue"

And in this case if we ran this code it will give us the output of red because the current value of the color property of the car is equal to red. Now with properties we can also set it so we can say car.numberOfDoors, so the number of doors property of car, let's change it to 0. And now our call has no doors. And this is called setting a property. And you can see that the difference between setting a property and getting a property is simply whether if we assign a value to it with an equal sign.
*/

// Note- Methods and functions are basically the same thing methods/ functions mein last mein () yeh hota hain 

/*
document.querySelector("input").click() 
querySelector() and click() are methods

heading.style.color="red"
styke and color are properties
*/

// solution to challenge
// document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Angela";

/*

Video NO--143. Selecting HTML Elements with Javascript

document.getElementsByTagName("li") 
This will return an array of all the list item tags as there are three

document.getElementsByTagName("li")
document.getElementsByTagName("li")[1]//this will select the second list item tag from the array
document.getElementsByTagName("li")[2].style.color="red"//this will change the color to red

document.getElementsByTagName("li").length// this will give the lenght of the array and number of items returned in the array

document.getElementsByClassName("btn")// this will also return an array
document.getElementsByClassName("btn")[0].style.color="red"
document.getElementById("title");//since every element on a page has a single unique id, that's why it is element not elements
document.getElementById("title").innerHTML="goodboy"
//with document.querySelector we can use anything Id , ClassName or TagName
// document.querySelector("h1")//this will select the TagName
document.querySelector("#title")// this will select the id as id has a hashtag
document.querySelector(".btn")// this will select the ClassName as ClassName has a . --> .btn in order to select it
// we can combine selectors called Hierarchical Selectors 
// Hierarchical Selectors have space 
document.querySelector("li a")//this will select the anchor tag inside the list item
document.querySelector("a")// this will slect the first anchor tag no matter its the the above one or any other one
document.querySelector("li.item")//it will select the li element which has an id item and it would be the first with this combination
document.querySelector("#list a")//it will select the anchr tag inside something that has an id of list
document.querySelector("#list .item")//it will select a ClassName of item inside something that has a class of item
document.querySelectorAll("#list .item")//it will select a ClassName of item inside something that has a class of item and will return an array of all the items whoch match this criteria 
document.querySelectorAll("#list .item")[2] //this will select the third element which matches this criteria
document.querySelectorAll("#list .item")[2].style.color="blue" //this will select the third element which matches the criteria and will change the style
document.querySelector("li a").style.color="red";// this will change the color of the anchor tag inside the list item 
document.querySelector("li").style.color="red";//this will change the bullet point to red as the list item and the anchor tag are seperate objectss

*/