import Vue from 'vue'
import Vuex from 'vuex'
import db from './api/firebase' 
import * as firebase from 'firebase/app'
import 'firebase/firestore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    pushRoom(state, ref) {
      state.rooms.push(ref)
    },

    emptyRoom(state) {
      state.rooms = []
    },

    emptyUser(state) {
      state.name = []
    },

  },
  actions: {
    createRoom(context, payload) {
      let playerName = localStorage.getItem('playerName')
      let playerId = localStorage.getItem('userId')
      db.collection('roomCollection')
      .add({
        title: `${payload} room`,
        status: false,
        players: []
      })
      .then(ref => {
        console.log(ref.id)
        console.log(ref)
      })
    },

    createUser(context, payload) {
      return db.collection('userCollection')
      .add({
        name: payload, 
      })
      .then(ref => {
        localStorage.setItem('userId', ref.id)
        localStorage.setItem('playerName', payload)
      })
    },

    joinRoom(context, id) {
      let playerId = localStorage.getItem('userId')
      let playerName = localStorage.getItem('playerName')
      db.collection('roomCollection')
      .doc(id)
      .update({
        "players": firebase.firestore.FieldValue.arrayUnion({id: playerId, name: playerName, score: 0})
      })
      .then(() => {
        console.log('masuk')
      })
      .catch(console.log)
    },

    startGame(context, id) {
      db.collection('roomCollection')
      .doc(id)
      .update({
        "status": true
      })
      .then(() => {
        console.log('game mulai')
      })
      .catch(console.log)
    },

    getRooms(context) {
      db.collection('roomCollection')
      .where('status', '==', false)
    .onSnapshot((querySnapshot) => {
      context.commit('emptyRoom')
      querySnapshot.forEach((doc) => {
        context.commit('pushRoom', {id: doc.id, ...doc.data()})
      })
    })
    },
  },
})
