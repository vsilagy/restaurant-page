import mapImage from "../assets/map.png";

export default function Contact() {
  const content = document.getElementById("content");
  const contact = document.createElement("div");
  contact.classList.add("hero");

  const heading = document.createElement("h2");
  heading.textContent = "Our Address";
  const address = document.createElement("p");
  address.innerHTML = `Adress: 740 Madison Ave, <br>
    New York, <br>
    NY 10065 <br>
    Phone: (212) 582-2000`;
  const map = new Image();
  map.classList.add("map");
  map.src = mapImage;

  contact.appendChild(heading);
  contact.appendChild(address);
  contact.appendChild(map);
  content.appendChild(contact);
}
