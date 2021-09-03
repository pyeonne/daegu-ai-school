/*
// select 태그 안에 option 태그로 바로 넣는 것이 직관적이기 때문에 더 많이 사용한다.
const data = [
    { id: 0, text: '사과' },
    { id: 1, text: '바나나' },
    { id: 2, text: '포도' },
];

$('.single-select').select2({
    // theme: 'classic', // 테마 적용 가능
    language: {
        noResults: function () {
            return '검색 내역이 없습니다.';
        },
    },
    minimumResultsForSearch: -1, // 검색어 기능 제거
    width: '400px', // CSS 속성 적용 가능
    data: data,
    // 항목 텍스트 앞에 이미지를 삽입하는 방법
    templateResult: function (state) {
        const $state = $(`
            <img src='https://via.placeholder.com/10'>
            <span>${state.text}</span>`);
        return $state;
    },
});

// multiple-select를 활용해 태그 기능을 쉽게 구현할 수 있다.
$('.multiple-select').select2();

$('.single-placeholder').select2({
    placeholder: '과일을 선택하세요',
    allowClear: true,
    width: '400px',
});

// prop(), attr()는 jquery에 있는 메서드로, HTML의 속성에 접근하거나 제어할 때 사용한다.
// disabled 속성은 select를 활성화할지 비활성화할지를 선택할 수 있다.
$('.on').click(function () {
    $('.single-select').prop('disabled', true);
});

$('.off').click(function () {
    $('.single-select').prop('disabled', false);
});
*/

const $select = $('.single-select').select2();

$('.set').click(function () {
    // 포도 값으로 변경해라
    $select.val('포도').trigger('change');
});

$('.on').click(function () {
    $('.single-select').select2('open');
});

$('.off').click(function () {
    $('.single-select').select2('close');
});

$('.destroy').click(function () {
    // select2 플러그인으로 적용된 디자인이 삭제된다.
    $select.select2('destroy');
});

$('.re').click(function () {
    // select2 플러그인 디자인이 다시 적용된다.
    $select.select2();
});

const $multiple = $('.multiple-select').select2();

$('.set-two').click(function () {
    $multiple.val(['포도', '바나나']).trigger('change');
});

$('.clear').click(function () {
    $multiple.val(null).trigger('change');
});
