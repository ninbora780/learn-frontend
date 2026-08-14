const services= document.querySelector(".services");
const portfolios = document.querySelector(".portfolios");
const hamburger = document.querySelector(".hambugar");
const menu = document.querySelector("ul");

hamburger.addEventListener('click' , ()=>
{
    menu.classList.toggle("active");
});
services.addEventListener("click",()=>
{
    portfolios.classList.remove("active");
    services.classList.toggle("active");
});
portfolios.addEventListener("click",()=>
{
    services.classList.remove("active");
    portfolios.classList.toggle("active");
});
document.addEventListener('click' , (e)=>
{
    if (!e.target.closest('.services'))
    {
        services.classList.remove("active");
    }
    if (!e.target.closest('.portfolios'))
    {
        portfolios.classList.remove("active");
    }
});