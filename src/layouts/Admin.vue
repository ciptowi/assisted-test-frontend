<template>
      <SideBar />
      <div :style="{'margin-left': sidebarWidth}">
        <RouterView/>
      </div>
</template>

<script>
import { RouterView } from "vue-router";
import SideBar from "../components/SideBar.vue";
import { sidebarWidth } from "../components/state";

export default {
  name: "Admin",
  components: { SideBar },
  setup(){
    return {sidebarWidth}
  },
  data() {
      return {};
  }
}
</script>