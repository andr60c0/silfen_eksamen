"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", newsletterStart);

function newsletterStart() {
  console.log("newsletterStart");

  document.querySelector(".newsletter_consent_checkbox").addEventListener("click", () => {
    document.querySelector(".newsletter_consent_checkbox").style.backgroundColor = "#000";
    document.querySelector(".newsletter_button").style.backgroundColor = "#000";
    document.querySelector(".newsletter_button").addEventListener("click", closePopUp);
  });

  document.querySelector(".close_newsletter").addEventListener("click", closePopUp);
}

function closePopUp() {
  document.querySelector(".newsletter").classList.add("fade_out");
  document.querySelector(".newsletter").classList.remove("fade_in");
  document.querySelector(".newsletter").style.pointerEvents = "none";
}
