<template>
  <b-card class="sidebar px-3">
    <a class="green" v-b-toggle.submenu>Menu</a>
    <b-collapse id="submenu">
      <ul>
        <li>
          <router-link class="green" to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link class="green" to="/category-list">List Kategori</router-link>
        </li>
      </ul>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style>
  .sidebar {
    min-height: 100vh;
  }
</style>
