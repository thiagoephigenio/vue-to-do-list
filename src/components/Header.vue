<template>
  <div>
    <nav>
      <div class="container">
        <router-link to="/home" class="header-menu">
          Home
        </router-link>
        <router-link :to="{ name: 'add-task' }" class="header-menu">
          Cadastrar Nova Tarefa
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
}

.header-menu {
  color: var(--gray-dark);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-left: 0.5em;
  padding: 0.5em;
  padding-right: 0;
  font-size: 0.9em;
}
.header-menu.active {
  color: var(--gray-light);
}
</style>
