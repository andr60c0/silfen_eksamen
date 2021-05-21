"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", startSlideshow);

function startSlideshow() {
  console.log("startSlideshow");
  let allSliders = document.querySelectorAll(".slider");
  console.log("allSliders", allSliders);
  for (let i = 0; i < allSliders.length; i++) {
    console.log("BABLALBALBALB");
  }
}
