<template>
  <div>
    <router-view @taskSubmit="taskAddHandler" />
    <div v-if="tasks.length == 0" class="card-task empty">
      Não há tarefas para serem exibidas
    </div>
    <div v-for="task in tasks" :key="task.id" class="card-task">
      <div class="title-task">{{ task.title }}</div>
      <div class="check-area">
        <input
          type="checkbox"
          :id="'checkbox' + task.id"
          @change="completeTask(task.id)"
          :disabled="task.isComplete"
        />
        <label
          :for="'checkbox' + task.id"
          :class="task.isComplete ? 'completed' : 'uncompleted'"
          >{{ task.isComplete ? "Concluída" : "Não concluída" }}</label
        >
      </div>
      <button v-on:click="removeTask(task.id)" class="btn-remove">
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    removeTask(value) {
      this.tasks = this.tasks.filter((task) => {
        return task.id != value;
      });
    },
    taskAddHandler(task) {
      let { [this.tasks.length - 1]: lastTask } = this.tasks;
      let idGenerator = this.tasks.length == 0 ? 1 : lastTask.id + 1;
      task = {
        id: idGenerator,
        title: task.title,
        isComplete: task.isComplete,
      };
      this.tasks.push(task);
    },
    completeTask(id) {
      this.tasks.map((task) => {
        if (task.id == id) {
          task.isComplete = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.card-task {
  display: block;
  margin: 10px;
  padding: 10px;
  border-radius: 0.25rem;
  max-width: 530px;
  border: 1px solid var(--secondary);
}

.card-task.empty {
  color: var(--gray-dark);
}

.check-task,
.title-task {
  display: inline;
}

.check-task {
  float: right;
}

.title-task {
  color: var(--gray-dark);
}
label.completed {
  color: var(--success);
}
.uncompleted {
  color: var(--error);
}

.btn-remove {
  display: block;
  margin-top: 10px;
  width: 100%;
  height: 1.6rem;
  padding: 2px;
  background-color: var(--orange);
  border-color: var(--orange);
  color: var(--primary);
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.25rem;
}

.btn-remove:hover {
  color: var(--primary);
  background-color: var(--orange-hover);
  border-color: var(--orange-hover);
}

.btn-remove:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem var(--orange-invisible);
}
</style>
