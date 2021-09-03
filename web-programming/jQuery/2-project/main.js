const $select = $('.select');

/*
// 순서를 신경써야 한다.
$select.click(function () {
    $select.removeClass('on');
    $(this).addClass('on');
});
*/

// siblings() 메서는 나를 제외한 형제 요소들을 가져온다.
$select.click(function () {
    $(this).addClass('on').siblings().removeClass('on');
});
