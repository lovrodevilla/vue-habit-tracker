<template>
  <div class="not-found">
    <h2>Page Not Found</h2>
    <p>You tried to visit: {{ '/' + path }}</p>
    <router-link to="/" class="btn-home">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    path: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  font-size: 20px;
  color: #333;
}

.not-found h2 {
  font-size: 36px;
  color: #dc3545;
}

.not-found p {
  font-size: 18px;
  margin-bottom: 20px;
}

.btn-home {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn-home:hover {
  background-color: #0056b3;
}
</style>
