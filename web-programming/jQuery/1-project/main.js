const $favoriteIcon = $('.favorites_icon');

$favoriteIcon.click(function () {
    /*
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
    */

    // 체크 박스 구현 가능
    $(this).toggleClass('on');
});
