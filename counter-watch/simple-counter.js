let counterValue = 0;
const counterDigit = document.getElementById("simple-counter-number");

function updateCounter() {
    counterDigit.innerHTML = counterValue;
    if (counterValue < 0){
        counterDigit.style.color = "#e63946"
    }else if(counterValue > 0){
        counterDigit.style.color = "#2a9d8f"
    }else{
        counterDigit.style.color = "#ffffff"
    }

}

function addToCounter() {
  counterValue += 1;
  updateCounter();
}

function decreaseToCounter() {
  counterValue -= 1;
  updateCounter();
}

function resetCounter() {
  counterValue = 0;
  updateCounter();
}

buttonList = document.getElementById("counter-buttons").children;
function_list = [decreaseToCounter, resetCounter, addToCounter];
for (let index = 0; index < buttonList.length; index++) {
  const button = buttonList[index];
  button.addEventListener("click", function_list[index]);
}
