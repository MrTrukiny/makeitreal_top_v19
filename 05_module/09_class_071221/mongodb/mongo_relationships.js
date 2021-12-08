db.products.insert({
  _id: 3,
  name: 'Rubber',
  price: 1.3,
  stock: 43,
  reviews: [
    {
      authorName: 'Sally',
      rating: 5,
      review: 'Best rubber ever!',
    },
    {
      authorName: 'John',
      rating: 5,
      review: 'Awesome rubber!',
    },
  ],
});

DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{ acknowledged: true, insertedIds: { '0': 3 } }
