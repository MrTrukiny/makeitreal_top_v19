import { readFile, writeFile } from 'fs/promises';

const { pathname: productsPath } = new URL(
  '../data/products.json',
  import.meta.url
);

const getProductsFromFile = async () => {
  try {
    const products = await readFile(path);
    return JSON.parse(products.toString());
  } catch (error) {
    console.log('File not found', error);
    return [];
  }
};

export class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save() {
    const products = await getProductsFromFile();
    if (this.id) {
      const existingProductIndex = products.findIndex(
        (product) => product.id === this.id
      );
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex] = this;
      await writeFile(productsPath, JSON.stringify(updatedProducts));
    } else {
      this.id = Math.random().toString();
      products.push(this);
      await writeFile(productsPath, JSON.stringify(products));
    }
  }

  static async fetchAll() {
    const products = await getProductsFromFile();
    return products;
  }

  static async findById(id) {
    const products = await getProductsFromFile();
    const product = products.find((product) => product.id === id);
    return product;
  }
}
