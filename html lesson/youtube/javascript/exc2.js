const hambugarbtn = document.querySelector('.hambugar');
const menubar = document.querySelector('.responsive-nav');
hambugarbtn.addEventListener("click", function()
{
    menubar.classList.toggle("active");
});