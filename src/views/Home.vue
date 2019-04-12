<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <button @click="logout">✌Logout✌</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
export default {
  name: 'home',
  methods:{
    logout: function (){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
