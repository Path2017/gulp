'use strict'
$(function () {
  // the banner's height should filled one screen
  $('.index-banner').height(window.innerHeight)
  $('.drc-slogan').height(window.innerHeight)
  window.onscroll = function () {
    $('.index-banner').addClass('topview')
    if ($(window).scrollTop() <= 1) {
      $('.index-banner').removeClass('topview')
    }
  }
  // get the window scroll height
  var nowscrollHeight = $(window).scrollTop();
  if(nowscrollHeight>=10){
    $('.index-banner').addClass('topview')
  }else{
    $('.index-banner').removeClass('topview')
  }
  // vedio
  document.getElementById('drc-video').playbackRate = 1;
  $('#mp4-close').on('click', function () {
    document.getElementById('drc-video').load();
  });
  // menu link
  var navbarHeight = $('#navbar').height();
  var paddingHeight = parseInt($('.top-menubox').css('padding-top'))+parseInt($('.top-menubox').css('padding-bottom'));
  $('#menulist').children('li').click(function(){
    var queryId = $(this).data('href');
    if(queryId == '#change'){
      // tab english
      console.log(queryId)
      return
    }
    var $el = document.querySelector(queryId);
    $("html,body").stop().animate({scrollTop:$el.offsetTop-navbarHeight+paddingHeight},600)
  })
  
})