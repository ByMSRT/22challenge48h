<script setup>
import API from '../api/route.js';
import {ref} from 'vue';


const species = 'species';
const films = 'films';
const people = 'people';
const vehicles = 'vehicles';
const starships = 'starships';
const planets = 'planets';

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
const newObj = ref({});
let randomIndexUsed = [];
let Who = "";
let film = (false);

async function addSessionStorage(){
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
    }
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
    if(sessionStorage.getItem(films) == undefined){ 
        listFilms.value = (await API.apiGetFilms("")).data.results;
        sessionStorage.setItem(films, JSON.stringify(listFilms.value));
    }
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
        listPlanets.value = JSON.parse(sessionStorage.getItem(planets));
        listStarships.value = JSON.parse(sessionStorage.getItem(starships));
        listVehicles.value = JSON.parse(sessionStorage.getItem(vehicles));
        listPeople.value = JSON.parse(sessionStorage.getItem(people));
        listFilms.value = JSON.parse(sessionStorage.getItem(films));
        listSpecies.value = JSON.parse(sessionStorage.getItem(species));
    }
    console.log(Object.keys(listPlanets.value[5]).length);
};
addSessionStorage();
function randomNumber(length){
    const randomNumber = Math.floor((Math.random() * (length)) + 1);
    return randomNumber;
}
function randomSecret(list){
    const randomIdSecret = randomNumber(list.value.length);
    const secret = list.value[randomIdSecret];
    const ObjectLength = Object.keys(secret).length;
    const objectKeys = Object.keys(secret);
    if(film != true){
        Who = secret.name;
        console.log(Who);
    }
    else{
        Who = secret.title;
    }
    function randomAllIndice(){
        const randomIndex = randomNumber(ObjectLength)-1;
        if(randomIndexUsed.includes(randomIndex) || (objectKeys[randomIndex] == 'name' || (objectKeys[randomIndex]) == "title" || (objectKeys[randomIndex]) == 'created' || (objectKeys[randomIndex]) == 'edited' || (objectKeys[randomIndex]) == 'url')){
            randomAllIndice();
        }else{
            newObj[objectKeys[randomIndex]] = [Object.values(secret)[randomIndex]];
            randomIndexUsed.push(randomIndex);
            console.log(newObj);
        }
    }
    randomAllIndice();
    randomAllIndice();
    randomAllIndice();
    randomAllIndice();
    randomAllIndice();
};

function randomCategory(){
    randomIndexUsed = [];
    Who = '';
    const entier = Math.floor((Math.random() * 6) + 0);
    switch (entier) {
        case 0:
            randomSecret(listPlanets);
            film = false;
            break;
        case 1:
            randomSecret(listStarships);
            film = false;
            break;
        case 2:
            randomSecret(listVehicles);
            film = false;
            break;
        case 3: 
            randomSecret(listPeople);
            film = false;
            break;
        case 4:
           randomSecret(listFilms);
           film = true;
            break;
        case 5:
            randomSecret(listSpecies);
            film = false;

            break;
        default:
        console.log("erreur");
    }
    
}


function compare(who){
    let result= document.getElementsByName("answer");
    if(result.value == who){
        window.alert("bravo");
    }else{
        window.alert('you loose, try again')
    }

}
</script>

<template>
    <input type="submit" name="submit" value="JOUER" v-on:click="randomCategory">
    <h1 class="motAleatory">

    </h1>
    <!-- Question -->
    <form>
        <fieldset>
            <legend>Qui suis je ?</legend>
            <input type="text" name="answer">
            <p>Cette question vaut .... points</p>
        </fieldset>
        <input class="submit" type="submit" @click="compare" >
        <p>Indice 1 : {{newObj}} </p>
        <p>Indice 2 : {{}} </p>
        <p>Indice 3 : {{}} </p>
        <p>Indice 4 : {{}} </p>
        <p>Indice 5 : {{}} </p>
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