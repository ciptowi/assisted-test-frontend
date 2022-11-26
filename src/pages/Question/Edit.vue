<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>Edit Soal</b></h1>
    <b-card class="float-right">
      <div class="row">
        <div class="col-3">
          <select class="form-control form-control-md" name="c" required>
            <option value="1" selected>Perangkat Desa Dayu</option>
            <option value="2">Perangkat Desa Modangan</option>
            <option value="3">Perangkat Desa Ngoran</option>
          </select>
        </div>
        <div class="col-9">
          <input type="text" class="form-control form-control-md" placeholder="Pertanyaan" name="q" required value="Jika setiap peserta ujian sekarang sedang berpikir maka: ...">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban a" name="a1" value="Jika Si A Sedang berpikir maka sia bukan peserta ujian">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban a" name="a1p" value="0">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban b" name="a2" value="Jika Si A sekarang tidak berpikir maka ia peserta ujian">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban b" name="a2p" value="0">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban c" name="a3" value="Jika Si A Sedang berpikir maka ia peserta ujian">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban c" name="a3p" value="10">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban d" name="a4" value="Jika sekarang sedang berpikir maka si A bukan peserta ujian">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban d" name="a4p" value="0">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban e" name="a5" value="Jika Si A bukan peserta ujian maka ia tidak sedang berpikir">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban e" name="a5p" value="0">
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="question">
          <input type="submit" class="btn btn-primary" value="Perbarui">
        </RouterLink>        
      </div>
    </b-card>
  </div>
</template>