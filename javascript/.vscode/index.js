// let date = new Date();
// example(date);
// function example(Date){
//     var a = Date.getHours();
//     document.write(`${Date.getFullYear()}/${date.getMonth()}/ ${Date.getDate()}`);
// }

// let car = {
//     price=120,
//     manufacture = 


// }
// let dom=document.getElementById("idn");
// let dom2=document.getElementsByClassName("cln");
// let dom3=document.getElementsByTagName("p");
// dom2.innerHTML="This is class";
// dom.innerHTML="UUUUello";
// dom3.innerHTML="By tags";
let user=document.getElementById("txt1").value;
let pw=document.getElementById("txt2").value;
let disp1=document.getElementById("select1");
let disp2=document.getElementById("select2");
function onSelected(){
   
disp1.innerHTML=`${user}`;
disp2.innerHTML=pw;
}