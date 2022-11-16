<script>
import Admin from "./layouts/Admin.vue";
import Guest from "./layouts/Guest.vue";
import HomePage from "./pages/HomePage.vue";
import { RouterView } from "vue-router";

export default {
  components: { Guest, Admin, HomePage },
  data() {
    return {
      isAdmin: false,
      isGuest: true
    };
  }
}
</script>

<template>
  <RouterView />
</template>
