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

/* Slider Ofert*/

const slider = document.querySelector("#slider_ofert");
let sliderSection = document.querySelectorAll(".item-ofert");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnNext = document.querySelector("#next");
const btnBack = document.querySelector("#back");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function MoveNext() {
    let sliderSectionFirst = document.querySelectorAll(".item-ofert")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 450);
}

function MoveBack() {
    let sliderSection = document.querySelectorAll(".item-ofert");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-200%";
    }, 300);
}

btnNext.addEventListener('click', function(){
    MoveNext();
});

btnBack.addEventListener('click', function(){
    MoveBack();
});

/* Slider Ofert*/