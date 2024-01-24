<template>
    <div class="container">
  <div class="part1">
        <div class="part5">
            <h2>GESTION <br>CONGE</h2> 
        </div>
    </div>
    <div class="part2">
        <div class="part3">
            <form action="">
                <h2>Se Connecter</h2>
                <label for="username">Nom D'utilisateur</label>
                <p><input type="text" value="tech"></p>
                <label for="">Mot de Passe</label>
                <p><input type="password" value="...."></p>

                <button @click="goToListe">Connexion</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
  export default{
        methods: {
            goToListe(){
                this.$router.push("/liste")
            }
        }
    }
</script>

<style scoped>
.container
{ 
    display: flex;
    margin: 0;
}

div.part1
{
    
    height: 100vh;
    width: 25%;
    display: flex;
    align-items: center;
    background-color: rgb(2, 2, 63);
    color: white;
}

div.part5
{
    width: auto;
}
div.part2
{
    height: 100vh;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(241, 241, 241);
}

div.part3
{
    
    width: 400px;
    height: 320px;
    background-color: white;
    padding: 30px;
    box-sizing: border-box;
}

form
{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
input[type=text]
{
    width: 100%;
    padding: 12px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=text]:focus
{
    width: 100%;
    padding: 12px;
    display: inline-block;
    border: 3px solid blue;
    background-color: aliceblue;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=password]
{
    width: 100%;
    padding: 12px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
}
button
{
    width: 30%;
    height: 35px;
    background-color: rgb(2, 2, 179);
    color: white;
    border: none;
    border-radius: 3px;
}
p
{
    margin-top: 5px;
    padding-top: 0;
}
</style>