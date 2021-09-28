const input = document.querySelectorAll(".all");
const handle = document.querySelector(".handle");
const output = document.querySelector(".output");

function calc(a, b) {
  const ans = Math.sqrt(a * a + b * b);
  const ans2 = ans.toFixed(2);
  output.innerText = "Hypotenuse is " + ans2;
}

function funcCall() {
  calc(Number(input[0].value), Number(input[1].value));
}
handle.addEventListener("click", funcCall);
