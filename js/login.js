//로긴 탭메뉴

$(function(){
    $(".log_1").click(function(){
        $(this).addClass('active');
        $(".log_2").removeClass('active');
    });

    $(".log_2").click(function(){
        $(this).addClass('active');
        $(".log_1").removeClass('active');
    });
});

//섹션 서브 호버

$(function(){
    $('.m_hover').hover(function(){
          $(this).animate({marginLeft:'9px'},'slow')
        },
        function(){
          $(this).animate({marginLeft:'0px'},'slow')
    });
});