(function ($) {
	"use strict";


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
  console.log(each.nextElementSibling);
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


/*-------------------------------- 
          video js  
--------------------------------*/
const video = document.querySelector('.video-player');
const playBtn = document.querySelector('.play-btn');
playBtn.addEventListener( 'click', (e)=>{
	video.play();
	playBtn.style.display = 'none';
	video.controls = 'true';
	e.stopPropagation();
} );


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



})(jQuery);