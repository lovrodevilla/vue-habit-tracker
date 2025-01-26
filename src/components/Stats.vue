<template>
  <div class="page stats">
    <h2>Habit Statistics</h2>
    <table>
      <thead>
        <tr>
          <th>Total Habits</th>
          <th>Completed Habits</th>
          <th>Pending Habits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ totalHabits }}</td>
          <td>{{ completedHabits }}</td>
          <td>{{ pendingHabits }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useHabitsStore } from "../stores/habitStore";

export default {
  computed: {
    habits() {
      const habitsStore = useHabitsStore();
      return habitsStore.habits;
    },
    totalHabits() {
      return this.habits.length;
    },
    completedHabits() {
      return this.habits.filter(habit => habit.completed).length;
    },
    pendingHabits() {
      return this.habits.filter(habit => !habit.completed).length;
    }
  }
};
</script>

<style scoped>
.stats {
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

table th,
table td {
  padding: 15px;
  border: 1px solid #ddd;
  text-align: center;
}

table th {
  background-color: #4CAF50;
  color: white;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

table tr:hover {
  background-color: #f1f1f1;
}

table td {
  font-size: 18px;
  color: #333;
}
</style>
