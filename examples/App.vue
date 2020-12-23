<template>
  <div id="app">
    <jmoremsg 
    text="This is more message" 
    :setup="{
      background:'#ddd'
    }"
    follow="follow"
    >
      <img class="img" slot="custom" src="./assets/imgs/header.jpg" alt="img">
      <button class="btn">This is a button in default slot</button>
    </jmoremsg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

.btn {
  height: 100px;
}
.img {
  width: 300px;
}
</style>
