<template>
  <h1>Let's play and know your reaction time</h1>
  <div class="btn-container">
    <button class="btn-play" :class="{ disable: isPlaying }" @click="startPlay">Play</button>
  </div>
  <Block :delay="delay" v-if="isPlaying" @end="endgame" />
  <p class="text-reaction">Your reaction time is {{ reactionTime }}</p>
</template>

<script>
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
      reactionTime: null
    }
  },
  methods: {
    startPlay() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
    },
    endgame(reactionTime) {
      console.log('reaction time', reactionTime)
      this.reactionTime = reactionTime
      this.isPlaying = false
    }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.btn-container {
  width: 100%;
  justify-content: center;
  align-items: center;
}

.btn-play {
  font-size: 22px;
  display: block;
  margin: auto;
  width: 100px;
  height: 50px;
  border-style: none;
  border-color: #ddd;
  background: coral;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
}

.btn-play:hover {
  background: blueviolet;
}

.disable, .btn-play.disable:hover {
  background: #eee;
  cursor: not-allowed;
  color: #999;
}

.text-reaction {
  text-align: center;
}
</style>>
