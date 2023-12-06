// 카드 이펙트(로테이션) 효과 주기

// // 제이쿼리 호출
// import $ from 'jquery';
// window.jQuery = $;
// require('jquery-ui-dist/jquery-ui');
// require('jquery-ui-touch-punch/jquery.ui.touch-punch');

// 1. 대상 지정하기

// const pre = $("#album-area .swiper-slide");

// document.addEventListener("onmousemove", (e) => {
//   rotateElement(e, pre);
// });

// function rotateElement(event, element) {
//   const x = event.clientX;
//   const y = event.clientY;
  // console.log(x, y)

  // // 중간 찾기
  // const middleX = window.innerWidth / 2;
  // const middleY = window.innerHeight / 2;

  // // offset 중간 찾기
  // const offsetX = ((x - middleX) / middleX) * 45;
  // const offsetY = ((y - middleY) / middleY) * 45;
  // console.log(offsetX, offsetY);

  // element.style.setProperty("--rotateX", offsetY + "deg");
  // element.style.setProperty("--rotateY", offsetX + "deg");