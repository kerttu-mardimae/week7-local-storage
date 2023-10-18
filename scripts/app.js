const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseYear = document.querySelector('.userInputDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const releaseYearToDisplay = document.querySelector('.favoriteMovieDate');

let titleInStorage =localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseYearInStorage = localStorage.getItem('releaseYear');

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    releaseYearToDisplay.textContent = releaseYearInStorage;
    container.style.backgroundImage = `url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseYearInput = movieReleaseYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseYear', releaseYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    releaseYearToDisplay.textContent = releaseYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(190, 190, 219, 0.582), rgba(17, 17, 17, 0.534)),
    url('${posterUrlInput}')`; 
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseYear.value = '';
});