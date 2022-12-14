<template>
    <div class="text-center" v-if="loading == true">
        <h5><b>Loading...</b></h5>
    </div>
    <div v-for="s in a_session" v-show="s.status == 1" :style="{'background-image':'url(https://www.ovconsultancy.com/wp-content/uploads/2018/11/icon_5-c34d58bc0046c04e43c86f0035e5bfda.png)'}" v-if="loading == false">
    <Router-link to="/auth-login"><button class="btn btn-sm btn-success mr-4"><i class="fa fa-sign-in" aria-hidden="true"></i></button></Router-link>
    <b-card class="container w-75 rounded p-3">
        <div class="text-center mt-3 m-b-3">
            <!-- <b-img class="w-50" src="@/assets/Logo.jpg" fluid alt="Yayasan Bina Citra Anak Bangsa"></b-img> -->
            <input type="hidden" name="s_id" id="s_id" :value="s.id">
            <img style="width: 100px; margin-bottom: 10px;" src="@/assets/logo.png" alt="Yayasan Bina Citra Anak Bangsa"/>
            <br><h5>PUSAT STUDI PENDIDIKAN DAN PEMBERDAYAAN KEWARGANEGARAAN</h5>
            <h4 class="mt-2">Form Pendaftaran Ujian <br/><div class="mt-2">{{ s.description }}</div></h4>
        </div>
        <form class="form-group justify-content-md-center" @submit.prevent="InsertParticipant()">
            <div class="row">
                <div class="col-sm mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="Nama" v-model="i_name" required>
                </div>
            </div>
            <div class="row">
                <div class="col-sm mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="NIK" v-model="i_nik" required>
                </div>
            </div>
            <div class="row">
                <div class="col-sm mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="Nomor Peserta" v-model="i_p_numb" required>
                </div>
            </div>
            <div class="row">
                <div class="col-sm p-2 mb-3">
                    <select class="form-control form-control-lg" v-model="i_c_id" required>
                        <option value="" disabled selected >-- Pilih Kategori --</option>
                        <option v-for="data in optionCategory" :key="data.id" :value="data.id">{{ data.name }}</option>
                    </select>
                </div>
            </div>
            <div class="row text-center m-t-3">
                <div class="col-sm p-2">
                    <button class="btn btn-lg btn-primary" type="submit">Submit</button>
                </div>
            </div>
        </form>      
    </b-card>    
    </div>
</template>

<script>
import CategoryService from '../../services/CategoryServices'
import ParticipantService from '../../services/ParticipantServices'
import SessionService from '../../services/SessionService'


export default {
    name: 'registration',
    data () {
        return {
            loading: false,//loading
            a_session: [],
            i_name: '',
            i_nik: '',
            i_p_numb: '',
            i_c_id: '',
            optionCategory: [],
            selected: '',
            existing: 0
        }
    },
    methods: {
        async getActiveSession() {
            const response = await SessionService.find(1)
            if (response.status === 200) {
                this.a_session = response.data.data
                console.log(response)
                this.getCategory()
            }
        },
        InsertParticipant(){
            this.loading = true
            const data = Object.assign({})
            data.test_session_id = document.getElementById('s_id').value
            data.category_id = this.i_c_id
            data.nik = this.i_nik
            data.name = this.i_name
            data.partisipant_numb = this.i_p_numb
            data.score = 0
            //console.log(data)
            this.getParticipantByNik(data);
            /*if (this.existing == 0) {
                ParticipantService.insert(data).then((res) => {
                    alert(res.data.message)
                    //this.$router.push('test-prep');
                }).catch((err) => {
                    alert(err.message)
                    //this.$router.push('test-prep');
                })    
            }else{
                alert('NIK Sudah terdaftar !')
            }*/         
        },
        async getParticipantByNik(data) {
            const nik = this.i_nik
            const response = await ParticipantService.find(nik)
            const r_data = response.data.data
            if (r_data.length > 0) {                
                this.existing = 1
                // console.log(r_data)
                alert('NIK Sudah terdaftar !')
                this.loading = false
            }else{
                console.log(data)
                ParticipantService.insert(data).then((res) => {
                    //alert(res.data.message)
                    this.$router.push('/test-prep/'+nik);
                }).catch((err) => {
                    alert(err.message)
                    //this.$router.push('test-prep');
                })
            }
            console.log(this.response)
            
        },
        async getCategory() {
            const response = await CategoryService.findById(this.a_session[0].category_id)
            if (response.status === 200) {
                this.optionCategory = response.data.data
            }
            console.log(this.optionCategory)
            this.loading = false
        }
    },
    created () {
        this.loading = true
       this.getActiveSession()
    }
}
</script>