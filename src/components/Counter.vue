<template>
  <div>
      <h3>Counter</h3>
      <p>
          <button @click="increment">+</button> | 
          <span>{{ currentCount }}</span> | 
          <button @click="decrement">-</button>
      </p>
  </div>
</template>

<script>
export default {
    name: 'CounterComponent',
    data() {
        return {
            currentCount: 0
        }
    },
    methods: {
        increment() {
            this.currentCount++;
            this.$emit('countChanged', this.currentCount);
        },
        decrement() {
            this.currentCount--;
            this.$emit('countChanged', this.currentCount);
        }
    }
}
</script>

<style>

</style>