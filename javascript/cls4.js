// let arr = [];
// for (let i=0;i<5;i++){
//     let Num = parseInt(prompt(`Enter the required number for ${i}`));
//     arr.push(Num);
// }
// document.write(arr);

// let arr = [1,2,4];
// let name = ["Rohan"];

// document.write(arr.reduce((pValue, cValue) => pValue + cValue));
// document.write(arr.map((element) => element * 2))
// document.write(arr.filter((element) =>element > 2))

let arr = [];
for (let i=1;i<=5;i++){
    let num = parseInt(prompt("Enter 5 numbers:"));
    arr.push(num);
}
 let a = prompt("Enter the choice:")
 let n = parseInt(prompt("Enter the number:"))
 switch(a){
    case '<':
    document.write(arr.filter((element) => element < `${n}` ));
    break
    case '>':
    document.write(arr.filter((element) => element > `${n}` ));
    break
    case '=':
    document.write(arr.filter((element) => element = `${n}` ));
    break
    default:
        document.write("invalid");
 }
