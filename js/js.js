$('.carousel').carousel({
    interval: 4000
  })

$(function(){
  new WOW().init();
})

$(window).ready(function(){
    let a = $(".footer-links-text");
    console.log(a.text());
})