/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoriesTotal = {}
  for (i = 0; i < transactions.length; i++) {
    let category = transactions[i].category
    let price = transactions[i].price

    if (categoriesTotal[category]) {
      categoriesTotal[category] += price
    } else {
      categoriesTotal[category] = price
    }
  }

  // Step 2: Convert the object to the required array format
  let result = []
  for (let category in categoriesTotal) {
    result.push({
      category: category,
      totalSpent: categoriesTotal[category]
    })
  }
  return result;
}


let spends1 = [{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},
{
  id: 2,
  timestamp: 1656076800090,
  price: 40,
  category: 'Money Transfer',
  itemName: 'UPI',
},
{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}
]

console.log(calculateTotalSpentByCategory(spends1))
//module.exports = calculateTotalSpentByCategory;
