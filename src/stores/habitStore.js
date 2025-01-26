import { defineStore } from "pinia";
import { 
  fetchHabits, 
  addHabit as firebaseAddHabit, 
  deleteHabit, 
  updateHabit, 
  listenToHabitsFromFirebase 
} from "../firebase";

export const useHabitsStore = defineStore("habits", {
  state: () => ({
    habits: [],
    loading: false,
    unsubscribe: null,
  }),

  actions: {
    async listenToHabits() {
      try {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
        this.loading = true;
        this.unsubscribe = listenToHabitsFromFirebase((habits) => {
          this.habits = habits;
          this.loading = false;
        });
      } catch (error) {
        console.error("Error listening to habits:", error);
        this.loading = false;
      }
    },
    
    async addHabit(newHabit) {
      try {
        await firebaseAddHabit(newHabit);
      } catch (error) {
        console.error("Error adding habit:", error);
        throw error;
      }
    },

    async removeHabit(id) {
      try {
        await deleteHabit(id);
      } catch (error) {
        console.error("Error removing habit:", error);
      }
    },

    async updateHabit(habit) {
      try {
        const updatedHabit = { ...habit, completed: !habit.completed }; 
        await updateHabit(habit.id, updatedHabit);
      } catch (error) {
        console.error("Error updating habit:", error);
      }
    },
  },

  beforeDispose() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  },
});

