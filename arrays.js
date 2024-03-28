let fruits = ['Mango', 'Banana', 'Orange'];
 let arr = new Array(20, 30);
console.log({fruits});
console.log({arr});

fruits[1]=2;
console.log({fruits})

console.log('last item', fruits.slice(-1));

// fruits.slice(-1);
// fruits[fruits.length-1];

let addLast= fruits.push("Apple"); // add an item at the end of an array
console.log({fruits});

let addStart = fruits.unshift('Pineapple'); // add an item at the starting if an array
console.log({fruits});

let removeLast = fruits.pop(); // removing the last item in the array
console.log({fruits});

let removeFirst = fruits.shift(); // removing the first item in the array
console.log({fruits});

let newFruits = fruits.push(['Tomato', 'Pear']);
console.log({fruits});

let items = [20,30,40,50,60];
let add = items.reduce((acc, cur)=> acc + cur); // adding all the items in the array
console.log({add});

let multiply = items.map(item=> item *2); // manipulates every item in the array and return a new array
console.log({multiply})

let square = [] 
let total = 0;
items.forEach(item => {  // doesn't return
    const multiple = item * item;
    square.push(multiple)
    total+=item;

console.log(multiple);
console.log(multiple);
square.push(multiple);
square.unshift(multiple);
total += item

});
 console.log ({square});
 console.log({total});

// Destructuring

let [num1, num2, num3, ...rest] = items;
console.log({num1});
console.log({num2});
console.log((num3));
console.log([rest]);

