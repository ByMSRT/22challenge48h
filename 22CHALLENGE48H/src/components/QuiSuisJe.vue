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
const sayings = ref([]);


function randomCategory(){
    const entier = Math.floor((Math.random() * 6) +  0);
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
}
async function FilmsList(){
    listFilms.value = (await API.apiGetFilms("")).data.results;
    console.log(listFilms.value);
    secret.value = listFilms.value[Math.floor(Math.random() * (listFilms.value.length))];
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
}
</script>

<template>
    <input type="submit" name="submit" value="JOUER" v-on:click="randomCategory">
    {{secret.title}}
    {{secret.name}}
</template>

<style scoped>

</style>