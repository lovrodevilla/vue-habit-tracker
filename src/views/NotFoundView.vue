<template>
  <NotFound :path="path" />
</template>

<script>
import NotFound from "../components/NotFound.vue";

export default {
  name: "NotFoundView",
  components: {
    NotFound,
  },
  computed: {
    path() {
      return this.$route.params.pathMatch || "";
    },
  },
};
</script>

