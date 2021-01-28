<template>
  <div class="form-task">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="taskSubmitHandler">
        <validation-provider rules="required" v-slot="{ errors }">
          <label for="title" class="label-title-task">Tarefa:</label>
          <input
            type="text"
            :value="title"
            @input="title = $event.target.value"
            name="title"
            class="inpt-title-task"
          />
          <button type="submit" class="btn-add-task">
            Cadastrar
          </button>
          <div v-if="!formSubmitValidate && invalid">
            <span class="msg-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      title: "",
      isComplete: "",
      formSubmitValidate: false,
    };
  },
  methods: {
    taskSubmitHandler() {
      if (this.title != "") {
        this.$emit("taskSubmit", {
          title: this.title,
          isComplete: false,
        });
        this.formSubmitValidate = true;
        this.title = "";
      } else {
        this.formSubmitValidate = false;
      }
    },
  },
};
</script>

<style scoped>
.form-task {
  display: block;
  margin: 10px;
}

.label-title-task {
  color: var(--gray-dark);
}

.inpt-title-task,
.btn-add-task {
  margin-left: 10px;
  padding: 2px;
}

.inpt-title-task {
  border: 1px solid var(--secondary);
  height: 1.6rem;
  width: 60%;
  border-radius: 0.25rem;
}

@media (max-width: 519px) {
  .inpt-title-task {
    display: block;
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
    flex: 1;
  }
}

.inpt-title-task:focus {
  border-color: var(--blue-light);
  outline: 0;
  box-shadow: 0 0 0 0.2rem var(--blue-focus);
}

.btn-add-task {
  width: 8.4rem;
  height: 1.6rem;
  padding: 2px;
  background-color: var(--blue);
  border-color: var(--blue);
  color: var(--primary);
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.25rem;
}
@media (max-width: 519px) {
  .btn-add-task {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
  }
}
.btn-add-task:hover {
  color: var(--primary);
  background-color: var(--blue-hover);
  border-color: var(--blue-hover);
}

.btn-add-task:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem var(--blue-light);
}

.msg-error {
  color: var(--error);
  display: block;
}
</style>
