const hambuger = document.querySelector(".hambuger");
// const slideOut = document.querySelector(".slide-out");
const navBar = document.querySelector(".nav-bar");
hambuger.addEventListener("click" , function(){
    navBar.classList.toggle("out");
});
const destination = document.querySelector(".destination");
destination.addEventListener('click' , function(){
    destination.classList.toggle("active");
})