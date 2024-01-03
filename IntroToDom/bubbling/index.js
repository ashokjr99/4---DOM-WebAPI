let button = document.getElementById("button");
let container = document.getElementById("container");

function first(e) {
  e.stopPropagation();
  alert(1);
}

function second() {
  alert(2);
}

button.addEventListener("click", first);
container.addEventListener("click", second);
