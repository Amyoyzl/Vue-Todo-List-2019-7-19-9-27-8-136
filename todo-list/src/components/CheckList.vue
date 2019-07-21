<template>
  <div id="check-list">
    <ol>
      <i style="display: none"></i>
      <li v-for="(item, index) in showItems" :key="index">
        <input
          type="checkbox"
          class="done-todo"
          @click="check(index)"
          v-model="item.isChecked"
        />
        <span :class="{checked: item.isChecked}">{{ item.content }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
import FILTERMETHOD from '../constants/FilterMethod'
export default {
  name: "checkList",
  props: ["items", "method"],
  data() {
    return {
      showItems: Object.assign(this.items)
    }
  },
  methods: {
    check(index) {
      let item = this.showItems[index];
      this.items.splice(item.id, 1, item);
    },
    filters(methods) {
      switch(methods) {
        case FILTERMETHOD.ALL: 
          this.showItems = Object.assign(this.items);
          break;
        case FILTERMETHOD.ACTIVE: 
          this.showItems = this.items.filter(item => !item.isChecked);
          break;
        case FILTERMETHOD.COMPLETE:
          this.showItems = this.items.filter(item => item.isChecked);
          break;
      }
    }
  },
};
</script>
