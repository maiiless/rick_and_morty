function callCharacter(page) {
  document.querySelector(".card-container").innerHTML = '';
  fetch('https://rickandmortyapi.com/api/character/?page='+page)
  .then(response => response.json())
  .then(data => data.results.forEach( function (element, index, array) { 
    let html = `
      <article class="card">
            <div class="box1">
                <img src="${element.image}">
            </div>
            <div class="box2">
                <span>${element.name}</span> 
                <div>`;
    if (element.status == 'unknown') { html += '<span class="circle unknown"></span>'}
    else if (element.status == 'Alive') {html +='<span class="circle alive"></span>'}
    else {html +='<span class="circle dead"></span>'}
    html +=`<span>${element.status} - ${element.species} - ${element.gender}</span></div>
                
                <span>From ${element.location.name}</span>
            </div>
      </article>`;
    document.querySelector(".card-container").innerHTML += html;
  
  }))
    .catch(error => console.log(error));
}


function callLocation(page) {
  document.querySelector(".card-container").innerHTML = '';
  fetch('https://rickandmortyapi.com/api/location?page='+page)
  .then(response => response.json())
  .then(data => data.results.forEach( function (element, index, array) {
    let html = `
      <article class="card">
            <div class="box1">
                <img src="">
            </div>
            <div class="box2">
                <span>${element.name}</span>
                <span>${element.type}</span>
                <span>${element.dimension}</span>
            </div>
      </article>`;
    document.querySelector(".card-container").innerHTML += html; }))
    .catch(error => console.log(error));
}


function callPagination() {
  var pagination = '';
  for(let i = 1; i <= 10; i++) {
    pagination += `<a href="#" onclick="callCharacter(${i})" class="page">${i}</a>`
  }
  document.querySelector(".pagination").innerHTML = pagination;

  
}

window.onload = function() {
  callPagination();
  callCharacter(1);
};

    

