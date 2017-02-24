var house = {
    stories: 3, 
    location: 'Carmel',
    zipCode: 46032,
    materials: ['brick', 'gold', 'marble'],
    color: 'yellow'
    clean: function() { 
        console.log('All clean.');
    }
};
console.log(house.stories);
house.clean();
var house2 = {
    stories: 1,
    location: 'Indianapolis',
    zipCode: 46240,
    materials: ['wood', 'siding'],
    color: 'tan'
    clean: function() { 
        console.log('All clean.');
    }
};
// constructor functions 
// cannot be directly interacted with, template for other objects to be made from
var House = function(fancy) {
    // instance variables, directly related to instance, separate from other instances 
    this.stories = 1;
    this.materials = fancy ? ['wood', 'brick'] : ['wood', 'silver'];

    // this.makeItAMansion = function () {
    //     this.stories = 3;
    //     this.materials.push('gold');
    //     this.materials.push('marble');

    // }


};




// New instances 
// change properties and some other stuff i guess i dont really know, it changed teh colors of my code and i dont like that 

var carmelHouse = new House();
carmelHouse.stories = 3;
carmelHouse.materials = ['gold', 'marble'];
console.log(carmelHouse);


var indyHouse = new House();

console.log(indyHouse);

var economy = 'is good';
if (economy === 'is good') {
    House.prototype.stories = 5;

}



var Movie = function() {
    this.title = '';
    this.youtubeID = '';

    this.play = function() {
        youtube.play(this.youtubeID);
    }
}

var laLaLandTrailer = new Movie();
laLaLandTrailer.title = 'La La Land';
laLaLandTrailer.youtubeID = '0pdqf4P9MB8';



// ES6 Classes ---- homework today in this [!][!]

class Movie { 

    constructor(movieTitle, movieID) { 
        this.title = movieTitle;
        this.youtubeID = movieID;
        
        // Method Bindings 
        this.play = this.play.bind(this);
        // any method would use this formula. replace play with method. 
        this.pause = this.pause.bind(this);

    }

    play() {
        console.log('Playing' + this.title);
        // code to make it play 
    }

    pause() {
        console.log('Pausing' + this.title);
    }
    
    eat() { 
        console.log('Eating you.');
    }
}

class ThrillerMovie extends Movie {
    constructor(movieTitle, movieID) {
        super(movieTitle,movieID); 
        this.genre = 'Thriller';

    }

}

var jawsFilm = new ThrillerMovie('Jaws', 'U1fu_sA7XhE');
jawsFilm.play();
jawsFilm.pause();
jawsFilm.eat();
