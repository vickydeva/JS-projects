let title = document.getElementById("title");
const director = document.getElementById("director");
let actors = document.getElementById("actors");
let award = document.getElementById("awards");
let rating = document.getElementById("rating");
let year = document.getElementById("year");
let poster = document.getElementById("poster");
not.classList.add("remove");

async function searchMovie() {
  let visible = document.querySelector(".output-container");
  const not = document.getElementById("not");
  let movieName = document.getElementById("search-box");
  const link = "https://www.omdbapi.com/?apikey=99f8a6ec&t=" + movieName.value;
  const data = await fetch(link);
  const json = await data.json();
  console.log(json);
  if (json.Title) {
    visible.classList.remove("hidden");
    title.innerText = json.Title;
    year.innerText = json.Released;
    rating.innerText = json.imdbRating;
    genre.innerText = json.Genre;
    director.innerText = json.Director;
    actors.innerText = json.Actors;
    award.innerText = json.Awards;
    poster.src = json.Poster;
    desc.innerText = json.Plot;
  } else {
    not.classList.remove("remove");
    visible.classList.add("hidden");
  }
  movieName.value = "";
}
