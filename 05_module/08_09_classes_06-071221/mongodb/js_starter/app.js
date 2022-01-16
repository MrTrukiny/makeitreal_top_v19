const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select DB or create a new one
    const database = client.db("sample_mflix");

    // Select a collection or create a new one
    const movies = database.collection("movies");

    // Insert movies
    await insertDocuments(movies);

    // Find One Movie
    const movie = await findOneMovie(movies);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

async function insertDocuments(collection) {
  const result = collection.insertMany({
    title: "House of Gucci",
    year: 2021,
    director: "Ridley Scott",
  });

  console.log(result);
}

async function findOneMovie(collection) {
  // Query for a movie that has the title 'Back to the Future'
  const query = { title: "Back to the Future" };
  const movie = await collection.findOne(query);
  return movie;
}
