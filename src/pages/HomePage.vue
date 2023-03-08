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
          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{'has-text-success line-through' : todo.done}">
              {{ todo.task }}
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
import { ref, onMounted } from 'vue';
import db from "@/firebase";
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const todoList = ref([]);
    const newTodo = ref('');
    const todosRef = collection(db, "todos");
    const todosQuery = query(todosRef, orderBy("date", "desc"));

    const addTodo = async () => {
      if (newTodo.value.trim() !== '') {
        await addDoc(todosRef, {
          task: newTodo.value,
          done: false,
          date: Date.now()
        })
        newTodo.value = '';
      }
    };

    const deleteTodo = (id) => {
      deleteDoc(doc(todosRef, id));
    }

    const toggleTodo = (id) => {
      const index = todoList.value.findIndex(todo => todo.id === id);

      updateDoc(doc(todosRef, id), {
        done: !todoList.value[index].done
      })
    }

    onMounted(() => {
      onSnapshot(todosQuery, (querySnapshot) => {
        const fbTodos = [];
        querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            task: doc.data().task,
            done: doc.data().done,
            date: doc.data().date
          }
          fbTodos.push(todo);
        });
        todoList.value = fbTodos;
      });
    })

    return { todoList, newTodo, addTodo, deleteTodo, toggleTodo };
  },
  name: "HomePage"
};
</script>

<style scoped>
@import "bulma/css/bulma.min.css";

.main-container {
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
}

.line-through {
  text-decoration: line-through;
}
</style>