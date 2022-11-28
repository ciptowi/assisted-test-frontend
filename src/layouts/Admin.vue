<template>
  <div>
    <SideBar />
    <div :style="{'margin-left': sidebarWidth}">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

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