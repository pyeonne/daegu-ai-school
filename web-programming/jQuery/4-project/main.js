const $close_text = $('.close_text');
const $open_text = $('.open_text');
const $list_title_wrap = $('.list_title_wrap');
const $list_article_wrap = $('.list_article_wrap');

$close_text.click(function () {
    $close_text.hide();
    $open_text.show();
    $list_article_wrap.addClass('hide');
});

$open_text.click(function () {
    $open_text.hide();
    $close_text.show();
    $list_article_wrap.removeClass('hide');
});

/*
// 첫번째 방법
$list_title_wrap.click(function () {
    if ($(this).parent().find('.list_article_wrap').hasClass('hide')) {
        $(this).parent().find('.list_article_wrap').removeClass('hide');
    } else {
        $(this).parent().find('.list_article_wrap').addClass('hide');
    }
});
*/

/*
// 두번째 방법
// slideToggle() 사용시 버그가 발생하서 toggleClass('hide')를 사용함
$list_title_wrap.click(function () {
    $(this).next().toggleClass('hide');
});
*/

$list_title_wrap.click(function () {
    $(this).next().toggleClass('hide');

    const hideLength = $('.list_article_wrap.hide').length;

    if (hideLength === 4) {
        $close_text.hide();
        $open_text.show();
    }

    if (hideLength === 0) {
        $open_text.hide();
        $close_text.show();
    }
});
