'use strict';

$(function(){
  // menu
  window.onscroll = function () {
    $('.menulist').addClass('viewscroll')
    if ($(window).scrollTop() <= 1) {
      $('.menulist').removeClass('viewscroll')
    }
  }
  // get the window scroll height
  var nowscrollHeight = $(window).scrollTop();
  if (nowscrollHeight >= 10) {
    $('.menulist').addClass('topview')
  } else {
    $('.menulist').removeClass('topview')
  }
  $('#moreMenu').click(function(){
    $('#menubox').fadeIn(500)
  })
  var navbarHeight = $('#navbar').height()
  $('#menulist').children('li').click(function () {
    var queryId = $(this).data('href');
    if (queryId == '#change') {
      // tab english
      console.log(queryId)
      return
    }
    var $el = document.querySelector(queryId);
    $("html,body").stop().animate({
      scrollTop: $el.offsetTop - navbarHeight
    }, 600)
    $('#menubox').fadeOut(300)
  })
  $('#btnclose').click(function(){
    $('#menubox').fadeOut(300)
  })
  // whitepaper cn
  $('.whitepaperCn').click(function(){
    window.open('./files/DRC_whitepaper_cn.pdf')
  })
  // whitepaper en
  $('.whitepaperEn').click(function(){
    window.open('./files/DRC_whitepaper_en.pdf')
  })
  // terms
  $('#terms').click(function(){
    window.open('./files/Terms_and_Conditions.pdf')
  })
})