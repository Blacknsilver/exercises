const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.body.children[1];
// const addMovieModal = document.querySelector('add-modal');
const startAddMovieButton = document.querySelector("header button");
// querySelector.lastElementChild; would also work
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// Puts all the user inputs in an array-like object.
const entryTextSection = document.getElementById("entry-text");
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}; // If there are movies, hide the "your movie database" message up top

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class ="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
   `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const clearMovieInputs = () => {
  // userInputs[0].value = "";  // This also works
  for (const userInput of userInputs) {
    userInput.value = ""; // Clears the current user input from the "add new movie" screen.
  }
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};
//open Modal if it's closed and vice-versa

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};
// If the user has clicked on add movie and clicks cancel, this turns the backdrop off.

const addMovieHandler = () => {
  const titleValue = userInputs[0].value; // this will be an input element so we will have a value property
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" || // .trim removes excess white space at the beginning and end of the input
    imageUrlValue === "" ||
    ratingValue === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  } // Validates whether the user inputs are valid.
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie); // Adds a new movie to the movies array.
  toggleMovieModal();
  clearMovieInputs();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};
// Whenever the user clicks on the backdrop, turn its visibility off.

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
