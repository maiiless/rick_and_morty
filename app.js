

fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(data => data.results.forEach(
      result => document.querySelector(".card-container").innerHTML += `
      <div class="card">
            <img src="${result.image}">
            <p>
                <span>Name: ${result.name}</span>
                <span>Status: ${result.status}</span>
                <span>Specie: ${result.species}</span>
                <span>Type: ${result.type}</span>
                <span>Gender: ${result.gender}</span>
                <span>Origin Name: ${result.location.name}</span>
            </p>
      </div>`))
    .catch(error => console.log(error));

