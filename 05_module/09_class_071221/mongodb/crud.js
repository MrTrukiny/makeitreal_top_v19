// Create (insert)
db.products.insertOne({
	_id: 1, name: "Pen", price: 1.20 
})

// Read (query)
shopDB> db.products.find()
[ { _id: 1, name: 'Pen', price: 1.2, stock: 32 } ]

// Update (update)
shopDB> db.products.updateOne({_id: 1}, {$set: {stock: 32}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8 }
]

shopDB> db.products.updateOne({ _id: 2}, {$set: {stock: 15}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 15 }
]

// Delete (delete)
shopDB> db.products.deleteOne({_id: 2})
{ acknowledged: true, deletedCount: 1 }

shopDB> db.products.find()
[ { _id: 1, name: 'Pen', price: 1.2, stock: 32 } ]