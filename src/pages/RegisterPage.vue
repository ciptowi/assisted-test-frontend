<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex align-item-center justify-content-center">
          <b-card class="mt-3">
              <pre class="m-0">{{ message }}</pre>
              <div class="text-center">
                <h3>Registrasi Admin</h3>
              </div>
              <b-form @submit="register" @reset="onReset">
                <b-form-group>
                  <label class="my-3">Username</label>
                  <b-form-input v-model="form.name" type="text" placeholder="Username" required />
                </b-form-group>
                <b-form-group>
                  <label class="my-3">Password</label>
                  <b-form-input id="input-2" v-model="form.password" type="password" placeholder="*********" required />
                </b-form-group>
                <div>
                  <input class="btn btn-primary w-100" type="submit" variant="primary" :value="loading ? 'Loading' : 'Daftar'" :disabled="loading" />
                </div>
                <div class="text-center mt-3">
                  <span>Sudah punya akun? </span><a @click="goToLogin"> Login</a>
                </div>
              </b-form>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        form: {
          name: "",
          password: "",
        },
        isError: false,
        loading: false,
        message: ''
      };
    },
    methods: {
      goToLogin() {
        this.$router.push("/auth-login");
      },
      async register() {
        this.loading = true
        // this.message = await auth.signUpWithEmailPassword(this.form.name, this.form.email, this.form.password)
        this.loading = false
      },
    },
  };
</script>

<style>
.tombol {
  width: 100%;
}
</style>
