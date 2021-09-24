const input = document.querySelectorAll(".all");
const handle = document.querySelector(".handle");
const output = document.querySelector(".output");

function calc(a, b) {
  const ans = Math.sqrt(a * a + b * b);
  output.innerText = "Hypotenuse is" + ans;
}

function funcCall() {
  calc(Number(input[0].value), Number(input[1].value));
}
handle.addEventListener("click", funcCall);
