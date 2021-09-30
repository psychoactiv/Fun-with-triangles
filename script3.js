const input = document.querySelectorAll(".all");
const handle = document.querySelector(".handle");
const output = document.querySelector(".output");

function calc(a, b) {
  const ans = Math.sqrt(a * a + b * b);
  const ans2 = ans.toFixed(2);
  output.innerText = "Hypotenuse is " + ans2 + "cm";
}

function funcCall() {
  if (Number(input[0].value) > 0 && Number(input[1].value) > 0) {
    calc(Number(input[0].value), Number(input[1].value));
  } else if (input[0].value == 0 ||  Number(input[1].value) == 0) {
    output.innerText = "values should be grater than zero";
  } else {
    output.innerText = "Please enter positve Numbers";
  }
}
handle.addEventListener("click", funcCall);
