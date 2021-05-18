const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cart.html"),
        webshop: resolve(__dirname, "webshop.html"),
        product_singelView: resolve(__dirname, "product_singelView.html"),
      },
    },
  },
};
