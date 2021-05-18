// window.addEventListener("DOMContentLoaded", start);
// ("use strict");
// import "regenerator-runtime/runtime";

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");
// console.log("id", id);
// const productSingleViewEndpoint = "https://cecilieslemming.nu/kea/4sem_eksamen_silfen/wordpress/wp-json/wp/v2/product?per_page=100";
// let productSingleViewData = [];
// let productSingleView = document.querySelector("#singleProduct");

// let allProductImages;
// let allProductImagesEndpoint = "https://cecilieslemming.nu/kea/4sem_eksamen_silfen/wordpress/wp-json/wp/v2/product/" + id;
// const allColors = [
//   {
//     color: "black",
//     hex: "#000000",
//   },
//   {
//     color: "lightblue",
//     hex: "#B9D4E5",
//   },
//   {
//     color: "pink",
//     hex: "pink",
//   },
//   {
//     color: "silver",
//     hex: "#C0C0C0",
//   },
// ];
// console.log("allColors", allColors);

// //The prototype for all bags
// const cartItem = {
//   name: "",
//   color: "",
//   price: "",
//   quantity: "",
//   image: "",
//   inCart: 0,
// };

// let findTheColorsArray = [];
// let colorboxes = [];

// function start() {
//   console.log("start");
//   getSingleProductData();
// }

// async function getSingleProductData() {
//   //product single view data
//   const singleProductResponse = await fetch(productSingleViewEndpoint);
//   productSingleViewData = await singleProductResponse.json();
//   console.log("productSingleViewData", productSingleViewData);

//   //All product images
//   const allProductImagesResponse = await fetch(allProductImagesEndpoint);
//   allProductImages = await allProductImagesResponse.json();
//   console.log("allProductImages", allProductImages);

//   showSingleProduct();
// }

// let number = 0;

// function showSingleProduct() {
//   console.log("showSingleProduct");

//   let singleBagColors;
//   const underscore = "_";
//   let bagColor;
//   let productImagesArray = allProductImages.product_images;

//   //Henter data fra WP
//   productSingleViewData.forEach((product) => {
//     if (product.id == id) {
//       console.log("if");
//       productSingleView.querySelector(".product_name").innerHTML = product.product_name;
//       productSingleView.querySelector(".product_price").innerHTML = product.product_price;
//       productSingleView.querySelector(".product_color").innerHTML = product.product_color;

//       productSingleView.querySelector(".product_description").innerHTML = product.product_description;

//       //Eventlisteners på add & subtract knapper. Opdaterer antal.
//       document.querySelector(".add_button").addEventListener("click", () => {
//         console.log("add");
//         number++;
//         console.log(number);
//         productSingleView.querySelector(".number").innerHTML = number;
//       });
//       document.querySelector(".subtract_button").addEventListener("click", () => {
//         console.log("subtract");
//         if (number > 0) {
//           number--;
//           console.log(number);
//           productSingleView.querySelector(".number").innerHTML = number;
//         }
//       });

//       document.querySelector(".add_to_cart_button").addEventListener("click", () => {
//         console.log("addToCartButtonClick");
//         const bag = Object.create(cartItem);
//         bag.name = product.product_name;
//         bag.price = product.product_price;
//         bag.quantity = number;
//         bag.color = document.querySelector(".product_color").innerHTML;
//         bag.inCart = 0;
//         console.log(bag);
//         cartNumbers(bag); //RENAME
//         totalCost(bag);
//       });

//       //Finder hvilke farver tasken findes i
//       singleBagColors = product.products_colors;
//       console.log("singleBagColors", singleBagColors);
//     }
//   });
//   //De billeder som skal vises til at starte med, har fået property default ind i wordpress. Dem viser vi når man kommer ind på single viewet.
//   productImagesArray.forEach((image) => {
//     const clone = document.querySelector("template").cloneNode(true).content;
//     if (image.post_excerpt === "default") {
//       clone.querySelector(".imgs").src = image.guid;
//       document.querySelector(".all_product_images_container").appendChild(clone);
//     }
//   });

//   //------------------------------- FINDE HVILKEN FARVE AF TASKE ALLE PRODUKTBILLEDER HAR ------------------------------- //

//   //Alle billeder hedder navne med samme format: navnPåTaske_farve_nummer. Her looper vi så igennem alle billederne, og splitter navn strengen op, og finder farven. Derefter laver vi en variablen bagColor som indeholder taskens farve. Der efter tilføjer vi property'en color til hver taske og sætter bagColor variablen ind.
//   for (let i = 0; i < productImagesArray.length; i++) {
//     //Index of first underscore
//     let indexOfFirstUnderscore = productImagesArray[i].post_title.indexOf(underscore);
//     //Index of second underscore
//     let indexOfLastUnderscore = productImagesArray[i].post_title.lastIndexOf(underscore);
//     //Få fat i farven på tasken
//     bagColor = productImagesArray[i].post_title.substring(indexOfFirstUnderscore + 1, indexOfLastUnderscore);
//     console.log("bagColor", bagColor);
//     //Tilføj property og ligge taskens farve på.
//     productImagesArray[i].color = bagColor;
//   }

//   console.log("bagColor", bagColor);
//   console.log("productImagesArray", productImagesArray);
//   console.log("productSingelViewData", productSingleViewData);

//   //------------------------------- FIND ALLE DE FORSKELLIGE FARVER TASKEN FINDES I && LA COLORBOXES ------------------------------- //

//   //Ind i WP backenden er der et felt hvor kunden skal skrive alle farver som tasken findes i. Her henter vi den string ind og splitter den op.

//   //Splitting string up
//   let bagColorArray = singleBagColors.split(",");

//   //Ændrer variables to lowercase
//   bagColorArray = bagColorArray.map((e) => e.toLowerCase());

//   //Fjerner mellemrum
//   bagColorArray = bagColorArray.map((e) => e.trim());

//   console.log("bagColorArray", bagColorArray);

//   //Her filtrerer vi igennem allColors array og den enkelte taskes farver, og ligger de farver der matcher ind i findColorsArray. Derefter laver vi farvebokse ud fra hvor mange farver der findes i findColorsArray og loader dem ind i DOM'en.

//   allColors.forEach((color) => {
//     bagColorArray.forEach((bagcolor) => {
//       if (color.color === bagcolor) {
//         findTheColorsArray.push(color);

//         const colorbox = document.createElement("div");
//         colorbox.classList.add("colorbox");
//         const currentDiv = document.getElementsByClassName("currentDiv");
//         document.querySelector(".color_picker").insertBefore(colorbox, null);
//         colorboxes.push(colorbox);
//       }
//     });
//   });

//   console.log("findTheColorsArray", findTheColorsArray);

//   //Her giver vi farveboksene de rigtige farver, og giver dem en property med den farve som de er.
//   for (let i = 0; i < colorboxes.length; i++) {
//     for (let j = 0; j < findTheColorsArray.length; j++) {
//       colorboxes[j].style.backgroundColor = findTheColorsArray[j].hex;
//       colorboxes[j].color = findTheColorsArray[j].color;
//     }
//   }

//   console.log("colorboxes", colorboxes);

//   //Tilføjer eventlisteners til farvebokse
//   //Her siger vi hvilke produktbilleder skal vises, ved klik på de forskellige farvebokse.

//   colorboxes.forEach((colorbox) => {
//     colorbox.addEventListener("click", () => {
//       console.log("colorbox click");
//       document.querySelectorAll(".imgs").forEach((img) => {
//         img.classList.add("hide");
//       });
//       productImagesArray.forEach((image) => {
//         const clone = document.querySelector("template").cloneNode(true).content;
//         if (colorbox.color === image.color) {
//           clone.querySelector(".imgs").src = image.guid;

//           productSingleView.querySelector(".product_color").innerHTML = image.color;
//           document.querySelector(".all_product_images_container").appendChild(clone);
//         }
//       });
//     });
//   });
// }
