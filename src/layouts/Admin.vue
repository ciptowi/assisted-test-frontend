<template>
  <div class="row">
    <div class="col-2">
      <SideBar />
      <Button>Login</Button>
    </div>
    <div class="col-10">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import SideBar from "../components/SideBar.vue";

export default {
  name: "Admin",
  components: { SideBar },
  data() {
      return {};
  }
}
</script>