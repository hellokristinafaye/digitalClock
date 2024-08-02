//Link test
// console.log("hello there!");

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


// testing currentTime variable and methods
// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());
// console.log(currentTime.getSeconds());

setInterval(() => { 
    // this variable needs to be insided this function to work??? 
    let currentTime = new Date();

    // updating HTML content with currentTime and "getTime" methods
    // adding inline if condition to display 2 digits when current time is smaller than 10. starting code w/ sec not hrs so we can see it work before duplicating.
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

    // 1000 milliseconds = every second.
}, 1000)

