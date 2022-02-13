let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/eeg.jpg') {
      myImage.setAttribute('src','images/eeg2.jpg');
    } else {
      myImage.setAttribute('src','images/eeg.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'EEG is cool, ' + myName;      
}

if(!localStorage.getItem('name')) {
    setUserName();  
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'EEG is cool, ' + storedName;  
}

myButton.onclick = function() {
    setUserName();  
}