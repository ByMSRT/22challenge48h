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
    var listSpecies = listSpecies.push(listSpecies);
    listSpecies.value = listSpecies.value.results;
    console.log(listSpecies.value);
}
</script>

<template>
    <input type="submit" name="submit" value="planets" v-on:click="PlanetsList">
    <article v-for="planet of listPlanets"> {{planet.name}} </article>
    <input type="submit" name="submit" value="starships" v-on:click="StarshipsList">
    <article v-for="starship of listStarships"> {{starship.name}} {{starship.length}} </article>
    <input type="submit" name="submit" value="vehicles" v-on:click="VehiclesList">
    <article v-for="vehicle of listVehicles"> {{vehicle.name}}</article>
    <input type="submit" name="submit" value="people" v-on:click="PeopleList">
    <article v-for="people of listPeople"> {{people.name}}</article>
    <input type="submit" name="submit" value="films" v-on:click="FilmsList">
    <article v-for="film of listFilms"> {{film.title}}</article>
    <input type="submit" name="submit" value="species" v-on:click="SpeciesList">
    <article v-for="specie of listSpecies"> {{specie.name}}</article>
</template>

<style scoped>

</style>