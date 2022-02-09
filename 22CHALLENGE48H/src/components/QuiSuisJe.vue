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
const secret = ref([]);
var indice = ref([]);


function randomCategory(){
    const entier = 5;
    switch (entier) {
        case 0:
            PlanetsList();
            break;
        case 1:
            StarshipsList();
            break;
        case 2:
            VehiclesList();
            break;
        case 3: 
            PeopleList();
            break;
        case 4:
            FilmsList();
            break;
        case 5:
            SpeciesList();
            break;
        default:
        console.log("erreur");
    }
    
}



async function PlanetsList(){
    listPlanets.value = (await API.apiGetPlanets("")).data;
    while ((listPlanets.value).next!=null){
        const urlNextPage = ((listPlanets.value).next).substr(30);
        newListPlanets.value = (await API.apiGetPlanets(urlNextPage)).data;
        newListPlanets.value.results.forEach((planet) => listPlanets.value.results.push(planet))
        listPlanets.value.next = newListPlanets.value.next;
    }
    listPlanets.value = listPlanets.value.results;
    console.log(listPlanets.value);
    secret.value = listPlanets.value[Math.floor(Math.random() * (listPlanets.value.length ))];
    indice.value = secret.value
    delete indice.value.name;
    delete indice.value.url;
    delete indice.value.created;
    delete indice.value.edited;
    console.log(indice.value);
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
    secret.value = listStarships.value[Math.floor(Math.random() * (listStarships.value.length ))];
    indice.value = secret.value
    delete indice.value.name;
    delete indice.value.url;
    delete indice.value.created;
    delete indice.value.edited;
    console.log(indice.value);
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
    secret.value = listVehicles.value[Math.floor(Math.random() * (listVehicles.value.length))];
    indice.value = secret.value
    delete indice.value.name;
    delete indice.value.url;
    delete indice.value.created;
    delete indice.value.edited;
    console.log(indice.value);
}
async function PeopleList(){
    listPeople.value = (await API.apiGetPeople("")).data;
    while ((listPeople.value).next!=null){
        const urlNextPage = ((listPeople.value).next).substr(29);
        newListPeople.value = (await API.apiGetPeople(urlNextPage)).data;
        newListPeople.value.results.forEach((people)=> listPeople.value.results.push(people))
        listPeople.value.next = newListPeople.value.next;
    }
    listPeople.value = listPeople.value.results;
    console.log(listPeople.value);
    secret.value = listPeople.value[Math.floor(Math.random() * (listPeople.value.length))];
    indice.value = secret.value
    delete indice.value.name;
    delete indice.value.url;
    delete indice.value.created;
    delete indice.value.edited;
    console.log(indice.value);
}
async function FilmsList(){
    listFilms.value = (await API.apiGetFilms("")).data.results;
    console.log(listFilms.value);
    secret.value = listFilms.value[Math.floor(Math.random() * (listFilms.value.length))];
    indice.value = secret.value
    delete indice.value.name;
    delete indice.value.url;
    delete indice.value.created;
    delete indice.value.edited;
    console.log(indice.value);
}
async function SpeciesList(){
    listSpecies.value = (await API.apiGetSpecies("")).data;
    while ((listSpecies.value).next!=null){
        const urlNextPage = ((listSpecies.value).next).substr(30);
        newListSpecies.value = (await API.apiGetSpecies(urlNextPage)).data;
        newListSpecies.value.results.forEach((specie)=> listSpecies.value.results.push(specie))
        listSpecies.value.next = newListSpecies.value.next;
    }
    var listSpecies = listSpecies.push(listSpecies);
    listSpecies.value = listSpecies.value.results;
    console.log(listSpecies.value);
    secret.value = listSpecies.value[Math.floor(Math.random() * (listSpecies.value.length))];
    indice.value = secret.value
    delete indice.value.name;
    delete indice.value.url;
    delete indice.value.created;
    delete indice.value.edited;
    console.log(indice.value);
}
</script>

<template>
    <input type="submit" name="submit" value="JOUER" v-on:click="randomCategory">
    <h1 class="motAleatory">
    {{secret.title}}
    {{secret.name}}
    </h1>
    <!-- Question -->
    <form>
        <fieldset>
            <legend>Qui suis je ?</legend>
            <input type="text" >
            <p>Cette question vaut .... points</p>
        </fieldset>
        <input class="submit" type="submit" >
        <p>Indice 1 :  </p>
        <p>Indice 2 :  </p>
        <p>Indice 3 :  </p>
        <p>Indice 4 :  </p>
        <p>Indice 5 :  </p>
    </form>
</template>

<style scoped>
.motAleatory{
    color:red
}
nav {
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
    margin-bottom: 50px;
}
button {
    background-color: yellow;
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
.wiki {
    background-color: yellow;
}
a {
    text-decoration: none;
    color: black;
    font-family: "Bebas Neue";
    font-size: 25px;
}
img {
    width: 350px;
    height: auto;
}
legend {
    color: white;
}
p {
    color: white;
    font-size: 20px;
}
form {
    margin-top: 20px;
    padding-bottom: 50px;
}
input {
    margin: 10px;
    border: 0;
}
.submit {
    background-color: yellow;
    height: 20px;
}
fieldset {
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: space-around;
}

</style>