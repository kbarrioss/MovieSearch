const API_KEY = "28dd3adb"; 
const API_URL = "https://www.omdbapi.com/?apikey=" + API_KEY + "&s=";

async function searchMovies() {
    const query = document.getElementById("searchInput").value;
    if (query.trim() === "") {
        alert("Por favor ingresa un título de película");
        return;
    }

    const response = await fetch(API_URL + query);
    const data = await response.json();

    if (data.Response === "True") {
        displayMovies(data.Search);
    } else {
        document.getElementById("moviesContainer").innerHTML = "<p>No se encontraron resultados</p>";
    }
}

function displayMovies(movies) {
    const container = document.getElementById("moviesContainer");
    container.innerHTML = "";

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        container.appendChild(movieElement);
    });
}
function searchMovies() {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() === "") return;

    fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=28dd3adb`)
        .then(response => response.json())
        .then(data => {
            if (data.Search) {
                displayMovies(data.Search);
                document.querySelector("header").classList.add("header-small"); 
            } else {
                alert("No se encontraron películas");
            }
        })
        .catch(error => console.error("Error al obtener películas:", error));
}

