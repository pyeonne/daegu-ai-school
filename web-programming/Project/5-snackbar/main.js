function snackBarFunc() {
    const snackbar = document.querySelector('#snackbar');
    snackbar.classList.add('show');

    // 3.5초가 지났을 때 snackbar의 show 클래스를 제거해라
    // 애니메이션이 동작하는 시간은 총 3.5초(중요)
    setTimeout(function () {
        snackbar.classList.remove('show');
    }, 3500);
}
