"use strict";
import "./styles.scss";
document.addEventListener("DOMContentLoaded", displayFooter);

function displayFooter() {
  console.log("footer");
  let footer = document.querySelector(".footer");
  footer.innerHTML += `
<div class="footer_container">
<div class="footer_newsletter">
  <p class="footer_h1">COME JOIN US, SUBSCRIBE HERE</p>
  <p>Be the first to know about new arrivals, promotional offers, new places to find us and useful tips and tricks.</p>
  <div class="subscribe_container">
    <div class="subscribe_sec">
      <form>
        <input type="text" id="femail" name="femail" placeholder="example@example.com" />
      </form>
    </div>
    <div class="subscribe_sec signup">
      <button>Sign up!</button>
    </div>
  </div>
</div>
<div class="footer_desktop_sec">
  <div class="footer_sec">
    <div class="footer_menu ho">
      <p class="footer_h1">HEAD OFFICE</p>
      <p>
        Klareboderne 10, 1.<br />
        1115 Copenhagen K,<br />
        Denmark <br /><br />Phone:+45 2051 8923 <br />VAT: DK40912320
      </p>
    </div>
    <div class="footer_menu sw">
      <p class="footer_h1">SILFEN WORLD</p>
      <a href="ourstory.html">Our story</a><br />
      <a href="sustainability.html">Sustainability</a><br />
      <a href="lookbook.html">Lookbook</a><br />
      <a href="community.html">Community</a><br />
      <a href="careguide.html">Careguide</a>
    </div>
    <div class="footer_menu in">
      <p class="footer_h1">INFORMATION</p>
      <a href="information.html">Contact</a><br />
      <a href="information.html">Shipping</a><br />
      <a href="information.html">Return</a><br />
      <a href="information.html">Careers</a><br />
      <a href="information.html">Terms and conditions</a>
  <a href="information.html">Privacy and cookie policy</a>
      <a href="information.html">Find Store</a><br />
      <a href="information.html">B2B Wholesale</a>
    </div>
    <div class="footer_menu">
      <p class="footer_h1">CONNECT</p>
      <div class="some_icons">
        <div class="some_icons_sec">
          <a target="_blank" href="https://www.facebook.com/Silfenstudio">FB</a>
          <a target="_blank" href="https://www.instagram.com/silfenstudio/?hl=en">IG</a>
          <a target="_blank" href="https://www.linkedin.com/company/silfenstudio/">LI</a>
          <a target="_blank" href="#">YT</a>
          <a target="_blank" href="https://www.pinterest.dk/SilfenStudio/_created/">PI</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="copyright">
<div class="footer_logo">
  <img src="static/ui-elements/minilogo.png" alt="silfen minilogo" />
</div>
<div class="footer_copyright">
  <p>© 2021 Silfen Studio. All rights reserved</p>
  <a href="information.html">Terms and conditions</a>
  <a href="information.html">Privacy and cookie policy</a>
</div>
</div>
</footer>
            `;
}
