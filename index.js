// Random Password Generator

let passUpperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','T','S','U','V','W','X','Y','Z'];
let passLowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let passChars = ['!','#','$','%','^','&','(',')','~','.','+','-','_','<','>','[',']','{','}','=']
let passDigits = ['1','2','3','4','5','6','7','8','9','0'];
let unmixedPass;
let finalPassword;

// ~~~~~~~~~~~~~~~~ for connecting range input to numbers input ~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~ N for number picker, R for range picker ~~~~~~~~~~~~~~~~ //
document.getElementById('lowerCaseN').addEventListener('input', updateValue);
document.getElementById('lowerCaseR').addEventListener('input', updateValue);
document.getElementById('UpperCaseN').addEventListener('input', updateValue);
document.getElementById('UpperCaseR').addEventListener('input', updateValue);
document.getElementById('charsN').addEventListener('input', updateValue);
document.getElementById('charsR').addEventListener('input', updateValue);
document.getElementById('numsN').addEventListener('input', updateValue);
document.getElementById('numsR').addEventListener('input', updateValue);
// ~~~~~~~~~~~~~~~~ for connecting range input to numbers input - END ~~~~~~~~~~~~~~~~

document.getElementById('generateBTN').addEventListener('click',()=>{
  resetValues()
// ~~~ if a value > 20, default it to 20, if a value < 0 default it to 1 ~~~
  let allNumberClickers = document.querySelectorAll('.JS-maxNumberEnabled')
  for (let i=0; i<allNumberClickers.length; i++){
    if(allNumberClickers[i].value > 20){
      allNumberClickers[i].value = 20
    }else if(allNumberClickers[i].value < 0 || isNaN(allNumberClickers[i].value)){
      allNumberClickers[i].value = 1
    }
  }
  // ~~~ select random chars from each array ~~~ //
  for (i = 0; i < document.getElementById('lowerCaseN').value; i++){
    // console.log('lowerCaseN: '+  document.getElementById('lowerCaseN').value);
    let randomChar = Math.floor(Math.random()*passLowerLetters.length)
    unmixedPass.push(passLowerLetters[randomChar])
  }
  for (i = 0; i < document.getElementById('UpperCaseN').value; i++){
    // console.log('UpperCaseN: '+  document.getElementById('UpperCaseN').value);
    let randomChar = Math.floor(Math.random()*passUpperLetters.length)
    unmixedPass.push(passUpperLetters[randomChar])
  }
  for (i = 0; i < document.getElementById('charsN').value; i++){
    // console.log('charsN: '+  document.getElementById('charsN').value);
    let randomChar = Math.floor(Math.random()*passChars.length)
    unmixedPass.push(passChars[randomChar])
  }
  for (i = 0; i < document.getElementById('numsN').value; i++){
    // console.log('numsN: '+  document.getElementById('numsN').value);
    let randomChar = Math.floor(Math.random()*passDigits.length)
    unmixedPass.push(passDigits[randomChar])
  }


  finalPassword = shufflePass(unmixedPass)
  document.getElementById('footer').innerHTML = `Generated Password is:`;
  document.getElementById('showPass').innerHTML = `${finalPassword.join('')}`;

})

// ~~~~~~~~~~~~~~~~ connect range input to numbers input ~~~~~~~~~~~~~~~~ //
function updateValue (e) {
let sibling = e.target.previousElementSibling || e.target.nextElementSibling;
sibling.value = e.target.value;
}
// ~~~~~~~~~~~~~~~~ connect range input to numbers input - End~~~~~~~~~~~~~~~~ //
function resetValues(){
  unmixedPass = [];
  finalPassword = [];
  indexArray = [];
}
// ~~~ using destructuring to shuffles the password ~~~ //
function shufflePass(rawPassword) {
  console.log('rawPassword b4: ' + rawPassword);
  console.log('rawPassword len: ' + rawPassword.length);
  for(let i=0; i<rawPassword.length; i++){
    const randomNum = Math.floor(Math.random()*(i+1));
    [rawPassword[i], rawPassword[randomNum]] = [rawPassword[randomNum], rawPassword[i]]
    console.log("i=" + i);
    console.log("randomNum=" + randomNum);
    console.log(rawPassword);
  }
  return rawPassword
  // console.log(rawPassword);
}