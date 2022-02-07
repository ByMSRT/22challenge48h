<script setup>
import API from '../api/route.js';
import {ref} from 'vue';

const listPlanets= ref([]);

async function callPlanets(){
    console.log('callapi')
    listPlanets.value = (await API.apiGetPlanets()).data.results;
    console.log(listPlanets.value)
}
</script>

<template>
    <input type="submit" name="submit" value="planets" v-on:click="callPlanets">
    <article v-for="planet of listPlanets">{{ planet.name}} {{planet.diameter}}</article>
</template>

<style scoped>

</style>