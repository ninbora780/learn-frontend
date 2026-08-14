const hum = document.querySelector(".humbagar");
const ul = document.querySelector(".responsive-nav");
const logo = document.querySelector(".logo");
hum.addEventListener("click",()=>{
    ul.classList.toggle("active");
});
document.addEventListener("click" , (e)=>
{
    if (!e.target.closest(".humbagar")) 
    {
        ul.classList.remove("active");
    }
})