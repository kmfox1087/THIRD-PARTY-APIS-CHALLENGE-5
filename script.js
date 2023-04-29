//Global variables
var $time = $('currentDay');
var getTime = moment().hour();
// 9am button
var button9 = document.getElementById('btn9');
// 10am button
var button10 = document.getElementById('btn10');
// 11 am button
var button11 = document.getElementById('btn11');
// 12 pm button
var button12 = document.getElementById('btn12');
// 1pm button
var button1 = document.getElementById('btn1');
// 2pm button
var button2 = document.getElementById('btn2');
// 3pm button
var button3 = document.getElementById('btn3');
// 4pm button
var button4 = document.getElementById('btn4');
// 5 pm button
var button5 = document.getElementById('btn5');
// Clear button
var ClearBtn = document.getElementById('clear');

// Assigning 'writingblock' to ID's 
let writingblock = document.querySelector('#NINEAM');
let writingblock2 = document.querySelector('#TENAM');
let writingblock3 = document.querySelector('#ELEVEN');
let writingblock4 = document.querySelector('#TWELVE');
let writingblock5 = document.querySelector('#ONE');
let writingblock6 = document.querySelector('#TWO');
let writingblock7 = document.querySelector('#THREE');
let writingblock8 = document.querySelector('#FOUR');
let writingblock9 = document.querySelector('#FIVE');

  // TODO: Add a listener for click events on the save button

  button9.addEventListener('click', SaveNotes);
  button10.addEventListener('click', SaveNotes);
  button11.addEventListener('click', SaveNotes);
  button12.addEventListener('click', SaveNotes);
  button1.addEventListener('click', SaveNotes);
  button2.addEventListener('click', SaveNotes);
  button3.addEventListener('click', SaveNotes);
  button4.addEventListener('click', SaveNotes);
  button5.addEventListener('click', SaveNotes);

  // Event listener for clear button

  ClearBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  
  // TODO: Add code to display the current date in the header of the page.
