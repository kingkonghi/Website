var title = document.getElementById('name');
title.textContent ='Herman';
//calculate number a and b,then output to c

function add(num1,num2){
    let num3 = num1+num2;
    return num3;
}

var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

//var hello = document.getElementById('Hello');
var hello = document.getElementById("Hello");
if(hour >18 || hour < 6)
hello.textContent='Good night';
else if(hour > 12)
hello.textContent='Good afternoon.';
else if(hour > 6)
hello.textContent='Good morning.';
else
hello.textContent='Hello error';

var timea = document.getElementById("time");
timea.textContent = hour+':'+min+':'+sec;

function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }