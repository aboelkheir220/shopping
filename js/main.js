$(function () {
    'use strict';
    //nav-bar
    $('.navbar .collapse ul li .nav-link').hover(function(){
   $(this).css({"font-size":"25px" , "color":"red"});
});
$('.navbar .collapse ul li .nav-link').mouseleave(function(){
   $(this).css({"font-size":"20px" , "color":"black"});
});
//slider
    $('.collapse ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.slider .slide .carousel-inner .carousel-item').mouseenter(function(){
        $(this).css("opacity",".5");
    });
    $('.slider .slide .carousel-inner .carousel-item').mouseleave(function(){
        $(this).css("opacity",1);
    });
    //card
    $('.mobile .card').hover(function(){
    $(this).css("opacity",1);
})
$('.mobile .card').mouseleave(function(){
    $(this).css("opacity",".6");
})
     //mobile
 $('.mobile .navbar a').hover(function(){
   $(this).css({"font-size":"40px" , "color":"red"});
});
$('.mobile .navbar a').mouseleave(function(){
   $(this).css({"font-size":"30px" , "color":"white"});
});  
    //labtop
    $('.labtop .navbar a').hover(function(){
   $(this).css({"font-size":"40px" , "color":"#1ada3b"});
});
$('.labtop .navbar a').mouseleave(function(){
   $(this).css({"font-size":"30px" , "color":"white"});
});  
    //men 
        $('.men .navbar a').hover(function(){
   $(this).css({"font-size":"40px" , "color":"gold"});
});
$('.men .navbar a').mouseleave(function(){
   $(this).css({"font-size":"30px" , "color":"white"});
});
    //women
        $('.women .navbar a').hover(function(){
   $(this).css({"font-size":"40px" , "color":"#d261e0"});
});
$('.women .navbar a').mouseleave(function(){
   $(this).css({"font-size":"30px" , "color":"white"});
});
    //beauty
        $('.beauty .navbar a').hover(function(){
   $(this).css({"font-size":"40px" , "color":"#74d5da"});
});
$('.beauty .navbar a').mouseleave(function(){
   $(this).css({"font-size":"30px" , "color":"white"});
});
    
    //footer
    $('.footer h4').hover(function(){
   $(this).css({"font-size":"34px" , "color":"red"});
    });
    $('.footer h4').mouseleave(function(){
   $(this).css({"font-size":"24px" , "color":"black"});
}); 
     $('.footer a').hover(function(){
   $(this).css({"font-size":"22px" , "color":"#12e06e"});
    });
    $('.footer a').mouseleave(function(){
   $(this).css({"font-size":"16px" , "color":"black"});
});  
      

});