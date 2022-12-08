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
            <form>
                <div class="row">
                    <div class="col-sm mb-3">
                        <input type="text" required class="form-control form-control-lg" placeholder="Nama">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm mb-3">
                        <input type="text" required class="form-control form-control-lg" placeholder="NIK">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm mb-3">
                        <input type="text" required class="form-control form-control-lg" placeholder="Nomor Peserta">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm p-2 mb-3">
                        <select class="form-control form-control-lg" v-model="selected">
                            <option value="" disabled selected >-- Pilih Kategori --</option>
                            <option v-for="data in optionCategory" :key="data.id" :value="data.id">{{ data.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="row text-center m-t-3">
                    <div class="col-sm p-2">
                        <Router-link to="test-prep"><input type="submit" class="btn btn-lg btn-primary" value="Submit"></Router-link>
                    </div>
                </div>
            </Form>
        </div>      
    </b-card>    
</template>

<script>
import CategoryService from '../../services/CategoryServices'


export default {
    name: 'registration',
    data () {
        return {
            optionCategory: [],
            selected: ''
        }
    },
    methods: {
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