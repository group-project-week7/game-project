<template>
  <div class="container-fluid p-0" :style="boardStyle" @click="gantiCursor">
    <div style="display: flex; height: 100vh; width: 100vw; flex-direction: column;">
      <div class="middle-content" @click.prevent="slapEffect">
        <div
          class="game-status d-flex justify-content-center"
          style="top: 20px; left: 30px; position: absolute;"
        >
          <h3 class="mr-5">Time : {{timer}}</h3>
          <h3 class="ml-5">Score : {{score}}</h3>
        </div>
        <img
          src="../assets/rocco.gif"
          class="mosquito"
          :key="i"
          @click.prevent="kill(i)"
          v-for="(mosquito,i) in mosquitos"
          v-if="mosquito.status"
          draggable="false"
          :style="mosquito.style"
        />
      </div>
    </div>

    <div class="modal fade-scale" id="HighScore" ref="highscoremodal">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered mt-0 mb-0">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header d-flex justify-content-center">
            <h1 class="modal-title">Score</h1>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="d-flex flex-column justify-content-center align-items-start">
              <div class="player-score-table d-flex justify-content-around align-items-center">
                <h1>Player Name</h1>
                <h1>Score</h1>
              </div>
              <div class="player-score-info d-flex justify-content-around align-items-center">
                <h1>{{name}}</h1>
                <h1>{{ score }}</h1>
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer d-flex justify-content-center align-items-center">
            <button type="button" class="btn" data-dismiss="modal" @click="mainMenu">Main Menu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mosquitos: [],
      score: 0,
      imgTop: -100,
      imgLeft: -100,
      imgHeight: 64,
      imgWidth: 64,
      changeInterval: 1000,
      timer: 20,
      boardStyle: {
        cursor: `url(${require("../assets/swatter.png")}),auto`
      },
      name: ''
    };
  },
  methods: {
    mainMenu() {
      this.$router.push('/')
    },

    moveMosquito() {
      for (let i = 0; i < this.mosquitos.length; i++) {
        let randompx = Math.floor(Math.random() * 1000);
        var x = Math.floor(Math.random() * randompx);
        var y = Math.floor(Math.random() * window.innerWidth);
        this.mosquitos[i].style.top = `${x}px`;
        this.mosquitos[i].style.left = `${y}px`;
      }
    },
    gantiCursor() {
      this.boardStyle.cursor = `url(${require("../assets/swatter-hit.png")}),auto`;
    },
    kill(index) {
      this.slapEffect();
      this.mosquitos[index].status = false;
      this.score += 10;
    },
    slapEffect() {
      var audio = new Audio(require("../assets/slap.mp3"));
      audio.play();
    },
    randomPosition() {
      const randomPos = twoSizes => Math.round(Math.random() * twoSizes);
      this.imgTop = randomPos(window.innerHeight - this.imgHeight);
      this.imgLeft = randomPos(window.innerWidth - this.imgWidth);
    },
    gameInit() {
      if(this.timer >= 0){
        this.timer -= 1;
      } else {
        this.mosquitos.length = 0;  
        clearInterval()
      }
      var random = Math.floor(Math.random() * this.mosquitos.length);
      this.mosquitos.push({
        style: {
          position: `absolute`,
          top: `${this.imgTop}px`,
          left: `${this.imgLeft}px`,
          height: `${this.imgHeight}px`,
          width: `${this.imgWidth}px`
        },
        status: true
      });
    }
  },
  created() {
    var audio = new Audio(require("../assets/buzz.mp3"));
    audio.play();
    const randomImg = func => setInterval(func, this.changeInterval);
    randomImg(this.randomPosition);
    randomImg(this.gameInit);
    randomImg(this.moveMosquito);
    this.name = localStorage.getItem('playerName')
  },
  watch: {
    timer(val) {
      if (val == -1) {
        $("#HighScore").modal("show");
        // alert(this.score);
      }
    }
  }
};
</script>

<style scoped>
.middle-content {
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background: wheat;
  margin: auto;
  position: relative;
  overflow: hidden;
  background-image: url("../assets/bg_game.png");
  background-size: cover;
  background-position: 0 0;
  cursor: url("../assets/swatter.png"), auto;
}
.mosquito {
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 3s;
}
.game-status {
  width: 100%;
}
.game-status h3 {
  font-family: "Bangers", cursive;
  color: whitesmoke;
  font-size: 50px;
}
.modal-body {
  max-height: 50vh;
}
.player-score-info {
  width: 100%;
}
.player-score-info h1 {
  font-size: 30px;
  margin: 0px;
  font-family: "Bangers", cursive;
  color: #de5246;
}
.player-score-table {
  width: 100%;
}
.player-score-table h1 {
  font-size: 30px;
  margin: 0px;
  font-family: "Bangers", cursive;
  color: #2a2e33;
}
.game-info {
  color: #de5246;
}
.game-info h4 a {
  color: whitesmoke;
  text-decoration: none;
  transition: 0.5s all;
}
.game-info h4 a:hover {
  font-size: 25px;
  color: whitesmoke;
  transition: 0.5s all;
  font-family: "Bangers", cursive;
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
.modal-title {
  font-size: 50px;
  color: #2a2e33;
  font-family: "Bangers", cursive;
}
</style>