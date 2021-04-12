/*global $*/
"use strict";

$(function() {
  $('#PROFILE').hide().fadeIn('slow');
});


  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },500);
  });
  

$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').fadeToggle(500);
  $('body').toggleClass('noscroll');    
});

$('.nav-item').on('click',function(){
 $('.nav-wrapper').css('display', 'none');
 $('.burger-btn').removeClass('close');  
});

