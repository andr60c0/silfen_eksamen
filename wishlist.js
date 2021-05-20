"use strict";
import "./styles.scss";

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("wishlist start");
  updateWishlist();
}
//Add to wishlist
function addToWishlist(wishlistBag) {
  console.log("addToWishlist");
  const wishlistItems = JSON.parse(localStorage.getItem("productsInWishlist")) ?? [];

  console.log("my products are:", wishlistItems);

  if (!wishlistItems.find((bag) => bag.id === wishlistBag.id)) {
    // Hvis der er et array
    //if (wishlistItems !== null) {
    wishlistItems.push(wishlistBag);
  }

  let wishlistItemCounter = localStorage.getItem("numberOfWishlistItems");

  //Converting from string to number
  wishlistItemCounter = parseInt(wishlistItemCounter);
  if (wishlistItemCounter) {
    localStorage.setItem("numberOfWishlistItems", wishlistItems.length);
    document.querySelector(".wishlist_icon span").textContent = wishlistItems.length;
  } else {
    localStorage.setItem("numberOfWishlistItems", 1);
    document.querySelector(".wishlist_icon span").textContent = 1;
  }

  localStorage.setItem("productsInWishlist", JSON.stringify(wishlistItems));
  console.log("wishlistItems", wishlistItems);
}

function displayWishlist(wishlistBag) {
  console.log("displayWishlist");

  let wishlistItems = localStorage.getItem("productsInWishlist");
  wishlistItems = JSON.parse(wishlistItems);
  let wishlistProductContainer = document.querySelector(".wishlist_products");
  // console.log(wishlistItems);
  if (wishlistItems && wishlistProductContainer) {
    // console.log("running");
    wishlistProductContainer.innerHTML = "";
    Object.values(wishlistItems).map((item) => {
      wishlistProductContainer.innerHTML += `
              <div class="wishlist_product">
              <div class="wishlist_image_container">
              <div class="removeFromWishlist_button">
              <img src="static/ui-elements/delete.svg">
              </div>
              <img src="${item.image}">
              </div>
              <p>${item.name}</p>
              <p>${item.color}</p>
              <p>${item.price} DKK</p>
              <p>${item.inStock}</p>
              <button class="add_to_cart_button">Add To Cart</button>
              
             </div>
  
              `;
    });
  }
  let deleteFromWishlistButtons = document.querySelectorAll(".removeFromWishlist_button");
  deleteFromWishlistButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("wishlist button click");
      console.log("gdgfdsg", wishlistItems);
      for (let i = 0; i < wishlistItems.length; i++) {
        wishlistItems[i] = button[i];
        wishlistItems.splice(i, 1);
        console.log("wishlistItems after splice", wishlistItems);
      }

      localStorage.setItem("productsInWishlist", JSON.stringify(wishlistItems));

      let wishlistItemCounter = localStorage.getItem("numberOfWishlistItems");

      //Converting from string to number
      wishlistItemCounter = parseInt(wishlistItemCounter);

      if (wishlistItemCounter) {
        console.log("if");
        localStorage.setItem("numberOfWishlistItems", wishlistItems.length);
        document.querySelector(".wishlist_icon span").textContent = wishlistItems.length;
      } else {
        console.log("else");
        localStorage.setItem("numberOfWishlistItems", 1);
        document.querySelector(".wishlist_icon span").textContent = "";
      }
      displayWishlist();
    });
  });
}

function removeFromWishlist(wishlistBag) {
  // console.log("removeWishListItems");
  let wishlistItems = JSON.parse(localStorage.getItem("productsInWishlist"));

  const index = wishlistItems.findIndex((bag) => bag.id === wishlistBag.id);

  if (index !== -1) {
    wishlistItems.splice(index, 1);
  }
  localStorage.setItem("productsInWishlist", JSON.stringify(wishlistItems));
  console.log("wishlist after", wishlistItems);

  let wishlistItemCounter = localStorage.getItem("numberOfWishlistItems");

  //Converting from string to number
  wishlistItemCounter = parseInt(wishlistItemCounter);

  if (wishlistItemCounter) {
    console.log("if");
    localStorage.setItem("numberOfWishlistItems", wishlistItems.length);
    document.querySelector(".wishlist_icon span").textContent = wishlistItems.length;
  } else {
    console.log("else");
    localStorage.setItem("numberOfWishlistItems", 1);
    document.querySelector(".wishlist_icon span").textContent = "";
  }
}

function updateWishlist() {
  console.log("updateWishlist");
  let wishlistItemCounter = localStorage.getItem("numberOfWishlistItems");
  if (wishlistItemCounter) {
    document.querySelector(".wishlist_icon span").textContent = wishlistItemCounter;
  }

  const wishlistItems = JSON.parse(localStorage.getItem("productsInWishlist"));
  console.log("wishlistItem in update", wishlistItems);
  let el = document.querySelectorAll(".product_article");
  el.forEach((product) => {
    product.dataset.productId = "2";
    console.log("product", product);
  });
  console.log("el", el);
  // if (wishlistItems !== null) {
  //   for (let i = 0; i < wishlistItems.length; i++) {
  //     let productArticles = document.querySelectorAll(".product_article");
  //     console.log("productArticles", productArticles);
  //     productArticles[i].dataset.productId = wishlistItems[i].id;
  //     console.log("wishlistItems[i].id", wishlistItems[i].id);
  //   }
  //   productArticles.forEach((product) => {
  //     wishlistItems.forEach((item) => {
  //       if (product.id === item.id) {
  //         console.log("match");
  //         document.querySelector(".product_heart").src = "static/ui-elements/blackheart.svg";
  //       }
  //     });
  //   });
  // }
}
