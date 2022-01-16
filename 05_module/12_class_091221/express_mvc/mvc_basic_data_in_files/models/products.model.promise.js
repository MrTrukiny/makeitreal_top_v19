import { readFile, writeFile } from 'fs';

const { pathname: productsPath } = new URL(
  '../data/products.json',
  import.meta.url
);

const getProductsFromFile = new Promise((resolve) => {
  readFile(productsPath, (err, fileContent) => {
    if (err) {
      resolve([]);
    } else {
      resolve(JSON.parse(fileContent));
    }
  });
});

export class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile.then((products) => {
      products.push(this);
      writeFile(productsPath, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll() {
    return getProductsFromFile.then((products) => products);
  }
}
