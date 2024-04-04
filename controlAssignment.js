//Question 1: Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
const arrayNumber =(numbers)=>{
    let newArray= [];
    let number1 = numbers.slice(0,4)
    let number2 = numbers.slice(-2)
    for(let num of number1){
        const multiplyByItself =num*num;
        newArray.push(multiplyByItself)
    }
    for(let num of number2){
        const added = num+10
        newArray.push(added)
    }
    return newArray;
}
console.log(arrayNumber([4,5,6,8,9,1,3,7,3]))



// Question 2: Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

    let arrNum = [ 5, 6, 7, 8, 9];
     let i = 0;
      while (i < arrNum.length){
        if (arrNum[i] === arrNum[2]){
          break; 
        }
          console.log(arrNum[i]);
          i++; 
        }

// Question 3: Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

    function AllFruits(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (i === 1) {
                continue; 
            }
                console.log(arr[i]); 
            } }
                let fruits = ['Avocado', 'Pineapple', 'Guava', 'Grapes', 'Blueberry'];
                AllFruits(fruits);

// Question 4: Write a function that accepts an array of strings and console.logs each element using a for loop.

    function ArrayElements(arr){ 
        for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); 
    } }

// Question 5: Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

         function reverseString(str){
        let reversed = '';
         let i = str.length -1
         while (i >= 0){ 
            reversed += str[i]; i--; 
        }
        return reversed; 
    };
          let reversedString = reverseString(" Peter bought a car");
          console.log(reversedString);