let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute ('src','images/FullSpectrum_3000mg_Tincture_Back.jpg');
    } else {
      myImage.setAttribute ('src','images/logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = myName + ' CBD Lord!';
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', CBD Lord!';
  }

  myButton.onclick = function() {
    setUserName();
  }
  