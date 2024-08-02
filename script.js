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
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

    // 1000 milliseconds = every second.
}, 1000)

