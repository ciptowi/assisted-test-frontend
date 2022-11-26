<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>EDIT SESI UJIAN</b></h1>
    <b-card class="float-right">
      <div class="row">
        <div class="col-6">
          <input type="text" class="form-control form-control-md" placeholder="Keterangan" name="desc" value="Seleksi Calon Perangkat Desa Dayu Tanggal 17 Desember 2022" required>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" name="category" id="c1" value="1" checked>
            <label class="form-check-label" for="c1">Perangkat Desa Dayu</label>
          </div>
          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" name="category" id="c2" value="2" >
            <label class="form-check-label" for="c2">Perangkat Desa Modangan</label>
          </div>
          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" name="category" id="c3" value="3" >
            <label class="form-check-label" for="c3">Perangkat Desa Ngoran</label>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <input type="number" class="form-control form-control-md" placeholder="Batas Waktu (Menit)" name="time" value="120" required>
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="question">
          <input type="submit" class="btn btn-primary" value="Tambahkan">
        </RouterLink>        
      </div>
    </b-card>
  </div>
</template>
