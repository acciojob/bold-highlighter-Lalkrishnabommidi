function highlight() {
  const elements = document.querySelectorAll("strong");

  elements.forEach((element) => {
    element.style.color = "rgb(0, 128, 0)";
  });
}

function return_normal() {
  const elements = document.querySelectorAll("strong");

  elements.forEach((element) => {
    element.style.color = "rgb(0, 0, 0)";
  });
}