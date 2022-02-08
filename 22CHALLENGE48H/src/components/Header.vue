<script>
import {ref} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showOrNotWiki = ref(false);
const showOrNotGame = ref(false);

function showWiki(){
    router.push('wiki');
   
}
function showGame(){
    
}
</script>

<template>
<div class="navbar">
    <router-link to="/wiki" class="myButton"> WIKI INFO </router-link>
    <router-link to="/"><img class="bonneTaille" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" href="" /></router-link>
    <router-link to="/game" class="myButton">JEU QUI SUIS-JE ??</router-link>
</div>
</template>

<style scoped>
.navbar{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
}
.bonneTaille{
    height: 250px;
    width: auto;
}
.myButton {
color: rgb(0, 0, 0);
    font-size: 29px;
    line-height: 29px;
    padding: 20px;
    border-radius: 27px;
    background-color: #ffe919;
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
    border: 2px solid rgb(245, 255, 21); 
    display: inline-block;
    font-family:"Bebas Neue"
    }
.myButton:hover {
background: rgb(245, 255, 21) }
.myButton:active {
background:rgb(200, 207, 63) 
}
</style>