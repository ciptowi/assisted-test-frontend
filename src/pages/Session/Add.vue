<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>SESI UJIAN BARU</b></h1>
    <b-card class="float-right">
      <div class="row">
        <div class="col-6 mb-3">
          <input type="text" class="form-control form-control-md" placeholder="Keterangan" name="desc" v-model="desc_input">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <input type="text" class="form-control form-control-lg" placeholder="Pesan Pre-Test" name="pre_test" v-model="pre_test_input">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <div class="form-check form-switch" v-for="c in categories" v-show="c.status == 1">
            <input type="checkbox" class="form-check-input" :id="'c'+c.id" :value="c.id" v-model="category_input">
            <label class="form-check-label" :for="'c'+c.id">{{ c.name }}</label>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <input type="number" class="form-control form-control-md" placeholder="Batas Waktu (Menit)" name="time"  v-model="time_input">
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="InsertSession()">Tambahkan</button>
      </div>
    </b-card>
  </div>
</template>

<script>
import CategoryServices from "../../services/CategoryServices";
import SessionService from "../../services/SessionService";

const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token

  export default{
    data: () =>{
      return{
        categories: [],
        desc_input: '',
        pre_test_input: '',
        category_input: [],
        time_input: ''
      }
    },
    methods: {
      getCategories(){
        const param = Object.assign({})
        param.status = 1
        CategoryServices.find(param).then((res) => {
          if(res.status === 200) {
            this.categories = res.data.data
            console.log(res)
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      InsertSession(){
        const data = Object.assign({})
        data.description = this.desc_input
        data.pre_test_msg = this.pre_test_input
        data.category_id = 2
        data.time_limit = this.time_input
        console.log(data)
        SessionService.insert(data, token).then((res) => {
          alert(res.data.message)
          //this.$router.push('session');
        }).catch((err) => {
          alert(err.message)
        })
      },
    },
    created(){
      this.getCategories()
    }
  }
</script>