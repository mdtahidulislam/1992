(function ($) {
	"use strict";
  $(document).ready(function(){
    $('.product-thumb__img a').mouseover(function(e){
      e.preventDefault();
      $('.imgBox img').attr("src", $(this).attr("href"));
    })
  })

/*-------------------------------- 
          slider carousel
--------------------------------*/
const nextIcon = '<i class="fas fa-arrow-right"></i>';
const prevIcon = '<i class="fas fa-arrow-left"></i>';

$(document).ready(function(){
  $(".slider-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin:0,
  	nav: true,
  	navText: [prevIcon, nextIcon]
  });
});

/*------------------------------------ 
          owl carousel for 
    new items & hot items section
-------------------------------------*/
$(document).ready(function(){
  $(".product-slider").owlCarousel({
    loop: true,
    items: 4,
    margin:30,
  	dots: true,
    responsive: {
      0: {
        items:1
      },
      767: {
        items:3,
        margin:15
      },
      991: {
        items: 4
      }
    }
  });
});

/*-------------------------------- 
            moble menu
--------------------------------*/
const menuBar = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('.mobile-menu-area');
const closeMobileMenu = document.querySelector('.close-mobile-menu');
const megaMenu = document.querySelectorAll('li.has-dropdown > a');
const subMenu = document.querySelectorAll('li.has-dropdown-1 > a');

// open mobile menu
menuBar.addEventListener( 'click', ()=> {
  mobileMenu.classList.add('show');
} );

// close mobile menu
closeMobileMenu.addEventListener( 'click', ()=> {
  mobileMenu.classList.remove('show');
} );

// mobile menu dropdown
megaMenu.forEach( (each)=>{
  if ( each.nextElementSibling !== null ) {
    each.addEventListener( 'click', (e)=>{
      e.target.parentElement.classList.toggle('active');
      let collapsibleSubMenu = each.nextElementSibling;
      if (collapsibleSubMenu.style.maxHeight){
        collapsibleSubMenu.style.maxHeight = null;
      } else {
        collapsibleSubMenu.style.maxHeight = collapsibleSubMenu.scrollHeight + "px";
      }
      subMenu.forEach( (each)=>{
        if(each.nextElementSibling !== null) {
          each.addEventListener( 'click', (e)=>{
            e.target.parentElement.classList.toggle('active');
            let subSubMenu = each.nextElementSibling;
            if (subSubMenu.style.maxHeight){
              subSubMenu.style.maxHeight = null;
            } else {
              subSubMenu.style.maxHeight = subSubMenu.scrollHeight + "px";
              collapsibleSubMenu.style.maxHeight = collapsibleSubMenu.scrollHeight + subSubMenu.scrollHeight + "px";
            }
          } );
        }
      } );
    } )
  }
} );

/*-------------------------------- 
    sidebar login registration 
--------------------------------*/
const signInBtn = document.querySelector('.signin');
const registerBtn = document.querySelector('.register');
const regLogCanvas = document.querySelector('.side-register');
const regCanvas = document.querySelector('#reg-canvas');
const logCanvas = document.querySelector('#log-canvas');
const recPassCanvas = document.querySelector('#pass-canvas');
const loginBtn = document.querySelector('.login-here');
const createAcntBtn = document.querySelector('.create-account');
const recPassBtn = document.querySelector('.rec-pass');
const backLogBtn = document.querySelector('.back-to-login');
const closeBtn = document.querySelectorAll('.close');
// open canvas
registerBtn.addEventListener('click', ()=>{
  regLogCanvas.classList.add('open');
})
// open canvas
signInBtn.addEventListener('click', ()=>{
  regLogCanvas.classList.add('open');
})
// close canvas
closeBtn.forEach( each =>{
  if ( each.nextElementSibling == null) {
    each.addEventListener( 'click', ()=>{
      if ( regLogCanvas.classList.contains('open') ) {
        regLogCanvas.classList.remove('open')
      } 
    });
  }
});
// open login form
loginBtn.addEventListener('click', ()=>{
  regCanvas.classList.remove('is_selected');
  logCanvas.classList.add('is_selected');
});
// open recover form
recPassBtn.addEventListener('click', ()=>{
  recPassCanvas.classList.add('is_selected');
  logCanvas.classList.remove('is_selected');
});
// again open login form
backLogBtn.addEventListener('click', ()=>{
  recPassCanvas.classList.remove('is_selected');
  logCanvas.classList.add('is_selected');
});
// open register form
createAcntBtn.addEventListener('click', ()=>{
  regCanvas.classList.add('is_selected');
  logCanvas.classList.remove('is_selected');
});


/*-------------------------------- 
  inner page login registration 
--------------------------------*/
const login = document.querySelector('.login');
const recPass = document.querySelector('.password');
const forgetPassBtn = document.querySelector('.forget-pass');
const cancelBtn = document.querySelector('.cancel');

forgetPassBtn.addEventListener( 'click', ()=>{
   recPass.classList.remove('d-none')
   login.classList.add('d-none')
});

cancelBtn.addEventListener( 'click', ()=>{
  recPass.classList.add('d-none')
  login.classList.remove('d-none')
});




})(jQuery);
