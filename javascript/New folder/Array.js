// let Book1= 'science';
// let Book2= 'Math';
// let Book3= 'English';

// console.log(Book1);



// let Books = new Array('Math', 'science', 'English');

// Book[1] = 'Digital logic'; to update element 

// Book.push('Microprocessor'); to add another element at last 

// book.unshift('C programming'); to add another element at first 

// Book.pop(); to remove element from backward
 
// Book.shift(); to remove element from front

// Book.splice(1, 1); to remove any element we want

// Book = []; to empty the certain variable

// Book.length = 0; also empty the certain variable 

// position = Book.indexOf('science'); to find out the position of Element

// console.log(Array.isArray(Book)); to find out if the given variable is array or not

// text = "this", "is", "random";

// wordArray = text.split(' '); split array from a sentence from space 

// wordArray = Book.join(' '); to join arrays in a sentence 

// join = Book.concat(text); to join 2 array  

// pages = [["math", "100"], ["science", "200"], ["English", "300"]]; multi dimantional array

// let fetch = pages[1];
let Book = ['Math', 'science', 'English'];

let length = Book.length;

for(i=0; i<length; i++){
    
    console.log(`Element ${i} is ${Book[i]} \n`);
}