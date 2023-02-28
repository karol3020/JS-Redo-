//Q1 Falsy or Thruthy ? 

function filterOutFalsy(val1, val2) {
    return (!val1) ? val1 : val2
}

console.log(filterOutFalsy(null, 5))

//Q2 Return the length of any given array

function arrLength(arr) {
    return arr.length
}

console.log(arrLength([]))

//Q3 Get the last element in an array 

function lastElem(arr) {
    return arr[arr.length - 1]
}  

console.log(lastElem([null, 5,false]))

//Q4 Find the sum of an array 

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(arrSum([100,200,500]))

//Q5 Add up the number from a single number 

function progressiveSum(num) {
    let sum = 0
    for (let i = 1; i <= num; ++i ) {
        sum = sum + i
    }
    return sum 
}

console.log(progressiveSum(3))

//Q6 Calculate the time

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(500))

//Q7 Find the largest number 

function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i){
            if (arr[i > max]) {
                max = arr[i]
            }
    }
    return max
}

console.log(getMax([5,100,0]))

//Q8  Reverse a string 

function reverseString(str) {
    let  reverseString = ''
    for (let i = 0; i < str.length; ++i) {
        reverseString = str[i] + reverseString
    }
    return reverseString
}

console.log(reverseString('abc'))

//Q9 Turn every element in an array into 0 

function convertToZeros(arr) {
    // let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0
    }
    return arr
}

console.log(convertToZeros([5,100,0]))

//Q10 Filter out all the apples

function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i])
        }
    }
    return noApples
}

console.log(removeApples(['Banana','Apple','Orange','Apple']))

// Q11 Filter out all the falsy values

function filterOut(arr) {
    let noFalsy = []
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            noFalsy.push(arr[i])
        }
    }
    return noFalsy
}

console.log(filterOut(["", [], 0, null, undefined, "0"]))

//Q12. Truthy to true, Falsy to false 

function convertToBoolean(arr) {
    let uncover =[]
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            arr[i] = 'True'
            uncover.push(arr[i])
        }
        else if (!!arr[i] === false) {
            arr[i] = 'False'
            uncover.push(arr[i])
        }
    }
    return uncover
}

console.log(convertToBoolean([500, 0, 'David', []]))