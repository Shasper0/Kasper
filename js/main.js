let toggleMenu = document.getElementsByClassName('toggle-menu')[0];
let ul = document.getElementsByTagName('ul')[0];
let links = document.getElementsByClassName('links');








toggleMenu.addEventListener('click' , function(){
    ul.classList.toggle('toggle-menu-block');
    for(let x = 0 ; x < links.length ; x++){
        links[x].classList.toggle("toggle-menu-a")
    }
})





