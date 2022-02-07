<script>

</script>

<template>
<div class="navbar">
    <button class="myButton"> WIKI INFO </button>
    <img class="bonneTaille" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
    <button class="myButton">JEU QUI SUIS-JE ??</button>
</div>
<div class="corps">
    <div class="presentationNous">
        <div class="description">
        <img class="photo" src="https://static.vecteezy.com/ti/vecteur-libre/p1/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"/>
        <h3>Maitre Jedi Damien LANDOIS DEV B3</h3>
    </div>
    <div class="description">
        <img class="photo" src="https://static.vecteezy.com/ti/vecteur-libre/p1/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"/>
        <h3>Padawan Jules OUTIN DEV B1</h3>
    </div>
    <div class="description">
        <img class="photo" src="https://static.vecteezy.com/ti/vecteur-libre/p1/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"/>
        <h3>Chevalier Jedi Elouan DUMONT DEV B2</h3>
    </div>
    <div class="description">
        <img class="photo" src="https://static.vecteezy.com/ti/vecteur-libre/p1/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"/>
        <h3>Padawan Abakar mele TIDJANI DEV B1</h3>
    </div>
    <div class="description">
        <img class="photo" src="https://static.vecteezy.com/ti/vecteur-libre/p1/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"/>
        <h3>Chevalier Jedi Tao BOURMAUD DEV B2</h3>
    </div>  
    <div class="description">
        <img class="photo" src="https://static.vecteezy.com/ti/vecteur-libre/p1/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg"/>
        <h3>Padawan Flavio CORMERAIS DEV B1</h3>
    </div>
    </div>
    <div class="texteExpliquation">
        <h1>Nous vous présentons notre projet qui a pour but de creer un jeu ludique avec l'univers de star wars en utilisant une api (swapi). Ce projet est a été proposé dans le cadre d'un projet 48 h par l'école ynov 2022</h1>
    </div>
</div> 
</template>

<style scoped>
.texteExpliquation{
    grid-row: 2;
    grid-column: 3;
    border: 3px solid #ffe919;
    color :white;
    text-align:center;
    margin-bottom: 15%;}
.description{
    margin: 2% 2% 2% 2%;
    color : white;
}
.navbar{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: flex-start;
	align-content: flex-start;
}
.bonneTaille{
    height: 250px;
    width: auto;
}
.presentationNous{
    grid-column: 1/3;
    grid-row: 2 /4;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
    border: 3px solid #ffe919;
}
.corps
    {
    margin: 3% 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0px 300px;
    grid-gap: 10px;

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

.photo{
    height: 200px;
    width: auto;
    margin : 2% 2% 2% 2%;
}
</style>