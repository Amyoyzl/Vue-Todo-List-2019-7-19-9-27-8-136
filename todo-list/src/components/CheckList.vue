<template>
  <div id="check-list">
    <ol>
      <li v-for="item in items" v-bind:key="item">
        <input type="checkbox" class="done-todo" />
        <span>{{ item }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "checkList",
  props: ['items']
};
</script>
