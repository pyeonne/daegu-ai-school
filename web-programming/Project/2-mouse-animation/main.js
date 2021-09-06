const pageContainer = document.querySelector('.page-container');
const pageBack = document.querySelector('.page-back');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// page-container는 TV 화면, page-back은 TV 화면 안에서 움직임
// 마우스 커서 움직이는 반대 방향으로 이미지가 움직임
pageContainer.addEventListener('mousemove', function (event) {
    const moveX = (windowWidth / 2 - event.pageX) * 0.1;
    const moveY = (windowHeight / 2 - event.pageY) * 0.1;

    // pageBack.style.marginLeft = `${moveX}px`;
    // pageBack.style.marginTop = `${moveY}px`;

    // position 관련 속성보다 transform 속성을 사용하는 것이 브라우저 성능에 좋다.
    pageBack.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
