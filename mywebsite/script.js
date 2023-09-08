function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const githubButton = document.getElementById("githubButton");

githubButton.addEventListener("mouseover", function () {
  githubButton.innerText = "Secret";
});

githubButton.addEventListener("mouseout", function () {
  githubButton.innerText = "Github";
});