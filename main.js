/* Carussel Ofert */

window.addEventListener('load', function(){
  new Glider(document.querySelector('.post_list'), {
       
      slidesToShow: 1,
      duration: 1.4,
      dots: '.ofert_indicador',
      arrows: {
        prev: '.back',
        next: '.next',
      }, 
      responsive: [
          {
            // screens greater than >= 800px
            breakpoint: 830,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1135,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]

  });
});

/* /Carussel Ofert */

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
    window.scroll({ 
    });
});

/* /Menu */

/* slider */

const slider = document.querySelector("#slider_contact");
let sliderSection = document.querySelectorAll(".post_slider");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const sliderBack = document.querySelector("#back_slider");
const sliderNext = document.querySelector("#next_slider");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function move_next() {
  let sliderSectionFirst = document.querySelectorAll(".post_slider")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function move_back() {
  let sliderSection = document.querySelectorAll(".post_slider");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

sliderNext.addEventListener('click', function(){
  move_next();
});

sliderBack.addEventListener('click', function(){
  move_back();
});

setInterval(function(){
  move_next();
}, 10000);

/* slider */