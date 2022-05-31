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

/*TItle Efect typed*/

  const typed = new Typed('.typed', {
    strings: ['Kevin J. Sánchez', 'Front-end', 'Back-end'],

    stringsElement: null,
    typeSpeed: 45,
    startDelay: 500,
    backSpeed: 45,
    smartBackspace: true,
    shuffle: false,
    backDelay: 3000,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',

  });


/* /TItle Efect typed*/

/* Skills */

let SkillsMove = document.querySelector("#buttom_skills");
let Move = document.querySelector("#skill");
let Cont = 0;

function MoveSkills() {
  
  if(Cont == 0){
    Move.style.marginTop = "-31.25px";
    SkillsMove.classList.add('rotate');
    Cont = 1;
  }else{
    Move.style.marginTop = "0px";
    SkillsMove.classList.remove('rotate');
    SkillsMove.style.transition = "all 0.5s";
    Cont = 0;
  }

}

SkillsMove.addEventListener('click', MoveSkills, true);

let SkillsMoveA = document.querySelector("#buttom_skillsA");
let MoveA = document.querySelector("#skillA");
let ContA = 0;

function MoveSkillsA() {
  
  if(Cont == 0){
    MoveA.style.marginTop = "0px";
    SkillsMoveA.classList.add('rotate');
    Cont = 1;
  }else{
    MoveA.style.marginTop = "-31.25px";
    SkillsMoveA.classList.remove('rotate');
    SkillsMoveA.style.transition = "all 0.5s";
    Cont = 0;
  }

}

SkillsMoveA.addEventListener('click', MoveSkillsA, true);

/* /Skills*/

/* Portafolio*/

  let link_demo = document.querySelector("#demo_link");
  let link_proyect = document.querySelector("#proyect_link");
  let cont_demo = 1;
  let cont_proyect = 0;

  function displaydemo(){
    let content_demo = document.querySelector("#port_demo");
    let content_proyect = document.querySelector("#port_proyect");
    
    if(cont_demo > cont_proyect){

      content_demo.style.display = "block";
      content_proyect.style.display = "none";
      
      cont_demo = 1;
      cont_proyect = 0;

    }else if(cont_demo < cont_proyect){
      
      content_demo.style.display = "block";
      content_proyect.style.display = "none";
      
      cont_demo = 1;
      cont_proyect = 0;
    
    }
  }
  link_demo.addEventListener('click', displaydemo, true);
  

  function displayproyect(){
    let content_demo = document.querySelector("#port_demo");
    let content_proyect = document.querySelector("#port_proyect");
    
    if(cont_proyect > cont_demo){

      content_demo.style.display = "none";
      content_proyect.style.display = "block";

      cont_demo = 0;
      cont_proyect = 1;

    }else if(cont_proyect < cont_demo){

      content_demo.style.display = "none";
      content_proyect.style.display = "block";

      cont_demo = 1;
      cont_proyect = 0;

    }
  }
  
  link_proyect.addEventListener('click', displayproyect, true);



/* /Portafolio*/

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

/* Alert */

let BntAlert = document.getElementById('social_link_3');

function Alert(){
  swal("Correo:", "Mi correo es kevinsanchez030329@gmail.com");
}

BntAlert.addEventListener('click', function(){

  Alert();

});

/* /Alert */