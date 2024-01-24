<template>
    <div class="container1">
    <div class="container2">
        <div class="headtitle">
            <h3>Ajouter Congé</h3>
        </div>
        <div class="ajout">
            <label for="">Id</label>
            <p><input type="text"></p>
            <label for="nom">Nom</label>
            <p><input type="text"></p>
            <label for="prenom">Prénom</label>
            <p><input type="text"></p>
            <label for="">Age</label>
            <p><input type="text"></p>
            <label for="">Genre</label>
            <p><input type="text"></p>
            <p><input type="submit" value="Ajouter"></p>
        </div>
        
    </div>
</div>
 </template>
 
 <script>
    
 </script>
 
 <style scoped>
div.container1
{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(241, 237, 237);
}

div.container2
{
    width: 700px;
    height: 550px;
    background-color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
div.headtitle
{
    height:10%;
    background-color: rgb(2, 2, 63);
    color: white;
    padding: 10px;
}

input[type=text]{
    width: 100%;
    padding: 12px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box; 
}

div.ajout
{
    padding: 20px;
}

input[type=submit]
{
    width: 18%;
    height: 40px;
    background-color: rgb(2, 2, 179);
    color: white;
    border: none;
    border-radius: 3px;
}

label
{
    margin-bottom: 0;
    padding-bottom: 0;
}
p
{
    margin-top: 0;
    padding-top: 3px;
}

 </style>