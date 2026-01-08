/****************************************************
 MongoDB Operations for FlexiMart
 Database: fleximart_nosql
 Collection: products
****************************************************/

// Switch to the database
use fleximart_nosql;

/****************************************************
 Operation 1: Load Data (1 mark)
 Import the provided JSON file into collection 'products'
****************************************************/

/*
This command is used to import the provided dataset.
It is written for demonstration purposes and does not
need to be executed unless required.

mongoimport --db fleximart_nosql --collection products --file products_catalog.json --jsonArray



 Operation 2: Basic Query (2 marks)
 Find all products in "Electronics" category with price < 50000
 Return only: name, price, stock


db.products.find(
  {
    category: "Electronics",
    price: { $lt: 50000 }
  },
  {
    _id: 0,
    name: 1,
    price: 1,
    stock: 1
  }
);

 Operation 3: Review Analysis (2 marks)
 Find all products that have average rating >= 4.0
 Uses aggregation to calculate average from reviews array



db.products.aggregate([
  { $unwind: "$reviews" },
  {
    $group: {
      _id: "$name",
      avg_rating: { $avg: "$reviews.rating" }
    }
  },
  {
    $match: {
      avg_rating: { $gte: 4.0 }
    }
  }
]);


 Operation 4: Update Operation (2 marks)
 Add a new review to product "ELEC001"



db.products.updateOne(
  { product_id: "ELEC001" },
  {
    $push: {
      reviews: {
        user: "U999",
        rating: 4,
        comment: "Good value",
        date: new Date()
      }
    }
  }
);


 Operation 5: Complex Aggregation (3 marks)
 Calculate average price by category
 Return: category, avg_price, product_count
 Sort by avg_price descending



db.products.aggregate([
  {
    $group: {
      _id: "$category",
      avg_price: { $avg: "$price" },
      product_count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      category: "$_id",
      avg_price: 1,
      product_count: 1
    }
  },
  {
    $sort: { avg_price: -1 }
  }
]);
