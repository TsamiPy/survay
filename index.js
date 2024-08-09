const noBtn = document.getElementById('no')
const yesBtn = document.getElementById('yes')

noBtn.addEventListener("mouseover",() => {
  const left = (Math.floor(Math.random()*(1690))+10).toString()+"px";
  let top = (Math.floor(Math.random()*(690))+10).toString()+"px";
  noBtn.style.marginLeft = left
  noBtn.style.marginTop = top
})
yesBtn.addEventListener("click",() => {
  document.querySelectorAll('button').forEach(button => {
    button.remove();
  });
  
  alert("תגובתך נרשמה\nתודה שענית על הסקר")
})


