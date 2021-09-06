// intro.js는 onboarding 기능을 제공하는 라이브러리다.

/*
// data 속성에 접근하는 방법
const btn = document.querySelector('.masthead .btn');
btn.dataset.computer = '노트북';
console.log(btn.dataset.computer);
*/

// hint를 주고 싶은 부분에 동그라미 표시
// introJs().addHints();

// HTML 태그 안에 data-title, data-intro 속성을 통해 설정함
// 작성한 순서대로 온보딩 효과가 나타남
// introJs().start();

// main.js에서 setOptions() 메서드를 사용해 property를 추가하는 방식으로 작성 가능
// element 속성을 지정안하면 사이트의 정중앙에 온보딩 효과가 나타남
// element로 지정한 section으로 자동 이동됨
// position 속성을 통해 Tooltip이 나타나는 위치를 지정할 수 있다.
// HTML 태그를 이용해 텍스트 효과 적용하고 이미지를 삽입할 수 있다.
// tooltipClass 속성을 사용하면 CSS 스타일을 지정할 수 있다.
// showProgress는 진행 상태바 표시
// showButtons는 하단의 버튼 유무 설정
// showBullets는 총알 모양 유무 설정
// nextLabel, prevLabel, doneLabel 버튼 텍스트 변경
// exitOnEsc, exitOnOverlayClick exit 방법 제어
// .onbeforeexit()메서드 exit시 리마인드 기능
// 사용자의 이동을 인지하고 싶을 때 .onchange() 메서드 사용
// 사용자가 완료 버튼을 눌렀는지 인지하고 싶을 때 .oncomplate() 메서드 사용

introJs()
    .setOptions({
        tooltipClass: 'customTooltip custom-1',
        showProgress: true,
        showButtons: true,
        showBullets: false,
        nextLabel: '다음',
        prevLabel: '이전',
        doneLabel: '완료',
        exitOnEsc: false,
        exitOnOverlayClick: false,
        steps: [
            {
                title: '제목 1',
                intro: '제목 1의 내용',
            },
            {
                title: '<h1>Farewell!</h1>',
                element: document.querySelector('#portfolio .section-subheading'),
                intro: '<h2>And <em>this</em> is our final step!</h2>',
            },
            {
                element: document.querySelector('#portfolio .section-heading'),
                intro: '<img src="https://via.placeholder.com/150">',
            },
        ],
    })
    .onbeforeexit(function () {
        return confirm('Are you sure?');
    })
    .onchange(function () {
        console.log('다음 순으로 이동하고 있다. 또는 이전 순으로 이동하고 있다.');
    })
    .oncomplate(function () {
        console.log('완료 버튼을 눌렀다.');
    })
    .start();
