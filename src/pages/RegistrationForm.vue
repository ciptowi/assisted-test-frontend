<template>
    <div class="text-center mt-3 m-b-3">
        <!-- <img src="..." class="rounded-circle" alt="..." /> -->
        <h1>LOGO</h1>
        <h2>Form Pendaftaran Ujian <br/>--Placeholder--</h2>
    </div>
    
    <b-card class="container w-50 rounded p-3">
        <div class="form-group justify-content-md-center">
            <form>
                <div class="row">
                    <div class="col-sm p-2">
                        <input type="text" required class="form-control form-control-md" placeholder="Nama">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm p-2">
                        <input type="text" required class="form-control form-control-md" placeholder="NIK">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm p-2">
                        <input type="text" required class="form-control form-control-md" placeholder="Nomor Peserta">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm p-2 mb-3">
                        <select class="form-control form-control-md">
                            <option value="" disabled selected>--Kategori--</option>
                            <option value="1">Perangkat Desa Kedawung</option>
                            <option value="2">Perangkat Desa Modangan</option>
                            <option value="3">Perangkat Desa Penataran</option>
                        </select>
                    </div>
                </div>
                <div class="row text-center m-t-3">
                    <div class="col-sm p-2">
                        <Router-link to="test-prep"><input type="submit" class="btn btn-md btn-primary" value="Submit"></Router-link>
                    </div>
                </div>
            </Form>
        </div>      
    </b-card>    
</template>