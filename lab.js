// Part II: JavaScript Reps
// Easy Going
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// Get Even
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Fizz Buzz
for (let j = 1; j <= 15; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (j % 3 === 0) {
        console.log("Fizz");
    }
    else if (j % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(j);
    }
}


// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// 1.
plantee[2]++
console.log(plantee[2])

// 2.
wolfy[3] = "Gotham City"
console.log(wolfy)

// 3.
dart.push("Hawkins")
console.log(dart)

// 4.
wolfy.shift()
wolfy.unshift("Gameboy")
console.log(wolfy)


// Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (let iterator of ninjaTurtles) {
    console.log(iterator.toUpperCase())
}




// Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"))
favMovies.push("Avatar")
console.log(favMovies)
console.log("empty line")
console.log(favMovies.sort())
// It sorted the movies in alphabetical order


favMovies.pop()
favMovies.push("Guardians of the Galaxy")
console.log(favMovies.reverse())


favMovies.shift()
console.log(favMovies.unshift())
// 7. it returns the new length of the array or current length if you don't pass anything
console.log(favMovies)
console.log(favMovies.indexOf("Django Unchained"))

console.log(favMovies.splice(14, 1, "Avatar"))

console.log(Math.floor(favMovies.length / 2))
favMovies.reverse()
console.log(favMovies.slice(0, Math.floor(favMovies.length / -2)))
// 8. yes because it removed half the elements in the array

const newFavMovies = favMovies.slice(0, Math.floor(favMovies.length / -2))

// 9. We assigned the new array to a seperate new variable

// 10.
console.log(newFavMovies)

// 11.
console.log(favMovies.indexOf("Fast and Furious"))
// the real array wasn't changed

// 12.
// we can still change the elements of the array. We could use let but it's better not to




// Where is Waldo

const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia",
        ["Baked Goods", "Waldo"]
    ]
];

console.log(whereIsWaldo.splice(1, 1))

whereIsWaldo[1][2] = "No one"
console.log(whereIsWaldo)

// Excited kitten
const strings = ["...human...why you taking pictures of me?..." , "...the catnip made me do it..." , "...why does the red dot always get away..."]
for(let i = 0; i<20;i++) {
    // console.log( "Love me, pet me! HSSSSSS!")
    if(i % 2 === 0) {
        console.log(strings[Math.floor(Math.random() * strings.length)])


    }
    }