const p = document.querySelector("p");
setInterval(()=>
{
    const d = new Date().toLocaleTimeString();
    p.innerHTML = d;
} , 1000);