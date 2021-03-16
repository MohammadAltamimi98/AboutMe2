'use strict';

confirm('lets play a game. I will ask you questions about me and you should try to guess the answer correctly.');

let Name= prompt('First let me get to know you, What\'s your name?');
console.log(Name);


let gender = prompt('Whats your gender (F/M) ?');
switch (gender){
case 'f': alert('Welcome Miss.'+ Name+' to my Biography web page! It is wonderful meeting you !');
  break;
case 'm':alert('Welcome Miss.'+ Name+' to my Biography web page! It is wonderful meeting you !');
  break;
default: prompt('Whats your gender - only answer with (F/M) ?');
  console.log(gender);
  break;
}


//  **first question**  //
let age=prompt ('Am I 22 years old?');


if ( age .toLowerCase()=== 'yes')
{
  // console.log('Your answer is right');
  alert('You are right I am 22 years old !');
}
else if (age .toLowerCase()=== 'no')
{
  // console.log('Your answer is wrong');
  alert('Your answer is wrong');
}
else
{
  let age=prompt ('Am I 22 years old? only (yes/no)?' );
  alert ('You will read the correct answer on the page.');
  console.log(age);
}



//  **second question**  //
let place=prompt('Do you think I live in Turkey?');
console.log(place);
if (place .toLowerCase()=== 'yes')
{
  // console.log('Your answer is wrong');
  alert('Your answer is wrong');
}
else if (place .toLowerCase()=== 'no')
{
  // console.log('you are right');
  alert('You are right !');
}
else
{
  let place=prompt('Do you think I live in Turkey?');
  alert ('You will read the correct answer on the page.');
  console.log(place);
}






//  **third question**  //
let role=prompt('Do you think I am a doctor ?');
console.log(role);
if (role .toLowerCase()=== 'yes')
{
  // console.log('Your answer is wrong.');
  alert('Your answer is wrong.');
}
else if (role .toLowerCase()=== 'no')
{
  // console.log('your answer is right.');
  alert('You are right!');
}

else
{
  let role=prompt('Do you think I am a doctor ?');
  alert ('You will read the correct answer on the page.');
  console.log(role);
}


//  **fourth question** //
let sign= prompt('Do you think I am a taurus?');
console.log(sign);
if (sign .toLowerCase()=== 'yes')
{
  // console.log('You are right!');
  alert('You are right!');
}
else if (sign .toLowerCase()=== 'no')
{
//  console.log('your answer is wrong ');
  alert('your answer is wrong ');
}
else
{
  let sign= prompt('Do you think I am a taurus?');
  alert ('You will read the correct answer on the page.');
  console.log(sign);
}


// fifth question
let edu= prompt('Have I studied in the Hashemite university?');
console.log(edu);
if (sign .toLowerCase()=== 'yes')
{
  // console.log('You are right!');
  alert('You are right!');
}
else if (sign .toLowerCase()=== 'no')
{
  // console.log('your answer answer is wrong.');
  alert('your answer answer is wrong.');
}
else
{
  let edu= prompt('Have I studied in the Hashemite university?');
  alert ('You will read the correct answer on the page.');
  console.log(edu);
}



// specialized greeting
alert ('Welcome '+ Name .toUpperCase() +' to my autobiography web page!'+ 'I hope that this web page will help you get to know me ! ');
