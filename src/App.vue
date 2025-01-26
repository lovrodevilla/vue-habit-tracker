<template>
  <div id="app">
    <nav v-if="!hideNav">
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/add" class="nav-link">Add Habit</router-link>
        <router-link to="/stats" class="nav-link">Stats</router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    hideNav() {
      return this.$route.name === 'NotFound';
    }
  }
};
</script>

<style>
nav {
  background-color: #f8f9fa;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-link {
  font-size: 18px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: #d7dbde;
  transform: scale(1.1);
}
</style>
