<template>
  <div>
      <h3>Count History</h3>
      <span v-for="(count, index) in history" :key="index">
          {{ count }} &nbsp; &nbsp;
      </span>
  </div>
</template>

<script>
export default {
name: 'CounterHistory',
props: [
    'history'
]
}
</script>

<style>

</style>