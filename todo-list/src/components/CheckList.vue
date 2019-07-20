<template>
  <div id="check-list">
    <ol>
      <li v-for="item in items" v-bind:key="item.content">
        <input type="checkbox" class="done-todo" v-model="item.isChecked" />
        <span v-bind:class="{checked: item.isChecked}">{{ item.content }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "checkList",
  props: ['items'],
};
</script>
