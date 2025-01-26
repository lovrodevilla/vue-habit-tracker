<template>
  <div class="add-habit">
    <AddHabit @add-habit="saveHabit" />
  </div>
</template>

<script>
import { useHabitsStore } from "../stores/habitStore";
import AddHabit from "../components/AddHabit.vue";

export default {
  name: "AddHabitView",
  components: {
    AddHabit,
  },
  setup() {
    const habitsStore = useHabitsStore();

    const saveHabit = async (newHabit) => {
      try {
        await habitsStore.addHabit(newHabit);
      } catch (error) {
        console.error("Error in AddHabitView:", error);
      }
    };

    return {
      saveHabit,
    };
  },
};
</script>
