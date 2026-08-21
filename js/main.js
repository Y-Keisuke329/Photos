$(function () {
    /*=================================================
 ハンバーガーメニュー
 ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $('.toggle_btn').on('click', function () {
        // #headerにopenクラスが存在する場合
        if ($('header').hasClass('open')) {
            // openクラスを削除
            // openクラスを削除すると、openクラスのCSSがはずれるため、
            // メニューが非表示になる
            $('header').removeClass('open');
            // #headerにopenクラスが存在しない場合
        } else {
            // openクラスを追加
            // openクラスを追加すると、openクラスのCSSが適応されるため、
            // メニューが表示される
            $('header').addClass('open');
        }
    });
    // メニューが表示されている時に画面をクリックした場合
    $('mask').on('click', function () {
        // openクラスを削除して、メニューを閉じる
        $('header').removeClass('open');
    });
});
/*=================================================
カルーセル
===================================================*/
let current = 0
let isAnimation = false
const carousel = document.querySelector('.carousel')
const carousels = document.querySelectorAll('.carousel__section')
const total = carousels.length
// サムネイルの要素をすべて取得
const thumbnails = document.querySelectorAll('.carousel-thumbnails img')

function showSection() {
    carousel.addEventListener('transitionend', () => {
        isAnimation = false
    }, { once: ture })
    isAnimation = true
    carousel.style.transform = `translateX(${-current * 100}%)`
}
thumbnails.forEach((thumbnail, index) => {
    if (index === current) {
        thumbnail.classList.add('active')
    } else {
        thumbnail.classList.remove('active')
    }
})
function prevSection() {
    current = current === 0 ? total - 1 : current - 1
    showSection()
}

function nextSection() {
    current = (current + 1) % total
    showSection()
}

const btnLeft = document.querySelector('.carousel__button-left')
const btnRight = document.querySelector('.carousel__button-right')

btnLeft.addEventListener('click', prevSection)
btnRight.addEventListener('click', nextSection)
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        if (isAnimation) return

        // thumbnail からdata-index を取得する
        const index = parseInt(thumbnail.getAttribute('data-index'), 10)

        // すでに表示中の画像なら何もしない
        if (current === index) return

        current = index
        showSection()
    })
})
/*キーボード操作*/
function handleKeyDown(event) {
    if (isAnimation) return

    if (event.key === 'ArrowLeft') {
        prevSection() /*prevSection()を実行*/
    } else if (event.key === 'ArrowRight') {
        nextSection() /*nextSection()を実行*/
    }
}
document.addEventListener('keydown', handleKeyDown)
/*6秒経ったらスクロール*/
setInterval(() => {
    if (isAnimation) return
    nextSection()/*nextSection()を実行*/
}, 6000)/*6000ミリ秒*/