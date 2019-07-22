<template>
  <div id="filters">
    <ul id="filters">
      <li>
        <a @click="$emit('filter', this.FILTER_METHOD.ALL)">ALL</a>
      </li>
      <li>
        <a @click="$emit('filter', this.FILTER_METHOD.ACTIVE)">Active</a>
      </li>
      <li>
        <a @click="$emit('filter', this.FILTER_METHOD.COMPLETE)">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "filters"
};
</script>
