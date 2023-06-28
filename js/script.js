//today
$(function(){
    $('#today').find('.close').on('click', function(){
        $('#today').stop().animate({top:-100});
        $('#wrap').stop().animate({top:0});
    });
});

// 헤더

$(function(){
    $('#nav2 > #nav_menu > .dep1').hover(function(){
        $('.dep1').addClass('active');
        $('.sub_shadow').addClass('active');
    }, function(){
        $('.dep1').removeClass('active');
        $('.sub_shadow').removeClass('active');
    });
});


// 슬라이드 배너

$(function(){

    var banner = $('.banner>ul>li');
    var button1 = $('.banner_btn>img.left');
    var button2 = $('.banner_btn>img.right');
    var play = $('.banner_btn>img.play');
    var stop = $('.banner_btn>img.stop')
    var current = 0;
    var setIntervalId;

    timer();

    function timer(){
        setIntervalId = setInterval(function(){
            var prev = banner.eq(current);
            move(prev,0,'-100%');

            current++;

            if(current == banner.size()){current=0}

            var next = banner.eq(current);

            move(next,'100%',0);
        },4000);
    }

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});

    }

    $('.banner').on({mouseover:function(){
        clearInterval(setIntervalId);
    }, mouseout:function(){
        timer();
    }});


    button1.click(function(){
        var prev = banner.eq(current);

        //현재 보여지는 이미지를 왼쪽으로 이동
        move(prev,0,'100%');

        //조건문 배너 이미지가 끝까지 갔다면 초기화
        current++;

        if(current == banner.size()){current=0}

        //다음 이미지는 현재 보여지도록 이동
        //다음 넘버는 현재에서 보여지도록 addClass
        var next = banner.eq(current);

        move(next,'-100%',0);

        //원래의 링크속성을 없애기
        return false;

    })


    button2.click(function(){
        var prev = banner.eq(current);
        move(prev,0,'-100%');

        current--;

        if(current == -banner.size()){current=0}

        var next = banner.eq(current);

        move(next,'100%',0);

        return false;
    })


    $('.stop').click(function(){
        clearInterval(setIntervalId);
        $('.stop').hide();
        $('.play').show();
    })

    $('.play').click(function(){
        timer();
        $('.stop').show();
        $('.play').hide();
    })

});

//날씨

$(function(){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=37.1294&lon=126.9325&appid=931cf418021445795381368f79037456&units=Metric', function(data){
    
        var $city = data.name; //도시이름
        var $minTemp = data.main.temp_min; /* 최저온도 */
        var $maxTemp = data.main.temp_max; /* 최고온도 */
        var $cTemp = data.main.temp; /* 현재온도 */
    
        var now = new Date(Date.now());
        var b = now.getDay();
        switch(b){
            case 0 : c = "일"
            break
    
            case 1:
                c = "월"
                break
    
            case 2:
                c = "화"
                break
    
            case 3:
                c = "수"
                break
    
            case 4:
                c = "목"
                break
    
            case 5:
                c = "금"
                break
    
            case 6:
                c = "토"
                break
        }
    
        let weatherIcon = { //스코프 범위를 가지는 지역 변수
            '01': 'wi wi-day-sunny',
            '02': 'wi wi-day-cloudy',
            '03': 'wi wi-cloud',
            '04': 'wi wi-cloudy',
            '09': 'wi wi-day-rain-mix',
            '10': 'wi wi-showers',
            '11': 'wi wi-thunderstorm',
            '13': 'wi wi-snowflake-cold',
            '50': 'wi wi-smog'
        
        }
    
        var month = now.getMonth() +1;
        var $cDate = now.getFullYear() + '년 ' + month + '월 ' + now.getDate() + '일 ' + c + '요일 ' + now.getHours() + '시 ' + now.getMinutes() + '분 ';
    
        var $wIcon = (data.weather[0].icon).substr(0,2); //스트링의 약자 문자열을 자를때 씀
    
        $('.clowtemp').append($minTemp + '℃');
        $('.chightemp').append($maxTemp + '℃');
        $('.ctemp').append($cTemp + '℃');
        $('.cicon').append('<i class="' +weatherIcon[$wIcon] + '"></i>');
    
        $('.date').prepend($cDate);
        $('.cname').append($city);
    
    })
    
});

// 배경화면 효과

$(function(){
    $('.back1').DB_springMove({
        dir:'y',         //움직이는 방향
        mirror:1,        //움직이는 반전된 반경
        radius:11,       //움직이는 반경 지름
        motionSpeed:0.07 //속도
    });
    $('.back2').DB_springMove({
        dir:'y',         //움직이는 방향
        mirror:1,        //움직이는 반전된 반경
        radius:20,       //움직이는 반경 지름
        motionSpeed:0.07 //속도
    });
});


//탭메뉴

$(function(){
    $(".tap_1").click(function(){
        $(this).addClass('active');
        $(".tap_2").removeClass('active');
        $(".tap_3").removeClass('active');
    });

    $(".tap_2").click(function(){
        $(this).addClass('active');
        $(".tap_1").removeClass('active');
        $(".tap_3").removeClass('active');
    });

    $(".tap_3").click(function(){
        $(this).addClass('active');
        $(".tap_1").removeClass('active');
        $(".tap_2").removeClass('active');
    });
});

//패밀리 사이트
$(function(){
	$('.f1').click(function(){
		$('.family_list1').toggle();
	});
});

$(function(){
	$('.f2').click(function(){
		$('.family_list2').toggle();
	});
});

$(function(){
	$('.f3').click(function(){
		$('.family_list3').toggle();
	});
});