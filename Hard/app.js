//Q1 

function showRating(rating) {
    let ratings = ''
    for(let i = 0; i < Math.floor(rating); ++i) {
        ratings = ratings + '*'
        if (i !== Math.floor(rating) - 1) {
            ratings = ratings + ' '
        }
    }
    if (!Number.isInteger(rating)) {
        ratings = ratings + " ."
    }
    return ratings
}

console.log(showRating(4.5))

/**
 * Initialise an empty string 
 * loop throught the rounded down rating
 * add a star for every interation
 * if its not the last interation add a spae
 * if the number is not an integer
 * add a full stop
 * return it 
 */

//Q2.Sort by lowest to highest price

function sortLowtoHigh(arr) {
    return arr.sort((a, b) => a - b)
}

console.log(sortLowtoHigh([20,40,10,30,50,10,1000,1]))

//Q3 Sort by highest to lowest price 

function sortHighToLow(ids) {
     return ids.sort((a, b) => {
        return b.price - a.price
     })
}

console.log(sortHighToLow([
    {id:1, price:50},
    {id:2, price:30},
    {id:3, price:60},
    {id:4, price: 10}
]))

//Q5 Find all the posts by a single user

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}

postsByUser(4)

//Q6 First 6 incomplite Todos

async function firstSixIncomplete() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/Todos")
    const result = await promise.json()
    const posts = result.filter(element => !element.completed).slice(0, 6)

    console.log(posts)
}

firstSixIncomplete(6)