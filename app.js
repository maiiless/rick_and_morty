
function callData(page) {
  document.querySelector(".card-container").innerHTML = '';
  fetch('https://rickandmortyapi.com/api/character/?page='+page)
  .then(response => response.json())
  .then(data => data.results.forEach( function (element, index, array) {
    console.log(element);  
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
    document.querySelector(".card-container").innerHTML += html; }))
    .catch(error => console.log(error));
}

function callPagination() {
  var pagination = '';
  for(let i = 1; i <= 42; i++) {
    pagination += `<a href="#" onclick="callData(${i})" class="page">${i}</a>`
  }
  document.querySelector(".pagination").innerHTML = pagination;
}

window.onload = function() {
  callData(1);
  callPagination();
};

    

