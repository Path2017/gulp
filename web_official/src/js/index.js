'use strict'
$(function () {
  $('.index-banner').height(window.innerHeight)
  $('.drc-slogan').height(window.innerHeight)
  window.onscroll = function(){
    $('.index-banner').addClass('topview')
    if($(window).scrollTop()<=1){
      $('.index-banner').removeClass('topview')
    }
  }
})