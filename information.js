"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", informationstart);

function informationstart() {
  const mediaMobile = window.matchMedia("(max-width: 767px)");
  const mediaIpad = window.matchMedia("(max-width: 1199px)");
  const mediaDesktop = window.matchMedia("(min-width: 1200px)");

  console.log("information start");
  let allInformationLinks = document.querySelectorAll(".information");
  console.log("allInformationLinks", allInformationLinks);
  let allInfoTexts = document.querySelectorAll(".info_text");

  //   if (mediaIpad.matches) {
  //     allInfoTexts.forEach((infotext) => {
  //       infotext.classList.remove("hide");
  //     });
  //   }
  console.log("allInfoTexts", allInfoTexts);
  let allCloseInfoButtons = document.querySelectorAll(".close_info");
  allCloseInfoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      allInfoTexts.forEach((infotext) => {
        infotext.classList.add("hide");
        infotext.classList.add("disappear");
        infotext.classList.remove("appear");
      });
    });
  });

  for (let i = 0; i < allInformationLinks.length; i++) {
    allInformationLinks[i].addEventListener("click", function () {
      if (mediaIpad.matches) {
        // console.log("ipad matches");
        document.querySelector(".right-column").style.backgroundImage = "url('static/ss3.jpg')";
      }
      if (mediaDesktop.matches) {
        // console.log("ipad matches");
        document.querySelector(".right-column").style.backgroundImage = "url('static/ss3.jpg')";
      }
      console.log("link click");
      if (this === allInformationLinks[i]) {
        allInfoTexts.forEach((infotext) => {
          infotext.classList.add("hide");
          infotext.classList.add("disappear");
          infotext.classList.remove("appear");
        });
        allInformationLinks.forEach((link) => {
          link.classList.remove("active_link");
        });
        allInformationLinks[i].classList.add("active_link");
        allInfoTexts[i].classList.remove("hide");
        allInfoTexts[i].classList.remove("disappear");
        allInfoTexts[i].classList.add("appear");
      }
    });
  }
}
