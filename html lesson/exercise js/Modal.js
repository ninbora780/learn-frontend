// button
const btnGoogle = document.querySelector(".btn-google");
const btnCancel = document.querySelector(".btn-cancel");
const btnSubmit = document.querySelector(".btn-submit");
const i = document.querySelector("i");
// modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
btnGoogle.addEventListener("click" , function()
{
    modal.classList.add("active");
    overlay.classList.add("active");
});
i.addEventListener("click" , function()
{
    modal.classList.remove("active");
    overlay.classList.remove("active");
});
btnCancel.addEventListener('click' , function()
{
    modal.classList.remove("active");
    overlay.classList.remove("active");
});
btnSubmit.addEventListener("click" , function(e)
{
    
})