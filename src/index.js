import "./style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const content = document.getElementById("content");
content.classList.add("container");

loadHome();

document.body.addEventListener("click", (e) => {
  if (e.target.id === "home") {
    content.innerHTML = "";
    loadHome();
  } else if (e.target.id === "menu") {
    content.innerHTML = "";
    NavBar();
    Menu();
    Footer();
  } else if (e.target.id === "contact") {
    content.innerHTML = "";
    NavBar();
    Contact();
    Footer();
  }
});

function loadHome() {
  NavBar();
  Home();
  Footer();
}
