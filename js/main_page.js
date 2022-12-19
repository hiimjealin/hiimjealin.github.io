$(document).ready(function(){

    

    scroll

    $('#project , #menu01').click(function(){

        $('#wrap').animate({
            top : -1080,
        },1000);

    //   $('#wrap').css({
    //     position : 'relative',
    //   });
        

    });

    $('h3').click(function(){

        $('#wrap').animate({
            top : 0,
        },1000);
        $('#wrap').css({
            position : 'fixed',
          });
          $('#bottom_wrap').animate({
            scrollTop : 0,
            
        });

        

    });


    // $(window).scroll(function(){

    //     // sct = $(window).scrollTop();


       

    // });


    // $('#project , #menu01').click(function(){

    //     $('html , body').animate({
    //         scrollTop : 1080,
    //     },1000);

    //     $('#wrap').css({
    //     position : 'relative',
    // });

    //   return;  

    // });
    
    // $('h3').click(function(){

    //     $('html , body').animate({
    //         scrollTop : 0,
    //     },1000);
    //     $('#wrap').css({
    //         position : 'fixed',
    //     });
    
    //     return;

    // });










    // scroll fixed

    $('#bottom_wrap').scroll(function(){

        sct = $('#bottom_wrap').scrollTop();


        if( sct >= 1 ){
            $('#fix_head').css({
                position : 'fixed',
                top : 0,
            });
        }else if( sct < 128 ){
            $('#fix_head').css({
                position : 'relative',
                
            });
        }
    });









});//end