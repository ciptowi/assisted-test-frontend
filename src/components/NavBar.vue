<template>
  <nav class="navbar navbar-expand-sm fixed-top px-4 navbar-dark bg-success">
    <a class="navbar-brand" href="#">Panel Admin</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <a class="nav-link" href="#">Home 
                <span class = "sr-only">(current)</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
          </li>
        </ul> -->
    </div>
    <div class="navbar-nav ml-auto">
        <h5 class="mt-2 mx-5 text-light">{{ user }}</h5>
        <b-button size="sm" class="mx-1 text-white" variant="danger" @click="logout">Logout <i class="fa fa-sign-in" aria-hidden="true"></i></b-button>
    </div>
</nav>
</template>

<script>
// import { userAuthStore } from '../stores/auth'

// const store = userAuthStore()

export default {
  name: "NavBar",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("AUTH_KEY")).username
    }
  },
  methods: {
    logout: function() {
      // store.resetStore()
      localStorage.removeItem("AUTH_KEY")
      this.$router.push("/auth-login");
    }
  },
  mounted () {
    // this.user = store.getUsername()
  }
}
</script>

<style></style>