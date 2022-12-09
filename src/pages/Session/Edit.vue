<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>EDIT SESI UJIAN</b></h1>
    <b-card class="float-right" v-for="s in session">
      <div class="row">
        <div class="col-6 mb-3">
          <input type="text" class="form-control form-control-md" placeholder="Keterangan" :v-model="desc_input" name="desc" :value="s.description">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <input type="text" class="form-control form-control-lg" placeholder="Pesan Pre-Test" name="pre_test" :v-model="pre_test_input" :value="s.pre_test_msg">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <div class="form-check form-switch" v-for="c in categories" v-show="c.status == 1">
            <input type="checkbox" class="form-check-input" :id="'c'+c.id" :value="c.id" v-model="category_input" :checked="c.id == s.category_id">
            <label class="form-check-label" :for="'c'+c.id">{{ c.name }}</label>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <input type="number" class="form-control form-control-md" placeholder="Batas Waktu (Menit)" name="time"  :v-model="time_input" :value="s.time_limit">
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="question">
          <input type="submit" class="btn btn-primary" value="Simpan">
        </RouterLink>        
      </div>
    </b-card>
  </div>
</template>
<script>
import CategoryServices from "../../services/CategoryServices";
import SessionService from "../../services/SessionService";

const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token

  export default{
    props:{
      s_id: String
    },
    data: () =>{
      return{
        categories: [],
        desc_input: '',
        pre_test_input: '',
        category_input: [],
        time_input: '',
        session: []
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
      getSession(){
        const param = Object.assign({})
        SessionService.findById(this.s_id).then((res) => {
          if(res.status === 200) {
            this.session = res.data.data
            console.log(res)
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
    },
    created(){
      this.getCategories()
      this.getSession()
    }
  }
</script>