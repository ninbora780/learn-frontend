const leftbtn = document.querySelectorAll(".left-btn span");
for (let i = 0 ; i < leftbtn.length ; i++) {
    leftbtn[i].addEventListener("click" , function(e){
        let current = document.querySelector(".active-gl");
        current.className = current.className.replace("active-gl" , "");
        leftbtn[i].className = "active-gl";
        e.preventDefault();
    });
}
const rightbtn = document.querySelectorAll(".right-btn a");
for (let i = 0; i < rightbtn.length; i++) {
    rightbtn[i].addEventListener("click" , function(e){
        let current = document.querySelector(".active-btn");
        current.className = current.className.replace("active" , "");
        rightbtn[i].className = "active-btn";
        e.preventDefault();
    });
}
// toggle grid
const content = document.querySelector(".content");
leftbtn[1].addEventListener('click' , function(){
    content.classList.add("list");
})
leftbtn[0].addEventListener('click' , function(){
    content.classList.remove("list");
});
const card = document.querySelectorAll(".card");
rightbtn[1].addEventListener("click", function(){
  for(let i = 0; i < card.length; i++){
    if(card[i].getAttribute("name") === "Nature"){
      card[i].style.display = 'flex';
    }else{
      card[i].style.display = 'none';
    }
  }
}); 
rightbtn[2].addEventListener("click", function(){
  for(let i = 0; i < card.length; i++){
    if(card[i].getAttribute("name") === "Temple"){
      card[i].style.display = 'flex';
    }else{
      card[i].style.display = 'none';
    }
  }
}); 
rightbtn[3].addEventListener("click", function(){
  for(let i = 0; i < card.length; i++){
    if(card[i].getAttribute("name") === "People"){
      card[i].style.display = 'flex';
    }else{
      card[i].style.display = 'none';
    }
  }
}); 
rightbtn[4].addEventListener("click", function(){
  for(let i = 0; i < card.length; i++){
    if(card[i].getAttribute("name") === "Animal"){
      card[i].style.display = 'flex';
    }else{
      card[i].style.display = 'none';
    }
  }
}); 
rightbtn[5].addEventListener("click", function(){
  for(let i = 0; i < card.length; i++){
    if(card[i].getAttribute("name") === "Food"){
      card[i].style.display = 'flex';
    }else{
      card[i].style.display = 'none';
    }
  }
});
rightbtn[0].addEventListener("click", function(){
  for(let i = 0; i < card.length; i++){
     if(
      card[i].getAttribute("name") === "Nature" ||
      card[i].getAttribute("name") === "Temple" ||
      card[i].getAttribute("name") === "People" ||
      card[i].getAttribute("name") === "Animal" ||
      card[i].getAttribute("name") === "Food"
    ){
      card[i].style.display = 'flex';
    }else{
      card[i].style.display = 'none';
    }
  }
});
