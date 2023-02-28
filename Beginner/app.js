// Q.1 Return the sum of two numbers 
function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3,2))

//Q.2 Convert Hours into Seconds

function hoursintoSecond(hours) {
    return hours * 3600
}

console.log(hoursintoSecond(2))

//Q.3 Calculate the Perimeter of a Rectangle

function calcPerimeter(length,width) {
    return length * 2 + width * 2
}

console.log(calcPerimeter(6,7))

//Q4.Calculate the area of a triangle

function calcTriangleArea(base, height) {
    return 2 / base * height 
}

console.log(calcTriangleArea(20,20))

//Q5 Extand a String 

function appendFrontend(str1) {
    return str1 + 'Frontend'
}

console.log(appendFrontend('Apple'))

//Q6 Greater than 100? 

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}

console.log(sumGreaterThan100(60,50))

//Q7 Less than or Equal to Zero

function lassThanOrEqualToZero(num1) {
    return num1 <= 0
}

console.log(lassThanOrEqualToZero(0))

//Q8 Opposite boolean

function oppositeBoolean(boolean) {
    return !boolean
}

console.log(oppositeBoolean(true))

//Q9 Is not the number 0 

function isNotZero(element) {
    return element !== 0
}

console.log(isNotZero(null))

//Q10 Calculate the reminder 

function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(7,8))

//Q11 Is the number odd ? 
function isOdd(num) {
    return num % 2 !== 0
}

console.log(isOdd(2))

//Q12 If a number is even, return 1 otherwise return -1

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(1))

//Q13 Check if a user is logged in AND subscribed

function isLoggedInAndSubscribed(str1, str2) {
    return str1 === 'Logged_in' && str2 === 'subscribed'
}

console.log(isLoggedInAndSubscribed('Logged_in', 'unsubscribed'))

//Q14 Check if a user is logged in or sibscribed

function isLoggedInOrSubscribed(str1, str2) {
    return str1 === 'Logged_in' || str2 === 'subscribed'
}

console.log(isLoggedInOrSubscribed('Logged_out', 'unsubscribed'))