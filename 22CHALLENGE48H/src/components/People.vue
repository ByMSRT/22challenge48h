<script setup>
import API from '../api/route.js';
import {ref} from 'vue';

const listPeoples = ref([]);
const person = ref([]);
const clicked = ref(false);
const peoplename = ref("");

async function callPeople(){
    console.log('callapi')
    listPeoples.value = (await API.apiGetPeople("")).data.results;
    console.log(listPeoples.value)
}

async function IsClicked(name){
    if(peoplename.value == name){
        clicked.value = false;
    } else {
        clicked.value = true;
        peoplename.value = name;
    }
    console.log(clicked);
    return await clicked;
}


</script>

<template>
    <input type="submit" name="submit" value="peoples" v-on:click="callPeople">
    <div>
        <section v-for="(people, index) of listPeoples" :key="index" id="card">
            <article v-on:click="IsClicked(people.name)" class="PeopleName">{{people.name}}</article>
            <article v-if="clicked == true && peoplename == people.name">{{people.species}}</article>
        </section>
    </div>

</template>

<style scoped>
    div {
        width: 100%;
        height: 100%;
        /* background-color: red; */
        border: 4px;
        border-radius: 45px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    section {
        width: 20%;
    }
</style>