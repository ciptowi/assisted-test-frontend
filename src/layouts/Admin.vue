<script>
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
<template>
      <!--div :style="{ 'margin-left': sidebarWidth }"-->
      <SideBar/>
      <div id="body_container" :style="{ 'margin-left': sidebarWidth}">
        <router-view/>
      </div>
</template>