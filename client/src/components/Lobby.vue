<template>
  <div class="roomBoard d-flex justify-content-center align-items-center">
    <div class="container">
      <div class>
        <div class="title card-title d-flex justify-content-center m-0">
          <h1 class="m-0">Lobby</h1>
        </div>
        <div class="body card-body text-center pt-3 overflow-auto">
          <div class="room-title mb-3">
            <h3>55 APSO NO BACOT</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO NO BOOK</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO MINTA KALAH</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO TEST MAP BARU</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO BOOK 5</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO BOOK 5</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO BOOK 5</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO BOOK 5</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO BOOK 5</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO BOOK 5</h3>
          </div>
          <div class="room-title mb-3">
            <h3>55 APSO BOOK 5</h3>
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
h1 {
  font-family: "Bangers", cursive;
  font-size: 80px;
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
  height: 50px; }
</style>