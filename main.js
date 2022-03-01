/* Menu */

let scroll_negative = window.pageYOffset; 
window.onscroll = function() {
    let scroll_positive = window.pageYOffset;
    if(scroll_negative >= scroll_positive){
        document.getElementById('main_nav').style.top = '0';
    }
    else{
        document.getElementById('main_nav').style.top = '-100px';
    }
    scroll_negative = scroll_positive;
}

const btnMenu = document.querySelector("#btnMenu")
const menu = document.querySelector("#menu")
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

/* /Menu */

