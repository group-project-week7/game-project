<template>
  <div id="app">
    <router-view/>
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
* {
  margin: 0px;
  padding: 0px;
}
</style>
