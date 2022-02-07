<script>

</script>

<template>
<nav>
    <button class="home"><a href="https://starwars-visualguide.com/#/">Home</a></button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
    <button class="quisuisje"><a href="https://kennethscoggins.medium.com/how-to-use-the-star-wars-api-in-about-50-lines-of-php-b78b39e9eb8e">Qui suis-je ?</a></button>
</nav>
    <section>
        <section class="threefirst">
            <article class="personnages"><h1 class="texte">Personnages</h1>
                <img class="flou" src="https://img.filmsactu.net/datas/films/s/t/star-wars-episode-ix/xl/star-wars-episode-ix-5fc36a969d8ba.jpg" />
            </article>
            <article class="planètes"><h1 class="texte">Planètes</h1>
                <img class="flou" src="http://idata.over-blog.com/1/32/60/44/Starwars/PLANETES/TATOOINE/Tatooine-3.jpg" />
            </article>
            <article class="vehicules"><h1 class="texte">Véhicules</h1>
                <img class="flou" src="https://i.pinimg.com/originals/5c/74/bd/5c74bdb7e78643598a20c01da29ab667.jpg" />
            </article>
        </section>
        <section class="threelast">
            <article class="films"><h1 class="texte">Films</h1>
                <img class="flou" src="https://www.numerama.com/wp-content/uploads/2019/02/star-wars-posters.jpg" />
            </article>
            <article class="starships"><h1 class="texte">Starships</h1>
                <img class="flou" src="https://i.pinimg.com/originals/0f/ac/a7/0faca7171ba07543eaa081b6b8c13639.jpg" />
            </article>
            <article class="species"><h1 class="texte">Species</h1>
                <img class="flou" src="https://static.hitek.fr/img/actualite/2016/06/07/w_sullustens.jpg" />
            </article>
        </section>
    </section>
</template>

<style scoped>
nav {
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
    margin-bottom: 100px;
}
h1 {
    color: white;
    font-family: "Bebas Neue";
    font-size: 25px;
}
h1:hover, h1:active {
    color:#EBE501;
}
a {
    text-decoration: none;
    color: black;
    font-family: "Bebas Neue";
    font-size: 25px;
}
button {
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
.quisuisje {
    background-color: yellow;
}
article {
    text-align: center;
    position: relative;
    cursor: pointer;
}
.texte {
    position: absolute;
    top: 30%;
    left: 35%;
    z-index: 999;
}

.threefirst, .threelast {
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
}
.threelast {
    margin-top: 50px;
    margin-bottom: 100px;
}
img {
    width: 350px;
    height: auto;
}
.flou {
    filter: blur(0px);
    transition-property: -webkit-filter;
    transition-duration: .5s;
}
.flou:hover, .flou:focus {
    filter: blur(10px);
}

@font-face {
    font-family:"Star Jedi Outline";
    src:url("Starjout.eot?") format("eot"),url("Starjout.woff") format("woff"),url("Starjout.ttf") format("truetype"),url("Starjout.svg#StarJediOutline") format("svg");
    font-weight:normal;
    font-style:normal;}

</style>