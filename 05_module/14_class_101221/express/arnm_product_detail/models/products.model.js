import { readFile, writeFile } from 'fs/promises';

const { pathname: productsPath } = new URL(
  '../data/products.json',
  import.meta.url
);

const getProductsFromFile = async () => {
  try {
    const products = await readFile(productsPath);
    return JSON.parse(products.toString());
  } catch (error) {
    console.log('File not found', error);
    return [];
  }
};

export class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save() {
    this.id = Math.random().toString();
    const products = await getProductsFromFile();
    products.push(this);
    await writeFile(productsPath, JSON.stringify(products));
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
