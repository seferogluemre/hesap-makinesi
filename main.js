const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
const sound = document.getElementById("sound-effect");

let buttonsArray = [
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "*",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "-",
  "=",
  "C",
];

let values = [];

let cleanValues;

for (let i = 0; i < buttonsArray.length; i++) {
  let button = document.createElement("button");
  button.textContent = buttonsArray[i];
  buttons.appendChild(button);
}

let calcButtons = document.querySelectorAll(".buttons button");
calcButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    calculateArray(e.target.textContent);
  });
});

let calculateArray = (value) => {
  if (value === "C") {
    values = [];
    display.textContent = "0";
    return;
  }
  if (value != "=") {
    values.push(value);
    cleanValues = values.join("");
    display.textContent = cleanValues;
  } else {
    let result = eval(cleanValues);
    display.textContent = result;
    values = [];
  }
};

buttons.addEventListener("click", (e) => {
  sound.play();
});

// Animation Title
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("animated-heading");
  const text = heading.innerText;
  heading.innerHTML = text
    .split("")
    .map(
      (char, i) => `<span style="animation-delay: ${i * 0.1}s">${char}</span>`
    )
    .join("");

  const spans = heading.querySelectorAll("span");
  setTimeout(() => {
    spans.forEach((span) => {
      span.classList.add("show");
    });
  }, 100);

  setInterval(() => {
    spans.forEach((span) => {
      span.classList.remove("show");
      void span.offsetWidth; // Trigger a reflow to reset animation
      span.classList.add("show");
    });
  }, 4000); // Repeat every 4 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("themeToggle");

  // Tema durumunu kontrol etmek için localStorage kullan
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleButton.textContent = "Switch to Light Mode";
    themeToggleButton.classList.add("dark-mode");
    document.querySelector(".calculator").classList.add("dark-mode");
    document.querySelector(".display").classList.add("dark-mode");
    document.querySelector(".buttons").classList.add("dark-mode");
  }

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".calculator").classList.toggle("dark-mode");
    document.querySelector(".display").classList.toggle("dark-mode");
    document.querySelector(".buttons").classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      themeToggleButton.textContent = "Switch to Light Mode";
      themeToggleButton.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      themeToggleButton.textContent = "Switch to Dark Mode";
      themeToggleButton.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
