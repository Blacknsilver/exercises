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
const deleteMovieModal = document.getElementById("delete-modal");
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}; // If there are movies, hide the "your movie database" message up top

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1); // Items will move forward by 1 space after the target is deleted
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible"); // Removing this is not necessary because this modal cannot be visible when this function executes
  toggleBackdrop();
  const cancelDeletionButton =
    deleteMovieModal.querySelector(".button--passive");
  const confirmDeletionButton =
    deleteMovieModal.querySelector(".button--danger");
  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
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
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
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

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};
//open Modal if it's closed and vice-versa

const cancelAddMovieHandler = () => {
  closeMovieModal();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie); // Adds a new movie to the movies array.
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};
// Whenever the user clicks on the backdrop, turn its visibility off.

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
