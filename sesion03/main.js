//var UserName= "edwin";

//var uper_cased_UserName= UserName.replace('j','J')
//var uper_cased_UserName= UserName.toUpperCase()+UserName.slice(1);
//var uper_cased_UserName= UserName[0].toUpperCase() + UserName.slice(1);


//console.log(uper_cased_UserName)


let button = document.getElementById('button');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let h2 = document.getElementById('h2');

button.addEventListener('click', function() {
  h2.innerText = parseInt(num1.value) + parseInt(num2.value);
  num1.value = '';
  num2.value = '';
});





