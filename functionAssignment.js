// Question 1: Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reverseArray(arr) { 
    let ArraySort = arr.map(str => str.split('').reverse().join(''));
   let descendingArray= ArraySort.reverse();
   console.log(descendingArray)
      return ArraySort.sort(); }
      const names = ["Alice", "Mariam", "Beatrice", "Louisa"];
    console.log( reverseArray(names));


// Question 2: Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function checkNumber(arrays,index){
    const arrayNumber=arrays[index];
    if(num > 0){
        return arrayNumber + "is positive";
    }
    else if(arrayNumber < 0){
        return arrayNumber + " is negative";
    }
    else{
        return arrayNumber+ " is zero"
    }
   }
   const arrayNumber=[2,-4,0,43,5,-8];
   console.log(checkNumber(arrayNumber , 1));

  // Question 3: Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
  
  
  function sortEmployees(employees) {
    return employees.sort((a,b ) => a.salary - b.salary); }

const sortedEmployees = sortEmployees([
{ id: 1, name: "Lisa", salary: 50000 },
{ id: 2, name: "Queen", salary: 60000 },
{ id: 3, name: "Amelie", salary: 45000 } ]);
console.log(sortEmployees);

// Question 4: Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.


function multiplyByTwo(arr) {
    arr.forEach(num =>
        { console.log(num * 2); });
     }
    const arr = [1, 2, 3, 4, 5];
    multiplyByTwo(arr);

// Question 5: Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values


function transformArray(arr) {
const multipliedFirstFour = arr.slice(0, 4).map(num => num * 8);
const addedLastTwo = arr.slice(-2).map(num => num + 5);
const transformedArray = multipliedFirstFour.concat(addedLastTwo);
console.log(transformedArray);
}

const number = [1, 2, 3, 4, 5, 6];
transformArray(number);


         