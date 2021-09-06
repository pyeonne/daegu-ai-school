// Swal은 하나의 객체
// function Swal() {}

// Swal.fire('Good job!', 'You clicked the button!', 'success');

/*
Swal.fire({
    icon: 'error',
    title: '<strong>Title</strong>',
    // text: '<p>Text!!!!</p>', // text에는 p 태그를 사용하지 못함
    // imageUrl: 'https://placeholder.pics/svg/300x1500',
    // imageHeight: 1500,
    // imageAlt: 'Test',

    html: 'You can use <b>bold</b> text', // 문구에 텍스트 태그를 사용하려면 html 속성을 이용해야 한다.
    footer: '<a href="#">Issue?</a>',

    showCloseButton: true, // OK Button
    showCancelButton: true, // Cancel Button
    showDenyButton: true, // No Button

    confirmButtonText: '확인!', // Close Button 텍스트 변경
    cancelButtonText: '취소', // Cancel Button 텍스트 변경
    denyButtonText: '노!',
}).then(function (result) {
    // 버튼에 대한 결과값을 then()메서드를 통해 받을 수 있다.
    if (result.isConfirmed) {
        Swal.fire('확인');
    } else if (result.isDenied) {
        Swal.fire('노');
    } else if (result.isDismissed) {
        Swal.fire('취소');
    }
});
*/

/*
// 일정 시간이 지나면 사라지는 효과
// Button color property로 버튼의 색깔을 변경할 수 있다.
Swal.fire({
    // position: 'bottom-start',
    title: '위치 변경',
    // showConfirmButton: false,
    // timer: 1500,

    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
});
*/

/*
// mixin() 메서드를 사용해 CSS 파일에 작성한 스타일을 지정할 수 있다.
Swal.mixin({
    customClass: {
        confirmButton: 'btn-success-1',
        cancelButton: 'btn-danger-1',
    },
    buttonsStyling: false,
}).fire({
    title: 'Title',
    text: 'Text',

    showCancelButton: true,
});
*/

/*
Swal.fire({
    icon: 'warning',
    title: 'title',
    width: 600,
    padding: '20px',
    // background: '#fff url(data:image/jpeg;base64,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)',
});
*/

/*
(async function () {
    const { value: email } = await Swal.fire({
        title: 'Input Email Address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address',
    });

    if (email) {
        Swal.fire(`Entered email: ${email}`);
    }
})();
*/

/*
// await를 사용하지 않으면 사용자값을 볼 수 없다.
// 이와 같은 형태로 변형해서도 사용 가능하다.
Swal.fire({
    title: 'Input Email Address',
    input: 'email',
    inputLabel: 'Your email address',
    inputPlaceholder: 'Enter your email address',
}).then(function (result) {
    Swal.fire(`Entered email: ${result.value}`);
});
*/

/*
// password는 그대로 노출되므로 이 방법은 사용할 수 없을 것 같다.
Swal.fire({
    title: 'Input Password',
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Message',
    inputAttributes: {
        maxlength: 10, // 최대 글자 길이
    },
}).then(function (result) {
    Swal.fire(`Entered email: ${result.value}`);
});
*/

Swal.fire({
    title: 'Select',
    input: 'select',
    inputOptions: {
        사과: '사과',
        바나나: '바나나',
        토마토: '토마토',
    },

    showCancelButton: true,
    reverseButtons: true, // Ok button과 Cancel button의 위치 변경
    // Overlay 부분을 클릭해도 팝업이 사라지지 않게 설정.
    // 반드시 사용자가 팝업에 응답을 해야 할때 사용하는 property
    allowOutsideClick: false,
}).then(function (result) {
    Swal.fire(`${result.value}`);
});
