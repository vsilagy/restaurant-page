export default function NavBar() {
  const content = document.getElementById("content");
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const logo = document.createElement("h1");
  logo.textContent = "delish";
  logo.classList.add("logo");

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const home = document.createElement("button");
  home.textContent = "Home";
  home.classList.add("btn");
  home.setAttribute("id", "home");

  const menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.classList.add("btn");
  menu.setAttribute("id", "menu");

  const contact = document.createElement("button");
  contact.textContent = "Contact";
  contact.classList.add("btn");
  contact.setAttribute("id", "contact");

  nav.appendChild(logo);
  nav.appendChild(buttons);
  buttons.appendChild(home);
  buttons.appendChild(menu);
  buttons.appendChild(contact);
  content.appendChild(nav);
}
