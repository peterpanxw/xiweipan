$(document).ready(function () {
  let popImg = false;
  $('.item-thumb').click(function(e){
    if(popImg){
      return false
    }
    popImg = true;
    $(this).find('img').addClass('pop-img-click')
    $('.pop-img img').attr('src',$(this).find('img').attr('src'))
    $('.pop-hide').css({top:e.clientY,left:e.clientX})
    setTimeout(function(){
      $('.pop-img').removeClass('pop-hide')
      $('.pop-img').addClass('pop-show')
    },200)
  })
  $('.pop-img').click(function(){
    if(popImg){
      clearPop()
    }else{
      return false
    }
  })
  function clearPop(){
    $('.pop-img').addClass('pop-hide');
    $('.pop-img').removeClass('pop-show')
    setTimeout(function(){
      $('.pop-img img').attr('src','')
      $('.medium-zoom-image').removeClass('pop-img-click')
      popImg = false
    },300)
  }
  window.onscroll = function(){
    if(popImg){
      clearPop()
    }else{
      return false
    }
  }
});