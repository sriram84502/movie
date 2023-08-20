let api = 'https://www.omdbapi.com/?apikey=a28f66ee&t='

var title = document.getElementById('title');
var release = document.getElementById('release');
var director = document.getElementById('director');
var actor = document.getElementById('actor');
var genre = document.getElementById('genre');
var desc = document.getElementById('desc');
var collection = document.getElementById('collection');
var awards = document.getElementById('awards');
var writer = document.getElementById('writer');
var img = document.getElementById('img');
var imdbr = document.getElementById('imdbr');
var container = document.getElementById('container')
var loader = document.getElementById('loader')
container.classList.add('container-none');
loader.classList.add('container-none');

function Search(){
    loader.classList.remove('container-none');
    let moviename = document.getElementById('input-field');
    let query = api+moviename.value;
    fetch(query).then((data)=>{
        return data.json();
    }).then((data)=>{
        loader.classList.add('container-none');
        container.classList.remove('container-none');
        title.innerText = data.Title;
        release.innerText = data.Released;
            director.innerText = data.Director;
            actor.innerText = data.Actors;
            genre.innerText = data.Genre;
            desc.innerText = data.Plot;
            collection.innerText = data.BoxOffice;
            awards.innerText = data.Awards;
            writer.innerText = data.Writer;
            img.src = data.Poster;
            imdbr.innerHTML = data.imdbRating;
        console.log(data);
    })
}