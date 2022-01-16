import { BaseModel } from './base.model.js';
const baseInstance = new BaseModel();

const { pathname: productsPath } = new URL(
  '../data/products.json',
  import.meta.url
);

export class Product extends BaseModel {
  constructor(id, title, imageUrl, description, price) {
    super();
    this.id = id || Math.random().toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async saveProduct() {
    const products = await this.fetchAll(productsPath, 'products');
    products.push(this);
    this.save(productsPath, products);
  }

  async updateProduct() {
    const products = await this.fetchAll(productsPath, 'products');
    const existingProductIndex = this.findElementIndex(products, this.id);
    const updatedProducts = [...products];
    updatedProducts[existingProductIndex] = this;
    this.save(productsPath, updatedProducts);
  }

  static async findById(productId) {
    return baseInstance.findById(productsPath, 'products', productId);
  }

  static async fetchAll() {
    return baseInstance.fetchAll(productsPath, 'products');
  }

  static async deleteById(productId) {
    return baseInstance.deleteById(productsPath, 'products', productId);
  }
}
