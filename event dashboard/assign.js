const form = document.getElementById("form");
const eventsContainer = document.querySelector(".events");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = eventtitle.value;
  const date = eventdate.value;
  const cate = category.value;
  const desc = description.value;

  addEventCard(title, date, cate, desc);
  form.reset();
});

function addEventCard(title, date, cate, desc) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${title}</h2>
    <p>${date}</p>
    <p>${cate}</p>
    <p>${desc}</p>
    <div class="deletebutton">x</div>
  `;

  card.querySelector(".deletebutton").addEventListener("click", function () {
    card.remove();
  });

  eventsContainer.appendChild(card);
}

const clearBtn = eventsContainer.querySelectorAll("button")[0];
clearBtn.addEventListener("click", function () {
  document.querySelectorAll(".card").forEach(card => card.remove());
});

document.addEventListener("keydown", (event) => {
  const keyDisplay = document.querySelector(".dom");
  if (keyDisplay) {
    keyDisplay.innerText = "Key Pressed: " + event.key;
  }
});
