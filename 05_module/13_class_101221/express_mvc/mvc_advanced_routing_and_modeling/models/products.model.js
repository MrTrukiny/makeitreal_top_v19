import { readFile, writeFile } from 'fs/promises';

const { pathname: productsPath } = new URL(
  '../data/products.json',
  import.meta.url
);

const getProductsFromFile = () => {
  return readFile(productsPath)
    .then((products) => JSON.parse(products.toString()))
    .catch((err) => {
      console.log(err);
      return [];
    });
  // const products = await readFile(productsPath);
  // return products;
};

export class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile().then((products) => {
      products.push(this);
      writeFile(productsPath, JSON.stringify(products)).catch((error) =>
        console.log(error)
      );
    });
  }

  static fetchAll() {
    return getProductsFromFile().then((products) => products);
  }
}
