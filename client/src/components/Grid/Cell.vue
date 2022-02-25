<template>
  <div class="Cell">
    {{ letter }}
  </div>
</template>

<script>

export default {
  name: "Cell",
  props: ["letter"],

  components: {
  }
}
</script>

<style lang="scss">
  .Cell {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    text-transform: uppercase;
    font-weight: 800;
    border: 1px solid #888;

    &:not(:last-child){
    margin-right: 5px;
    }
  }
</style>
