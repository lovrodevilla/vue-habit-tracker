<template>
  <div class="home">
    <h2>Habit List</h2>

    <div v-if="loading" class="loading-message">Loading habits...</div>

    <div v-else>
      <div v-if="habits.length === 0" class="no-habits">
        No habits yet. Add your first habit!
      </div>
      <transition-group v-if="habits.length > 0" name="habit-list" tag="ul" class="habit-list">
        <li
          v-for="habit in habits"
          :key="habit.id"
          :class="['habit-item', { completed: habit.completed }]"
        >
          <div class="habit-content">
            <span>{{ habit.name }} ({{ habit.time }})</span>
          </div>
          <div class="habit-buttons">
            <button
              :class="habit.completed ? 'btn-undo' : 'btn-complete'"
              @click="toggleComplete(habit)"
            >
              {{ habit.completed ? 'Undo' : 'Complete' }}
            </button>
            <button class="btn-delete" @click="deleteHabit(habit.id)">
              Delete
            </button>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, computed, defineProps, defineEmits } from "vue";
import { useHabitsStore } from "../stores/habitStore";

export default {
  setup(props, { emit }) {
    const habitsStore = useHabitsStore();

    const habits = computed(() => habitsStore.habits);
    const loading = computed(() => habitsStore.loading);

    onMounted(() => {
      habitsStore.listenToHabits();
    });

    onBeforeUnmount(() => {
      if (habitsStore.unsubscribe) {
        habitsStore.unsubscribe();
        habitsStore.unsubscribe = null;
      }
    });

    const toggleComplete = async (habit) => {
      await habitsStore.updateHabit(habit);
    };

    const deleteHabit = async (id) => {
      await habitsStore.removeHabit(id);
      emit('habit-deleted', 'The habit has been deleted.');
    };

    return {
      habits,
      loading,
      toggleComplete,
      deleteHabit,
    };
  },
};
</script>


<style scoped>
.home {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

.loading-message {
  font-size: 1.5em;
  color: #007bff;
  text-align: center;
}

.no-habits {
  font-size: 1.2em;
  color: #dc3545;
  text-align: center;
  margin-top: 20px;
}

.habit-list {
  list-style: none;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 620px;
}

.habit-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s ease-in-out;
  width: 100%;
}

.habit-item.completed {
  background-color: #f8d7da;
  color: #721c24;
  text-decoration: line-through;
}

.habit-content {
  display: flex;
  align-items: center;
}

.habit-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 8px 15px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
  font-size: 14px;
}

.btn-complete {
  background-color: #28a745;
}

.btn-complete:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.btn-undo {
  background-color: #dc3545;
}

.btn-undo:hover {
  background-color: #c82333;
  transform: scale(1.05);
}

.btn-delete {
  background-color: #ffc107;
}

.btn-delete:hover {
  background-color: #e0a800;
  transform: scale(1.05);
}

.habit-list-enter-active,
.habit-list-leave-active {
  transition: opacity 2s ease, transform 0.5s;
}

.habit-list-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.habit-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
