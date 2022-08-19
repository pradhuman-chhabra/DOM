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

document.querySelector("button").classList.add("invisible")//this will add the class button to the button

document.querySelector("h1").classList.add("huge")//this will add the class huge to the h1


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

/*
144. Manipulating and Changing Styles of HTML Elements with Javascript

fontSize to 10rem. And you can find all of those names inside the DOM style object documentation and you'll see all of these properties and what they look like when you're trying to change it using Javascript instead of CSS.

As a rule of thumb, in most cases the CSS properties are exactly the same, other than the fact that there are no dashes and every word after the first one will have its first letter capitalized.

eg.) font-size-->css, fontSize --> in Javascript

The other thing to notice is that the values that you're going to set it to have to be represented as strings. Whereas in CSS we simply just specified the value as is, for example padding 7 percent, if we're trying to do this with Javascript , then we actually have to specify everything as a string, even if it's a number, like line height or padding. Kuch bhie value ho css ki woh hamey string deni hai

document.querySelector("h1").style.color="red";//h1 is the tagName

document.querySelector("h1").style.fontSize="10rem"//h1 is the tagName

document.querySelector("h1").style.padding="30%"//h1 is the tagName

document.querySelector("button").style.backgroundColor="yellow"//button is the tagName 

every property is camelCased and property values are written in strings

*/


/*

145. The Separation of Concerns: Structure vs Style vs Behaviour

So we've been trying to change the style of each element using Javascript.We've been writing things like 

document.querySelector.style.color = “red”

and this is not good practice because we're changing the style of each element using Javascript, whereas ideally all of our styles should actually be inside our CSS.

But the problem is that if we wanted our style to change on the fly, say if a user clicks on a button then the color of the background changes, then we kind of need to change that using Javascript and the style property, right?

Now one of the things that we can tap into is something called a (---class list---) and it's a property of every DOM object.

So, for example, if we query for our button and we tap into its classList property, then you can see that

it gives us a list of the classes that are attached to this element that we found. 

document.querySelector("button").classList

So the element in this case is our button, and you can see that inside the class attribute we've only got a single class, which is btn.

Now once we have the list of classes, then we can use methods, for example .add, 

document.querySelector("button").classList.add("invisible")// this will add class invisible to the element button

and we can add classes to the class list. So, for example, if I wanted to add a class, for example invisible, then I can add this new class to the list of classes on our button element in our document. And now, if I hit enter and we check out our button, you can see that it's got the class btn, but it's also got the class invisible.

Now what this allows us to do is we can tap into the stylesheet and we can create a separate style for, say, the invisible class, and we can say, maybe, visibility is hidden. So now, if I do the same thing where I add that invisible class to the class list of button, then you can see that as soon as that class is added to our button, the CSS style for invisible gets applied and our button disappears.

document.querySelector("button").classList.remove("invisible")//this will remove the class invisible

So this way we can keep all of our styles still inside our style sheet but we can turn it on and off using Javascript. Now, in addition to add, we can also remove. So now, at a different stage, I want my button to reappear. Then I can simply remove that invisible class and all of the styles that are associated with that class gets taken off that button. 

document.querySelector("button").classList.toggle("invisible")//if invisible class is added then remove it and if the class is added then remove it

And the last method that's quite useful is toggle. And toggle simply means that, if the class invisible is already applied then remove it, and if it's not applied then apply it. So now if I just keep using toggle you can see our button comes on and off and on and off.

-----------------------------------------------------------

document.querySelector("button").classList.add("invisible")

this will add the class invisible using js and we can have .invisible class in our css at the time of the creation of the website and add style to it and when  the class gets added then HTML will be able to read the css and apply the styles , so we used our js to add style not directy but added a class which made the css make sense

Challenge--

document.querySelector("h1").classList.add("huge")//this will add the class huge to the h1

*/