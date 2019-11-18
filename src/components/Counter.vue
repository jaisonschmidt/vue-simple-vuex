<template>
  <div>
    <h2>Welcome to Counter</h2>
    <button @click="incrementCounter">increment counter</button>
    <h2>{{counter}}</h2>
  </div>
</template>

<script>
export default {
    methods: {
        incrementCounter () {
            this.$store.dispatch('incrementAction', 1)
        }
    },
    computed: {
      counter () {
        return this.$store.getters.counter
      }
    }
}
</script>

<style>
</style>