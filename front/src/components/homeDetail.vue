<template>
  <div>
    <input type="checkbox" name="isChecked" v-model="todo.checked" id="" @change="updateCheck" />
    <span
      :style="{ 'text-decoration': todo.checked ? 'line-through' : 'none', color: todo.checked ? 'gray' : 'black' }"
      @click="removeTodo"
      >{{ todo.name }}</span
    >
  </div>
</template>

<script>
export class TodoDTO {
  constructor(name, id = '') {
    this.name = name;
    this.id = id;
  }
}
export default {
  name: 'Todo',
  props: {
    todo: {
      type: TodoDTO,
      required: true,
    },
  },
  methods: {
    updateCheck() {
      console.log('update', this.todo.checked);
      updateTodoCheck(this.todo.id, this.todo.checked);
    },
    removeTodo() {
      this.$emit('remove', this.todo);
    },
  },
};
</script>
