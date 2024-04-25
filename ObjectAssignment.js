//Q1

const people = [ { name: 'Alice', age: 17 }, { name: 'Eunice', age: 22 }, { name: 'Charlie', age: 14 }, { name: 'Max', age: 19 }, ]; 

 function NamesAdults(people) {

 return people.filter(person => person.age >= 18).map(person => person.name);
 }

 console.log(NamesAdults(people)); 




//Q2

const products = [ { name: 'Laptop', price: 1200, category: 'Electronics' }, { name: 'Shirt', price: 25, category: 'Clothing' }, { name: 'Headphones', price: 80, category: 'Electronics' }, { name: 'Shoes', price: 60, category: 'Clothing' }, 
];

 function Category(products) {

 return products.reduce((groupedProducts, product) => {

 groupedProducts[product.category] = (groupedProducts[product.category] || []).concat(product);

 return groupedProducts; }, {}); 
} 
 console.log(Category(products));



// Q3

const students = [ { name: 'John', scores: [90, 80, 85] }, { name: 'Jane', scores: [95, 92, 88] }, { name: 'Jim', scores: [70, 80, 75] }, { name: 'Jill', scores: [85, 90, 84] }, 
]; 

 function Scores(students){ 

 return students .filter(student => {
  const averageScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length; 


 return averageScore >= 85; }) .map(student => student.name); 
 }
 console.log(Scores(students)); 




//Q4

const car = { make: 'Ford', model: 'Ranger', year: 2023, displayInfo: function() { 

 console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`); 
 },
 }; 

 function Add(car) { 


 const currentYear = new Date().getFullYear();


 const age = currentYear - car.year;


 car.age = function() {

 return age; 

 }; 
} 

 Add(car);
 

console.log(car.age()); 

// function salesArray(arr){
//     let totalrevenue = arr.reduce((acc,curr) => acc + curr,0);
//     console.log(totalrevenue);
// }
// let arr= [200000,400000,-600000];
// console.log(salesArray(arr));








