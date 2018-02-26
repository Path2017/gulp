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
    $('#menubox').fadeOut(500)
  })
  $('#btnclose').click(function(){
    $('#menubox').fadeOut(500)
  })
})