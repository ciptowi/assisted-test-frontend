<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>EDIT SESI UJIAN</b></h1>
    <b-card class="float-right" v-for="s in session">
      <div class="row">
        <div class="col-6 mb-3">
          <input type="text" class="form-control form-control-md" placeholder="Keterangan" :v-model="desc_input" id="desc" :value="s.description">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <input type="text" class="form-control form-control-lg" placeholder="Pesan Pre-Test" id="pre_test" :v-model="pre_test_input" :value="s.pre_test_msg">
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
          <input type="number" class="form-control form-control-md" placeholder="Batas Waktu (Menit)" id="time"  :v-model="time_input" :value="s.time_limit">
          <input type="hidden" :v-model="status_input" :value="s.status" id="status">
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="UpdateSession()">Simpan</button>
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
        status_input:'',
        session: []
      }
    },
    methods: {
      getCategories(){
        CategoryServices.find(1).then((res) => {
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
      UpdateSession(){
        const data = Object.assign({})
        data.category_id = 2
        data.description = document.getElementById('desc').value
        data.pre_test_msg = document.getElementById('pre_test').value
        data.time_limit = document.getElementById('time').value
        data.status = document.getElementById('status').value

        console.log(data);
        
        SessionService.update(this.s_id,data,token).then((res) => {
          alert(res.data.message)
          this.getSession()
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