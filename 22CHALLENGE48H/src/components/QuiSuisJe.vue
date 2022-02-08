<script>

</script>

<template>
<nav>
    <button class="home"><a href="https://starwars-visualguide.com/#/">Home</a></button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
    <button class="Wiki"><a href="https://kennethscoggins.medium.com/how-to-use-the-star-wars-api-in-about-50-lines-of-php-b78b39e9eb8e">Wiki</a></button>
</nav>
<!-- Question -->
<form>
    <fieldset>
        <legend>Qui suis je ?</legend>
        <input type="text" >
        <p>Cette question vaut .... points</p>
    </fieldset>
    <input class="submit" type="submit" >
    <p>Indice 1 :  </p>
    <p>Indice 2 :  </p>
    <p>Indice 3 :  </p>
    <p>Indice 4 :  </p>
    <p>Indice 5 :  </p>
</form>
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