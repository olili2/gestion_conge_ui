<template>
    <div>
      
        <h3>Liste des utilisateurs</h3>
    <div class="part1">
        <p><input type="text" value="chercher..."></p>
        <p><button class="ajoutEmp" >Ajouter Employé</button></p>
    </div>
    <table>
        <thead>
            <th>NOM</th>
            <th>PRENOM</th>
            <th>AGE</th>
            <th>GENRE</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
        </thead>
        <tr>
            <td>Artcal'O</td>
            <td>Lone Wolf</td>
            <td>45</td>
            <td>F</td>
            <td>Pas en congé</td>
            <td><button class="ajConge" @click="goToAjouterConge">Ajouter congé</button><button class="mod">Modifier</button><button class="sup">Supprimer</button></td>
        </tr>
        <tr>
            <td>TLW</td>
            <td>Wolverine</td>
            <td>45</td>
            <td>F</td>
            <td>Pas en congé</td>
            <td><button class="ajConge" @click="goToAjouterConge">Ajouter congé</button><button class="mod">Modifier</button><button class="sup">Supprimer</button></td>
        </tr>
    </table>
        
    </div>
 
 </template>
 
 <script>
    export default{
        methods: {
            goToAjouterConge(){
                this.$router.push("/ajout")
            }
        }
    }
 </script>
 
 <style scoped>
    div.part1
{
    margin: 0;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    padding: 0;
}
button.ajoutEmp
{
    height: 40px;
    width: 200px;
    background-color: rgb(2, 2, 63);
    color: white;
    border: none;
    border-radius: 3px;
}
input[type=text]
{
    width: 200px;
    padding: 12px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
}
table
{
    width: 100%;
   
}
td
{
    border-bottom: 1px solid #ddd;
    height: 40px;
    min-width: 70px;
    padding-left: 5px;
    border-collapse:collapse ;
}
th
{
    height: 40px;
    background-color: rgb(2, 2, 63);
    color: white;
    text-align: left;
    padding-left: 5px;
    border-radius: 3px;
}
button.ajConge
{
    height: 35px;
    width: 150px;
    padding: 0;
    background-color:blue;
    color: white;
    border: none;
    border-radius: 3px;
    margin: 3px;
    padding: 0;
}
button.mod
{
    height: 35px;
    width: 100px;
    padding: 0;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 3px;
    margin: 3px;
    padding: 0;
}
button.sup
{
    height: 35px;
    width: 100px;
    padding: 0;
    background-color: red;
    color: white;
    border: none;
    border-radius: 3px;
    margin: 3px;
}
 </style>