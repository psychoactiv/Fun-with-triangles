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
  let ans = base * height * 0.5;
  output.innerText =
    "This the area of the triangle of the given values:- " + ans;
}
