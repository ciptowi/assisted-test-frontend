<script>
import SidebarLink from '../components/SidebarLink.vue'
import Navbar from './NavBar.vue';
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink, Navbar },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <Navbar />
  <div class="sidebar mt-5" :style="{ width: sidebarWidth }">
    <SidebarLink to="/dashboard" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/category" icon="fas fa-list-ul">Kategori</SidebarLink>
    <SidebarLink to="/question" icon="fas fa-question-circle">Soal & Jawaban</SidebarLink>
    <SidebarLink to="/session" icon="fa fa-file-text">Sesi ujian</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>