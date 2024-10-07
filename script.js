// @ts-check
'use strict';

const searchInput = document.querySelector("[data-search]")
const results = document.querySelector("list");
const url = "https://swapi.dev/api/people";

let users = []

//  function characterDisplay() {
//      results.innerHTML = '';
//  }

searchInput.addEventListener('keyup', (e) =>{
const value = e.target.value
users.forEach((users) =>{
    const isVisible = users.name.includes(value) || users.films.includes(value)
    users.element.classList.toggle("hide",!isVisible);
    })
});



fetch(url).then((res) => {
    res.json().then((data) => {
        users = data.results.forEach((result) => {
            console.log(data)
            const person = document.createElement("li");
            person.innerText = result.name;
            const personList = document.getElementById("list");
            personList.appendChild(person);
            const personItemsList = document.createElement("ul");

            // create list item for films
            const filmsItem = document.createElement("li");

            // create list item for vehicles

            const vehiclesItem = document.createElement("li");
            // create list item for starships
            const starshipsItem = document.createElement("li");
            // append list items to list
            personItemsList.appendChild(filmsItem);
            personItemsList.appendChild(vehiclesItem);
            personItemsList.appendChild(starshipsItem);

            filmsItem.innerText = `${result.films.length} films`;
            vehiclesItem.innerText = `${result.vehicles.length} vehciles`;
            starshipsItem.innerText = `${result.starships.length} starships`;
            person.appendChild(personItemsList)
            personItemsList.classList.add('items')
            personList.classList.add("items");

            return {name: result.name, films: filmsItem.innerText, vehicles: vehiclesItem.innerText, starships:  starshipsItem.innerText, element: personList}
        });
    });
});





