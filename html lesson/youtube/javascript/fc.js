// // console.log("hello");
// // function sum()
// // {
// //     // let a =20;
// //     // let b =30;
// //     // let c;
// //     // return c = a + b;
// //     let name = `bora`;
// //     return(`Hello ${name} How are you ?`);
// // }
// // console.log(sum());

// const myFunction = (x) => x*x;
// console.log(myFunction(10));

// // array

// const array = [`ach , ah ach , jm lv ha`];
// array[1] = `b sl o`;
// console.log(array[1]);

// // object 
 
// const cars =
// {
//     model : `BMW`,
//     year : 2025,
//     ifNew : true,
//     features : ["auto" , "by self"],
//     drive()
//     {
//         console.log("driving");
//     } 
// };
// console.log(cars.features[1]);
// console.log(cars.drive());

// const names = ["anh" , "hg" , "ss anh" , "anh jng dak"];
// for (i = names.length ; i >= 0 ; i--)
// {
//     console.log(names[i]);
// }
// const students = [ {name :"bora" , scores: 97 },
//                    {name: "kan" , scores: 99},];
// let j=0;
// while(j<students.length)
// {
//     console.log(`student name : ${students[j].name} has : ${students[j].scores} scores.`);
//     j++;
// }

// method
// const txt = "Bora nin";
// console.log(txt.toLowerCase().includes("bora"));
// const names = ["anh" , "hg"];
// names.splice(2,1,"M" );
// console.log(names);
// const numbers = [2, 3, 4 , 7, 9, 20];
// const result = numbers.sort(function(a , b)
// {
//     return a - b
// });
// console.log(result);
// names.sort();
// console.log(names);
// const phones = [ "iphone" , "Pixel" , "galaxy"];
// const joinItem = phones.join(" - ");
// console.log(joinItem);
// const salary = [300 , 5000 , 399 , 400];
// const total = salary.reduce(function(ac , cr){
//     return ac + cr;
// },0);
// console.log(total);
// const fullname = names.reduce(function(ac ,cr)
// {
//     return `${ac} ${cr}`;
// });
// console.log(fullname);
// const test = document.querySelector("#test");
// test.style.cssText = "background-color: black; color: white;"
// const list = document.querySelector("ul");
// console.log(list.lastElementChild);
// const h1 = document.querySelector("h1");
// const btn = document.querySelector(".btn");
// console.log(h1);
// btn.style = "padding :10px; font-weight:bold ; font-size: 20px; background-color: blue";
// btn.onclick = function d()
// {
//     const h = h1.style;
//     if(h.display === "none")h.display = "block";
//     else h.display = "none";
// };
// const headingOne = document.querySelector("h1");
// const headingThree = document.querySelector("button");
// const heading = document.createElement("h2");
// const headingTwo = document.createTextNode("I love my mother");
// heading.appendChild(headingTwo);
// document.body.appendChild(heading);
// document.body.insertBefore(heading , headingThree);
// document.body.prepend(heading);
// document.body.replaceChild(heading , headingOne);
// headingOne.remove();
// const heading = document.querySelector("h1");
// const headingTwo = heading.textContent;
// console.log(headingTwo);
 
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const input = document.querySelector(".input");
// input.addEventListener("keydown" ,function()
// {
//     console.log("keydown",input.value);
// });
input.addEventListener("keyup" ,()=>
{
    console.log("keyup",input.value);
});
btn.addEventListener("click" ,function myEvent()
{
    if(h1.classList.contains("heading"))h1.classList.remove("heading");
    else h1.classList.add("heading");
});
h1.addEventListener("mouseenter" , function()
{
    h1.classList.add("heading");
});
h1.addEventListener("mouseleave" , function()
{
    h1.classList.remove("heading");
});