// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called number and set its value to 1;
// we increment the number value by one so now the value is 2;
// we check a conditional statement if the value of number is greater than or equal to 2 we console log yes
// number is equal to 2 so we would console log yes.
//
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we make a variable name and set it equal to the string "Dane"
// we run it through the conditional if the name variable is strict equals to mary we console log "Hi Mary"
// if the name is not strict equals we console log How do you do?
// the name is not equal to Mary so here we would console log How do you do?

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// created secret variable which is set to undefined, and we created a code variable set to 123
// we run through a few conditionals, if code value is strict equals 123, secret's value is the string "Super" and code is set to the value of code * 2 which is 246.
// code is equal to 123 so the new values of secret = super and code = 246
// we go through another conditional that would change secret to "duper" if code is greater than 250, but that is not the case so no change occurs
// console log secret which would be super

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

we create isStudent and set it to boolean true, we create age and set it to 36, and we create zip and set it to 55407 (even though 55408 is where the vibes are the best)
we run through condition 1 if isStudent is strict equals true and zip is greater than 80000 we console you're a student on the west coast.
and must have both statements true to be true, but the zip is not greater than 80000 so its false and we move down to next conditional
next one says if isStudent is false or age is less than 30 we console log, with or we only need one statement to be true for it to be true, but both statements are false so next one
next conditional is isStudent strict equals true console log welcome to prime! it is true so we console log "Welcome to Prime!"
we don't hit the else statement because the previous statement is true, but if it was false and all other statements were false we'd hit "How about the weather"
note: if isStudent was originally set to false, we would've hit the "What are your hobbies" statement because only one statement has to be true, so in this case it's impossible to hit the else statement

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
! colorOne and colorTwo should be switched
! colorOne = "blue"
! colorTwo = "red"
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  ! colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
! let time =  4; it says variables not const maybe being picky, but being specific matters

! we have an or statement, but we need an and statement
! we should replace || with &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
! let minAge = 21; that'd be a variable not a constant!


! we're checking in minAge is less than or equal to age, which is implicitly correct, but explicitly wrong
! should be if (age >= minAge)
! we switched the console logs!
if(minAge <= age) {
  console.log('no entry');
  ! console.log('enter')
} else {
  console.log('enter');
  ! console.log('no entry')
}
*/

