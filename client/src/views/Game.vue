<template>
  <div class="container-fluid">
    <div style="display: flex; height: 100vh; width: 100vw; flex-direction: column;">
      <h3 class="pt-5 pb-5">TIME : {{timer}}</h3>
      <div class="middle-content" :style="normalCursor">
        <img
          src="../assets/rocco.gif"
          class="mosquito"
          :key="i"
          @click.prevent="kill(i)"
          v-for="(mosquito,i) in mosquitos"
          v-if="mosquito.status"
          :style="mosquito.style"
        />
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
      timer : 10,
      normalCursor: "cursor:url('../assets/swatter.png'), auto"
    };
  },
  methods: {
    moveMosquito() {
      for (let i=0; i<this.mosquitos.length; i++){
        let randompx = Math.floor(Math.random() * 1000)
        var x = Math.floor(Math.random() * randompx);
        var y = Math.floor(Math.random() * randompx);
        var tempX = Number(this.mosquitos[i].style.top.split('px')[0]) + x
        var tempY = Number(this.mosquitos[i].style.left.split('px')[0]) + y
        this.mosquitos[i].style.top = `${x}px`;
        this.mosquitos[i].style.left = `${y}px`;
      }
      
    },
    kill(index) {
      this.mosquitos[index].status = false;
      this.score += 10;
     
    },
    randomPosition() {
      const randomPos = twoSizes => Math.round(Math.random() * twoSizes);
      this.imgTop = randomPos(window.innerHeight - this.imgHeight);
      this.imgLeft = randomPos(window.innerWidth - this.imgWidth);
    },
    gameInit() {
      this.timer -= 1
      var random = Math.floor(Math.random() * this.mosquitos.length );
      this.mosquitos.push({
        style: {
          position: `absolute`,
          top: `${this.imgTop}px`,
          left: `${this.imgLeft}px`,
          height: `${this.imgHeight}px`,
          width: `${this.imgWidth}px`
        },
        status : true,
      })
    }
  },
  created() {
    const randomImg = func => setInterval(func, this.changeInterval);
    randomImg(this.randomPosition);
    randomImg(this.gameInit);
    randomImg(this.moveMosquito);

  },
  watch : {
     timer(val) {
         if (val == -1){
             alert(this.score)
         }
     }
  }
};
</script>

<style>
.middle-content {
  justify-content: center;
  align-content: center;
  width: 80%;
  height: 70vh;
  background: wheat;
  margin: auto;
  position: relative;
  overflow: hidden;
  background-image: url('../assets/bg_game.png');
  background-size: cover;
  background-position: 0 0;
  /* ;
  cursor:url('../assets/swatter-hit.png'),; */
}
.mosquito {
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 5s;
}
</style>