///// 모바일 코드 만들기 ///
var mob = 0;
if ($(window).width() < 990) {
    mob = 1;
} ///// 모바일코드발급 /////
console.log("모바일?" + mob);

/*함수선언*/
function chart() {

    $('.chart1').easyPieChart({
        barColor: '#291A0A',
        trackColor: '#e4bf99',
        scaleColor: '#fff',
        lineCap: 'butt',
        lineWidth: 10,
        size: 200,
        animate: 2000,
        onStart: $.noop,
        onStop: $.noop
    });


}


$(function () { //////jQB//////////////////////////////
    console.log("로딩완료!");



    // 모바일이 아닐때만 작동
    if (!mob) {

        /*chart();*/


        var typingBool = false;
        var typingIdx = 0;
        var liIndex = 0;
        var liLength = $(".typing-txt>ul>li").length;

        // 타이핑될 텍스트를 가져온다 
        var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
        typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
            typingBool = true;
            var tyInt = setInterval(typing, 100); // 반복동작 
        }

        function typing() {
            $(".typing > ul li").removeClass("on");
            $(".typing > ul li").eq(liIndex).addClass("on");
            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                $(".typing > ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                typingIdx++;
            } else {
                if (liIndex < liLength - 1) {
                    //다음문장으로  가기위해 인덱스를 1증가
                    liIndex++;
                    //다음문장을 타이핑하기위한 셋팅
                    typingIdx = 0;
                    typingBool = false;
                    typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                    //다음문장 타이핑전 1초 쉰다
                    clearInterval(tyInt);
                    //타이핑종료

                    setTimeout(function () {
                        //1초후에 다시 타이핑 반복 시작
                        tyInt = setInterval(typing, 100);
                    }, 1000);
                } else if (liIndex == liLength - 1) {

                    //마지막 문장까지 써지면 반복종료
                    clearInterval(tyInt);
                }
            }
        }

        var swiper = new Swiper('.swiper-container', {
            cssMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination'
            },
            mousewheel: true,
            keyboard: true,
        });
        var swiper = new Swiper('.swiper-container', {
            cssMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination'
            },
            mousewheel: true,
            keyboard: true,
        });

    } ////////// if :  // 모바일이 아닐때만 작동 ////////









}) ///////////////////jQB////////////////////////////
////////////////////////////////////////////////////
