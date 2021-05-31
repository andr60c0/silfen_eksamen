"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", menuStart);

function menuStart() {
  console.log("start menu.js");

  document.onscroll = function () {
    let menuScrollTop = document.documentElement.scrollTop;

    //Changing menu, when you have scrolled over 600px, and changing it back when your are at under 600px
    const mediaMobile = window.matchMedia("(max-width: 767px)");
    const mediaIpad = window.matchMedia("(max-width: 1199px)");
    if (menuScrollTop < 8) {
      if (mediaMobile.matches) {
        console.log("mediaMobile");
        document.querySelector("#nav").style.top = "13vw";
      } else if (mediaIpad.matches) {
        console.log("mediaIpad");
        document.querySelector("#nav").style.top = "7vw";
      } else {
        console.log("desktopMedia");
        document.querySelector("#nav").style.top = "4vw";
      }
    } else {
      document.querySelector("#nav").style.position = "fixed";
      document.querySelector("#nav").style.top = "0";
      document.querySelector("#nav").style.left = "0";
    }
  };
}
