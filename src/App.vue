<template>
<div>
  <h1>State Management Demo</h1>
</div>
<CounterWithVuex />
<CounterHistoryWithVuex />
</template>

<script>
import CounterWithVuex from './components/CounterWithVuex.vue';
import CounterHistoryWithVuex from './components/CounterHistoryWithVuex.vue';

export default {
  name: 'App',
  components: {
    CounterWithVuex,
    CounterHistoryWithVuex
  },
  data() {
    return {
      countHistory: []
    }
  },
  methods: {
    onCountChanged(event) {
      this.countHistory.push(event);
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
