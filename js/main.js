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
const carousel = document.querySelector('.carousel')
const carousels = document.querySelectorAll('.carousel__section')
const total = carousels.length

function showSection() {
    carousel.style.transform = `translateX(${-current * 100}%)`
}

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
