<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>Soal Baru</b></h1>
    <b-card class="float-right">
      <div class="row">
        <div class="col-3">
          <select class="form-control form-control-md" name="c" required>
            <option selected disabled value="">-- Pilih Kategori --</option>
            <option value="1">Perangkat Desa Dayu</option>
            <option value="2">Perangkat Desa Modangan</option>
            <option value="3">Perangkat Desa Ngoran</option>
          </select>
        </div>
        <div class="col-9">
          <input type="text" class="form-control form-control-md" placeholder="Pertanyaan" name="q" required>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban a" name="a1">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban a" name="a1p">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban b" name="a2">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban b" name="a2p">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban c" name="a3">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban c" name="a3p">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban d" name="a4">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban d" name="a4p">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban e" name="a5">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban e" name="a5p">
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