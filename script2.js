const formData = document.querySelector(".newForm");
const button = document.querySelector(".select");
const output = document.querySelector(".output");
const ans = ["90", "right angled", "50", "180"];

button.addEventListener("click", function newFunc() {
  let store = new FormData(formData);
  var i = 0;
  var score = 0;

  for (let value of store.values()) {
    if (value === ans[i]) {
      score++;
    }
    i++;
  }

  output.innerText = "Your score is " + score + " out of 4";
});
