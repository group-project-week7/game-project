<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <div>
          <div v-for="(room, i) in rooms" :key="i">
              {{room.title}}
              <button @click="join(room.id)"> join room </button>
              <button @click="leave(room.id)"> leave room </button>
          </div>
          <button @click="roomCreate">create Room</button>
      </div>
      <div>
        <form @submit.prevent="userCreate">
        <input type="text" v-model="username">
        <input type="submit" value="create User"> 
        </form>
      </div>
  </div>
  </div>
</template>

<script>
import Room from './components/Room'
import store from './store'
import { mapState } from 'vuex'
import db from './api/firebase'




export default {
  name: 'App',
  components: {
    
  },
  data() {
    return{
      username: ''
    }  
  },
  computed: mapState([
    'rooms',
  ]),
  methods: {
    roomCreate() {
      this.$store.dispatch('createRoom')
    },

    userCreate() {
      this.$store.dispatch('createUser', this.username)
      this.username = ''
    },

    join(id) {
      this.$store.dispatch('joinRoom', id)
    },

    leave(id) {
      this.$store.dispatch('leaveRoom', id)
    }
  },
  created() {
    this.$store.dispatch('getRooms')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
