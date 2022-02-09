<script setup>
import API from "../api/route.js";
import { ref } from "vue";
/*object.enties transform en tableau*/
const listPlanets = ref([]);
const newListPlanets = ref([]);
const listStarships = ref([]);
const newListStarships = ref([]);
const listVehicles = ref([]);
const newListVehicles = ref([]);
const listPeople = ref([]);
const newListPeople = ref([]);
const listFilms = ref([]);
const listSpecies = ref([]);
const newListSpecies = ref([]);
const nameClicked = ref("");
const clicked = ref(false);
const categorySelect = ref("");
const categoryClicked = ref(true);

async function PlanetsList() {
  const planets = "planets";
  if (sessionStorage.getItem(planets) == undefined) {
    listPlanets.value = (await API.apiGetPlanets("")).data;
    while (listPlanets.value.next != null) {
      const urlNextPage = listPlanets.value.next.substr(30);
      newListPlanets.value = (await API.apiGetPlanets(urlNextPage)).data;
      newListPlanets.value.results.forEach((planet) =>
        listPlanets.value.results.push(planet)
      );
      listPlanets.value.next = newListPlanets.value.next;
    }
    listPlanets.value = listPlanets.value.results;
    sessionStorage.setItem(planets, JSON.stringify(listPlanets.value));
    console.log(listPlanets.value);
  } else {
    listPlanets.value = JSON.parse(sessionStorage.getItem(planets));
  }
}
async function StarshipsList() {
  const starships = "starships";
  if (sessionStorage.getItem(starships) == undefined) {
    listStarships.value = (await API.apiGetStarships("")).data;
    while (listStarships.value.next != null) {
      const urlNextPage = listStarships.value.next.substr(32);
      newListStarships.value = (await API.apiGetStarships(urlNextPage)).data;
      newListStarships.value.results.forEach((starship) =>
        listStarships.value.results.push(starship)
      );
      listStarships.value.next = newListStarships.value.next;
    }
    listStarships.value = listStarships.value.results;
    sessionStorage.setItem(starships, JSON.stringify(listStarships.value));
  } else {
    listStarships.value = JSON.parse(sessionStorage.getItem(starships));
  }

  console.log(listStarships.value);
}
async function VehiclesList() {
  const vehicles = "vehicles";
  if (sessionStorage.getItem(vehicles) == undefined) {
    listVehicles.value = (await API.apiGetVehicles("")).data;
    while (listVehicles.value.next != null) {
      const urlNextPage = listVehicles.value.next.substr(30);
      newListVehicles.value = (await API.apiGetVehicles(urlNextPage)).data;
      newListVehicles.value.results.forEach((vehicle) =>
        listVehicles.value.results.push(vehicle)
      );
      listVehicles.value.next = newListVehicles.value.next;
    }
    listVehicles.value = listVehicles.value.results;
    sessionStorage.setItem(vehicles, JSON.stringify(listVehicles.value));
  } else {
    listVehicles.value = JSON.parse(sessionStorage.getItem(vehicles));
  }

  console.log(listVehicles.value);
}
async function PeopleList() {
  const people = "people";
  if (sessionStorage.getItem(people) == undefined) {
    listPeople.value = (await API.apiGetPeople("")).data;
    while (listPeople.value.next != null) {
      const urlNextPage = listPeople.value.next.substr(29);
      newListPeople.value = (await API.apiGetPeople(urlNextPage)).data;
      newListPeople.value.results.forEach((people) =>
        listPeople.value.results.push(people)
      );
      listPeople.value.next = newListPeople.value.next;
    }
    listPeople.value = listPeople.value.results;
    sessionStorage.setItem(people, JSON.stringify(listPeople.value));
  } else {
    listPeople.value = JSON.parse(sessionStorage.getItem(people));
  }

  console.log(listPeople.value);
}
async function FilmsList() {
  const films = "films";
  if (sessionStorage.getItem(films) == undefined) {
    listFilms.value = (await API.apiGetFilms("")).data.results;
    sessionStorage.setItem(films, JSON.stringify(listFilms.value));
  } else {
    listFilms.value = JSON.parse(sessionStorage.getItem(films));
  }
  console.log(listFilms.value);
}
async function SpeciesList() {
  const species = "species";
  if (sessionStorage.getItem(species) == undefined) {
    listSpecies.value = (await API.apiGetSpecies("")).data;
    while (listSpecies.value.next != null) {
      const urlNextPage = listSpecies.value.next.substr(30);
      newListSpecies.value = (await API.apiGetSpecies(urlNextPage)).data;
      newListSpecies.value.results.forEach((specie) =>
        listSpecies.value.results.push(specie)
      );
      listSpecies.value.next = newListSpecies.value.next;
    }
    listSpecies.value = listSpecies.value.results;
    sessionStorage.setItem(species, JSON.stringify(listSpecies.value));
  } else {
    listSpecies.value = JSON.parse(sessionStorage.getItem(species));
  }
  console.log(listSpecies.value);
}

async function IsClicked(name){
    if(clicked.value == false){
        clicked.value = true;
        nameClicked.value = name;
    } else if(clicked.value == true && nameClicked.value != name){
        nameClicked.value = name;
    } else {
        clicked.value = false;
    }
    return await clicked;
}

async function CategorySelect(category) {
    if(categoryClicked.value == true){
        categoryClicked.value = false;
    } else {
        categoryClicked.value = true;
    }
    categorySelect.value = category;
    console.log(categorySelect.value);

}
</script>

<template>
      
    <div id="category">
        

        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Personnages"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" v-on:click='PeopleList(); CategorySelect("Personnages")'><h1 class="texte">Personnages</h1>
                <img class="flou" src="https://img.filmsactu.net/datas/films/s/t/star-wars-episode-ix/xl/star-wars-episode-ix-5fc36a969d8ba.jpg" />
            </article>
            <article id="cart">
                <article v-if="!categoryClicked" class="cart" v-for="(people, index) of listPeople" :key="index" v-on:click="IsClicked(people.name)"> <h4>{{people.name}}</h4>
                    <article v-if="clicked == true && nameClicked == people.name" v-for="(value, key) of people">
                        {{key + " : " + value}}<br>
                    </article>
                </article>
            </article>
        </section>


        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Planetes"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Planetes" v-on:click='PlanetsList(); CategorySelect("Planetes")'><h1 class="texte">Planètes</h1>
                <img class="flou" src="http://idata.over-blog.com/1/32/60/44/Starwars/PLANETES/TATOOINE/Tatooine-3.jpg" />
            </article>
            <article id="cart">
                <article v-if="!categoryClicked" class="cart" v-for="(planet, index) of listPlanets" :key="index" v-on:click="IsClicked(planet.name)"> <h4>{{planet.name}}</h4>
                    <article v-if="clicked == true && nameClicked == planet.name" v-for="(value, key) of planet">
                        {{key + " : " + value}}<br>
                    </article>
                </article>
            </article>
        </section>


        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Vehicules"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Vehicules" v-on:click='VehiclesList(); CategorySelect("Vehicules")'><h1 class="texte">Véhicules</h1>
                <img class="flou" src="https://i.pinimg.com/originals/5c/74/bd/5c74bdb7e78643598a20c01da29ab667.jpg" />
            </article>
            <article id="cart">
                <article v-if="!categoryClicked" class="cart" v-for="(vehicle, index) of listVehicles" :key="index" v-on:click="IsClicked(vehicle.name)"> <h4>{{vehicle.name}}</h4>
                    <article v-if="clicked == true && nameClicked == vehicle.name" v-for="(value, key) of vehicle">
                        {{key + " : " + value}}<br>
                    </article>
                </article>
            </article>
        </section>

        
        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Films"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Films" v-on:click='FilmsList(); CategorySelect("Films")'><h1 class="texte">Films</h1>
                <img class="flou" src="https://www.numerama.com/wp-content/uploads/2019/02/star-wars-posters.jpg" />
            </article>
            <article id="cart">
                <article v-if="!categoryClicked" class="cart" v-for="(film, index) of listFilms" :key="index" v-on:click="IsClicked(film.name)"> <h4>{{film.title}}</h4>
                    <article v-if="clicked == true && nameClicked == film.name" v-for="(value, key) of film">
                        {{key + " : " + value}}<br>
                    </article>
                </article>
            </article>
        </section>

        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Starships"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Starships" v-on:click='StarshipsList(); CategorySelect("Starships")'><h1 class="texte">Starships</h1>
                <img class="flou" src="https://i.pinimg.com/originals/0f/ac/a7/0faca7171ba07543eaa081b6b8c13639.jpg" />
            </article>
            <article id="cart">
                <article v-if="!categoryClicked" class="cart" v-for="(starship, index) of listStarships" :key="index" v-on:click="IsClicked(starship.name)"> <h4>{{starship.name}}</h4>
                    <article v-if="clicked == true && nameClicked == starship.name" v-for="(value, key) of starship">
                        {{key + " : " + value}}<br>
                    </article> 
                </article>
            </article>
        </section>


        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Species"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Species" v-on:click='SpeciesList(); CategorySelect("Species")'><h1 class="texte">Species</h1>
                <img class="flou" src="https://static.hitek.fr/img/actualite/2016/06/07/w_sullustens.jpg" />
            </article>
            <article id="cart">
                <article v-if="!categoryClicked" class="cart" v-for="(specie, index) of listSpecies" :key="index" v-on:click="IsClicked(specie.name)"> <h4>{{specie.name}}</h4>
                    <article v-if="clicked == true && nameClicked == specie.name" v-for="(value, key) of specie">
                        {{key + " : " + value}}<br>
                    </article>
                </article>
            </article>
        </section>

        
    </div>
        <p>Copyright | Nom Nom Nom Nom Nom | 2022 | Challenge 48h</p>
</template>

<style scoped>
nav {
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
    margin-bottom: 100px;
}

#category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.categoryimage {
    width: 50%;
    margin-left: 25%;
}

.section {
    width: 33%;
}


.cart {
    background-color: black;
    border: 3px solid grey;
    border-radius: 10px;
    margin-top: 30px;
    margin-right: 20px;
    width: 20%;
    color: yellow;
}

#cart {
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}

h1 {
    color: white;
    font-family: "Bebas Neue";
    font-size: 25px;
    position: absolute;
    margin-top: 10%;
    margin-left: 13%;
    z-index: 1;
}

a {
    text-decoration: none;
    color: black;
    font-family: "Bebas Neue";
    font-size: 25px;
}
button {
    border: 0;
    border-radius: 60px;
    width: 120px;
    height: 50px;
    
}
button:hover {
    background-color: #EBE501;
}
.home {
    background-color: yellow;
}
.quisuisje {
    background-color: yellow;
}


img {
    width: 350px;
    height: auto;
}

.flou {
    filter: blur(3px);
    transition-property: -webkit-filter;
    transition-duration: .5s;
    width: 100%;
    height: 100%;
}

.flou:hover, .flou:focus, .flou:active {
    filter: blur(0px);
}

p {
    color: white;
    text-align: center;
}
@font-face {
    font-family:"Star Jedi Outline";
    src:url("Starjout.eot?") format("eot"),url("Starjout.woff") format("woff"),url("Starjout.ttf") format("truetype"),url("Starjout.svg#StarJediOutline") format("svg");
    font-weight:normal;
    font-style:normal;}
@media screen and (min-width: 0px) and (max-width: 520px){
    #cart {
        display: flex;
        flex-direction:column;
        align-items:center;
    }
}
</style>
