const fixedNav = document.querySelector('nav');

// window.addEventListener('scroll')
// window.onscroll = function () {...}
// document.addEventListener('scroll')

/*
window.addEventListener('scroll', function () {
    // 여러 property를 사용하는 이유는 크로스 브라우징을 위함
    // window.scrollY property는 모든 브라우저에서 사용 가능
    // window.pageYOffset property는 IE8 이하 버전에서 지원 불가
    // document.documentElement.scrollTop property는 IE8 이하 버전을 지원하나 크롬에서 사용 불가
    // document.body.scrollTop property는 사파리, 엣지에서 사용 가능
    const top =
        window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // if (top > 50) {
    //     fixedNav.classList.add('active');
    // } else {
    //     fixedNav.classList.remove('active');
    // }

    // 구문이 간단하다면 삼항 연산자를 이용하는 것이 좋다.
    top > 50 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
});
*/

/*
// 스크롤을 내리고 올리고에 따라 배경 색상을 바꾸고 싶다.
let oldVal = 0;

window.addEventListener('scroll', function () {
    let newVal =
        window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // 음수가 되면 스크롤이 내려가고 있는 상태다.
    if (oldVal - newVal < 0) {
        fixedNav.classList.add('active');
    }

    // 양수가 되면 스크롤이 올라가고 있는 상태다.
    if (oldVal - newVal > 0) {
        fixedNav.classList.remove('active');
    }

    // 최신 상태의 newVal 값을 oldVal에 할당한다.
    oldVal = newVal;
});
*/

/*
// 브라우저 자체에서 스크롤을 올리는지 내리는지를 파악하고 싶다.
// wheel 상태 값을 통해 스크롤의 상태를 알 수 있었다.
// -event.detail은 크로스 브라우징을 위함
// 파이어폭스에는 동작하지 않는 문제점이 있다.
window.addEventListener('wheel', mousewheelEvent);

// 파이어폭스에도 동작하게 하려면 DOMMouseScroll을 사용해야 한다.
window.addEventListener('DOMMouseScroll', mouseWheelEvent);

function mouseWheelEvent(event) {
    const index = event.wheelDelta ? event.wheelDelta : -event.detail;

    index < 0 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
}
*/

// navigator에 indexOf로 Firefox가 존재하는지 아닌지 따져 주는 것.
const isFirebox = navigator.userAgent.indexOf('Firefox') !== -1;
const wheelEvent = isFirebox ? 'DOMMouseScroll' : 'wheel';

window.addEventListener(wheelEvent, mouseWheelEvent);

function mouseWheelEvent(event) {
    const index = event.wheelDelta ? event.wheelDelta : -event.detail;

    index < 0 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');