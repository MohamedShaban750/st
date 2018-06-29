$(function(){
    console.log($("body").width());
    $("nav .nav-item").click(function(){
        $(this).addClass(".activee").siblings().removeClass(".activee");
    });
    
        $('nav .nav-item').click(function(){
        var myid = $(this).data('value');
         $('html,body').animate({
            scrollTop: $('#'+myid).offset().top 
        },1000); 
              
    });

    $(".fa-chevron-up").fadeOut();
    
    $(window).scroll(function(){
         var  scrollup =$(window).scrollTop();
        if(scrollup < 400){
            $(".fa-chevron-up").fadeOut(1000);
        }
        else{
            $(".fa-chevron-up").fadeIn(1000);
        }
    });
    
    $(".fa-chevron-up").click(function(){
       $(window).scrollTop(0); 
        
    });
    
   
    
});