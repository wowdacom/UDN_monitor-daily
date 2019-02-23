<template>
  <div id="app">
    <!-- <div class="introduction">
      
    </div>
    <div class="story">
      <div class="describe">

      </div>
      <div class="warning">

      </div>
    </div> -->
    <div v-if="step === 0">
      <storyboarder v-hammer:swipe.horizontal="changePage" msg="Welcome to Your Vue.js App"/>
    </div>
    <div v-if="step === 1">
      <storyboarder msg="Tts step 2"/>
    </div>
  </div>
</template>

<script>
import storyboarder from './components/storyboarder.vue';

export default {
  name: 'app',
  data () {
    return {
      step: 0
    }
  },
  components: {
    storyboarder
  },
  methods: {
    changePage (event) {
      if (event.type === 'swiperight') {
        this.step--
      } else {
        this.step++
      }
      
      console.log(event)
    }
  }
}
</script>

<style lang="scss">
// html, body {
//   overflow: hidden;
// }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
