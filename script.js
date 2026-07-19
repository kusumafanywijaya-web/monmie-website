console.log("🚀 Welcome to MONMIE!");

const title = document.querySelector("h1");

if (title) {
  title.addEventListener("click", () => {
    title.innerHTML = "🚀 MONMIE TO THE MOON!";
    title.style.color = "#FFD700";
  });
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.08)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
