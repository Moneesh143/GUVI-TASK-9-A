let thefinalResult = document.getElementById("result");

function display(num) {
  thefinalResult.value = thefinalResult.value + num;
}

function Calculate() {
  try {
    thefinalResult.value = eval(thefinalResult.value);
  } catch (err) {
    alert("IT IS NOT A NUMBER");
  }
}

function Clear() {
  thefinalResult.value = "";
}
function Delete() {
  thefinalResult.value = thefinalResult.value.slice(0, -1);
}
