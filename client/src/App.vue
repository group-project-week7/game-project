<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "./store";
import { mapState } from "vuex";
import db from "./api/firebase";
import Swal from 'sweetalert2'

export default {
  name: "App",
  components: {},
  data() {
    return {
    };
  },
  computed: mapState(["rooms"]),
  methods: {
    roomCreate() {
      this.$store.dispatch("createRoom");
    },

    join(id) {
      this.$store.dispatch("joinRoom", id);
    },

    leave(id) {
      this.$store.dispatch("leaveRoom", id);
    }
  },
  created() {
    this.$store.dispatch("getRooms");
    if (!localStorage.userId) {
      console.log('aaaaaaa')
      Swal.fire({
        title: "Submit your username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Ready",
        showLoaderOnConfirm: true,
        preConfirm: login => {
          this.$store.dispatch('createUser', login)
         
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
      .then(() => {
         Swal.fire({ 
            type: 'success',
            title: 'Ready to kill some mosquitos',
          });
      })
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
