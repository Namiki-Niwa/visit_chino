// dex
function handleClick() {
  const isTrue = document.querySelector("#js-drawer-icon").classList.contains("is-checked")
  if(!isTrue) {
    document.querySelector(".slider").style.zIndex = "-1";
  } else {
    document.querySelector(".slider").style.zIndex = "1";
  }
}


// header drawer
document.querySelector("#js-drawer-icon").addEventListener("click", function(e){
 e.preventDefault;
 document.querySelector("#js-drawer-icon").classList.toggle("is-checked");
 document.querySelector("#js-drawer-content").classList.toggle("is-checked");
})

//modal content by jQuery
// $(function(){
//   $('#plus-modal-open').on('click', function(){
//     $('#modal-bg').toggleClass('is-active');
//     $('#modal-container').toggleClass('is-active');
//   });

//   $('#plus-modal-close, #modal-bg').on('click', function(){
//     $('#modal-bg').toggleClass('is-active');
//     $('#modal-container').toggleClass('is-active');
//   });
// });


// document.getElementById("plus-modal-open").addEventListener("click", function(e){
//   console.log()
//  e.preventDefault;
//  document.getElementById("modal-bg").classList.toggle("is-active");
//  document.getElementById("modal-container").classList.toggle("is-active");
// });

// モーダル
function test(event) {
  console.log(event)
  const image = event.target.previousElementSibling.src
  const targetImg = document.getElementById("targetImg")

  targetImg.src = image

  document.querySelector("#modal-bg").classList.toggle("is-active");
  document.querySelector("#modal-container").classList.toggle("is-active");
  document.querySelector('body').style.overflow = 'hidden';
}


document.querySelectorAll("#modal-bg, #plus-modal-close").forEach(function(element) {
  element.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#modal-bg").classList.toggle("is-active");
    document.querySelector("#modal-container").classList.toggle("is-active");
    document.querySelector("body").style.overflow = '';
  });
});





// slick
$('.slider').slick({

  prevArrow: '<img src="../img/slick-arrow-left.png" class="slick-arrow prev-arrow">',
  nextArrow: '<img src="../img/slick-arrow-right.png" class="slick-arrow next-arrow">',

  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,

  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// top-btn
// function pageTop(){
//   window.scroll({
//     top: 0,
//     behavior:'smooth'
//   });
// }

// // TOPに戻るボダんの要素を取得
// const topBtn = document.querySelector('#top-btn');
// // 取得した「TOPに戻る」要素を取得する
// topBtn.addEventListener('click', () => {toTop()});

// // ボタン表示する位置
// const viewOffset = 1000;
// // const topBtn = document.querySelector("#top-btn");

// // 指定した位置を超えたら「TOPに戻る」、ボタンを表示する
// // 超えてなかったら非表示する指示
// function viewTopButton(){
//   if(window.scrollY > viewOffset){
//     topBtn.style.display = 'flex';
//   } else {
//     topBtn.style.display = 'none';
//   }
// } 

// 画面をスクロールした時に「TOPに戻る」ボタンの表示処理を実行する
// window.addEventListener('scroll', () => {viewTopButton()});

$(function(){

  $(".top-btn").hide();
  $(window).on("scroll", function(){
  if($(this).scrollTop() > 2000) {
    $("#js-top-btn").fadeIn(800);
  } else {
    $("#js-top-btn").fadeOut(600);
  }
});
  $("#js-top-btn").on("click", function(){
    $("html, body").animate({ scrollTop:0}, 200);
  });
});