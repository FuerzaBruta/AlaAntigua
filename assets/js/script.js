document.addEventListener('DOMContentLoaded', () =>{
const burger = document.querySelector('.burger');
const navLink = document.querySelector('.navLinks');

burger.addEventListener('click', (event) =>{
    navLink.classList.toggle('active');
    burger.classList.toggle('toggle');
    event.stopPropagation();
});

document.addEventListener('click', (event) =>{
    if(!navLink.contains(event.target) && !burger.contains(event.target)){
        navLink.classList.remove('active');
        burger.classList.remove('toggle');
    }    
});
});
