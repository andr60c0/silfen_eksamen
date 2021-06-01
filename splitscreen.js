"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", splitScroll);
function splitScroll() {
  console.log("splitScroll");
  document.onscroll = function () {
    console.log("sectionDetector");
    let allSections = [];
    let currentSection;
    let scrollTop;
    let heightBefore;

    scrollTop = document.documentElement.scrollTop;

    //Henter de forskellige tekst sektioner fra html'en og putter dem ind i et array.
    allSections = document.querySelectorAll(".sustainability_col");
    console.log("allSections", allSections);

    for (let i = 0; i < allSections.length; i++) {
      currentSection = allSections[i];

      //Her siger vi hvornår vi kommer til næste sektion  - Skifter billede når man har scrollet ned 2/3 del af sektionen
      heightBefore = 0;
      if (i > 0) {
        heightBefore = allSections[i - 1].offsetHeight / 3;
      }
      if (scrollTop > 260 && scrollTop < 6500) {
        document.querySelector(".sustainability_picture_container").style.position = "fixed";
        document.querySelector(".sustainability_picture_container").style.top = 0;
        document.querySelector(".sustainability_picture_container").style.right = 0;
      } else {
        document.querySelector(".sustainability_picture_container").style.position = "relative";
      }

      if (scrollTop > currentSection.offsetTop - heightBefore) {
        let text1 = document.querySelector(".text1");
        let text2 = document.querySelector(".text2");
        let text3 = document.querySelector(".text3");
        let text4 = document.querySelector(".text4");
        let text5 = document.querySelector(".text5");
        let text6 = document.querySelector(".text6");
        let text7 = document.querySelector(".text7");
        if (currentSection === text1) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sustainability_1.jpg");
        } else if (currentSection === text2) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sustainability_2.jpg");
        } else if (currentSection === text3) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sustainability_3.jpg");
        } else if (currentSection === text4) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sustainability_4.jpg");
        } else if (currentSection === text5) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sustainability_5.jpg");
        } else if (currentSection === text6) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sustainability_6.jpg");
        } else if (currentSection === text7) {
          document.querySelector(".sus_pic").setAttribute("src", "static/sustainability/sustainability_7.jpg");
        }
      }
    }
  };
}
