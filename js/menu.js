if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  alert(
    "Sorry, the mobile version of the Works may not be fully operational yet."
  );
}
const descriptionBtn = document.querySelector("#descriptionBtn");
const content = document.querySelector("#allcontents");

descriptionBtn.addEventListener("click", () => {
  if (content.style.opacity == "0" || content.style.opacity == "") {
    content.style.opacity = "1";
    descriptionBtn.innerHTML = "Hide description";
  } else {
    content.style.opacity = "0";
    descriptionBtn.innerHTML = "Show description";
  }
});

//* Infinite scroll horizontal
window.scrollTo(window.innerWidth + 1, 0);
window.addEventListener("scroll", function () {
  if (window.innerWidth <= 1000) {
    if (window.scrollX >= 1250) {
      window.scrollTo(1, 0);
    } else if (window.scrollX <= 1) {
      window.scrollTo(1249, 0);
    }
  } else if (window.innerWidth > 1000) {
    if (window.scrollX >= window.innerWidth * 1.25) {
      window.scrollTo(1, 0);
    } else if (window.scrollX <= 1) {
      window.scrollTo(window.innerWidth * 1.25 - 1, 0);
    }
  }
});

//* Infinite scroll for mobile
// window.addEventListener("touchmove", reportScreen);

// function reportScreen(e) {
//   console.log(e.touches[0].pageX);
// }

// window.addEventListener("touchmove", function (e) {
//   var offsetX;
//   offsetX = e.touches[0].pageX;
//   console.log(offsetX);
// });

//
// window.addEventListener("touchmove", addTouchOffsets);
// function addTouchOffsets(e) {
//   var touch = e.touches[0] || e.changedTouches[0];
//   var realTarget = document.elementFromPoint(touch.pageX, touch.clientX);
//   e.offsetX = touch.pageX - realTarget.getBoundingClientRect().x;
//   return e;
// }
//

// clientX pageX
// e.offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
// e.offsetY = e.touches[0].pageY - e.touches[0].target.offsetTop;

// window.addEventListener("resize", function () {
//   // window.scrollTo(1, 0);
// });

//*--------------------------------------

//*----------------
// var context = document.querySelector("#allskewed"),
//   clones = document.querySelectorAll(".copy"),
//   disableScroll = false,
//   scrollWidth = 0,
//   scrollPos = 0,
//   //   clonesWidth = 0,
//   i = 0;

// function getScrollPos() {
//   //   return (window.pageXOffset || window.scrollLeft) - (window.clientLeft || 0);
//   return window.scrollX;
// }

// function setScrollPos(pos) {
//   //   window.scrollLeft = pos;
//   window.scrollTo(pos, 0);
// }

// // function getClonesWidth() {
// //   clonesWidth = 0;

// //   for (i = 0; i < clones.length; i += 1) {
// //     clonesWidth = clonesWidth + clones[i].offsetWidth;
// //   }

// //   return clonesWidth;
// // }
// //*----------------------------------

// function reCalc() {
//   scrollPos = getScrollPos();
//   console.log(scrollPos);
//   //   scrollWidth = window.scrollWidth;
//   scrollWidth = window.innerWidth;
//   //   clonesWidth = getClonesWidth();
//   clonesWidth = window.innerWidth * 1.25;

//   if (scrollPos <= 0) {
//     setScrollPos(1); // Scroll 1 pixel to allow scrolling to the left
//   }
// }

// function scrollUpdate() {
//   if (!disableScroll) {
//     scrollPos = getScrollPos();

//     if (scrollPos >= clonesWidth) {
//       // if (clonesWidth + scrollPos >= scrollWidth) {
//       // Scroll to the left when you’ve reached the right end
//       setScrollPos(1); // Scroll right 1 pixel to allow upwards scrolling
//       disableScroll = true;
//     } else if (scrollPos <= 0) {
//       // Scroll to the right when you reach the left end
//       //   setScrollPos(scrollWidth - clonesWidth); //??????????
//       //   setScrollPos(clonesWidth - scrollWidth);
//       setScrollPos(clonesWidth - 1);
//       disableScroll = true;
//     }
//   }

//   if (disableScroll) {
//     // Disable scroll-jumping for a short time to avoid flickering
//     window.setTimeout(function () {
//       disableScroll = false;
//     }, 40);
//   }
// }

// function init() {
//   reCalc();

//   window.addEventListener(
//     "scroll",
//     function () {
//       window.requestAnimationFrame(scrollUpdate);
//     }
//     // ,
//     // false
//   );

//   window.addEventListener(
//     "resize",
//     function () {
//       window.requestAnimationFrame(reCalc);
//     }
//     // ,
//     // false
//   );
// }

// if (document.readyState !== "loading") {
//   init();
// } else {
//   document.addEventListener("DOMContentLoaded", init, false);
// }
// //Just for this demo: Center the middle block on page load
// // window.onload = function () {
// //   setScrollPos(
// //     Math.round(
// //       clones[0].getBoundingClientRect().left +
// //         getScrollPos() -
// //         (window.offsetWidth - clones[0].offsetWidth) / 2
// //     )
// //   );
// // };
