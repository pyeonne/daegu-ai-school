// $('.owl-carousel').owlCarousel({
/*
    loop: true,
    margin: 10, // 단위 생략
    nav: true, // 화살표
    // items: 5,

    // 기본값은 3
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 3,
            nav: false,
        },
        1000: {
            // width 값이 1000px 이상이면 items 갯수는 5개
            items: 5,
            loop: false,
            nav: true,
        },
    },
    */

/*
    // 해당되는 item이 항상 정중앙에 배치된다.
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    */

/*
    // 실무에서 많이 사용한다.
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4,
    rtl: false, // 순서가 역순된다.
    */

/*
    items: 1,
    animateOut: 'fadeOut', // 기본 애니메이션
    */

// 다양한 애니메이션 효과를 이용하려면 animate.css를 이용해야 되는데,
// animate.css 최신 버전을 이용하면 오류가 발생할 수 있으므로
// OwlCarousel2-2.34 폴더 안에 있는 animate.css 파일을 이용해야 한다.

/*
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    margin: 30,
    // stagePadding: 30, // item 좌우 padding 값
    smartSpeed: 450,
    */

/*
    // 자동 재생 효과를 적용하고 싶다면 autoplay를 사용하면 된다.
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000, // 1초
    autoplayHoverPause: true, // mouse:hover 시 정지
});
$('.play').on('click', function () {
    $('.owl-carousel').trigger('play.owl.autoplay', [1000]);
});
$('.stop').on('click', function () {
    $('.owl-carousel').trigger('stop.owl.autoplay');
});
*/

// mousewheel
const $owl = $('.owl-carousel');
$owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
});
$owl.on('mousewheel', '.owl-stage', function (e) {
    e.preventDefault();

    if (e.deltaY > 0) {
        $owl.trigger('next.owl');
    } else {
        $owl.trigger('prev.owl');
    }
});
