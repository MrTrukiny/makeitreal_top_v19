const MongoClient = require('mongodb').MongoClient;

// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const localUri = 'mongodb://localhost:27017';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(localUri);

  try {
    await client.connect();
    const db = client.db('mongo_products');
    const result = await db.collection('products').insertOne(newProduct);
    console.log(result);
    return res.json(newProduct);
  } catch (error) {
    return res.json({ message: 'Could not store data.' });
  } finally {
    client.close();
  }
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(localUri);

  try {
    await client.connect();
    const db = client.db('mongo_products');
    const products = await db.collection('products').find().toArray();
    return res.json(products);
  } catch (error) {
    return res.json({ message: 'Could not retrieve products.' });
  } finally {
    client.close();
  }
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
