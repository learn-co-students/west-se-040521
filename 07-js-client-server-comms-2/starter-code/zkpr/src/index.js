// set const for base URL
const BASE_URL = "http://localhost:3000/animals"

/********** Event Listeners **********/
document
  .querySelector("#animal-form")
  .addEventListener("submit", handleAnimalFormSubmit);

document
  .querySelector("#animal-list")
  .addEventListener("click", handleAnimalListClick);

/********** Event Handlers **********/
// Create Animal
function handleAnimalFormSubmit(event) {
  // Step 0: always prevent default for form submit events
  event.preventDefault();

  // Step 1: get user input from the form input fields
  const animalObj = {
    name: event.target.name.value,
    imageUrl: event.target.image_url.value,
    description: event.target.description.value,
    donations: 0,
  };

  // TODO: create animal on the server
  const config = {
    method: "POST", // the HTTP verb for the request
    headers: { // headers let us provide additonal 'meta-data' about the request
      "Content-Type": "application/json" // tells the server what format we're sending in the BODY of the request
    },
    body: JSON.stringify(animalObj) // the object which we're sending to the server
  }
  fetch(BASE_URL, config)
    .then(res => res.json())
    .then(newAnimal => {
      renderOneAnimal(newAnimal) // pessimistically rendered from server response
    })
  // Step 2: slap it on the DOM
  // renderOneAnimal(animalObj); // optimistic rendering

  // (optional) Step 3: clear the input fields
  event.target.reset();
}

function handleAnimalListClick(event) {
  if (event.target.dataset.action === "delete") {
    // Delete Animal
    const button = event.target;

    // traverse the DOM to find elements we care about, relative to the button
    const card = button.closest(".card");

    // remove the animal card
    card.remove();  // optimistic rendering

    // TODO: delete animal from the server
    console.log(card.dataset.id)
    const config = {
      method: "DELETE"
    }
    fetch(BASE_URL + `/${card.dataset.id}`, config)
  } else if (event.target.dataset.action === "donate") {
    // Update Animal
    const button = event.target;

    // traverse the DOM to find elements we care about, relative to the button
    const card = button.closest(".card");
    const donationCountSpan = card.querySelector(".donation-count");

    // get the donation amount from the DOM
    const donationCount = parseInt(donationCountSpan.textContent);

    // update the DOM
    // donationCountSpan.textContent = donationCount + 10; // optimistic rendering

    // TODO: update animal on the server
    const newDonation = {
      donations: donationCount + 10
    }
    const config = {
      method: "PATCH", // the HTTP verb for the request
      headers: { // headers let us provide additonal 'meta-data' about the request
        "Content-Type": "application/json" // tells the server what format we're sending in the BODY of the request
      },
      body: JSON.stringify(newDonation) // the object which we're sending to the server
    }
    fetch(BASE_URL + `/${card.dataset.id}`, config)
      .then(res => res.json())
      .then(updatedAnimal => {
        donationCountSpan.textContent = updatedAnimal.donations // pessimistically renders donations from the server
      })

  }
}

/********** Render Functions **********/
// takes one animal object and creates the necessary DOM elements
function renderOneAnimal(animalObj) {
  // step 1. create the outer element using createElement (& assign necessary attributes)
  const card = document.createElement("li");
  card.className = "card";
  card.dataset.id = animalObj.id
  // step 2. use innerHTML to create all of its children
  card.innerHTML = `
  <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
  <div class="content">
    <h4>${animalObj.name}</h4>
    <p>
      $<span class="donation-count">${animalObj.donations}</span> Donated
    </p>
    <p>${animalObj.description}</p>
  </div>
  <div class="buttons">
    <button data-action="donate">Donate $10</button>
    <button data-action="delete">Set Free</button>
  </div>
  `;

  // step 3. slap it on the DOM!
  document.querySelector("#animal-list").append(card);
}

/********** Initial Render **********/
function initialize() {
  // GET animals
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((animalArray) => {
      // for each animal in the array
      animalArray.forEach((animal) => {
        // render the animal to the DOM
        renderOneAnimal(animal);
      });
    });
}

initialize();
