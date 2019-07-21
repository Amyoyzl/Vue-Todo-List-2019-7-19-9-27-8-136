<template>
  <div id="todo-list">
    <v-header />
    <div>
      <input class="input-text" type="text" v-model="newItem" />
      <div id="button" @click="add">Add</div>
    </div>
    <br />
    <v-check-list ref="itemList" :items="items" />
    <v-filters @filter="filter" />
  </div>
</template>

<script>
import Header from "./Header.vue"
import CheckList from "./CheckList.vue"
import Filters from "./Filters.vue"
import FILTERMETHOD from '../constants/FilterMethod'
export default {
  name: "TodoList",
  components: {
    "v-header": Header,
    "v-check-list": CheckList,
    "v-filters": Filters
  },
  data() {
    return {
      newItem: "",
      items: [],
      len: 0,
      filterMethod: FILTERMETHOD.ALL
    };
  },
  methods: {
    add() {
      this.items.push({ id: this.len++, isChecked: false, content: this.newItem });
      this.newItem = "";
      this.$refs.itemList.filters(this.filterMethod);
    },
    filter (method) {
      this.filterMethod = method;
      this.$refs.itemList.filters(method);
    }
  }
};
</script>
