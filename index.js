// const API_KEY = "9bd7fc8e-5e8b-4499-a9e1-e3f3568e8f55"
// const API_URL_POPULAR = 
// "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1"

// getMovies(API_URL_POPULAR);

// async function getMassive(url){
// const response = await fetch(url, 
//     {
//         headers: {
//             "Content-Type": "aplication/json",
//             'X-API-KEY': API_KEY,
//         },
//     });

// //     const respData = await response.json();
// //     console.log(respData)
// }
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': '9bd7fc8e-5e8b-4499-a9e1-e3f3568e8f55',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => showMovies(json)) // Pass the JSON data to showMovies function
    .catch(err => console.log(err));

function showMovies(json) {
    const moviesEl = document.querySelector(".movies");

    json.items.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
            <div class="movie-cover-inner">
                <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}"/>
                <div class="movie-cover-darkened"></div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.nameRu}</div>
                <div class="movie-category">${movie.genres.map(
                    (genre) => `${genre.genre}`
                )}</div>
                <div class="movie-avarage movie-avarage--green">${movie.rating}</div>
            </div>`;
        moviesEl.appendChild(movieEl);
    });
}
