<script setup>
import API from '../api/route.js';
import {ref} from 'vue';
/*object.enties transform en tableau*/
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
    const planets = 'planets';
    if(sessionStorage.getItem(planets)==undefined){
        listPlanets.value = (await API.apiGetPlanets("")).data;
        while ((listPlanets.value).next!=null){
            const urlNextPage = ((listPlanets.value).next).substr(30);
            newListPlanets.value = (await API.apiGetPlanets(urlNextPage)).data;
            newListPlanets.value.results.forEach((planet)=> listPlanets.value.results.push(planet))
            listPlanets.value.next = newListPlanets.value.next;
        }
        listPlanets.value = listPlanets.value.results;
        
        sessionStorage.setItem(planets, JSON.stringify(listPlanets.value));

        console.log(listPlanets.value);
    }
    else{
        listPlanets.value = JSON.parse(sessionStorage.getItem(planets));
    }
    
}
async function StarshipsList(){
    const starships = 'starships';
    if(sessionStorage.getItem(starships)==undefined){
        listStarships.value = (await API.apiGetStarships("")).data;
        while ((listStarships.value).next!=null){
            const urlNextPage = ((listStarships.value).next).substr(32);
            newListStarships.value = (await API.apiGetStarships(urlNextPage)).data;
            newListStarships.value.results.forEach((starship)=> listStarships.value.results.push(starship))
            listStarships.value.next = newListStarships.value.next;
        }
        listStarships.value = listStarships.value.results;
        sessionStorage.setItem(starships, JSON.stringify(listStarships.value));
    }
    else{
        listStarships.value = JSON.parse(sessionStorage.getItem(starships));
    }
    
    console.log(listStarships.value);
}
async function VehiclesList(){
    const vehicles = 'vehicles';
    if(sessionStorage.getItem(vehicles)==undefined){
        listVehicles.value = (await API.apiGetVehicles("")).data;
        while ((listVehicles.value).next!=null){
            const urlNextPage = ((listVehicles.value).next).substr(30);
            newListVehicles.value = (await API.apiGetVehicles(urlNextPage)).data;
            newListVehicles.value.results.forEach((vehicle)=> listVehicles.value.results.push(vehicle))
            listVehicles.value.next = newListVehicles.value.next;
        }
        listVehicles.value = listVehicles.value.results;
        sessionStorage.setItem(vehicles, JSON.stringify(listVehicles.value));
    }
    else{
        listVehicles.value = JSON.parse(sessionStorage.getItem(vehicles));
    }
    
    console.log(listVehicles.value);
}
async function PeopleList(){
    const people = 'people';
    if(sessionStorage.getItem(people)== undefined){
        listPeople.value = (await API.apiGetPeople("")).data;
        while ((listPeople.value).next!=null){
            const urlNextPage = ((listPeople.value).next).substr(29);
            newListPeople.value = (await API.apiGetPeople(urlNextPage)).data;
            newListPeople.value.results.forEach((people)=> listPeople.value.results.push(people))
            listPeople.value.next = newListPeople.value.next;
        }
        listPeople.value = listPeople.value.results;
        sessionStorage.setItem(people, JSON.stringify(listPeople.value));
    }
    else{
        listPeople.value = JSON.parse(sessionStorage.getItem(people));
    }
    
    console.log(listPeople.value);
}
async function FilmsList(){
    const films = 'films';
    if(sessionStorage.getItem(films) == undefined){ 
        listFilms.value = (await API.apiGetFilms("")).data.results;
        sessionStorage.setItem(films, JSON.stringify(listFilms.value));
    }
    else{
        listFilms.value = JSON.parse(sessionStorage.getItem(films));
    }
    console.log(listFilms.value);
}
async function SpeciesList(){ 
    const species = 'species';
     if(sessionStorage.getItem(species) == undefined){ 
        listSpecies.value = (await API.apiGetSpecies("")).data;
        while ((listSpecies.value).next!=null){
            const urlNextPage = ((listSpecies.value).next).substr(30);
            newListSpecies.value = (await API.apiGetSpecies(urlNextPage)).data;
            newListSpecies.value.results.forEach((specie)=> listSpecies.value.results.push(specie))
            listSpecies.value.next = newListSpecies.value.next;
        }
    listSpecies.value = listSpecies.value.results;
    sessionStorage.setItem(species,JSON.stringify(listSpecies.value));
    }
    else{
        listSpecies.value = JSON.parse(sessionStorage.getItem(species));
    }
    console.log(listSpecies.value);
}



    /* const regex = '^https:\/\/swapi\.dev\/api\/';
    if(Array.isArray(element)){
        temp = [];
        for(let el of element){
            console.log(index)
            let t=await callAPI(el, index)
                temp.push(t);
        }
    } else {
        if(element.search(regex) != -1){
            temp = await callAPI(element, index); 
                        await console.log( await callAPI(element, index))
        }else{
            temp = element;
        }     
    } */



</script>

<template>
    <input type="submit" name="submit" value="planets" v-on:click="PlanetsList">
    <article v-for="planet of listPlanets"> {{planet.name}}</article>
    <input type="submit" name="submit" value="starships" v-on:click="StarshipsList">
    <article v-for="starship of listStarships"> {{starship.name}} </article>
    <input type="submit" name="submit" value="vehicles" v-on:click="VehiclesList">
    <article v-for="vehicle of listVehicles"> {{vehicle.name}}</article>*
    <input type="submit" name="submit" value="people" v-on:click="PeopleList">
    <article v-for="people of listPeople"> {{people.name}}</article>
    <input type="submit" name="submit" value="films" v-on:click="FilmsList">
    <article v-for="film of listFilms"> {{film.title}}</article>
    <input type="submit" name="submit" value="species" v-on:click="SpeciesList">
    <article v-for="specie of listSpecies"> {{specie.name}}</article>
</template>

<style scoped>

</style>