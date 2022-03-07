<template>
  <KeyRow v-for="(key, i) in keys" :key="i"/>
  {{ key }}
</template>

<script>
  import KeyRow from '@/components/Keyboard/KeyRow'
export default {
  name: "Keyboard",
  props: ["keys"],
  components: { KeyRow }
}
</script>

<style>

</style>