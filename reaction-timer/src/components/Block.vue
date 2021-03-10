<template>
  <div class="block" v-show="showBlock" @click="stopTimer">
    <p>Click me!</p>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true
      this.startTimer()
    }, this.delay)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer)
      this.$emit('end', this.reactionTime)
    }
  }
}
</script>

<style>
.block {
  background-color: coral;
  width: 500px;
  height: 300px;
  margin: 50px auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

div.block p {
  color: white;
  font-size: 28px;
}
</style>