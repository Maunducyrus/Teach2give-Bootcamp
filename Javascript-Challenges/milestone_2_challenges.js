// Challenge 1: Sum of Positive Numbers
function sumOfPositives(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])) //15

// Challenge 2: Find Maximum Value
function findMax(array){
    let maximum = 0;
    for (let i = 0; i < array.length; i++ ) {
        if (array[i] > array[maximum]) {
            maximum = i;
        }
    }
    return array[maximum];
}
console.log(findMax([3, 7, 2, 9, 5])) // returns: 9

// Challenge 3: Election winner
function findWinner(candidates) {
    let winner = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    return winner;
}
const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
  ];
  console.log(findWinner(candidates)); // returns: { name: "Bob", votes: 75 }

  // Challenge 4: Find the Longest Word
  function findLongestWord(words) {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"])) // returns: "grapefruit"

  // Challenge 5: Count Properties
  function countProperties(object) {
    let count = 0;
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;   
  }
  console.log(countProperties({ name: "Alice", age: 25, city: "Paris" })) // returns: 3

  // Challenge 6: Filter by Length  
  function filterByLength(words, length) {
    let filteredWords = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length >= length) {
        filteredWords.push(words[i]);
      }
    }
    return filteredWords;
  }
  console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // return ["giraffe", "hippo", "elephant"]

  // Challenge 7: Sum of Even Numbers using array
  function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))

  // Challenge 8: Difference Between Sum of Even and Odd Numbers
  function differenceEvenOdd(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sumEven += numbers[i];
      } else {
        sumOdd += numbers[i];
      }
    }
    return sumEven - sumOdd;
  }
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])) // returns: 3  // (2 + 4 + 6) - (1 + 3 + 5) = 12 - 9 = 3

  // Challenge 9: County Truthy
  function countTruthy(obj) {
    let count = 0;
    for (let key in obj) {
      if (obj[key]) {
        count++;
      }
    }
    return count;
  }
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }))  // returns: 2  // "hello" and 42 are truthy

// Challenge 10: Average of Numbers
function  average(numbers) {
  if (!numbers.length) return 0;
  let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    return sum / numbers.length;
  }
  console.log(average([2, 4, 6, 8]))
  console.log(average([]))

  // Challenge 11: Linear Search
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  console.log(linearSearch([5, 3, 7, 1, 4], 7)) // returns: 2
  console.log(linearSearch([5, 3, 7, 1, 4], 10)) // returns: -1 

  // Challenge 12: Reverse Linear Search
  function reverseLinearSearch(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)) // returns: 5
  console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10)) // returns: []

// Challenge 13: Linear Search All Indices
function linearSearchAll(arr, value) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indices.push(i);
    }
  }
  return indices;
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7))  // returns: [2, 5]
console.log(linearSearchAll([5, 3, 7, 1, 4], 10))  // returns: []

// Challenge 14: Count Occurrences
function countOccurrences(arr) {
  let count = {};
  for (const item of arr) {
    count[item] = count[item] ? count[item] + 1 : 1;
  }
  return count;
  }
  console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])) // returns: { apple: 3, banana: 2, orange: 1 }

  // Challenge 15: Remove Duplicates
  function removeDuplicates(arr) {
    let unique = [];
    for (const item of arr) {
      if (!unique.includes(item)) {
        unique.push(item);
      }
    }
    return unique;
  }
  console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])) // returns: [1, 2, 3, 4, 5]

  // Challenge 16: Most Frequent
  function mostFrequent(arr) {
    let count= {}
    let maxCount = 0;
    let mostFrequentItem;
    for (const item of arr) {
      count[item] = count[item] ? count[item] + 1 : 1;
      if (count[item] > maxCount) {
        maxCount = count[item];
        mostFrequentItem = item
      }
  }
  return mostFrequentItem;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]))  // returns: 3
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]))  // returns: "apple"