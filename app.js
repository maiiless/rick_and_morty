

fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(data => data.results.forEach(
      result => document.querySelector(".card-container").innerHTML += `
      <div class="card">
            <div class="box1">
                <img src="${result.image}">
            </div>
            <div class="box2">
                <p>
                    <span>${result.name}</span>
                    <span>Status: ${result.status}</span>
                    <span>Specie: ${result.species}</span>
                    <span>Type: ${result.type}</span>
                    <span>Gender: ${result.gender}</span>
                    <span>Origin Name: ${result.location.name}</span>
                </p>
            </div>
      </div>`))
    .catch(error => console.log(error));

