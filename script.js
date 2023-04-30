// Global Variables
var $time = $('#currentDay');
var getTime = moment().hour();

var button9 = document.getElementById('btn9');
var button10 = document.getElementById('btn10');
var button11 = document.getElementById('btn11');
var button12 = document.getElementById('btn12');
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');
var button5 = document.getElementById('btn5');
var ClearBtn = document.getElementById('clear');

//assign writingblock to id's
let writingblock = document.querySelector('#NINEAM');
let writingblock2 = document.querySelector('#TENAM');
let writingblock3 = document.querySelector('#ELEVEN');
let writingblock4 = document.querySelector('#TWELVE');
let writingblock5 = document.querySelector('#ONE');
let writingblock6 = document.querySelector('#TWO');
let writingblock7 = document.querySelector('#THREE');
let writingblock8 = document.querySelector('#FOUR');
let writingblock9 = document.querySelector('#FIVE');

//Check to clear data if needed
if (getTime == 0) {
    localStorage.clear();
}
//Gets localstorage
writingblock.value = localStorage.getItem('Nine');
writingblock2.value = localStorage.getItem('Ten');
writingblock3.value = localStorage.getItem('Eleven');
writingblock4.value = localStorage.getItem('Twelve');
writingblock5.value = localStorage.getItem('One');
writingblock6.value = localStorage.getItem('Two');
writingblock7.value = localStorage.getItem('Three');
writingblock8.value = localStorage.getItem('Four');
writingblock9.value = localStorage.getItem('Five');

//Display current time
window.setInterval(function () {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);

//Function to save notes
function SaveNotes() {
    localStorage.setItem('Nine', writingblock.value)
}

function SaveNotes2() {
    localStorage.setItem('Ten', writingblock2.value)
}
function SaveNotes3() {
    localStorage.setItem('Eleven', writingblock3.value)
}
function SaveNotes4() {
    localStorage.setItem('Twelve', writingblock4.value)
}
function SaveNotes5() {
    localStorage.setItem('One', writingblock5.value)
}
function SaveNotes6() {
    localStorage.setItem('Two', writingblock6.value)
}
function SaveNotes7() {
    localStorage.setItem('Three', writingblock7.value)
}
function SaveNotes8() {
    localStorage.setItem('Four', writingblock8.value)
}
function SaveNotes9() {
    localStorage.setItem('Five', writingblock9.value)
}

//Click events for the save buttons
button9.addEventListener('click', SaveNotes)
button10.addEventListener('click', SaveNotes2)
button11.addEventListener('click', SaveNotes3)
button12.addEventListener('click', SaveNotes4)
button1.addEventListener('click', SaveNotes5)
button2.addEventListener('click',SaveNotes6)
button3.addEventListener('click',SaveNotes7)
button4.addEventListener('click',SaveNotes8)
button5.addEventListener('click',SaveNotes9)

ClearBtn.addEventListener('click', function() {  
    localStorage.clear();
    location.reload();

});

// If statements to change block colors 
if (getTime == 9) {
    document.getElementById('Nineam').style.backgroundColor = "White";
} else if (getTime < 9) {
    document.getElementById('Nineam').style.backgroundColor = "Green";
} else {
    document.getElementById('Nineam').style.backgroundColor = "Red";
}

if (getTime == 10) {
    document.getElementById('Tenam').style.backgroundColor = "White";
} else if (getTime < 10) {
    document.getElementById('Tenam').style.backgroundColor = "Green";
} else {
    document.getElementById('Tenam').style.backgroundColor = "Red";
}

if (getTime == 11) {
    document.getElementById('Elevenam').style.backgroundColor = "White";
} else if (getTime < 11) {
    document.getElementById('Elevenam').style.backgroundColor = "Green";
} else {
    document.getElementById('Elevenam').style.backgroundColor = "Red";
}

 if(getTime==12){
     document.getElementById('Twelevepm').style.backgroundColor = "White";
 }else if(getTime<12){
    document.getElementById('Twelevepm').style.backgroundColor = "Green";
 }else {
         document.getElementById('Twelevepm').style.backgroundColor = "Red";
 }

if(getTime==13){
   document.getElementById('Onepm').style.backgroundColor = "White";
 }else if(getTime<13){
    document.getElementById('Onepm').style.backgroundColor = "Green";
}else {
     document.getElementById('Onepm').style.backgroundColor = "Red";
 }

if(getTime==14){
    document.getElementById('Twopm').style.backgroundColor = "White";
 }else if(getTime<14){
     document.getElementById('Twopm').style.backgroundColor = "Green";
 }else {
    document.getElementById('Twopm').style.backgroundColor = "Red";
 }

if(getTime==15){
    document.getElementById('Threepm').style.backgroundColor = "White";
}else if(getTime<15){
    document.getElementById('Threepm').style.backgroundColor = "Green";
 }else {
     document.getElementById('Threepm').style.backgroundColor = "Red";
}

 if(getTime==16){
    document.getElementById('Fourpm').style.backgroundColor = "White";
 }else if(getTime<16){
    document.getElementById('Fourpm').style.backgroundColor = "Green";
 }else {
    document.getElementById('Fourpm').style.backgroundColor = "Red";
 }

 if(getTime==17){
    document.getElementById('Fivepm').style.backgroundColor = "White";
 }else if(getTime<17){
     document.getElementById('Fivepm').style.backgroundColor = "Green";
 }else {
     document.getElementById('Fivepm').style.backgroundColor = "Red";
 }
