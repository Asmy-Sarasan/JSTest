var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
myHeading.textContent = 'Star Boy';

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'He is a mofuckin Starboy, ' + myName;
}

if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'He is a mofuckin Starboy, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}