const lista = document.querySelectorAll('.playlist section')
const container = document.querySelector('.playlist')
const sua_bibioteca = document.querySelector('.sua_biblioteca')


container.addEventListener('scroll', function (){
console.log('cheguei ' + lista[0].getBoundingClientRect().top)
    if(lista[0].getBoundingClientRect().top < 251){
        sua_bibioteca.classList.add('sombra')
        
    } else if(lista[0].getBoundingClientRect().top >= 251){
        sua_bibioteca.classList.remove('sombra')
        
    }
})

/* npm install -g json-server@0.17.4, depois roda o servidor de novo com json-server --watch api-artists/artists.json --port 3000 */

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})

//json-server --watch api-artists/artists.json --port 3000