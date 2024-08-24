const forms=document.querySelector("form")
//this usecase gives you an empty value
//const height = parseInt(document.querySelector('#height').value);

forms.addEventListener('submit',function(e) {
    e.preventDefault();//prevent from server to value intake

  const height =  parseInt(document.querySelector('#height').value);
  const weight =  parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.result');

  if (height == '' || height < 0 || isNaN(height)) {//isNaN is use for that the string can be converted into number or not
    result.innerHTML=`please Enter valid height ${height}`
  }

  else if (weight == '' || weight < 0 || isNaN(weight)) {//isNaN is use for that the string can be converted into number or not
    result.innerHTML=`please Enter valid weight ${weight}`
  }

  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);//toFixed use for upto two decimal place value
    result.innerHTML=`<span>${bmi}</span>`

}

})