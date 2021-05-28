"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", menuStart);

function menuStart() {
  console.log("start menu.js");

  document.onscroll = function () {
    let menuScrollTop = document.documentElement.scrollTop;

    //Changing menu, when you have scrolled over 600px, and changing it back when your are at under 600px

    if (menuScrollTop < 8) {
      document.querySelector("#nav").style.position = "relative";
    } else {
      document.querySelector("#nav").style.position = "fixed";
      document.querySelector("#nav").style.top = "0";
      document.querySelector("#nav").style.left = "0";
    }
  };
}
