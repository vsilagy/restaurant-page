import "./style.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

const content = document.getElementById("content");
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

Home();

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTab);
});

function changeTab(e) {
  const targetTab = e.target;

  changeActiveTab(e);

  if (targetTab.id === "home") {
    content.innerHTML = "";
    Home();
  } else if (targetTab.id === "menu") {
    content.innerHTML = "";
    Menu();
  } else if (targetTab.id === "contact") {
    content.innerHTML = "";
    Contact();
  }
}

function changeActiveTab(e) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  e.target.classList.add("active");
}
