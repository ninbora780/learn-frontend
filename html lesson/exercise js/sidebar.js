
const services = document.querySelector('li.nav-services');
services.addEventListener("click" , ()=>{
    services.classList.toggle('active');
    portfolio.classList.remove('active');
});
const portfolio = document.querySelector("li.nav-portfolios");
portfolio.addEventListener("click" , ()=>{
    portfolio.classList.toggle('active');
    services.classList.remove("active");
});
document.addEventListener("click" , (e)=>
{
    if(!e.target.closest("li.nav-services" || "li.nav-portfolios"))
    {
        services.classList.remove('active');
    }
});
const hamburger = document.querySelector(".humbuger-btn");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const toggleButton = document.querySelector(".toggle-button");
toggleButton.addEventListener("click" , (e)=>{
    toggleButton.classList.toggle("active");
    e.preventDefault();
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
});
hamburger.addEventListener("click" , ()=>{
    hamburger.classList.toggle("active");
});
document.addEventListener("click" , (even)=>{
    if(!even.target.closest(".humbuger-btn") && !even.target.closest(".sidebar"))
    {
        hamburger.classList.remove("active");
        sidebar.classList.remove("active");
        content.classList.remove("active");
        toggleButton.classList.remove("active");
        services.classList.remove('active');
        portfolio.classList.remove('active');
    }
});
const btnTop = document.querySelector(".button-top");
window.addEventListener("scroll" , ()=>{
    if(window.scrollY > 500){
        btnTop.classList.add("active");
    } else {
        btnTop.classList.remove("active");
    }
});
 btnTop.addEventListener("click" , ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});