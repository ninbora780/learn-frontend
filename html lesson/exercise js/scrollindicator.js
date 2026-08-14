const progress = document.querySelector(".progress-bar");
const bar = document.querySelector(".bar");
console.log(progress);
console.log(bar);
window.addEventListener("scroll" , function(){
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    console.log(document.documentElement.clientHeight);
    console.log(document.documentElement.scrollHeight);
    console.log(document.documentElement.scrollTop);
    bar.style.width =  scrolled + "%";
})