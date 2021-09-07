const firstSlide = document.querySelector('.item:first-child');
firstSlide.classList.add('show');

function slide() {
    const currentSlide = document.querySelector('.show');

    if (currentSlide) {
        currentSlide.classList.remove('show');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add('show');
        } else {
            firstSlide.classList.add('show');
        }
    } else {
        firstSlide.classList.add('show');
    }
}

slide(); // 최초 한번 호출
setInterval(slide, 2000);
