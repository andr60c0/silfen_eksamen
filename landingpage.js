"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", start);

// function startSlideshow() {
//   console.log("startSlideshow");
//   let allSliders = document.querySelectorAll(".slider");
//   console.log("allSliders", allSliders);
//   for (let i = 0; i < allSliders.length; i++) {
//     console.log("BABLALBALBALB");
//   }
// }
function start() {
  document.onscroll = function () {
    // console.log("sectionDet");
    let scrollTop = document.documentElement.scrollTop;
    const mediaIpad = window.matchMedia("(min-width: 768px)");
    const mediaDesktop = window.matchMedia("(min-width: 1200px)");
    const mediaBigDesktop = window.matchMedia("(min-width: 1920px)");

    console.log("scrollTop", scrollTop);
    if (scrollTop > 50) {
      document.querySelector("#nav").style.position = "fixed";
      document.querySelector("#nav").style.top = "0";
      document.querySelector("body").style.marginTop = "65px";
    } else {
      document.querySelector("#nav").style.position = "relative";
      document.querySelector("#nav").style.top = "0px";
      document.querySelector("body").style.marginTop = "0px";

      // document.querySelector("#nav").style.left = "0";
    }
    if (scrollTop > 900 && mediaDesktop.matches) {
      document.querySelector("#discover").style.position = "absolute";
      document.querySelector("#discover").style.top = "3vw";
      document.querySelector("#discover").style.left = "0vw";
      var s = document.querySelector("#discover");
      var yPos = 248 - window.pageYOffset / 4;
      s.style.top = 0.5 + yPos + "px";
    } else if (scrollTop > 1500 && mediaIpad.matches) {
      document.querySelector("#discover").style.position = "absolute";
      document.querySelector("#discover").style.top = "3vw";
      document.querySelector("#discover").style.left = "0vw";
      var s = document.querySelector("#discover");
      var yPos = 143 - window.pageYOffset / 10;
      s.style.top = 90 + yPos + "px";
    } else if (scrollTop > 2000 && mediaBigDesktop.matches) {
      document.querySelector("#discover").style.position = "absolute";
      document.querySelector("#discover").style.top = "3vw";
      document.querySelector("#discover").style.left = "0vw";
      var s = document.querySelector("#discover");
      var yPos = 1743 - window.pageYOffset / 15;
      s.style.top = 150 + yPos + "px";
    } else {
      document.querySelector("#discover").style.position = "relative";
      document.querySelector("#discover").style.top = "0vw";
    }
  };
}

// function parallax() {
//   console.log("parrallax");
//   var s = document.querySelector("#discover");
//   var yPos = 0 - window.pageYOffset / 4;
//   s.style.top = 10 + yPos + "px";

//   // console.log(yPos);
// }

// document.addEventListener("scroll", function () {
//   parallax();
// });
