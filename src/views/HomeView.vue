<template>
  <div class="home-view">
    <Home @habit-deleted="showMessage" />
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
import Home from "../components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    showMessage(message) {
      this.message = message;
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
};
</script>

<style scoped>
.message {
  color: #ffffff;
  background-color: #a22222;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  font-size: 1.2em;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-out, slideUp 0.5s ease-out;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

</style>

