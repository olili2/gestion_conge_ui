<template>
    <div class="container1">
        <div class="container2">
            <div class="part1">
                <h1>BIENVENUE DANS L'APPLICATION</h1>
                <h1> GESTION DES CONGES</h1>
                <h2>Cliquez sur le button login pour y accéder </h2>
            </div>
            <div class="part2">
            <button @click="goToLoginPage">LOGIN</button>

            </div>
        </div>
        
    </div>
 
 </template>
 
 <script>
    export default{
        methods: {
            goToLoginPage(){
                this.$router.push("/login")
            }
        }
    }
 </script>
 
 <style scoped>

 .container1
 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(241, 237, 237);
 }
.container2
{
    width: 600px;
    height: 300px;
    border: 5px solid rgb(2, 2, 63);
    background-color: rgb(2, 2, 63);
    color: white;
    border-radius: 10px;
    padding: 12px;
}

   button
{
    width: 200px;
    height: 80px;
    font-size: 40px;
    background-color: white;
    color: rgb(2, 2, 63);
    border: none;
    border-radius: 3px;
}

.part1
{
    text-align: center;
}
.part2
{
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
 </style>