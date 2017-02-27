// Average Price 
// var price = [12.00, 20.00, 50.00, 25.00, 41.95, 5.75, 32.99, 15.00, 28.95, 24.95, 18.00, 2.99, 38.00, 20.00, 28.00, 13.59, 17.00, 48.00, 15.00, 14.00, 80.00, 22.00, 6.99, 6.99, 3.50]; 
// **hard coding is bad.** data can change and break code if you hard code ** oops **

var total = 0

items.forEach(function (item) {
    total += item.price 
});

// console.log(total / items.length);

var round = Math.round((total / items.length)* 100) / 100; 

console.log('The average price of items is ' + '$' + round)

// "Items that cost between $14.00 USD and $18.00 USD:"

var itemsPriced = items.filter(function(item) {
    return item.price >= 14.00 && item.price <= 18.00 
});

console.log(itemsPriced);

// // movies.forEach(function(movie){
// // // //     console.log(movie);
// // // //     console.log(movie.title);
// // // //     console.log(movie.year);
//  ***this was to help me remember how to console log****


// Find item with GBP currency code 

var currency = items.filter(function(item) {
  item.currency_code.includes('GBP')
});

console.log(currency);

// which items contain wood 

var materials = ['leather', 'wood', 'glass', 'etched'];

var searchTerm = 'wood';

var matches = materials.filter(function(materials) {
    return materials === searchTerm; 
});

console.log(matches);
// i had console.log(materials) but i think its supposed to be console.log(matches). 

var woodItems = items.filter(function(item) {
    return item.materials.includes('wood');
});

woodItems.forEach(function(woodItem) {
    console.log('4- ' + woodItem.title);
})

// items made with more than 8 different materials **

var alotOfMaterials = items.filter(function(moreThanEight) {
    return alotOfMaterials.materials.length >= 8;
});

alotOfMaterials.forEach(function(item) {
    console.log('5- ' + item.title + ' has ' + item.materials.length + ' materials: ' + item.materials);
});

// items made by sellers ** 

var madeBySeller = items.reduce(function(total, curItem) {
    if (curItem.who_made === 'i_did') {
        return total + 1
    }
    else {
        return total
    }
}, 0)

console.log(madeBySeller)



