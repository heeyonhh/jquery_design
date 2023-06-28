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
    $('.east').hover(function(){
          $(this).animate({marginLeft:'9px'},'slow')
        },
        function(){
          $(this).animate({marginLeft:'0px'},'slow')
    });
});

$(function(){
    $('.west').hover(function(){
          $(this).animate({marginLeft:'9px'},'slow')
        },
        function(){
          $(this).animate({marginLeft:'0px'},'slow')
    });
});

// $(function(){
//     $('.m_hover').mouseenter(function(){
//         $(this).animate({marginLeft:'9px'},'slow')
//         });
//     $('.m_hover').mouseleave(
//         function() {
//         $(this).animate({marginLeft:'0px'},'slow')
//     });
// });

// $(function(){
//     $('.east').mouseenter(function(){
//         $(this).animate({marginLeft:'9px'},'slow')
//         });
//     $('.east').mouseleave(
//         function() {
//         $(this).animate({marginLeft:'0px'},'slow')
//     });
// });

// $(function(){
//     $('.west').mouseenter(function(){
//         $(this).animate({marginLeft:'9px'},'slow')
//         });
//     $('.west').mouseleave(
//         function() {
//         $(this).animate({marginLeft:'0px'},'slow')
//     });
// });


// //지도 탭

// $(document).ready(function () {
//     $(".map_c_1").click(function () {
//       var idx = $(this).index();

//       $(this).addClass("on").siblings().removeClass("on");

//       $(".map1")
//         .eq(idx)
//         .addClass("on")
//         .siblings(".map1")
//         .removeClass("on");
//     });
//   });


// 지도 탭메뉴

$(function(){
    $(".map_c_1").click(function(){
        $(this).addClass('active');
        $(".map_c_2").removeClass('active');
        $(".map_c_3").removeClass('active');
        $(".map_c_4").removeClass('active');
        $(".map_c_5").removeClass('active');
    });

    $(".map_c_2").click(function(){
        $(this).addClass('active');
        $(".map_c_1").removeClass('active');
        $(".map_c_3").removeClass('active');
        $(".map_c_4").removeClass('active');
        $(".map_c_5").removeClass('active');
    });

    $(".map_c_3").click(function(){
        $(this).addClass('active');
        $(".map_c_1").removeClass('active');
        $(".map_c_2").removeClass('active');
        $(".map_c_4").removeClass('active');
        $(".map_c_5").removeClass('active');
    });

    $(".map_c_4").click(function(){
        $(this).addClass('active');
        $(".map_c_1").removeClass('active');
        $(".map_c_2").removeClass('active');
        $(".map_c_3").removeClass('active');
        $(".map_c_5").removeClass('active');
    });

    $(".map_c_5").click(function(){
        $(this).addClass('active');
        $(".map_c_1").removeClass('active');
        $(".map_c_2").removeClass('active');
        $(".map_c_3").removeClass('active');
        $(".map_c_4").removeClass('active');
    });
});