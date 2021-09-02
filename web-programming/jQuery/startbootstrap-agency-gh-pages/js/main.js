/* 예전 방식
$(document).ready(function() {

})
*/

$(function () {
    // 선택자
    // querySelector() 방식과 동일
    /*
    $('header').css('border', 'solid 10px red');
    $('#masthead-id').css('color', 'red');
    $('.masthead-heading').css('color', 'blue');

    console.log($('#masthead-id'));

    // `$` jQuery 선택자를 변수에 할당함
    const $mastHead = $('masthead-id');
    console.log($mastHead);
    */

    /*
    // even은 원래 짝수를 의미하지만, jQuery에서는 0부터 시작하기 때문에 홀수를 의미한다.
    $('.nav-item:even').css('background-color', 'blue');
    $('.nav-item:odd').css('background-color', 'green');
    $('.nav-item:eq(0)').css('background-color', 'pink');

    $('header #masthead-id.masthead-subheading').css('color', 'red');
    //console.log($(#test)); 존재하지 않는 선택자를 불러오면 비어있는 값을 불러온다.

    // 라이브러리 js파일을 항상 먼저 연동시켜야 한다.
    */

    // 이벤트
    // this 개념을 jQuery 안에서도 활용 가능하다.
    /*
    $('header #masthead-id').mouseenter(function () {
        // $('header #masthead-id').css('background-color', 'yellow');
        $(this).css('background-color', 'yellow');
    });
    $('header #masthead-id').mouseleave(function () {
        $(this).css('background-color', 'blue');
    });
    $('header #masthead-id').click(function () {
        $(this).css('background-color', 'pink');
    });
    */

    /*
    // 하나의 선택자에 여러개의 이벤트를 추가할때 on()을 사용하면 된다.
    // fadeTo()는 opacity의 강도를 조절하는 메서드다.
    $('header #masthead-id').on({
        mouseenter: function () {
            $(this).fadeTo('fast', 1);
        },
        mouseleave: function () {
            $(this).fadeTo('fast', 0.5);
        },
    });
    */

    /*
    // hide() 메서드를 사용하면 display: none; 처리할 수 있다.
    $('#masthead-id').click(function () {
        $('.masthead-heading').hide();
    });
    // show() 메서드를 사용하면 display: none; 처리된 값을 제거할 수 있다.
    $('#masthead-id').click(function () {
        $('.masthead-heading').show();
    });
    */

    /*
    // toggle() 메서드는 display: none; 유무에 따라서 기능이 달라진다. hide() or show()
    $('#masthead-id').click(function () {
        $('.masthead-heading').toggle();
    });
    */

    /*
    // slideDown() 메서드는 display: none; 처리된 값을 제거하고 슬라이드되며 나타난다.
    $('#masthead-id').click(function () {
        $('.masthead-heading').slideDown();
    });
    */

    /*
    $('#masthead-id').click(function () {
        $('.masthead-heading').slideToggle(); // slideUp, slideDown
    });
    */

    /*
    $('header .btn-one').click(function () {
        $('.masthead-heading').fadeOut();
    });
    $('header .btn-two').click(function () {
        $('.masthead-heading').fadeIn();
    });
    */

    /*
    $('header .btn-one').click(function () {
        $('#masthead-id').addClass('blue');
        $('.masthead-heading').addClass('important');
    });

    $('header .btn-two').click(function () {
        $('#masthead-id').removeClass('blue');
        $('.masthead-heading').removeClass('important');
    });
    */

    /*
    const $id = $('#masthead-id');
    $('.btn-one').click(function () {
        // 자바스크립트에서는 클래스의 존재 여부를 contain(), jQuery에서는 hasClass()
        if ($id.hasClass('blue')) {
            $id.removeClass('blue');
        } else {
            $id.addClass('blue');
        }
    });
    */

    // 위의 코드를 toggleClass() 메서드를 사용해 한줄로 작성 가능하다.
    $id.toggleClass('blue');
});
