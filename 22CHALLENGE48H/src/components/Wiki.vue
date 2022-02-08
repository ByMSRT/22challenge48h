<script setup>
import API from '../api/route.js';
import {ref} from 'vue';

const listPlanets= ref([]);
const newListPlanets = ref([]);
const listStarships= ref([]);
const newListStarships = ref([]);
const listVehicles= ref([]);
const newListVehicles = ref([]);
const listPeople= ref([]);
const newListPeople = ref([]);
const listFilms= ref([]);
const listSpecies= ref([]);
const newListSpecies = ref([]);
const nameClicked = ref("");
const clicked = ref(false);
const categorySelect = ref("");
const categoryClicked = ref(true);

async function PlanetsList(){
    listPlanets.value = (await API.apiGetPlanets("")).data;
    while ((listPlanets.value).next!=null){
        const urlNextPage = ((listPlanets.value).next).substr(30);
        newListPlanets.value = (await API.apiGetPlanets(urlNextPage)).data;
        newListPlanets.value.results.forEach((planet)=> listPlanets.value.results.push(planet))
        listPlanets.value.next = newListPlanets.value.next;
    }
    listPlanets.value = listPlanets.value.results;
    console.log(listPlanets.value);
}
async function StarshipsList(){
    listStarships.value = (await API.apiGetStarships("")).data;
    while ((listStarships.value).next!=null){
        const urlNextPage = ((listStarships.value).next).substr(32);
        newListStarships.value = (await API.apiGetStarships(urlNextPage)).data;
        newListStarships.value.results.forEach((starship)=> listStarships.value.results.push(starship))
        listStarships.value.next = newListStarships.value.next;
    }
    listStarships.value = listStarships.value.results;
    console.log(listStarships.value);
}
async function VehiclesList(){
    listVehicles.value = (await API.apiGetVehicles("")).data;
    while ((listVehicles.value).next!=null){
        const urlNextPage = ((listVehicles.value).next).substr(30);
        newListVehicles.value = (await API.apiGetVehicles(urlNextPage)).data;
        newListVehicles.value.results.forEach((vehicle)=> listVehicles.value.results.push(vehicle))
        listVehicles.value.next = newListVehicles.value.next;
    }
    listVehicles.value = listVehicles.value.results;
    console.log(listVehicles.value);
}
async function PeopleList(){
    console.log("list");
    listPeople.value = (await API.apiGetPeople("")).data;
    while ((listPeople.value).next!=null){
        const urlNextPage = ((listPeople.value).next).substr(29);
        newListPeople.value = (await API.apiGetPeople(urlNextPage)).data;
        newListPeople.value.results.forEach((people)=> listPeople.value.results.push(people))
        listPeople.value.next = newListPeople.value.next;
    }
    listPeople.value = listPeople.value.results;
    console.log(listPeople.value);
}
async function FilmsList(){
    listFilms.value = (await API.apiGetFilms("")).data.results;
    console.log(listFilms.value);
}
async function SpeciesList(){
    listSpecies.value = (await API.apiGetSpecies("")).data;
    while ((listSpecies.value).next!=null){
        const urlNextPage = ((listSpecies.value).next).substr(30);
        newListSpecies.value = (await API.apiGetSpecies(urlNextPage)).data;
        newListSpecies.value.results.forEach((specie)=> listSpecies.value.results.push(specie))
        listSpecies.value.next = newListSpecies.value.next;
    }
    listSpecies.value = listSpecies.value.results;
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
      

<nav>
    <button class="home"><a href="https://starwars-visualguide.com/#/">Home</a></button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
    <button class="quisuisje"><a href="https://kennethscoggins.medium.com/how-to-use-the-star-wars-api-in-about-50-lines-of-php-b78b39e9eb8e">Qui suis-je ?</a></button>
</nav>
    <div id="category">
        

        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Personnages"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" v-on:click='PeopleList(); CategorySelect("Personnages")'><h1 class="texte">Personnages</h1>
                <img class="flou" src="https://img.filmsactu.net/datas/films/s/t/star-wars-episode-ix/xl/star-wars-episode-ix-5fc36a969d8ba.jpg" />
            </article>
            <article id="cart">
                <article class="cart" v-for="(people, index) of listPeople" :key="index" v-on:click="IsClicked(people.name)"> <h4>{{people.name}}</h4>
                    <article v-if="clicked == true && nameClicked == people.name">
                        Gender : {{people.gender}} <br> Birth Year : {{people.birth_year}} <br>
                        Height : {{people.height}} <br> Mass : {{people.mass}} <br>
                        Hair : {{people.hair_color}} <br> Skin color : {{people.skin_color}} <br>
                        Eyes : {{people.eye_color}} <br> Homeworld : {{people.homeworld}} <br>
                        Species : {{people.species}} <br> Starships : {{people.starships}} <br>
                        Created on {{((people.created).split('T'))[0]}} <br> Edited on {{((people.edited).split('T'))[0]}} <br>
                        Movies : {{people.films}}
                    </article>
                </article>
            </article>   
        </section>


        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Planetes"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Planetes" v-on:click='PlanetsList(); CategorySelect("Planetes")'><h1 class="texte">Planètes</h1>
                <img class="flou" src="http://idata.over-blog.com/1/32/60/44/Starwars/PLANETES/TATOOINE/Tatooine-3.jpg" />
            </article>
            <article id="cart">
                <article class="cart" v-for="(planet, index) of listPlanets" :key="index" v-on:click="IsClicked(planet.name)"> {{planet.name}}
                    <article v-if="clicked == true && nameClicked == planet.name">test</article>
                </article>
            </article>
        </section>


        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Vehicules"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Vehicules" v-on:click='VehiclesList(); CategorySelect("Vehicules")'><h1 class="texte">Véhicules</h1>
                <img class="flou" src="https://i.pinimg.com/originals/5c/74/bd/5c74bdb7e78643598a20c01da29ab667.jpg" />
            </article>
            <article id="cart">
                <article class="cart" v-for="(vehicle, index) of listVehicles" :key="index" v-on:click="IsClicked(vehicle.name)"> {{vehicle.name}}
                    <article v-if="clicked == true && nameClicked == vehicle.name">retest</article>
                </article>
            </article>
        </section>

        
        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Films"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Films" v-on:click='FilmsList(); CategorySelect("Films")'><h1 class="texte">Films</h1>
                <img class="flou" src="https://www.numerama.com/wp-content/uploads/2019/02/star-wars-posters.jpg" />
            </article>
            <article id="cart">
                <article class="cart" v-for="(film, index) of listFilms" :key="index" v-on:click="IsClicked(film.name)"> {{film.title}}
                    <article v-if="clicked == true && nameClicked == film.name">sheesh</article>
                </article>
            </article>
        </section>

        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Starships"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Starships" v-on:click='StarshipsList(); CategorySelect("Starships")'><h1 class="texte">Starships</h1>
                <img class="flou" src="https://i.pinimg.com/originals/0f/ac/a7/0faca7171ba07543eaa081b6b8c13639.jpg" />
            </article>
            <article id="cart">
                <article class="cart" v-for="(starship, index) of listStarships" :key="index" v-on:click="IsClicked(starship.name)"> {{starship.name}}
                    <article v-if="clicked == true && nameClicked == starship.name">yo</article> 
                </article>
            </article>
        </section>


        <section v-bind:class="{section: categoryClicked}" v-if='categoryClicked == true || categoryClicked == false && categorySelect == "Species"'>
            <article v-bind:class="{categoryimage: !categoryClicked}" name="Species" v-on:click='SpeciesList(); CategorySelect("Species")'><h1 class="texte">Species</h1>
                <img class="flou" src="https://static.hitek.fr/img/actualite/2016/06/07/w_sullustens.jpg" />
            </article>
            <article id="cart">
                <article class="cart" v-for="(specie, index) of listSpecies" :key="index" v-on:click="IsClicked(specie.name)"> {{specie.name}}
                    <article v-if="clicked == true && nameClicked == specie.name">le boss</article>
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
    background-color: white;
    border: 0;
    border-radius: 40px;
    margin-bottom: 10px;
    width: 10%;
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

</style>