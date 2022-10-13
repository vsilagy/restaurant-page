export default function Home() {
  const content = document.getElementById("content");
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const heading = document.createElement("h2");
  heading.textContent = "Exquisite dining since 1989";

  const textOne = document.createElement("p");
  textOne.textContent =
    "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.";

  const booking = document.createElement("button");
  booking.classList.add("cta-btn");
  booking.textContent = "Book a Table";

  hero.appendChild(heading);
  hero.appendChild(textOne);
  hero.appendChild(booking);
  content.appendChild(hero);
}
