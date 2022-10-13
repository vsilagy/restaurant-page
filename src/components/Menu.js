import menuImg from "../assets/menu.jpg";

export default function Menu() {
  const content = document.getElementById("content");
  const menu = document.createElement("div");
  menu.classList.add("hero");
  menu.classList.add("menu");
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("cta-btn");
  menuBtn.textContent = "View Menu";
  const heading = document.createElement("h2");
  heading.textContent = "Our Menu";
  const textOne = document.createElement("p");
  textOne.textContent =
    "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.";

  const textTwo = document.createElement("p");
  textTwo.textContent = `All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.`;

  const chef = new Image();
  chef.src = menuImg;
  chef.classList.add("chef");

  menu.appendChild(heading);
  menu.appendChild(textOne);
  menu.appendChild(menuBtn);
  menu.appendChild(chef);
  menu.appendChild(textTwo);
  content.appendChild(menu);
}
