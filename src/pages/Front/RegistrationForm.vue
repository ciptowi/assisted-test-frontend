<template>
    <div class="text-center mt-3 m-b-3">
        <b-img class="w-50" src="../src/assets/Logo.jpg" fluid alt="Yayasan Bina Citra Anak Bangsa"></b-img>
        <h3>Form Pendaftaran Ujian <br/>Seleksi Calon Perangkat Desa Dayu Tanggal 17 Desember 2022</h3>
    </div>
    
    <b-card class="container w-50 rounded p-3">
        <div class="form-group justify-content-md-center">
            <form>
                <div class="row">
                    <div class="col-sm p-2">
                        <input type="text" required class="form-control form-control-lg" placeholder="Nama">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm p-2">
                        <input type="text" required class="form-control form-control-lg" placeholder="NIK">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm p-2">
                        <input type="text" required class="form-control form-control-lg" placeholder="Nomor Peserta">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm p-2 mb-3">
                        <select class="form-control form-control-lg">
                            <option value="" disabled selected>--Kategori--</option>
                            <option value="1">Perangkat Desa Kedawung</option>
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