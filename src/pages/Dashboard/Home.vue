<template>
  <div class="container text-left mt-3">
    <h2 class="text-center mb-3"><b>SESI AKTIF</b></h2>
    <div class="container mb-5">
      <table id="q-table" class="display table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>Keterangan</th>
            <th>Pesan Sebelum Mengerjakan</th>
            <th>Kategori</th>
            <th>Batas Waktu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in active_session" v-show="s.status == 1">
              <td>{{ s.description }}</td>
              <td>{{ s.pre_test_msg }}</td>
              <td v-for="c in categories" v-show="c.id == s.category_id"> {{ c.name }} </td>
              <td>{{ s.time_limit }} Menit</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="text-center"><b>PESERTA</b></h2>
    <div class="container-fluid">
      <button @click="download()">Dowkload</button>
      <table id="q-table" class="display table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kategori</th>
            <th>NIK</th>            
            <th>Nomor Peserta</th>
            <th>Status</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in participant">
              <td>{{ p.name }}</td>
              <td>{{ p.c_name }}</td>
              <td>{{ p.nik }}</td>
              <td>{{ p.partisipant_numb }}</td>
              <td v-show="(p.status == 1)">Sudah Login</td>
              <td v-show="(p.status == 2)">Sedang Mengerjakan Ujian</td>
              <td v-show="(p.status == 3)">Selesai Mengerjakan Ujian</td>
              <td>{{ p.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
  import { jsontoexcel } from "vue-table-to-excel";

  import CategoryServices from "../../services/CategoryServices";
  import ParticipantServices from "../../services/ParticipantServices";
  import SessionService from "../../services/SessionService";

  const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token

    export default{
      data: () =>{
        return{
          active_session: [],
          participant:[],
          categories: [],
          export: {
            data: [],
            head: [],
            fileName: "Hasil Tes.csv"
          },
          participant_head : ['nik','nama','nomor peserta','nilai','status(1 = terdaftar; 2 = mengerjakan; 3 = selesai mengerjakan)','waktu pendaftaran','kategori']
        }
      },
      methods: {
        download() {
          for (let i = 0; i < this.participant.length; i++) {
            delete this.participant[i].category_id;
            delete this.participant[i].id;
            delete this.participant[i].test_session_id;
            delete this.participant[i].updated_at;
          }
          console.log('Export')
          console.log(this.participant)
          this.export.data = this.participant
          this.export.head = this.participant_head
          console.log(this.export.data)
          const { data, head, fileName } = this.export;
          jsontoexcel.getXlsx(data, head, fileName);
        },
        getparticipant(){
          ParticipantServices.find('').then((res) => {
            if(res.status === 200) {
              this.participant = res.data.data
              console.log('participant')
              console.log(this.participant)
            }
          }).catch((err) => {
            alert(err.message)
          })
        },
        getCategories(){
          CategoryServices.find(0).then((res) => {
            if(res.status === 200) {
              this.categories = res.data.data
              console.log('Categories')
              console.log(this.categories)
            }
          }).catch((err) => {
            alert(err.message)
          })
        },
        getSession(){
          SessionService.find().then((res) => {
            if(res.status === 200) {
              this.active_session = res.data.data
              console.log('Session')
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
        this.getparticipant()
        setInterval(() => {
          this.getparticipant()
        }, 10000)
      }
    }
</script>