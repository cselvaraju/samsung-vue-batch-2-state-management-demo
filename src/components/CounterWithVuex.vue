<template>
  <div>
      <h3>Counter</h3>
      <p>
          <input type="text" v-model="incrementValue"> | 
          <button @click="incrementBy">Increment By</button> | 
          <button @click="increment">+</button> | 
          <span>{{ currentCount }}</span> | 
          <button @click="decrement">-</button> | 
          <span>{{ currentCount }} <sup>2</sup> = {{ squaredCount }}</span>
      </p>
  </div>
</template>

<script>
export default {
    name: 'CounterComponent',
    // data() {
    //     return {
    //         currentCount: 0
    //     }
    // },
    data() {
        return {
            incrementValue: 1
        }
    },
    computed: {
        currentCount() {
            return this.$store.state.currentCount;
        },
        squaredCount() {
            return this.$store.getters.squaredCount
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment');
        },
        decrement() {
            this.$store.commit('decrement');
        },
        incrementBy() {
            this.$store.dispatch('incrementBy', parseInt(this.incrementValue));
        }
    }
}
</script>

<style>

</style>