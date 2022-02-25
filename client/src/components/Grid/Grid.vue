<template>
  <div class="Grid">
    <Row v-for="(word, i) in words" :key="i" :word="word" />
  </div>

</template>

<script>
import Row from '@/components/Grid/Row'
export default {
  name: "Grid",
  props: ["words"],
  components: { Row }
}
</script>

<style>
  .Grid {
    display: flex;
    flex-flow: column;
    width: 300px;
    margin: 0 auto;
  }
</style>