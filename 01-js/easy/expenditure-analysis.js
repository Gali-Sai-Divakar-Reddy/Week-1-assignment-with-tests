/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var result = []
  // var food = {
  //   category: 'Food',
  //   totalSpent: 0
  // }
  // var clothing = {
  //   category: 'Clothing',
  //   totalSpent: 0
  // }
  // var electronics = {
  //   category: 'Electronics',
  //   totalSpent: 0
  // }
  var foodExp = 0
  var clothingExp = 0
  var electronicsExp = 0

  transactions.forEach((transaction) => {
    if (transaction.category == 'Food'){
      foodExp += transaction.price
    }
    else if (transaction.category == 'Clothing'){
      clothingExp += transaction.price
    }
    else if (transaction.category == 'Electronics'){
      electronicsExp += transaction.price
    } 
  });

  if (foodExp > 0){
    result.push({category: 'Food', totalSpent: foodExp})
  }
  if (clothingExp > 0){
    result.push({category: 'Clothing', totalSpent: clothingExp})
  }
  if (electronicsExp > 0){
    result.push({category: 'Electronics', totalSpent: electronicsExp})
  }
  return result
}

module.exports = calculateTotalSpentByCategory;
