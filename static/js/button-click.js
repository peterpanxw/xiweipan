$(document).ready(function () { 
    // medium_zoom = mediumZoom("[data-zoomable]", 
    // { background: 'rgba(1,1,1,0)'})
    $('.item-ctrl').click(function(){
        let absDom = $(this).parents('.item-content').find('.item-abstract');
        if(absDom.hasClass('item-show')){
            absDom.removeClass('item-show')
        }else{
            absDom.addClass('item-show')
        }
    })
    // timeline
    $('.list-item').click(function(){
        if($(this).hasClass('item-hide')){
            $(this).removeClass('item-hide')
        }else{
            $(this).addClass('item-hide')
        }
    })
});