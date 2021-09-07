const btns = document.querySelectorAll('.accordion');

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');

        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`; // scrollHeight - 요소의 전체 높이
        }
    });
});
