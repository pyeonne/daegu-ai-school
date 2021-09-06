/*
    from {}
    to {}
*/

/*
// 최초 상태를 기준으로 to 안에 작성된 CSS 속성이 적용되는 것
// 두번째 인자는 form에서 to로 전환되는 시간. duration 값
gsap.to('.masthead-heading', 10, {
    left: 50, // .masthead-heading의 position이 static이라서 left 속성이 적용 안 된 것
    backgroundColor: 'blue',
    borderColor: 'pink',
    borderRadius: '50%',
});
*/

/*
gsap.to('.masthead .btn', 5, {
    x: 300, // transform 속성의 translateX
    rotation: 360,
    scale: 0.5,
});
*/

/*
// from 안에 작성한 CSS 스타일이 시작점이 된다. (역순)
gsap.from('.masthead .btn', 5, {
    x: 300,
    rotation: 360,
    scale: 0.5,
});
*/

/*
// jQuery도 사용 가능
const $btn = $('.masthead .btn');
// fadeIn 효과
gsap.from($btn, 5, {
    opacity: 0,
    scale: 0,
    y: -50,
});
*/

/*
// from(시작)과 to(끝) 둘 다 제어하고 싶을 때
gsap.fromTo('.masthead .btn', 5, { backgroundColor: 'blue' }, { backgroundColor: 'red' });
*/

/*
const $btn = $('.masthead .btn');
$btn.click(function (e) {
    e.preventDefault();
    gsap.from($btn, 5, {
        opacity: 0,
        scale: 0,
        y: -50,
        delay: 1, // 애니메이션 시작을 늦출 수 있다.
    });
});
*/

/*
// ease property를 사용하려면 반드시 EasePack.js를 연동해야 한다.
// 속도에 영향을 주는 property
const $faStack = $('#services .fa-stack');

gsap.from($faStack, 1, {
    x: -200,
    ease: 'slow',
});
*/

// 순차적인 애니메이션 효과
// opacity: 0;보다 autoAlpha: 0 값을 사용하는 것이 일반적이다.
const $portfolioHeading = $('#portfolio .section-heading'),
    $portfolioSubHeading = $('#portfolio .section-subheading'),
    $portfolioImg = $('#portfolio img'),
    $portfolioTitle = $('#portfolio .portfolio-caption-heading'),
    $portfolioText = $('#portfolio .portfolio-caption-subheading');

/*
모든 delay의 기준은 브라우저 새로고침 시 적용
gsap.from($portfolioHeading, 0.3, { y: -15, autoAlpha: 0, delay: 0.2 });
gsap.from($portfolioSubHeading, 0.3, { y: -15, autoAlpha: 0, delay: 0.4 });
gsap.from($portfolioImg, 0.3, { y: -15, autoAlpha: 0, delay: 0.6 });
gsap.from($portfolioTitle, 0.3, { y: -15, autoAlpha: 0, delay: 0.8 });
gsap.from($portfolioText, 0.3, { y: -15, autoAlpha: 0, delay: 1 });
*/

const tl = new TimelineLite(); // 생성자 함수

/*
// delay는 이전 애니메이션이 끝난 후가 기준임
// 그래서 모두 0.2초로 변경해줌
tl.from($portfolioHeading, 0.3, { y: -15, autoAlpha: 0, delay: 0.2 })
    .from($portfolioSubHeading, 0.3, { y: -15, autoAlpha: 0, delay: 0.2 })
    .from($portfolioImg, 0.3, { y: -15, autoAlpha: 0, delay: 0.2 })
    .from($portfolioTitle, 0.3, { y: -15, autoAlpha: 0, delay: 0.2 })
    .from($portfolioText, 0.3, { y: -15, autoAlpha: 0, delay: 0.2 });
*/

/*
// delay를 제거하자 작성 순서대로 애니메이션 효과가 나타난다
// 이전 효과가 완료되기 전에 애니메이션을 시작하게 하려면...
tl.from($portfolioHeading, 0.3, { y: -15, autoAlpha: 0 })
    .from($portfolioSubHeading, 0.3, { y: -15, autoAlpha: 0 }, '-=0.15')
    .from($portfolioImg, 0.3, { y: -15, autoAlpha: 0 }, '-=0.15')
    .from($portfolioTitle, 0.3, { y: -15, autoAlpha: 0 }, '-=0.15')
    .from($portfolioText, 0.3, { y: -15, autoAlpha: 0 }, '-=0.15');
*/

/*
tl.from($portfolioHeading, 0.3, { y: -15, autoAlpha: 0 })
    .from($portfolioSubHeading, 0.3, { y: -15, autoAlpha: 0 }, '+=1')

    // 이전 효과는 상관없이 브라우저 새로고침한 시간을 기준으로 타이밍이 설정된다.
    .from($portfolioImg, 0.3, { y: -15, autoAlpha: 0 }, 3)
    .from($portfolioTitle, 0.3, { y: -15, autoAlpha: 0 }, 2)
    .from($portfolioText, 0.3, { y: -15, autoAlpha: 0 }, 2.5);
    */

/*
// +, - 등호를 사용해서 애니메이션 시작 시간을 지정할 수 있다.
tl.from($portfolioHeading, 0.3, { y: -15, autoAlpha: 0 })
    .add($portfolioSubHeading)

    .from($portfolioSubHeading, 0.3, { y: -15, autoAlpha: 0 })
    .from($portfolioImg, 0.3, { y: -15, autoAlpha: 0 }, '$portfolioSubHeading')
    .from($portfolioTitle, 0.3, { y: -15, autoAlpha: 0 }, '$portfolioSubHeading+=3')
    .from($portfolioText, 0.3, { y: -15, autoAlpha: 0 }, '$portfolioSubHeading');
    */
