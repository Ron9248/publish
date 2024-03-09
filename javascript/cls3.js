// let name = prompt("Enter your name:");


// let no = parseInt(prompt("Enter your number:"));
// for (i=1;i<no;i++){
//     if(no%i==0){
//         i++

//     }
// }
// if(no==2){
//     document.write("Is a prime number");
// }
// else{
//     document.write("Number is not a prime number")
// }

let x = 10;
let y = 6;

let a = prompt("choose the symbol");
switch(a){
    case '+':
        document.write(x+y);
        break
    case '-':
        document.write(x-y);
        break
    case '*':
        document.write(x*y);
        break
    case '%':
        document.write(x%y);
        break
    default:
        document.write("not valid")
    
}