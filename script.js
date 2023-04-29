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

  // If statements to change background color depending on time of day

  if (getTime==9) {
    document.getElementById('Nineam').style.backgroundColor = "white";
  } else if (getTime < 9) {
    document.getElementById('Nineam').style.backgroundColor = "green";
  } else {
    document.getElementById('Nineam').style.backgroundColor = "red";
  }

  if (getTime==10) {
    document.getElementById('Tenam').style.backgroundColor = "white";
  } else if (getTime < 10) {
    document.getElementById('Tenam').style.backgroundColor = "green";
  } else {
    document.getElementById('Tenam').style.backgroundColor = "red";
  }

  if (getTime == 11) {
    document.getElementById('Eleveam').style.backgroundColor = "white";
  } else if (getTime < 11) {
    document.getElementById('Elevenam').style.backgroundColor = "green";
  } else {
    document.getElementById('Elevenam').style.backgroundColor = "red";
  }

  if (getTime == 12) {
    document.getElementById('Twelvepm').style.backgroundColor = "white";
  } else if (getTime < 12) {
    document.getElementById('Twelvepm').style.backgroundColor = "green";
  } else {
    document.getElementById('Twelvepm').style.backgroundColor = "red";
  }

  if (getTime == 13) {
    document.getElementById('Onepm').style.backgroundColor = "white";
  } else if (getTime < 13) {
    document.getElementById('Onepm').style.backgroundColor = "green";
  } else {
    document.getElementById('Onepm').style.backgroundColor = "red";
  }

  if (getTime == 14) {
    document.getElementById('Twopm').style.backgroundColor = "white";
  } else if (getTime < 14) {
    document.getElementById('Twopm').style.backgroundColor = "green";
  } else {
    document.getElementById('Twopm').style.backgroundColor = "red";
  }

  if (getTime == 15) {
    document.getElementById('Threepm').style.backgroundColor = "white";
  } else if (getTime < 15) {
    document.getElementById('Threepm').style.backgroundColor = "green";
  } else {
    document.getElementById('Threepm').style.backgroundColor = "red";
  }

  if (getTime==16) {
    document.getElementById('Fourpm').style.backgroundColor = "white";
  } else if (getTime < 16) {
    document.getElementById('Fourpm').style.backgroundColor = "green";
  } else {
    document.getElementById('Fourpm').style.backgroundColor = "red";
  }

  if (getTime==17) {
    document.getElementById('Fivepm').style.backgroundColor = "white";
  } else if (getTime < 17) {
    document.getElementById('Fivepm').style.backgroundColor = "green";
  } else {
    document.getElementById('Fivepm').style.backgroundColor = "red";
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // Function to save the user's notes
function SaveNotes () {
  localStorage.setItem('Nine', writingblock.value)
}

function SaveNotes () {
  localStorage.setItem('Ten', writingblock2.value)
}

function SaveNotes () {
  localStorage.setItem('Eleven', writingblock3.value)
}

function SaveNotes () {
  localStorage.setItem('Twelve', writingblock4.value)
}

function SaveNotes () {
  localStorage.setItem('One', writingblock5.value)
}

function SaveNotes () {
  localStorage.setItem('Two', writingblock6.value)
}

function SaveNotes () {
  localStorage.setItem('Three', writingblock7.value)
}

function SaveNotes () {
  localStorage.setItem('Four', writingblock8.value)
}

function SaveNotes () {
  localStorage.setItem('Five', writingblock9.value)
}
  // TODO: Add code to display the current date in the header of the page.

  window.setInterval(function () {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);