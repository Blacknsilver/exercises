const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.body.children[1];
// const addMovieModal = document.querySelector('add-modal');

const startAddMovieButton = document.querySelector("header button");
// querySelector.lastElementChild; would also work

const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};
//open Modal if it's closed and vice-versa

const cancelAddMovie = () => {
  toggleMovieModal();
};
// If the user has clicked on add movie and clicks cancel, this turns the backdrop off.

const backdropClickHandler = () => {
  toggleMovieModal();
};
// Whenever the user clicks on the backdrop, turn its visibility off.

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
