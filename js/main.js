// console.log("Hello World");

// let a = 52;
// let b = "Ravi";
// console.log(a);
// console.log(b);

// console.log(a+b);
// ===============operator========================
// let num1 = 45;
// let num2 = 74;
// console.log("The value of num1+num2 is "+(num1+num2));
// console.log("The value of num1-num2 is "+(num1-num2));
// console.log("The value of num1*num2 is "+(num1*num2));
// console.log("The value of num1/num2 is "+(num1/num2));

// console.log("The value of num1++ is "+(num1++));
// console.log("The value of ++num1 is "+(++num1));
// console.log("The value of num1-- is "+(num1--));
// console.log("The value of --num1 is "+(--num1));

// ===================concatinate========================

// let str = "this";
// let name = "Ravi";
// let channel = "RSK";

// console.log(str+name+channel);

// let temp = `${name} has a channel named ${channel}`;
// console.log(temp);
// let len = channel.length;
// console.log(`lenght of the channel is ${len}`);

// ==============================================

// console.log("hello\nworld");
// console.log("hello\tworld");
// console.log("hello\\world");

// ==================string===========================

// let str = "this is string";
// console.log(str);

// console.log(str.indexOf('is'));
// console.log(str.lastIndexOf('i'));
// console.log(str.slice(1,6));

// let replaced = str.replace('string','ravi');
// console.log(replaced);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let  str1 = "      ravi is          ";
// console.log(str1);
// console.log(str1.trim());

// console.log(str[3]);

// ===================scope=============================

// let a = "global";
// {
//     let a = "block"
//     console.log(a);
// }
// console.log(a);

// const a = 45;   
// ====================conditionals=======================

// let age = 99;

// if(age>18){
//     console.log("You can drink");
// }
// else if(age==2){
//     console.log("Learn walking first");
// }
// else{
//     console.log('You cannot Drink');
// }

// ==============switch==================

// const cup = 42;

// switch (cup) {
//     case 41:
//         console.log("The value is 41");
//         break;
//     case 42:
//         console.log("The value is 42");
//         break;
//     case 43:
//         console.log("The value is 43");
//         break;
//     default:
//         console.log("The value is Not 41,42,43");
//         break;
// }

// ==============object================

// let employee = {
//     name:"Ravi",
//     salary:10,
//     channel:"rsk",
// }

// console.log(employee);

// ==========Arrays================

// let arr = [2,32,54,64,32,'Ravi'];
// console.log(arr);
// console.log(arr[4]);

// let arrl = arr.lenght;
// console.log(arrl);

// console.log(arr.sort());

// let add = arr.push('Singh');
// console.log(add);

// let arr = new Array(23);              23 empty array
// console.log(arr);


// =================function================

// function fun(){
//     console.log("Hello");
// }
// fun();
// fun();
// fun();
// fun();

// function fun(a ,b ,c){
//     return a+b+c;
// }
// let ret = fun(2 ,2 ,5);
// console.log(ret);

// function greet(name , text){
//     console.log(name + " " + text);
// }
// let name = "Ravi";
// let text = "good";
// let name1 = "kala";

// greet(name1,text);
// greet(name ,text);

// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
// let x = toCelsius(77);
//   console.log(x);

// ========alert,prompt,confirm====

// alert("Hello");


// let name = prompt("What is your name","Guest");
// console.log(name);


// let delPost = confirm("Do you really want to delete this post?");

// if(delPost){
//     console.log("Your file has been deleted successfully");
// }
// else{
//     console.log("You chose to not delete the file");
// }

// practice===age restriction prompt===

// let age = prompt("Please Enter Your Age","");

// if(age>=18){
//     console.log("Congratulations You Are eligible to enter in the club");
// }
// else{
//     alert("Sorry! you have to wait some years");
// }

// =================Loops====================

// let i =0;

// for(i = 0; i < 3; i++){
//     console.log(i);
// }

// ITERATE ARRAY 

// let friends = ["Ravi","Kala","billa",5 ,8];
// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index]);
// }

// friends.forEach(function f(element){
//     console.log(element);
// });

// FOR OF LOOP

// for(element of friends){
//     console.log(element);
// };

// ITERATE OBJECTS
// let employee = {
//     name:"Ravi",
//     salary:10,
//     age:99
// }

// for(key in employee){
//     console.log(`The ${key} of employee is ${employee[key]}`);
// }

// WHILE LOOP
// let i =0;
// while(i<4){
//     console.log(i);
//     i++;
// }

// DO WHILE LOOP
// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(i<4);

//======== MANIPULATING DOM=====================
// let main = document.getElementsByClassName('navbar-brand');
// console.log(main); 
// main.innerHTML="<a>hello</a>";

// let main = document.getElementById('js');
// console.log(main);
// main.innerHTML="<li>Not</li>";

// let sel = document.querySelector('.container');
// let sel = document.querySelector('#js');
// let sel = document.querySelector('.container>a');
// let sel = document.querySelectorAll('li');
