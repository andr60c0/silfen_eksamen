const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cart.html"),
        webshop: resolve(__dirname, "webshop.html"),
        product_singelView: resolve(__dirname, "product_singelView.html"),
        wishlist: resolve(__dirname, "wishlish.html"),
        sustainability: resolve(__dirname, "sustainability.html"),
        community: resolve(__dirname, "community.html"),
        lookbook: resolve(__dirname, "lookbook.html"),
        ourstory: resolve(__dirname, "ourstory.html"),
        careguide: resolve(__dirname, "careguide.html"),
        checkout: resolve(__dirname, "checkout.html"),
        information: resolve(__dirname, "information.html"),
      },
    },
  },
};
