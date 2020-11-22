///// 전역변수구역 /////////////////////////
var pno = 0; /// 현재페이지번호
const totnum = 5; // 전체 페이지수
//-> const 는 상수(변경불가) constant에서 나온말
var psts = 0; // 광스크롤막기(0-허용,1-불허용)
//////////////////////////////////////////



$(function () {
    setTimeout(function () {
        $(".wrap").animate({
            scrollTop: "0px"
        }, 10); 
    }, 500);
    
    /*////////////////////////////////////////
        함수명:chkFn
        기능:이벤트발생체크 함수
    */ ////////////////////////////////////////
    var scsts = 0; 
    var cBack; 
    var chkFn = function () {
        clearTimeout(cBack); 
        cBack = setTimeout(function () {
            scsts = 0; 
        }, 100); 
    }; ///////////// chkFn 함수 //////////////


    $(document).on("mousewheel DOMMouseScroll", function (e) {

        chkFn();


        // 광스크롤막기 ////////////////////////
        if (psts === 1 || scsts === 1) return true; 
        psts = 1;
        scsts = 1; 
        setTimeout(function () {
            psts = 0; 
        }, 800); ////////////////////////////////////



        e = window.event || e;
        
        var delta = e.detail ? e.detail : e.wheelDelta;
        
        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -delta;
        } ///////// 파폭용 방향뒤집기 /////////////



        // 3. 마우스 휠 방향에 따라 페이지번호 증감!
        if (delta < 0) { 
            pno++;
            if (pno === totnum) pno = totnum - 1;
        } //// if //////////////////
        else { // 페이지번호 감소
            pno--;
            if (pno < 0) pno = 0;
        } //// else ///////////////

        chgMenu();



        if (pno === 2) {
            chart();
        }


        // 4.창높이*페이지번호로 위치 셋팅하기
        var pgpos = $(window).height() * pno;


        // 5. 실제이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 800, "easeInOutQuint");
        /// animate //////



    }); ////// mousewheel 이벤트함수 //////////////
    ////////////////////////////////////////////



    // GNB a링크를 클릭하면 해당 페이지위치로 이동 애니메이션
    $(".gnb a, .bnav a").click(function (e) {
        e.preventDefault(); 

        var idx = $(this).parent().index();

        pno = idx+1;

        chgMenu();


        if (pno === 2) {
            chart();
        }

       
        var pid = $(this).attr("href");

        var pgpos = $(window).height() * pno;

        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 800, "easeInOutQuint");


    }); //////// click /////////////
    ////////////////////////////////



}); /////////// jQB ///////////////////




/*////////////////////////////////////////
    함수명: chgMenu
    기능:메뉴 선택 변경하기
*/ ////////////////////////////////////////
function chgMenu() {
    // GNB 메뉴 선택 li에 class="on"넣기
    $(".gnb li").eq(pno).addClass("on")
        .siblings().removeClass("on");

    $(".bnav li").eq(pno).addClass("on")
        .siblings().removeClass("on");
} ///////////// chgMenu 함수 //////////////





/*함수선언*/
function chart() {

    $('.chart1').easyPieChart({
        barColor: '#291A0A',
        trackColor: '#e4bf99',
        scaleColor: '#fff',
        lineCap: 'butt',
        lineWidth: 10,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });


}
