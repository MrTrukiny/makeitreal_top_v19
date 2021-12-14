import { BaseModel } from './base.model.js';
const baseInstance = new BaseModel();

const { pathname: cartPath } = new URL('../data/cart.json', import.meta.url);

export class Cart extends BaseModel {
  async saveToCart(productId, productPrice, qty = 1) {
    try {
      const cart = await this.fetchAll(cartPath, 'cart');
      // Analyze the cart => Find existing product
      const { existingProduct, existingProductIndex } = this.#findProductById(
        cart,
        productId
      );
      
      // Increase quantity or add new product
      if (existingProduct) {
        this.#modifyQuantity(
          existingProduct,
          existingProductIndex,
          cart,
          'add'
        );
      } else {
        this.#addNewProduct(cart, productId, qty);
      }

      // Increment cart total price
      this.#modifyPrice(cart, productPrice, qty, 'up');

      this.save(cartPath, cart);
    } catch (error) {
      console.log('There was a problem adding product to cart.', error);
    }
  }

  static async getCart() {
    return baseInstance.fetchAll(cartPath, 'cart');
  }

  async deleteFromCart(productId, productPrice) {
    try {
      const cart = await this.fetchAll(cartPath, 'cart');
      const { existingProduct } = this.#findProductById(cart, productId);

      if (!existingProduct) {
        throw new Error('Product not found.');
      }

      this.#modifyPrice(cart, productPrice, existingProduct.qty);

      // Remove product from cart
      cart.products = cart.products.filter(
        (product) => product.id !== productId
      );
      this.save(cartPath, cart);
    } catch (error) {
      console.log('There was a problem deleting product from cart. ', error);
    }
  }

  #findProductById(cart, productId) {
    const existingProductIndex = this.findElementIndex(
      cart.products,
      productId
    );
    const existingProduct = cart.products[existingProductIndex];

    return { existingProduct, existingProductIndex };
  }

  #modifyQuantity(existingProduct, existingProductIndex, cart, operation) {
    const updatedProduct = { ...existingProduct };
    operation === 'add'
      ? (updatedProduct.qty += 1)
      : (updatedProduct.qty -= 1);

    cart.products[existingProductIndex] = updatedProduct;
  }

  #addNewProduct(cart, productId, qty) {
    const newProduct = { id: productId, qty };
    cart.products = [...cart.products, newProduct];
  }

  #modifyPrice(cart, productPrice, qty, operation) {
    operation === 'up'
      ? (cart.totalPrice += qty * Number(productPrice))
      : (cart.totalPrice -= qty * Number(productPrice));
  }
}
