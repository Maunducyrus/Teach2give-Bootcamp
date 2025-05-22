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
