<template>
  <div class="home d-flex flex-column justify-content-center align-items-center">
    <div class="logoName mb-5">
      <h1>Nyamuk Killer</h1>
    </div>
    <div class="main-btn d-flex flex-column justify-content-around align-items-center mt-5">
      <div class="logbtn">
        <button
          type="button"
          class="btn m-4 p-3"
          data-toggle="modal"
          data-target="#Create"
        >Create room</button>
      </div>
      <div class="logbtn">
        <button type="button" class="btn m-4 p-3" data-toggle="modal" data-target="#Lobby">Join Room</button>
        <!-- <button class="btn m-4 p-3">Join Room</button> -->
      </div>
    </div>

    <!-- The Modal -->
    <div class="modal fade-scale" id="Lobby">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered mt-0 mb-0">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header d-flex justify-content-center">
            <h1 class="modal-title">Lobby</h1>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="d-flex justify-content-center align-items-start">
              <div class="container">
                <div>
                  <div class="room-title mb-3 d-flex justify-content-between align-items-center">
                    <h3>Room Name</h3>
                    <h3>Room ID</h3>
                    <h3>Option</h3>
                  </div>
                  <div class="room-title mb-3 d-flex justify-content-between align-items-center">
                    <h3>55 APSO BOOK 5</h3>
                    <h3 class="room-id">2134g2345h234bhj2b3e7</h3>
                    <button class="btn">Join</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer d-flex justify-content-center align-items-center">
            <button type="button" class="btn" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade-scale" id="Create">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered mt-0 mb-0">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header d-flex justify-content-center">
            <h1 class="modal-title">Create Room</h1>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="d-flex justify-content-center align-items-start">
              <div class="container">
                <label>Room Name</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer d-flex justify-content-around align-items-center">
            <button type="button" class="btn" data-dismiss="modal">Create</button>
            <button type="button" class="btn" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
.fade-scale {
  transform: scale(0);
  opacity: 0;
  -webkit-transition: all 0.25s linear;
  -o-transition: all 0.25s linear;
  transition: all 0.25s linear;
}

.fade-scale.in {
  opacity: 1;
  transform: scale(1);
}
.home {
  background-color: #2a2e33;
  min-height: 100vh;
}
h1 {
  font-family: "Bangers", cursive;
  color: whitesmoke;
  font-size: 100px;
  /* background-color: whitesmoke; */
}
.logoName {
  min-width: 50vh;
  background-image: url("../assets/blood.png");
  background-repeat: no-repeat;
  background-size: 25vh;
  background-position-y: -3rem;
  background-position-x: 10rem;
}
.logbtn button {
  background-color: #de5246;
  font-family: "Bangers", cursive;
  font-size: 70px;
  color: whitesmoke;
  width: 100%;
  border-radius: 50%;
  transition: 0.5s all;
}
.logbtn button:hover {
  transition: 0.5s all;
  font-size: 80px;
}
.modal-title {
  font-size: 50px;
  color: #2a2e33;
}
.modal-footer button {
  font-family: "Bangers", cursive;
  color: #2a2e33;
  background-color: #de5246;
  font-size: 40px;
  transition: 0.5s all;
}
.modal-footer button:hover {
  color: #de5246;
  background-color: #2a2e33;
  transition: 0.5s all;
}
.room-title h3 {
  margin: 0px;
  font-family: "Bangers", cursive;
  color: #2a2e33;
}
.room-title h3.room-id {
  margin: 0px;
  font-family: "Bangers", cursive;
  color: #de5246;
}
.room-title button {
  margin: 0;
  font-family: "Bangers", cursive;
  color: #2a2e33;
  background-color: #de5246;
  font-size: 25px;
}
.room-title button:hover {
  color: #de5246;
  background-color: #2a2e33;
  transition: 0.5s all;
}
.modal-body {
  max-height: 50vh;
}
</style>
