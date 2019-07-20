<template>
  <div id="check-list">
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <input type="checkbox" class="done-todo" @click="$emit('changeCheck')" v-model="item.isChecked" />
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
