<template>
    <div class="text-center" v-if="loading == true">
        <h5><b>Loading...</b></h5>
    </div>
    <div  :style="{'background-image':'url(https://www.ovconsultancy.com/wp-content/uploads/2018/11/icon_5-c34d58bc0046c04e43c86f0035e5bfda.png)'}" v-if="loading == false">
        <b-card class="responsive container text-center mw-50 p-3 mt-5">
            <h5 class="mb-5 text-danger"><b>Untuk soal berikut masing-masing soal terdiri dari pernyataan-pernyataan yang akan mengungkapkan kemampuan anda dalam menyimpulkan suatu permasalahan setiap soal terdiri dari beberapa pernyataan bacalah baik-baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. <br/><br/>Jumlah soal sebanyak 75, waktu ujian 120 menit, tiap jawaban benar memiliki poin 10, setelah menekan tombol "Mulai Ujian" timer akan berjalan, ujian berakhir jika timer habis, anda memilih untuk mengakhiri ujian, atau anda menutup halaman ujian/browser</b></h5>
            <h5 class="mb-4">Juka anda sudah siap untuk memulai ujian silahkan klik tombol "Mulai Ujian" dibawah</h5>
            <button style="width: 220px" class="btn bg-success text-light mb-5 bt-lg  p-2" @click="UpdateParticipant()"><b>Mulai Ujian</b></button>
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
        loading : false,
        participant : []
      }
    },
    methods:{
        async getParticipantByNik() {
            const nik = this.nik
            const response = await ParticipantService.find(nik)
            this.participant = response.data.data
            
            console.log(this.participant)            
            this.loading = false
        },
        UpdateParticipant(){
            this.loading = true
            const id = this.participant[0].id
            const data = Object.assign({})
            data.category_id = this.participant[0].category_id
            data.nik = this.participant[0].nik
            data.name = this.participant[0].name
            data.partisipant_numb = this.participant[0].partisipant_numb
            data.score = 0
            data.status = 2
            console.log('id = '+id)
            console.log(data);
            ParticipantService.update(id,data).then((res) => {
                //alert('Selamat Mengerjakan')
                this.$router.push('/test-start/'+this.nik);
            }).catch((err) => {
                alert(err.message)
            })
        },
    },
    created () {
        this.loading = true
       this.getParticipantByNik()
    }
}
</script>
