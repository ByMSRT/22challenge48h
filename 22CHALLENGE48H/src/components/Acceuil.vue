<script>

</script>

<template>
<nav>
    <button class="home"><a href="https://starwars-visualguide.com/#/">Home</a></button>
    <img class ="bonneTaille" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
    <button class="quisuisje"><a href="https://kennethscoggins.medium.com/how-to-use-the-star-wars-api-in-about-50-lines-of-php-b78b39e9eb8e">Qui suis-je ?</a></button>
</nav>
<div class="corps">
    <div class="presentationNous">
        <div class="description">
        <img class="photo" src="https://game-guide.fr/wp-content/uploads/2014/07/Yoda_SWSB.jpg"/>
        <h3>Maitre Jedi Damien LANDOIS DEV B3</h3>
    </div>
    <div class="description">
        <img class="photo" src="https://static.wikia.nocookie.net/star-wars-delta-squad/images/1/11/553937c2c6e70bb9e889abbbb787620248e6ad49_hq.jpg"/>
        <h3>Padawan Jules OUTIN DEV B1</h3>
    </div>
    <div class="description">
        <img class="photo" src="https://pbs.twimg.com/profile_images/675399950881169413/97Tni-k3_400x400.png"/>
        <h3>Chevalier Jedi Elouan DUMONT DEV B2</h3>
    </div>
    <div class="description">
        <img class="photo" src="https://img.wattpad.com/cover/39403490-352-k167222.jpg"/>
        <h3>Padawan Flavio CORMERAIS DEV B1</h3>
    </div>
    <div class="description">
        <img class="photo" src="http://static1.webedia.fr/game/5/46/45/@/prfl-59c3e0237f4bb-0x200-1.jpg"/>
        <h3>Chevalier Jedi Tao BOURMAUD DEV B2</h3>
    </div>  
    <div class="description">
        <img class="photo" src="https://static.wikia.nocookie.net/starwars/images/1/11/Rey_TLJ.png"/>
        <h3>Padawan Abakar mele TIDJANI DEV B1</h3>
    </div>
    </div>
    <div class="texteExpliquation">
        <h1>Nous vous présentons notre projet qui a pour but de creer un jeu ludique avec l'univers de star wars en utilisant une api (swapi). Ce projet est a été proposé dans le cadre d'un projet 48 h par l'école ynov 2022</h1>
        <img src="https://static.lexpress.fr/medias_1632/w_1000,h_559,c_crop,x_0,y_0/w_1000,h_563,c_fill,g_north/v1556872960/chewbacca_835710.jpg"/>
        </div>
</div> 
</template>

<style scoped>
.imageSuper{
    grid-row: 3;
    grid-column: 3;
}
.texteExpliquation{
    grid-row: 2/4;
    grid-column: 3;
    border: 3px solid #ffe919;
    color :white;
    text-align:center;
    }
.description{
    margin: 2% 2% 2% 2%;
    color : white;
}
a {
    text-decoration: none;
    color: black;
    font-family: "Bebas Neue";
    font-size: 35px;
}
nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
    margin-bottom: 100px;
}
.bonneTaille{
    height: 350px;
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

button {
    border: 0;
    border-radius: 60px;
    width: 200px;
    height: 80px;
    background-color: yellow;
}

button:hover {
    background-color: #EBE501;
}
.photo{
    height: 200px;
    width: auto;
    margin : 2% 2% 2% 2%;
}
</style>