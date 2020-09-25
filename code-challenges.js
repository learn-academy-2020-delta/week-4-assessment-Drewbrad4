// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."
console.log("1:")

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const bootAndShuffle = (arr) => {
    // Catch for if the array is empty
    if (arr.length == 0){
        return "The array is empty."
    } else {
    // Getting rid of the inital value in the array.
    arr.shift()
    // Older sort method to randomize. Will work with smaller arrays but isnt optimal. I tried the Fisher-Yates Algorithm but wasn't able to get it working.
    return arr.sort(function (a, b) { return Math.random() - 0.5})
    }
}

console.log(bootAndShuffle(collections));
console.log(bootAndShuffle(collections));
console.log(bootAndShuffle(collections));
console.log(bootAndShuffle(collections));
console.log(bootAndShuffle(collections));
console.log(bootAndShuffle(collections), "\n");

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
console.log("2:")

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cubeAndSum = (arr) => {
    // Map through arr and cube all numbers.
    cubedArr = arr.map(num => {
      return num ** 3
    })
    // reducer function to add up all numbers in arr.
    return cubedArr.reduce(function(a, b) {
        return a + b
    }, 0) // 0 indicating the initial sum
}

console.log(cubeAndSum(cubeAndSum1));
console.log(cubeAndSum(cubeAndSum2), "\n");

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
console.log("3:");

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// creating a function that takes in an array and returns an arr with the min and max values
const minAndMax = (arr) => [Math.min(...arr), Math.max(...arr)]

console.log(minAndMax(nums1));
console.log(minAndMax(nums2), "\n");

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
console.log("4:");

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const smallBig = (str) => {
    // Split str into arr of letters
    wordArr = str.split("")
    // uppercase the odd indexes and then return arr joined back into str
    return wordArr.map((letter, index) => {
        if(index % 2 !== 0){
           return letter.toUpperCase()
        } else {
            return letter
        }
    }).join("")
}

console.log(smallBig(testString1));
console.log(smallBig(testString2), "\n");

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
console.log("5:");

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

const noDupes = (arr1, arr2) => {
    // join the two arrays together
    let joinedArr = arr1.concat(arr2)
    // If a number is already in the new arr, the second instance of that number won't have the same index and will be filtered
    return joinedArr.filter((num, index) => joinedArr.indexOf(num) == index)
}

console.log(noDupes(arr1, arr2), "\n")

// STRETCH
console.log("Stretch:");

var array1 = [3, 7, 10, 5, 4, 3, 3]
var array2 = [7, 8, 2, 3, 1, 5, 4]
var array3 = [10, 3, 9, 6, 8, 2, 1]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1, 9, 6]


const betterNoDupes = (...arr) => {
    // create empty arr to throw our arguments into
    let joinedArr = []
    // For each arr passed in, we add in every number to the previous numbers in joinedArr
    arr.forEach(array => {
        joinedArr = [...joinedArr, ...array]
    }); 
    // return using same filter method as before
    return joinedArr.filter((num, index) => joinedArr.indexOf(num) == index)
}

console.log(betterNoDupes(array1, array2, array3))
