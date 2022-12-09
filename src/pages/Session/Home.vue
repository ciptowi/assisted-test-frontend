<template>
  <div class="container text-left mt-3">
    <h1 class="text-center mb-3"><b>UJIAN</b></h1>
    <RouterLink to="add-session">
      <button class="btn btn-primary mb-2">
          <i class="fa fa-plus" aria-hidden="true"></i>
          Tambah Sesi Ujian Baru
      </button>
    </RouterLink>
    <div class="container-fluid">
      <table id="q-table" class="display table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Batas Waktu</th>
            <th class="w-11">Status</th>
            <th class="w-26">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in sessions">
              <td>{{ s.description }}</td>
              <td><div v-for="c in s.categories">{{ '- '+c }}</div></td>
              <td>{{ s.time_limit+' Menit' }}</td>
              <td v-show="(s.status == 1)"><span class="status-active">Aktif</span></td>
              <td v-show="(s.status == 2)"><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink :to="'edit-session/'+s.id">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="warning" v-show="(s.status == 1)" @click="UpdateSession(s.id,2)">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1 text-white" variant="success" v-show="(s.status == 2)" @click="UpdateSession(s.id,1)">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger" @click="UpdateSession(s.id,0)">Hapus</b-button>
              </td>          
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import CategoryServices from "../../services/CategoryServices";
import SessionService from "../../services/SessionService";

const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token

  export default{
    data: () =>{
      return{
        sessions: [],
        categories: []
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
        SessionService.find().then((res) => {
          if(res.status === 200) {
            this.sessions = res.data.data
            console.log(res)
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      UpdateSession(id,s){
        const data = Object.assign({})
        data.status = s;
        console.log('id = '+id+' status = '+s);
        SessionService.update(id,data, token).then((res) => {
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