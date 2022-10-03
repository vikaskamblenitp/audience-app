<template>
<base-card>
    <form @submit.prevent="submit">
        <label for="username">EMAIL</label>
        <input type="email" name="username" v-model="username">
        <label for="password">PASSWORD</label>
        <input type="password" name="password" v-model="password">
        <base-button @click="login">Login</base-button>
        <base-button @click="signup">SignUp</base-button>
    </form>
</base-card>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
    
    data(){
        return{
            username: null,
            password: null,
        };
    },
    methods:{
        login(){
            this.$store.dispatch('login',{email:this.username,password:this.password});
        },
        signup(){
            this.$store.dispatch('signup',{email:this.username,password:this.password});
        },
        submit(){
            this.$router.push("/notices");
        }
    }
}
</script>
<style scoped>
form{
    display: grid;
    max-width: 20rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-top: 2rem;
    margin: 5rem auto;
}
</style>