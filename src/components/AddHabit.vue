<template>
  <div class="page">
    <h2>Add a New Habit</h2>
    <form @submit.prevent="emitAddHabit">
      <div>
        <label for="habitName">Habit Name:</label>
        <input
          id="habitName"
          v-model="newHabit.name"
          type="text"
          placeholder="Enter habit name"
          required
        />
      </div>
      <div>
        <label for="habitTime">Time:</label>
        <input
          id="habitTime"
          v-model="newHabit.time"
          type="time"
          required
        />
      </div>
      <button type="submit">Add Habit</button>
    </form>
  </div>
</template>

<script>
import { useHabitsStore } from "../stores/habitStore";

export default {
  data() {
    return {
      newHabit: {
        name: "",
        time: "",
      },
    };
  },
  methods: {
    async emitAddHabit() {
      if (this.newHabit.name && this.newHabit.time) {
        const habitsStore = useHabitsStore();
        
        try {
          await habitsStore.addHabit({
            ...this.newHabit,
            completed: false,
          });

          this.resetForm();
        } catch (error) {
          console.error("Error adding habit:", error);
        }
      }
    },
    resetForm() {
      this.newHabit.name = "";
      this.newHabit.time = "";
    },
  },
};
</script>


<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #046808;
}
</style>
