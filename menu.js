"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", menuStart);

function menuStart() {
  console.log("start menu.js");

  document.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop;
    console.log("scrollTop", scrollTop);
    if (scrollTop > 50) {
      document.querySelector("#nav").style.position = "fixed";
      document.querySelector("#nav").style.top = "0";
    } else {
      document.querySelector("#nav").style.position = "relative";

      // document.querySelector("#nav").style.left = "0";
    }
    const mediaMobile = window.matchMedia("(max-width: 767px)");
    const mediaIpad = window.matchMedia("(max-width: 1199px)");
    const mediaDesktop = window.matchMedia("(min-width: 1200px)");

    // if (scrollTop < 12) {
    //   if (mediaMobile.matches) {
    //     console.log("mediaMobile");
    //     document.querySelector("#nav").style.top = "13vw";
    //   } else if (mediaIpad.matches) {
    //     console.log("mediaIpad");
    //     document.querySelector("#nav").style.top = "7vw";
    //   } else {
    //     console.log("desktopMedia");
    //     document.querySelector("#nav").style.top = "4vw";
    //   }
    // } else {
    //   document.querySelector("#nav").style.position = "fixed";
    //   document.querySelector("#nav").style.top = "0";
    //   document.querySelector("#nav").style.left = "0";
    // }

    let allSusSections = [];
    let allOSSections = [];
    let allCGSections = [];
    let currentSucSection;
    let currentOSSection;
    let currentCGSection;
    let heightBefore;
    //Henter de forskellige tekst sektioner fra html'en og putter dem ind i et array.
    allSusSections = document.querySelectorAll(".sustainability_col");
    allOSSections = document.querySelectorAll(".ourstory_col");
    allCGSections = document.querySelectorAll(".careguide_col");

    // console.log("allSections", allSections);

    for (let i = 0; i < allSusSections.length; i++) {
      currentSucSection = allSusSections[i];

      //Her siger vi hvornår vi kommer til næste sektion  - Skifter billede når man har scrollet ned 2/3 del af sektionen
      heightBefore = 0;
      if (i > 0) {
        heightBefore = allSusSections[i - 1].offsetHeight / 3;
      }

      if (mediaIpad.matches) {
        if (scrollTop >= 0 && scrollTop < 6400) {
          document.querySelector(".split").style.position = "fixed";
          document.querySelector(".split").style.top = "0";
          document.querySelector(".split").style.right = "0";
          document.querySelector(".split").style.bottom = "unset";
        } else {
          document.querySelector(".split").style.position = "absolute";
          document.querySelector(".split").style.bottom = "0";
          document.querySelector(".split").style.top = "unset";
          document.querySelector(".split").style.right = "0";
        }
      } else if (mediaDesktop.matches) {
        if (scrollTop >= 0 && scrollTop < 4790) {
          document.querySelector(".split").style.position = "fixed";
          document.querySelector(".split").style.top = "0";
          document.querySelector(".split").style.right = "0";
          document.querySelector(".split").style.bottom = "unset";
        } else {
          document.querySelector(".split").style.position = "absolute";
          document.querySelector(".split").style.bottom = "0";
          document.querySelector(".split").style.top = "unset";
          document.querySelector(".split").style.right = "0";
        }
      }

      if (scrollTop > currentSucSection.offsetTop - heightBefore) {
        if (currentSucSection === allSusSections[0]) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sus1.jpg");
        } else if (currentSucSection === allSusSections[1]) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sus2.jpg");
        } else if (currentSucSection === allSusSections[2]) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sus3.jpg");
        } else if (currentSucSection === allSusSections[3]) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sus4.jpg");
        } else if (currentSucSection === allSusSections[4]) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sus5.jpg");
        } else if (currentSucSection === allSusSections[5]) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sus6.jpg");
        } else if (currentSucSection === allSusSections[6]) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sus7.jpg");
        }
      }
    }

    for (let i = 0; i < allOSSections.length; i++) {
      currentOSSection = allOSSections[i];

      //Her siger vi hvornår vi kommer til næste sektion  - Skifter billede når man har scrollet ned 2/3 del af sektionen
      heightBefore = 0;
      if (i > 0) {
        heightBefore = allOSSections[i - 1].offsetHeight / 3;
      }

      if (mediaIpad.matches) {
        console.log("ourstory ipadmedia matches");
        if (scrollTop >= 0 && scrollTop < 3300) {
          document.querySelector(".split").style.position = "fixed";
          document.querySelector(".split").style.top = "0";
          document.querySelector(".split").style.right = "0";
          document.querySelector(".split").style.bottom = "unset";
        } else {
          document.querySelector(".split").style.position = "absolute";
          document.querySelector(".split").style.bottom = "0";
          document.querySelector(".split").style.top = "unset";
          document.querySelector(".split").style.right = "0";
        }
      } else if (mediaDesktop.matches) {
        console.log("ourstory ipaddesktop matches");
        if (scrollTop >= 0 && scrollTop < 2050) {
          document.querySelector(".split").style.position = "fixed";
          document.querySelector(".split").style.top = "0";
          document.querySelector(".split").style.right = "0";
          document.querySelector(".split").style.bottom = "unset";
        } else {
          document.querySelector(".split").style.position = "absolute";
          document.querySelector(".split").style.bottom = "0";
          document.querySelector(".split").style.top = "unset";
          document.querySelector(".split").style.right = "0";
        }
      }

      if (scrollTop > currentOSSection.offsetTop - heightBefore) {
        if (currentOSSection === allOSSections[0]) {
          document.querySelector(".os_pic").setAttribute("src", "static/ourstory/story1.jpg");
        } else if (currentOSSection === allOSSections[1]) {
          document.querySelector(".os_pic").setAttribute("src", "static/ourstory/story2.jpg");
        } else if (currentOSSection === allOSSections[2]) {
          document.querySelector(".os_pic").setAttribute("src", "static/ourstory/story3.jpg");
        } else if (currentOSSection === allOSSections[3]) {
          document.querySelector(".os_pic").setAttribute("src", "static/ourstory/story4.jpg");
        }
      }
    }

    for (let i = 0; i < allCGSections.length; i++) {
      currentCGSection = allCGSections[i];

      //Her siger vi hvornår vi kommer til næste sektion  - Skifter billede når man har scrollet ned 2/3 del af sektionen
      heightBefore = 0;
      if (i > 0) {
        heightBefore = allCGSections[i - 1].offsetHeight / 3;
      }

      if (mediaIpad.matches) {
        console.log("ourstory ipadmedia matches");
        if (scrollTop >= 0 && scrollTop < 4300) {
          document.querySelector(".split").style.position = "fixed";
          document.querySelector(".split").style.top = "0";
          document.querySelector(".split").style.right = "0";
          document.querySelector(".split").style.bottom = "unset";
        } else {
          document.querySelector(".split").style.position = "absolute";
          document.querySelector(".split").style.bottom = "0";
          document.querySelector(".split").style.top = "unset";
          document.querySelector(".split").style.right = "0";
        }
      } else if (mediaDesktop.matches) {
        console.log("ourstory ipaddesktop matches");
        if (scrollTop >= 0 && scrollTop < 2050) {
          document.querySelector(".split").style.position = "fixed";
          document.querySelector(".split").style.top = "0";
          document.querySelector(".split").style.right = "0";
          document.querySelector(".split").style.bottom = "unset";
        } else {
          document.querySelector(".split").style.position = "absolute";
          document.querySelector(".split").style.bottom = "0";
          document.querySelector(".split").style.top = "unset";
          document.querySelector(".split").style.right = "0";
        }
      }

      if (scrollTop > currentCGSection.offsetTop - heightBefore) {
        if (currentCGSection === allCGSections[0]) {
          document.querySelector(".cg_pic").setAttribute("src", "static/careguide/care1.jpg");
        } else if (currentCGSection === allCGSections[1]) {
          document.querySelector(".cg_pic").setAttribute("src", "static/careguide/care2.jpg");
        } else if (currentCGSection === allCGSections[2]) {
          document.querySelector(".cg_pic").setAttribute("src", "static/careguide/care3.jpg");
        } else if (currentCGSection === allCGSections[3]) {
          document.querySelector(".cg_pic").setAttribute("src", "static/careguide/care4.jpg");
        } else if (currentCGSection === allCGSections[4]) {
          document.querySelector(".cg_pic").setAttribute("src", "static/careguide/care5.jpg");
        }
      }
    }
  };
}
