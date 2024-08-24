const clocks = document.querySelector('.clock');



setInterval(() => {//use to set interval changes is website
    let date =new Date();
//console.log(date.toLocaleTimeString());
clocks.innerHTML=date.toLocaleTimeString();

}, 1000);