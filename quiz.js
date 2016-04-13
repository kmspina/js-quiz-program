// variables
var correct = 0;

// prompt
var answer1 = prompt("Is it smelly cat's fault?");
//console.log("the answer is:" + answer);
var answer2 = prompt ("The chick and the...?")
//console.log("correct:" + correct);
var answer3 = prompt ("What does Pheobe's brother like to do?")
//console.log("correct:" + correct);
var answer4 = prompt ("Does Joey share food?")
//console.log("correct:" + correct);
var answer5 = prompt ("What do you call a cows opinion?")
//console.log("correct:" + correct);


// if statement
if ( answer1.toUpperCase() === 'NO' ) {
 correct += 1; }
if ( answer2.toUpperCase() === 'DUCK') {
  correct += 1; }
if ( answer3.toUpperCase() === 'BURN STUFF') {
  correct += 1; }
if ( answer4.toUpperCase() === 'NO') {
  correct += 1; }
if ( answer5.toUpperCase() === 'A MOO POINT') {
    correct += 1; }

// output results
document.write("<p>" + answer1 + answer2 + answer3 + answer4 + answer5 + "</p>");
document.write(correct)

if ( correct === 5) {
  document.write('Youre my best friend!') }
else if ( correct === 4) {
  document.write('Youre my great friend!') }
else if ( correct === 3) {
  document.write('Youre my good friend!') }
else if ( correct === 2) {
  document.write('Youre my bad friend!') }
else if ( correct === 1) {
  document.write('Youre my awful friend') }
else if ( correct === 0) {
  document.write('Youre not my friend') }
