<template>
   <div>
    <form action="">
        <input type="text" v-model="username" name="" id="" placeholder="username">
        <input type="password" v-model = "password" name="" id="" placeholder="password">
        <button type="submit" v-on:click="performLogin">Login</button>
    </form>

    <p>username = {{ username }}</p>
    <p>password = {{ password }}</p>

    <div>Vos idendifiant sont: <strong>{{ result }}</strong></div>
   </div>

</template>

<script>
    export default{
        data()
        {
            return {
                username:"",
                password:"",
                result:""
            }
        },
        methods:{
            performLogin(){
                this.result = this.username+ " "+this.password
            }
        }
    }
</script>

<style scoped>

</style>