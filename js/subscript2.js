//섹션 서브 호버

$(function(){
    $('.m_hover').hover(function(){
          $(this).animate({marginLeft:'9px'},'slow')
        },
        function(){
          $(this).animate({marginLeft:'0px'},'slow')
    });
});

$(function(){
    $('.eastt').hover(function(){
          $(this).animate({marginLeft:'9px'},'slow')
        },
        function(){
          $(this).animate({marginLeft:'0px'},'slow')
    });
});

$(function(){
    $('.westt').hover(function(){
          $(this).animate({marginLeft:'9px'},'slow')
        },
        function(){
          $(this).animate({marginLeft:'0px'},'slow')
    });
});

//인사말 타이포 애니메이트

$(function(){
    $('.type').typed({
        strings:['화성시 보건소 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.'],
        typeSpeed:150,
        backDelay:200,
        loop:true,
        showCursor:false
    });
});