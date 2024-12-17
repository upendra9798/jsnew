// PROJECT 2- BMI Calculator

// project link
// https://stackblitz.com/edit/dom-project-chaiaurcode-gxahkavp?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html

const form = document.querySelector('form');
// const height=parseInt(querySelector('#height').value) //Will show empty
form.addEventListener('submit', function (e) {
  e.preventDefault();//// it stops the default action of the form (refreshing the page) from occurring. This allows you to control what happens when the form is submitted — 
  // for example, performing custom logic such as validation, calculations, or making an API call, all without refreshing the page.

  const height = parseInt(document.querySelector('#height').value);  //parseInt - gives integer value
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please enter a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please enter a valid weight';
  } else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  

    let category = ''
    if(bmi<18.6){
      category ='Under Weight'
      }
      else if(bmi>=18.6 && bmi<=24.9){
        category ='Normal Weight'
      }
      else{
        category ='Over Weight'
      }
      result.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category:${category}</span>`;
  }
  
});
