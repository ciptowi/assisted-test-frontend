<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex align-item-center justify-content-center">
          <b-card class="mt-3">
              <pre class="m-0">{{ message }}</pre>
              <div class="text-center">
                <h3>Login</h3>
              </div>
              <b-form @submit="login" @reset="onReset">
                <b-form-group>
                  <label class="my-3">Username</label>
                  <b-form-input v-model="form.username" type="text" placeholder="Username" required />
                </b-form-group>
                <b-form-group>
                  <label class="my-3">Password</label>
                  <b-form-input id="input-2" v-model="form.password" type="password" placeholder="*********" required />
                </b-form-group>
                <div>
                  <input class="btn btn-primary w-100" type="submit" variant="primary" :value="isLoading ? 'Loading' : 'Login'" :disabled="isLoading" />
                </div>
                <!-- <div class="text-center mt-3">
                  <p>Lupa Password</p>
                </div> -->
                <div class="text-center mt-3">
                  <a @click="goToRegister" class="primary">Registrasi</a>
                </div>
              </b-form>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminServices from "../services/AdminServices";

  export default {
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        isError: false,
        isLoading: false,
        message: '',
        response: {},
        data: ''
      };
    },
    methods: {
      goToRegister() {
        this.$router.push("/auth-register");
      },
      async login() {
        this.isLoading = true
        AdminServices.login(this.form).then((res) => {
          this.isLoading = false
          this.message = res.message
          this.data = res.data
          this.$router.push("/category-list");
        }).catch((err) => {
          this.isLoading = false
          this.message = err.message
        })
      },
    },
  };
</script>

<style>
.tombol {
  width: 100%;
}
</style>
