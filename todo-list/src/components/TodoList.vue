<template>
  <div id="todo-list">
    <v-header />
    <div>
      <input class="input-text" type="text" />
      <div id="button">Add</div>
    </div>
    <br />
    <v-check-list />
    <v-filters />
  </div>
</template>

<script>
import Header from "./Header.vue";
import CheckList from "./CheckList.vue";
import Filters from "./Filters.vue";
export default {
  name: "TodoList",
  components: {
    "v-header": Header,
    "v-check-list": CheckList,
    "v-filters": Filters
  },
  data() {
    return {};
  }
};
</script>
