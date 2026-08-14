// alert("hello external javascript");
// lesson2
// innerHTMl
// document.getElementById("h3").innerHTML = "Hello world";
// // document.write()
// document.write("hello world");
// // window alert()
// alert("hello alert");
// // console log()
// console.log("Hello my love");
// lesson3
// Variable is container for storing data values
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// Use variable
// var name = "John Doe";
// console.log(name);
// var a, b, sum;
// a = 10;
// b = 10;
// sum = a + b;
// console.log(sum);
// var a = 100;
// var b = 200;
// var sum = a + b;

// console.log(sum);
// var x= 1000;
// console.log(x);
// console.log(typeof x);

// var hello = "my name is nin bora";
// console.log(hello);
// console.log(typeof hello);

// var name = null;
// console.log(typeof name);

// function declare invoke
// function greeting()
// {
//     console.log("Hello my name is bora.");
//     console.log("Hello my name is pisey.");
//     console.log("Hello my name is mesa.");
// }

// invoke function
// greeting();
// greeting();

// function parameter
// params when declare/define
// arguments when invoke/call/run

// declare function
// function greeting(name)
// {
//     console.log("Hello my name is",name);
// }
// // invoke
// greeting("Kala");
// greeting("mesa");
// greeting(100);
// const greetingg = function(name,name2)
// {
//     console.log(name2);
//     console.log("My name is nin bora" ,name);
// }
// let he = "bra", she = "maka";
// var name ="tola";
// greetingg(name);
// greetingg(he, she)
// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(9,6));

// function sum(a,b)
// {
//     const add = a + b;
//     return add;
// }
// console.log(sum(9,5));

// array
// const array = [ 3, 3 , 2 , 5 , 5];
// console.log(array);
// array[5] = " i love you";
// console.log(array[5]);

// Object
// const person = 
// {
//     id :1,
//     name : "Tola",
//     sex : "Male",
//     siblings : ["RA", "Mesa"],
//     greeting :function(name)
//     {
//         console.log("hello, my name is nin bora "+ name);
//     }
// };
// console.log(person.siblings[0]);

// condition statement
// const value = false;
// if(value)
// {
//     console.log("My value is true");
// }
// else 
//  console.log("my value is false");
// const num1=20, num2=30;
// const sum = num1+ num2;
// if (sum==40)
// {
//     console.log("Sum equal to" + sum);
// }
// else
// {
//     console.log("Sum equal to " + sum);
// }
// let a = 20;
// let b="30";
// === kit tang data type value
// == kit ta value
// !== kit tang data type value
// != kit ta value
// if (a===b)
// {
//     console.log(true);
// }
// else 
// {
//     console.log(false);
// }

// switch statement
// let day;
// switch (day) {
//     case 1:
//         console.log("Monday");

//         break;
//     case 2:
//         console.log("Tuesday");
         
//         break;
//     case 3:
//         console.log("Wednesday");

//         break;
//     case 4:
//         console.log("Thursday");

//         break;
    
//     default:
//         console.log("Invalid day");
        
//         break;
// }

// loop

// while loop
// let i = 0;
// while (i<10) {
//     console.log("hello"+ (i+1));
//     i++;
// }

// do while loop
// let j = 1;
// do
// {
//     console.log("hello" +j);
//     j++;
// } while (j<=10);

// for loop
// for (let k=0 ; k<=10 ; k++)
// {
//     console.log("I love you.!"+k);
// }

// for of loop
// const car = ["valvo", "BMW", "Camery", "Ford", "Hybrid"];
// for (let i of car)
// {
//     console.log(i);
// }

// for in
// const person = 
// {
//     id :1,
//     sex : "male",
//     name : "bora",
//     education : true,
//     married : false,
//     greeting()
//     {
//         console.log("hello maddid");
//     }
// }
// for (let i in person)
// {
//     console.log(i +" : "+ person[i]);
    
// }

// break chob tver 
// continue romlong

// number methods
// let y=5.56;
// console.log(y.toString());
// console.log(y.toExponential(1));
// console.log(y.toFixed());
// console.log(y.toPrecision(2));
// console.log(y.valueOf());
// console.log(Number("100"));
// console.log(parseInt(y));
// console.log(parseFloat(y));
// const string = "Hello";
// console.log(string.length);
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// let first_name = "Nin";
// let last_name = "Bora";
// console.log(first_name.concat(" ",last_name));
// const greeting = "Hello tola i miss your so much my love, tola";
// console.log(greeting.indexOf("tola"));
// console.log(greeting.lastIndexOf("tola"));
// console.log(greeting.slice(-10,-6));

// array method
// let name = ["nita" , "bora" , "ah ra" , "makara"]
// let girl = ["haha" , "ahpoy" , "jmha"]
// // name.splice(2,0, "kanha");
// // console.log(name.join(" "));
// // array + array
// const full = name.concat(girl);
// console.log(full.join(" "));
// // to cut
// const sliceArr = name.slice(1);
// console.log(sliceArr.join(" "));

// revers()
// let alphabet = [ 'a' , 'b' , 'c' , 'd'];
// let number = [ 1 , 2888 , 300 , 45]
// console.log(alphabet.reverse().join(" "));
// console.log(name.sort().join(" "));
// // important
// console.log(number.sort(function(a,b)
// {
//     return a-b;
// }));
// console.log(number.sort(function(a,b)
// {
//     return b-a;
// }));
// // or 
// console.log(number.reverse().join(" "));

// const names = [ "tola" , "pisey" , "kanha" , "seyha"];
// const people = [];
// name.forEach(function(name){
//     console.log(name);
// });
// for (let i =0 ; i<=names.length ; i++)
// {
//     console.log(names[i]);
// }

// every
// const grades = [ 'a' , 'b' , 'c' , 'd' , 'e' , 'f'];
// const goodgrades = ['a' , 'b' , 'c'];

// const newgrade = goodgrades.every(function(grade)
// {
//     return grade !=='e';
// }) ;
// console.log(newgrade);
// function showgrade (grade)
// {
//     return grade !== 'e';
// }
// const newgrades = goodgrades.every(showgrade);
// console.log(newgrades);
// some
// const grades = [ 'a' , 'b' , 'c' , 'd' , 'e'];
// const goodgrades = ['a' , 'b' , 'c'];
// const newgrade = grades.some(function(grade)
// {
//     return grade !== 'e';
// });
// console.log(newgrade);

// date
// const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
// const days = ["monday", "tuesday", "wednesday" , "thursday", "friday", "saturday", "sunday"];
// const date = new Date();
// const day = date.getDay();
// const month = date.getMonth();
// console.log(months[month]);
// const sentences = days[day] +" "+ months[month] +" "+ date.getDate()+" "+date.getFullYear();
// console.log(sentences);

// console.log(days[day]);

// console.log(date);

// math
// const math = Math.PI;
// const maths = Math.round(4.5);
// const mathss = Math.pow(2,5);
// const mathsss = Math.sqrt(49);
// const mathssss = Math.abs(-45);
// const mathsssss = Math.ceil(4.4);
// const mathssssss = Math.floor(4.5);
// const mathsssssss =Math.max(100,300,29);
// const mathssssssss =Math.max(100,300,29);
// const mathsssssssss =Math.floor(Math.random()*10);

// console.log(math);
// console.log(maths);
// console.log(mathss);
// console.log(mathsss);
// console.log(mathssss);
// console.log(mathsssss);
// console.log(mathssssss);
// console.log(mathsssssss);
// console.log(mathssssssss);
// console.log(mathsssssssss);

// DOM - document object model
// const title = document.getElementById("title");
// title.style.color = "blue";
// title.style.backgroundColor = "red";
// get element by id
// const Blue = title.style.backgroundColor = "green";

//  get element by name
// const titles = document.getElementsByTagName("h2");
// const result = [...titles];
// result.forEach(function(title)
// {
//     title.style.color = "red";
// });
//  one by one
// titles[0].style.color = "red";
// titles[1].style.color = "blue";
// titles[2].style.color = "green";

// get element by class name
// const result = document.getElementsByClassName("name");
// const r = [...result];
// r.forEach(function(ttl)
// {
//     ttl.style.color = "red";
// });

// queryselector() -select element by css selector
// const title = document.querySelector(".name");
// console.log(title);
// title.style.color = "red";

// querySelectorAll()- return all elements 
// const t = document.querySelectorAll(".name");
// console.log(t);
// t[0].style.color = "red";
// t[1].style.color = "blue";
// t[2].style.color = "green";
// // auto convert to array
// t.forEach(function(title)
// {
//     title.style.color = ("red");
// })

// Navigate the DOM
// const lists = document.querySelector(".list");
// const all = lists.childNodes;
// const first = lists.childNodes[1];
// first.style.color = "red";
// console.log(first);
// console.log(all);

// navigate the DOM 2
// const lists = document.querySelector(".list");
// console.log(lists);
// const all = lists.children;
// console.log(all);
// const r = [...all];
// r.forEach(function(t)
// {
//     t.style.color = "red";
// });

// navigate the dom 
// const heading2 = document.querySelector(".name");
// const heading3 = document.querySelector(".name-1");
// console.log(heading2.parentElement);
// heading2.parentElement.style.color = "red";
// console.log(heading3.previousSibling.previousSibling);
// heading3.previousSibling.previousSibling.style.color = "blue";
// heading3.previousElementSibling.style.color = "green";
// heading3.nextElementSibling.style.color = "black";

// setAttribute getAttribute
// const heading = document.querySelector(".name");
// heading.setAttribute("title", "hi ");
// heading.setAttribute("class" , "heading text");
// heading.setAttribute("id" , "bg")
// const headingg = heading.getAttribute("title");
// console.log(heading);

// className -
// const heading1 = document.querySelector("h2");
// heading1.className = "heading , text , bg";
// heading1.className = " ";

// console.log(heading1.className);

// classList -
// const heading2 = document.querySelector ("h2");
// heading2.classList.add("heading" , "text");
// heading2.classList.remove("heading");

// const headingClass = heading2.classList.contains("heading");

// console.log(headingClass);

// create element()
// const headingTwo = document.createElement("h2");
// const headingTwoT = document.createTextNode("I love javascript.");
// headingTwo.appendChild(headingTwoT);
// headingTwo.classList.add("heading" , "text");
// document.body.appendChild(headingTwo);


// console.log(headingTwo);



