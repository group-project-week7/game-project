<template>
  <div class="roomBoard d-flex justify-content-center align-items-center">
    <div class="room-board">
      <div class>
        <div class="title card-title d-flex justify-content-center m-0">
          <h1 class="m-0">Room</h1>
        </div>
        <div class="body card-body text-center pt-3 d-flex justify-content-between flex-column">
          <div>
            <div class="room-info d-flex justify-content-between align-items-center">
              <h1>Room Name : 55APSO NO BACOT</h1>
              <h1>Room ID : 12G36$52H8C2768#gfG</h1>
            </div>
            <hr />
          </div>
          <div class="player-list d-flex flex-column justify-content-start">
            <div class="player-name">
              <h1 class="mb-5">Tasty Cyka</h1>
            </div>
            <div class="player-name">
              <h1 class="mb-5">GAKGAYGAKGAUL</h1>
            </div>
            <div class="player-name">
              <h1 class="mb-5">isoSpin</h1>
            </div>
            <div class="player-name">
              <h1 class="mb-5">No-name</h1>
            </div>
          </div>
          <div>
            <hr />
            <div class="d-flex justify-content-around">
              <router-link to="/game">
                <button class="btn">Start</button>
              </router-link>
              <router-link to="/home">
                <button class="btn">Exit</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
.roomBoard {
  background-color: #2a2e33;
  min-height: 100vh;
}
.card {
  min-height: 80vh;
  background-color: whitesmoke;
  border-radius: 5%;
}
.title h1 {
  font-family: "Bangers", cursive;
  font-size: 80px;
}
.room-info h1 {
  font-family: "Bangers", cursive;
  font-size: 20px;
}
.title {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background-color: #de5246;
  width: 100%;
}
.body {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 80vh;
  background-color: whitesmoke;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
}
.room-title {
  font-family: "Bangers", cursive;
  border-bottom: 1px solid grey;
}
h3 {
  font-size: 40px;
}
::-webkit-scrollbar-thumb {
  background: #bbbbbb;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  height: 50px;
}
.body hr {
  border: 0.5px solid #2a2e33;
}
button {
  width: 100%;
  font-size: 30px;
  font-family: "Bangers", cursive;
  background-color: #de5246;
  color: #2a2e33;
  transition: 0.5s all;
}
button:hover {
  color: #de5246;
  background-color: #2a2e33;
  transition: 0.5s all;
}
.player-list {
  height: 80%;
}
.player-name {
  border-bottom: 0.5px solid #2a2e33;
}
.player-name h1 {
  color: #2a2e33;
  font-family: "Bangers", cursive;
}
.room-board{
  min-width: 60vh;
}
</style>