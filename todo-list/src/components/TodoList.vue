<template>
  <div id="todo-list">
    <v-header />
    <div>
      <input class="input-text" type="text" v-model="newItem" />
      <div id="button" @click="add">Add</div>
    </div>
    <br />
    <v-check-list :items="showItems" v-on:changeCheck="change" />
    <v-filters v-on:filter="filter" />
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
    return {
      newItem: "",
      items: [],
      showItems: []
    };
  },
  methods: {
    add() {
      this.items.push({ isChecked: false, content: this.newItem });
      this.newItem = "";
      this.showItems = this.items.slice();
    },
    filter(filterMethod) {
      switch(filterMethod) {
        case 1: 
          this.showItems = this.items.slice();
          break;
        case 2:
          this.showItems = this.items.filter(item => item.isChecked == false);
          break;
        case 3:
          this.showItems = this.items.filter(item => item.isChecked == true);
          break;
      }
    },
    change() {
      this.items = this.showItems.slice();
    }
  }
};
</script>
