<template>
  <div class="main-container">
    <form
      @submit.prevent="addTodo"
    >
      <div class="field has-addons">
        <div class="control">
          <input v-model="newTodo" class="input" type="text" placeholder="Add a todo">
        </div>
        <div class="control">
          <button :disabled="!newTodo" class="button is-info">
            Add
          </button>
        </div>
      </div>
    </form>
    <div
      v-for="todo in todoList"
      class="card mb-5"
      :key="todo.id"
      :class="{'has-background-success-light' : todo.done}"
    >
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered" >
            <div class="column" :class="{'has-text-success line-through' : todo.done}">
              {{todo.task}}
            </div>
            <div
              class="column is-5 has-text-right"
            >
              <button
                @click="toggleTodo(todo.id)"
                class="button"
                :class="{'is-light': !todo.done, 'is-success': todo.done}"
              >
                &check;
              </button>
              <button
                @click="deleteTodo(todo.id)"
                class="button is-danger ml-2"
              >
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const todoList = ref([
      {
        id: "id1",
        task: "Shave my beard",
        done: false
      },
      {
        id: "id2",
        task: "Do smth else",
        done: false
      }
    ]);

    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todoList.value.push({
          id: `id${todoList.value.length + 1}`,
          task: newTodo.value,
          done: false
        });
        newTodo.value = '';
      }
    };

    const deleteTodo = (id) => {
      const index = todoList.value.findIndex(todo => todo.id === id);
      todoList.value.splice(index, 1);
    }

    const toggleTodo = (id) => {
      const index = todoList.value.findIndex(todo => todo.id === id);
      todoList.value[index].done = !todoList.value[index].done;
    }

    return { todoList, newTodo, addTodo, deleteTodo, toggleTodo };
  }
};
</script>

<style>
@import "bulma/css/bulma.min.css";
.main-container {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
.line-through {
  text-decoration: line-through;
}
</style>