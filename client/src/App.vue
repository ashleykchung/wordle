<template>
  <Grid :words="wordList"></Grid>
  {{ currentWord }}
</template>

<script>
import Grid from '@/components/Grid/Grid.vue'
import Keyboard from '@/components/Keyboard/Keyboard.vue'

export default {
  name: 'App',
  components: {
    Grid, Keyboard,
  },
  data(){
    return{
      words: ["hello", "daily", "kinds", "creat"],
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
    if(event.keyCod == 46){
      this.currentWord = this.currentWord.substring(0, -1)
    }
    if(event.key == 'return'){

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