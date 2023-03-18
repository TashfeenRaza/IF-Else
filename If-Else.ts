

import promptSync = require('prompt-sync');
const prompt=promptSync();
let numb1=prompt("Enter 1st number:");
let numb2=prompt("Enter 2nd number:");
let numb3=prompt('Enter 3rd number:');
let number1=parseInt(numb1);
let number2=parseInt(numb2);
let number3=parseInt(numb3);
if(number1>number2 && number1>number3){
    console.log(`Greatest number is:${number1}`);
}
else if(number2>number1&&number2>number3){
    console.log(`Greates number is:${number2}`);
}
else if(number3>number1&&number3>number2){
    console.log(`Greatest number is:${number3}`);
}
