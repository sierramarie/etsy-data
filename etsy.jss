// Average Price 
// var price = [12.00, 20.00, 50.00, 25.00, 41.95, 5.75, 32.99, 15.00, 28.95, 24.95, 18.00, 2.99, 38.00, 20.00, 28.00, 13.59, 17.00, 48.00, 15.00, 14.00, 80.00, 22.00, 6.99, 6.99, 3.50]; 


var total = 0
items.forEach(function (item) {
    total += item.price 
});
// console.log(total / items.length);

var round = Math.round((total / items.length)* 100) / 100; 

console.log('The average price of items is ' + '$' + round)






// // var total = getTotal(price)
// // function getTotal(prices) {
// //     return prices.reduce(function(prev, next);
// // )};
// // function getAvg(price) {
// //   return price.reduce(function (p, c) {
// //     return p + c;
// //   }) / price.length;
// // }
// // getAvg(price); // 81.6

// // i found these on google but they didnt look familiar so i didnt use them. i am so confused. 





// "Items that cost between $14.00 USD and $18.00 USD:"
// var items= [
//  {
//     title: "1970s Coors Banquet Glass Beer Pitcher",
//     price: 15.00,

//  },
//  {
//     title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//     price: 17.00,
//  },
//  {
//     title: "Hand Painted Colorful Feather Glass",
//     price: 15.00,
//  } ,
//  { 
//      title: "1970s Schlitz Malt Liquor Glass",
//      price: 18.00,
//  },
//  {
//      title: "Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING", 
//      price: 14.00,
//  }
// ];

var itemsPriced = items.filter(function(item) {
    return item.price >= 14.00 && item.price <= 18.00 
});

console.log(itemsPriced);

// console.log(itemsPriced.title.price);

// // movies.forEach(function(movie){
// // // //     console.log(movie);
// // // //     console.log(movie.title);
// // // //     console.log(movie.year);

// // this isnt working and i feel like throwing my computer. i dont understand. 


// Find GBP item 

var currency = currency_code.filter(function(item)
{
    return currency_code.name('GBP')
});

console.log(gbpCode);

console.log()

// // im not sure what to put when i console.log, i always get confused on that part. also, i copied this code from the notes you gave us. im not even quite sure i know what it says, really. 

// // im gonna throw my computer 

// // im gonna be the first person to drop out of The Iron Yard 

var wooditems = items.filter(function(item) {
    return item.includes('wood')
});

console.log(wooditems);


// how many materials in product 

var itemMaterials =






