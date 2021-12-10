import fs from 'fs';

const { pathname: productsPath } = new URL(
  '../data/products.json',
  import.meta.url
);

const getProductsFromFile = (callback) => {
  fs.readFile(productsPath, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

export class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(productsPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
}
