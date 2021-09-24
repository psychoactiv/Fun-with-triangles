const submit = document.querySelector(".submit");
const input = document.querySelectorAll(".same");
const output = document.querySelector(".output");

function newFunc() {
  let newVar = 0;
  for (i = 0; i < input.length; i++) {
    newVar += Number(input[i].value);
  }
 
  anotherFunction(newVar);
}

function anotherFunction(value) {
  if (value === 180) {
    output.innerText = " Yes,  it is a triangle";
  } else {
    output.innerText = "no, it is not a triangle";
  }
}

submit.addEventListener("click", newFunc);
