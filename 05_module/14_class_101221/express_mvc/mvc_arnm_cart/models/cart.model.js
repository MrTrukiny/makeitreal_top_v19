import { readFile, writeFile } from 'fs/promises';

const { pathname: cartPath } = new URL('../data/cart.json', import.meta.url);

const getCartFromFile = async () => {
  let cart = { products: [], totalPrice: 0 };
  try {
    // Fetch the previous cart
    cart = await readFile(cartPath);
    cart = JSON.parse(cart.toString());
    return cart;
  } catch (error) {
    console.log(error);
    return cart;
  }
};

export class Cart {
  static async addProduct(id, productPrice) {
    try {
      const cart = await getCartFromFile();

      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (product) => product.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product / increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        // updatedProduct.qty = updatedProduct.qty + 1;
        updatedProduct.qty += 1
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      await writeFile(cartPath, JSON.stringify(cart));
    } catch (error) {
      console.log(error);
    }
  }
}
