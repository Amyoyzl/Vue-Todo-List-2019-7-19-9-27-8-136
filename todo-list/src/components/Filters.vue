<template>
  <div id="filters">
    <ul id="filters">
      <li>
        <a @click="$emit('filter', 1)">ALL</a>
      </li>
      <li>
        <a @click="$emit('filter', 2)">Active</a>
      </li>
      <li>
        <a @click="$emit('filter', 3)">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "filters"
};
</script>
