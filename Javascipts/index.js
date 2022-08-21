const checkBoxes = document.querySelectorAll("input[name=checkbox")
console.log(checkBoxes)

//Handle Events

function handleDailyList() {
  checkBoxes.accent.color = "green"
}

//Event Listeners
for (const box of checkBoxes) {
  box.addEventListener('click', function onClick() {
    handleDailyList();
  });
}
