<template>
  <div class="Row">
    <Cell v-for="(letter, i) in letterList" :key="i" :letter="letter"/>
  </div>
</template>

<script>
import Cell from "@/components/Grid/Cell"

export default {
  name: "Row",
  props: ["word"],
  components: { Cell },
  computed: {
    letterList() {
      return Array.from({ length: 5 }, (_, idx) => 
        this.word[idx] ? this.word[idx] : ""
      )
    }
  },
}
</script>

<style lang="scss">
  .Row {
    display: flex;

    &:not(:last-child) {
    margin-bottom: 5px;
    }
  }
</style>