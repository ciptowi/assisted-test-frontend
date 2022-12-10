<template>
    <div  :style="{'background-image':'url(https://www.ovconsultancy.com/wp-content/uploads/2018/11/icon_5-c34d58bc0046c04e43c86f0035e5bfda.png)'}">
        <b-card class="responsive container text-center mw-50 p-3 mt-5">
            <h5 class="mb-5 text-danger"><b>Untuk soal berikut masing-masing soal terdiri dari pernyataan-pernyataan yang akan mengungkapkan kemampuan anda dalam menyimpulkan suatu permasalahan setiap soal terdiri dari beberapa pernyataan bacalah baik-baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. <br/><br/>Jumlah soal sebanyak 75, waktu ujian 120 menit, tiap jawaban benar memiliki poin 10, setelah menekan tombol "Mulai Ujian" timer akan berjalan, ujian berakhir jika timer habis, anda memilih untuk mengakhiri ujian, atau anda menutup halaman ujian/browser</b></h5>
            <h5 class="mb-4">Juka anda sudah siap untuk memulai ujian silahkan klik tombol "Mulai Ujian" dibawah</h5>
            <RouterLink :to="'/test-start/'+nik"><button style="width: 220px" class="btn bg-success text-light mb-5 bt-lg  p-2"><b>Mulai Ujian</b></button></RouterLink>
            <h5 class="mb-4">Untuk mencoba mengerjakan contoh soal silahkan klik tombol "Tryout" dibawah</h5>
            <RouterLink :to="'/test-tryout/'+nik"><button style="width: 220px" class="btn bg-warning text-light bt-lg  p-2"><b>Tryout</b></button></RouterLink>
        </b-card>
    </div>
</template>
<script>
import ParticipantService from '../../services/ParticipantServices'

export default{
    props:{
      nik: String
    },
    data: ()=>{
      return{
        
      }
    },
    methods:{
        async getParticipantByNik() {
            const nik = this.nik
            const response = await ParticipantService.find(nik)
            const r_data = response.data.data
            
            console.log(r_data)            
        },
    },
    created () {
       this.getParticipantByNik()
    }
}
</script>
