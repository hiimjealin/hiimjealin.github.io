$(document).ready(function(){

    $('#rightcon_btn').click(function(){

        $('#bener_right').animate({
            left : -300,
        },1000,function(){
            $('#bener_right').css({
                left : 0,
            }).find('.act_con').first().appendTo('#bener_right');
        });

    });

    function time(){
        si = setInterval(function(){
        $('#rightcon_btn').trigger('click');
         },3000);
    }

    time();

    $('.act_con').hover(function(){
        
        clearInterval(si);


    },function(){

        time();


    });


    // 액티비티 클릭효과

    $('.act_con').each(function(index){
        $(this).attr('data-index' , index );
    });
    $('.back').each(function(index){
        $(this).attr('data-index' , index );
    });


    // $('.act_con').click(function(){

    //     i = $(this).index();

    //     $('.back img').fadeOut(500);
    //     $('.back img').eq(i).fadeIn(500);
    // });


    // $('.back').first().css('display' , 'block');


    
    $('.act_con').click(function(){
        i = $(this).attr('data-index');
        
        // console.log(i);

        if( i == 0 ){
            $('.back').fadeOut(800);
            $('.back').eq(0).fadeIn(800);
        }else if( i == 1 ){
            $('.back').fadeOut(800);
            $('.back').eq(1).fadeIn(800);
        }else if( i == 2 ){
            $('.back').fadeOut(800);
            $('.back').eq(2).fadeIn(800);
        }else if( i == 3 ){
            $('.back').fadeOut(800);
            $('.back').eq(3).fadeIn(800);
        }else if( i == 4 ){
            $('.back').fadeOut(800);
            $('.back').eq(4).fadeIn(800);
        }



    
    });
    











    // scroll효과

    // sec02 video

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        // console.log(sct);

        if( sct > 760 ){
            $('#sec02_video').css('width' , '100%');
        }else{
            $('#sec02_video').css('width' , '70%');
            
        }

if( sct > 4086 ){
            $('#sec05_text_wrap').stop().animate({
                bottom : '20%',
                opacity : 1,
            });
        }else{
            $('#sec05_text_wrap').stop().animate({
                bottom : '10%',
                opacity : 0,
            });
        }



    });



    // 스크롤이 안 먹음.

 
        










});//end