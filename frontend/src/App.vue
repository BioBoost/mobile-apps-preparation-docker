<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="request">Click for Request</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { GeneralApi } from './api/Api.js';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      message: ''
    }
  },
  methods: {
    request() {
      // Make a request for a user with a given ID
      GeneralApi.get_message()
      .then(function (response) {
        // handle success
        this.message = response.message
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
