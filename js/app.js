'use strict';

confirm('lets play a game. I will ask you questions about me and you should try to guess the answer correctly.');

let Name= prompt('First let me get to know you, What\'s your name?');
console.log(Name);


let gender = prompt('Whats your gender (f/m) ?');
switch (gender){
case 'f': alert('Welcome Miss.'+ Name+' to my Biography web page! It is wonderful meeting you !');
  break;
  case 'female': alert('Welcome Miss.'+ Name+' to my Biography web page! It is wonderful meeting you !');
  break;
case 'm':alert('Welcome Mr.'+ Name+' to my Biography web page! It is wonderful meeting you !');
  break;
  case 'male':alert('Welcome Mr.'+ Name+' to my Biography web page! It is wonderful meeting you !');
  break;
default: prompt('Whats your gender - only answer with (f/m) ?');
  console.log(gender);
  break;
}

let score = 0;

//  **first question**  //
function Q1(){
  let age=prompt ('Am I 22 years old?');
  if ( age .toLowerCase()=== 'yes' || age .toLowerCase()==='y')
  {
  // console.log('Your answer is right');
    alert('You are right I am 22 years old !');
    score = score+1;
  }
  else if (age .toLowerCase()=== 'no' || age .toLowerCase()==='n')
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
}
Q1();


//  **second question**  //
function Q2(){
  let place=prompt('Do you think I live in Turkey?');
  console.log(place);
  if (place .toLowerCase()=== 'yes' || place .toLocaleLowerCase()==='y')
  {
  // console.log('Your answer is wrong');
    alert('Your answer is wrong');
  }
  else if (place .toLowerCase()=== 'no' || place.toLowerCase()==='n')
  {
  // console.log('you are right');
    alert('You are right !');
    score = score+1;
  }
  else
  {
    let place=prompt('Do you think I live in Turkey?');
    alert ('You will read the correct answer on the page.');
    console.log(place);
  }
}
Q2();



//  **third question**  //
function Q3(){
  let role=prompt('Do you think I am a doctor ?');
  console.log(role);
  if (role .toLowerCase()=== 'yes' || role .toLowerCase()==='y')
  {
  // console.log('Your answer is wrong.');
    alert('Your answer is wrong.');
  }
  else if (role .toLowerCase()=== 'no'|| role .toLowerCase()==='n')
  {
  // console.log('your answer is right.');
    alert('You are right!');
    score= score+1;
  }

  else
  {
    let role=prompt('Do you think I am a doctor ?');
    alert ('You will read the correct answer on the page.');
    console.log(role);
  }
}
Q3();



//  **fourth question** //
function Q4(){
  let sign= prompt('Do you think I am a taurus?');
  console.log(sign);
  if (sign .toLowerCase()=== 'yes' || sign .toLowerCase()==='y')
  {
  // console.log('You are right!');
    alert('You are right!');
    score=score+1;
  }
  else if (sign .toLowerCase()=== 'no'|| sign .toLowerCase()==='n')
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
}
Q4();


// **fifth question** //
function Q5(){
  let edu= prompt('Have I studied in the Hashemite university?');
  console.log(edu);
  if (edu .toLowerCase()=== 'yes'|| edu .toLowerCase()=== 'y' )
  {
  // console.log('You are right!');
    alert('You are right!');
    score = score+1;
  }
  else if (edu .toLowerCase()=== 'no'|| edu .toLowerCase()=== 'n')
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
}
Q5();


// **sixth question** //
function Q6(){
  let number = 9;
  alert('Lets see if you can guess my lucky number, you have only four attempts. (I will give you some hints.)');

  let i;
  for (i=0 ; i<4; i++)
  {
    let guess= Number(prompt('Guess my lucky number'));
    if (guess === number)
    {
      alert('your answer is correct!');
      score=score+1;
      break;
    }
    if (guess > 10)
    {
      alert('your guess is too high, Try again!');
    }
    if (guess < 9)
    {
      alert('you are low, go a little higher!');
    }
    if (i===3)
    {
      alert('You are out of attempts !');
    }

  }
}
Q6();



//  **seventh question**  //
function Q7(){
 let singers=['adele','rihanna','pink','maraiah', 'beyonce', 'mariah', 'christina', 'britney', 'gaga' ];
  alert('You have six attempts to guess my favorite female singer. lets go');

  for(let i=0; i<6; i++)
  {
    let singer  =prompt(' Guess my favorite female singer? ');

    if(singers.indexOf(singer) !== -1){
      alert('You are correct!');
      score=score+1;
      break;
    } else{
      alert('you are wrong!');
    }
    if (i===5)
    {
      alert('you are out of attempts!');
      alert('My favorite female singers are: adele, rihanna, pink, maraiah, beyonce,  mariah, christina, britney, gaga.');
    }
  }
}
Q7();

alert( 'Your score is ' + score + ' !' );


// specialized greeting
alert ('Welcome '+ Name .toUpperCase() +' to my autobiography web page!'+ 'I hope that this web page will help you get to know me ! ');







