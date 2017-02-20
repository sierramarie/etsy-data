// var list = new Array(1, 2, 3);
// // turns into 
// var list = [1,2,3];

// var object = new Object();
// // turns into
// var object = {};


// function drink() {
//     return 'drank';
// }

// var waterBottle = {
//     isFull: false,
//     oz: 16
// };

// // var Array = { 
//     length: 15
// }

// console.log(waterBottle.oz)
// console.log(waterBottle.isFull)
// console.log(waterBottle.drink())

// // properties === Object Variables 
// // methods === object functions 
// // Arrays var movies = [];
//     // var movies = [
//     //     'Hidden Figures'
//     //     'The Music Man'
//     // ];
//     // var movieTitle1 = movies[0];
//     // movies[0] = 'Star Wars: Force Awakens';

//     var movies = [ 
//         'Pulp Fiction',
//         'Frozen',
//         'Ex Machina',
//         'The Goonies'
//     ];

// console.log(movies);
// console.log(movies.length);

// console.log(movies[0]);


// movies[1] = 'Wall-E';

// console.log(movies);

// console.log(movies.pop());
// console.log(movies);

// // var emailAddress = 'sierramroberts.96@gmail.com';
// // var domainName = emailAddress.split('@').pop();
// // console.log(domainName);


// var movies = [ 
//     {
//         title: 'Pulp Fiction',
//         year: 1996
//     },
//     {
//         title: 'Frozen',
//         year: 2014
//     },
//     {
//         title: 'Ex Machina',
//         year: 2015
//     },
//     {
//         title: 'The Goonies',
//         year: 1986
//     }
// ];


// var movieTitles = [];

// movies.forEach(function(movie) {
//     movieTitles.push(movie.title);
// })
// console.log(movieTitles);


// var movieTitles = movies.map(getMovieTitle);

// function getMovieTitle(movie) {
//     return movie.title;
// }


// var movieTitles = movies.map(getMovieTitle);

// function getMovieTitle(movie) {
//     return movie.title;
// }


// // for (var i = 0; i < movies.length; i++) {
// //     // console.log(i);
// //     var movieTitle = movies[i].title;
// //     console.log(moviesTitle;)
// // }



// // movies.forEach(function(movie){
// //     console.log(movie);
// //     console.log(movie.title);
// //     console.log(movie.year);

// // });

// // movies.forEach(logMovie);
// // // foreach doesnt return anything


// // // var prices = [12.54, 12.68, 12.78, 12.00];
// // // var total = 0;

// // // prices.forEach(showPrices);

// // // function showPrices(price) {
// // //     total += price;
// // // }

// // // console.log(total);

// // var prices = [12.54, 12.68, 12.78, 12.00];

// // var total = getTotal(prices);

// // function getTotal(prices) {
// //     return prices.reduce
// // }

// // var total = prices.reduce(function(prev, next) {
// //     return prev + next;
// //     // will start with 0, then rotate numbers through 'previous' spot in code 
// // }, 0);



// // var names = ['Bart', 'homer', 'morty'];
// // var searchTerm = 'bart';

// // var matches = names.filter(funtion(name) {
// //     return name === searchTerm;
// // });





// var songs = [ 
//     {
//         title: 'Am I Wrong'
//     },
//    {
//         title: 'Song of Ignorance'
//     },
//     {
//         title: 'I Wanna Dance'
//     }
// ]; 

// var songTitles = songs.map(getSongTitle);

// function getSongTitle(song) {
//     return song.title;
// }

// console.log(songTitles);


console.log(items[0].tags[2])
// find beer mug

var hasBeerMug = items.filter(function(item) {
    return item.tags.includes('beer mug')
});







