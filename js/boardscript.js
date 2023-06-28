//섹션 서브 호버

$(function(){
    $('a.m_hover').hover(function(){
          $(this).animate({marginLeft:'9px'},'slow')
        },
        function(){
          $(this).animate({marginLeft:'0px'},'slow')
    });
});
