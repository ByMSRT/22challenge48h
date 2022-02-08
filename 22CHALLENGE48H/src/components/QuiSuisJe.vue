<script>

</script>

<template>
<nav>

    <button class="home"><a href="https://starwars-visualguide.com/#/">Home</a></button>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />

    <button class="Wiki"><a href="https://kennethscoggins.medium.com/how-to-use-the-star-wars-api-in-about-50-lines-of-php-b78b39e9eb8e">Wiki</a></button>

</nav>
</template>

<style scoped>
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
</style>