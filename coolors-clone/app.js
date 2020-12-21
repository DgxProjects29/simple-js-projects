function generateRandomHexColor() {
  const hex_letters = ["A", "B", "C", "D", "E", "F"];
  const hex_numbers = Array.from({ length: 10 }, (_, v) => v.toString());
  const hex_values = hex_letters.concat(hex_numbers);

  hex_chars = [];
  for (let index = 0; index < 6; index++) {
    hex_chars.push(hex_values[Math.floor(Math.random() * hex_values.length)]);
  }

  const reducer = (hexString, currValue) => hexString + currValue;
  return hex_chars.reduce(reducer);
}

function changeColorRects() {
  rectColorElements = document.getElementsByClassName("color-rect");

  for (const rectColorElement of rectColorElements) {
    let random_color = generateRandomHexColor();
    rectColorElement.style.backgroundColor = `#${random_color}`;
    rectColorElement.firstElementChild.
      innerHTML = `<span>#${random_color}</span>`;
  }
}

document.getElementById("generate-button").addEventListener(
    "click", changeColorRects
);

document.getElementById("generate-nav-button").addEventListener(
  "click", changeColorRects
);

document.getElementById("hamburger-icon").addEventListener(
  "click", () => {
    document.getElementById('sidebar').classList.add("sidebar--active")
  }
)

document.getElementById("close-sidebar").addEventListener(
  "click", () => {
    document.getElementById('sidebar').classList.remove("sidebar--active")
  }
)

changeColorRects();