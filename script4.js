const input = document.querySelectorAll(".inp");
const handle = document.querySelector(".handle");
const output = document.querySelector(".output");

handle.addEventListener("click", generate);
function generate() {
  let base = Number(input[0].value);
  let height = Number(input[1].value);
  nextFunc(base, height);
}

function nextFunc(base, height) {
  if (base > 0 && height > 0) {
    let ans = base * height * 0.5;
    output.innerText =
      "The area of the triangle of the given values is:- " + ans + " cm square";
  } else if (base == 0 || height == 0) {
    output.innerText = "Values should be grater than zero";
  } else {
    output.innerText = "Please enter positive numbers in the input box";
  }
}
