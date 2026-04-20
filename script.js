const form = document.getElementById("eventForm");
const container = document.getElementById("eventContainer");

// Add Event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent reload

  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  createCard(title, desc);

  form.reset();
});

// Create Event Card
function createCard(title, desc) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <button class="deleteBtn">Delete</button>
  `;

  container.appendChild(card);
}

// Event Delegation
container.addEventListener("click", function (e) {

  // Delete button
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }

  // Highlight card
  if (e.target.classList.contains("card")) {
    e.target.classList.toggle("highlight");
  }
});

// Mouseover effect
container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("card")) {
    e.target.style.backgroundColor = "#d1ecf1";
  }
});

// Mouseout reset
container.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("card")) {
    e.target.style.backgroundColor = "";
  }
});

// Keydown event example
document.addEventListener("keydown", function (e) {
  console.log("Key pressed:", e.key);
});
