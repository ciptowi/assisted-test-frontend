<template>
    <Router-link to="/auth-login"><button class="btn btn-sm btn-success mr-4"><i class="fa fa-sign-in" aria-hidden="true"></i></button></Router-link>
    <div class="text-center mt-3 m-b-3">
        <!-- <b-img class="w-50" src="@/assets/Logo.jpg" fluid alt="Yayasan Bina Citra Anak Bangsa"></b-img> -->
        
        <img style="width: 100px; margin-bottom: 10px;" src="@/assets/logo.png" alt="Yayasan Bina Citra Anak Bangsa"/>
        <br><h5>PUSAT STUDI PENDIDIKAN DAN PEMBERDAYAAN KEWARGANEGARAAN</h5>
        <h4 class="mt-3">Form Pendaftaran Ujian <br/>Seleksi Calon Perangkat Desa Dayu Tanggal 17 Desember 2022</h4>
    </div>
    
    <b-card class="container w-75 rounded p-3">
        <div class="form-group justify-content-md-center">
            <div class="row">
                <div class="col-sm mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="Nama" v-model="i_name">
                </div>
            </div>
            <div class="row">
                <div class="col-sm mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="NIK" v-model="i_nil">
                </div>
            </div>
            <div class="row">
                <div class="col-sm mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="Nomor Peserta" v-model="i_p_numb">
                </div>
            </div>
            <div class="row">
                <div class="col-sm p-2 mb-3">
                    <select class="form-control form-control-lg" v-model="i_c_id">
                        <option value="" disabled selected >-- Pilih Kategori --</option>
                        <option v-for="data in optionCategory" :key="data.id" :value="data.id">{{ data.name }}</option>
                    </select>
                </div>
            </div>
            <div class="row text-center m-t-3">
                <div class="col-sm p-2">
                    <button class="btn btn-lg btn-primary" @click="InsertParticipant()">Submit</button>
                </div>
            </div>
        </div>      
    </b-card>    
</template>

<script>
import CategoryService from '../../services/CategoryServices'
import ParticipantService from '../../services/ParticipantServices'


export default {
    name: 'registration',
    data () {
        return {
            t_s_id: 1,
            i_name: '',
            i_nik: '',
            i_p_numb: '',
            i_c_id: '',
            optionCategory: [],
            selected: ''
        }
    },
    methods: {
        InsertParticipant(){
            const data = Object.assign({})
            data.test_session_id = this.t_s_id
            data.category_id = this.i_c_id
            data.nik = this.i_nik
            data.name = this.i_name
            data.participant_numb = this.i_p_numb
            data.score = 0
            ParticipantService.insert(data).then((res) => {
                alert(res.data.message)
                console.log(data)
            }).catch((err) => {
                alert(err.message)
            })
        },
        async getAllCategory() {
            const param = Object.assign({})
            param.status = 1
            const response = await CategoryService.find(param)
            if (response.status === 200) {
                this.optionCategory = response.data.data
            }
            console.log(this.optionCategory)
        }
    },
    created () {
       this.getAllCategory()
    }
}
</script>