<template>
  <Grid :words="wordList"></Grid>
  <Keyboard/>
</template>

<script>
import Grid from '@/components/Grid/Grid.vue'
import Keyboard from '@/components/Keyboard/Keyboard.vue'
import http from require("@/http-common")

export default {
  name: 'App',
  components: {
    Grid, Keyboard,
  },
  data(){
    return{
      words: ["hello", "daily", ],
      keys: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
      currentWord: 'forks',
  }},
  computed: {
    wordList() {
      const newWords = [...this.words, this.currentWord]
      return Array.from({ length: 6 }, (_, idx) => 
        newWords[idx] ? newWords[idx] : ""
      )
    }
  },
created() {
  document.addEventListener('keydown', this.handleKeyboard)
},
methods: {
  handleKeyboard(event){
    if (event.repeat) return;
    if(/^[a-z()]$/i.test(event.key)){
      this.currentWord += event.key
    }
    if(event.key == "Backspace"){
      this.currentWord = this.currentWord.slice(0, -1)
    }
    if(event.key == 'Enter'){
      // this.words = [...this.words, this.currentWord]
      // this.currentWord = ''

      http
        .get("/")
        .then(response => console.log(response))
        .catch(console.error)

      // for implementing isValid
      const guess = hello
      http
      .get(`/isValid/${guess}`)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
    }

  }
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>