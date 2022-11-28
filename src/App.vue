<script>
export default {
}
</script>
<template>
  <component :is="$route.meta.layout || 'div'"></component>
</template>

<style>

.btn:hover{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.btn{
  box-shadow: 0 8px 16px 0 rgba(131, 131, 131, 0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin: 2px;
}

.w-11{
  width: 11%;
}

.w-15{
  width: 15%;
}

.w-26{
  width: 26%;
}
.status-active{
  border: 1px rgb(19, 134, 19) solid;
  background-color: white;
  color: rgb(19, 134, 19);
  padding: 7px;
  border-radius: 6px;
}

.status-inactive{
  border: 1px rgb(255, 171, 0) solid;
  background-color: white;
  color: rgb(255, 171, 0);
  padding: 7px;
  border-radius: 6px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>