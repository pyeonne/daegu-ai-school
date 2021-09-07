const btnModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal .btn-close');

btnModal.addEventListener('click', function () {
    modal.classList.add('active');
});

btnClose.addEventListener('click', function () {
    modal.classList.remove('active');
});

// 모달창 오버레이 부분을 클릭해도 창을 닫고 싶다.
modal.addEventListener('click', function (event) {
    const target = event.target;
    const isLayer = target.classList.contains('modal-layer');

    if (isLayer) {
        modal.classList.remove('active');
    }
});
