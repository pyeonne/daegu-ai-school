/*
const $profile = $('.profile');
const $profilePopup = $('.profile-popup');

$profile.on({
    mouseenter: function () {
        $(this).parent().find('.profile-popup').show();
    },

    mouseleave: function () {
        $profilePopup.hide();
    },
});
*/

// 부모 요소를 경유하지 않고 다음에 나오는 요소를 바로 지목할 수 있다.
// 이전 형제 요소는 prev()를 통해 가리킬 수 있으며, 연달아 사용하면 이전의 이전의 이전의...
// 부드럽게 나타나게 하려면 fadeIn(), fadeOut()
const $profile = $('.profile');

$profile.on({
    mouseenter: function () {
        $(this).next().fadeIn();
    },
    mouseleave: function () {
        $(this).next().fadeOut();
    },
});
