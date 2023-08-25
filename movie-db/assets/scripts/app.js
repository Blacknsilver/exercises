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

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};
//open Modal if it's closed and vice-versa

startAddMovieButton.addEventListener("click", toggleMovieModal);
