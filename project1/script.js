const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(btn => {
    //console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);// to target particular element using given event
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        else if (e.target.id) {
            body.style.backgroundColor = 'yellow';
        }
    })
});
