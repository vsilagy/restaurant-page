export default function Footer() {
  const content = document.getElementById("content");
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const text = document.createElement("p");
  text.textContent = "Made by vsilagy";

  footer.appendChild(text);
  content.appendChild(footer);
}
