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
              breakpoint: 660,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1000,
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
});

/* /Menu */