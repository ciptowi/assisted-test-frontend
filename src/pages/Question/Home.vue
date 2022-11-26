<template>
  <div class="container text-left mt-3">
    <h1 class="text-center mb-3"><b>SOAL</b></h1>
    <RouterLink to="add-question">
      <button class="btn btn-primary mb-2">
          <i class="fa fa-plus" aria-hidden="true"></i>
          Tambah Soal Baru
      </button>
    </RouterLink>
    <div class="container-fluid">
      <table id="q-table" class="display table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Kategori</th>
            <th>pertanyaan</th>
            <th class="w-11">Status</th>
            <th class="w-26">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>1</td>
              <td>Perangkat Desa Dayu</td>
              <td>Jika setiap peserta ujian sekarang sedang berpikir maka: ...</td>
              <td><span class="status-active">Aktif</span></td>
              <td>
                <RouterLink to="edit-question">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="warning">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
              <td>3</td>
              <td>Perangkat Desa Dayu</td>
              <td>Semua anggota  asosiasi profesi harus hadir dalam</td>
              <td><span class="status-active">Aktif</span></td>
              <td>
                <RouterLink to="edit-question">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="warning">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
              <td>4</td>
              <td>Perangkat Desa Dayu</td>
              <td>Semua warga desa Dayu adalah petani,  Pak Imam adalah warga desa Dayu</td>
              <td><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink to="edit-question">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="success">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
              <td>5</td>
              <td>Perangkat Desa Dayu</td>
              <td>Semua pengendara harus mengenakan helm,  Sebagian pengendara mengenakan sarung tangan</td>
              <td><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink to="edit-question">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="success">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
