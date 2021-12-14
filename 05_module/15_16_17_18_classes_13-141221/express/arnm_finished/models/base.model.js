import { readFile, writeFile } from 'fs/promises';

export class BaseModel {
  save(modelPath, model) {
    writeFile(modelPath, JSON.stringify(model))
      .then((_res) => console.log('Data saved.'))
      .catch((error) => console.log('Problem saving data.', error));
  }

  async fetchAll(modelPath, modelType) {
    return this.#getDataFromFile(modelPath, modelType);
  }

  async findById(modelPath, modelType, id) {
    const model = await this.fetchAll(modelPath, modelType);
    const element = model.find((element) => element.id === id);
    return element;
  }

  async deleteById(modelPath, modelType, id) {
    let model = await this.fetchAll(modelPath, modelType);
    model = model.filter((element) => element.id !== id);
    this.save(modelPath, model);
  }

  findElementIndex(model, id) {
    return model.findIndex((e) => e.id === id);
  }

  async #getDataFromFile(modelPath, modelType) {
    const modelsInitialState = {
      products: [],
      cart: { products: [], totalPrice: 0 },
    };

    try {
      const model = await readFile(modelPath);
      return JSON.parse(model.toString());
    } catch (error) {
      console.log('File not found', error);
      return modelsInitialState[modelType];
    }
  }
}
