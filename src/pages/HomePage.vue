<template>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Tab 1" active>
        <b-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime.
          Distinctio laboriosam quam illo fugit fuga, possimus recusandae quod nisi
          provident tempore, necessitatibus soluta, aut minima quo facere architecto
          a?
        </b-card-text>
        <span class="align-baseline">baseline</span>
        <span class="align-top">top</span>
        <span class="align-middle">middle</span>
        <span class="align-bottom">bottom</span>
        <span class="align-text-top">text-top</span>
        <span class="align-text-bottom">text-bottom</span>
      </b-tab>
      <b-tab title="Tab 2">
        <button @click="goToLogin">Login</button>
      </b-tab>
    </b-tabs>
  </b-card>
  <div>
    
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToLogin(){
      this.$router.push("/auth-login");
    }
  }
}
</script>

<style></style>
