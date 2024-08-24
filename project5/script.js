const randomColor = function (){
    const hex= "0123456789ABCDEF"
    let  color="#";
    for (let index = 0; index < 6; index++) {
      color+=hex[Math.floor(Math.random()*16)];
}
return color;
}

const start = document.querySelector('#start');
const stp = document.querySelector('#stop');
let intervalId;
const startChange = function () {
    const changeBgColor = function () {
        document.body.style.backgroundColor = randomColor();
    }
    intervalId = setInterval(changeBgColor,1000);
    
}

const stopChange = function (){
clearInterval(intervalId);
intervalId = null;
}

start.addEventListener('click',startChange);
stp.addEventListener('click',stopChange);