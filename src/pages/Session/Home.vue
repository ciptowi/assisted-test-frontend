<template>
  <div class="container text-left mt-3">
    <h1 class="text-center mb-3"><b>UJIAN</b></h1>
    <RouterLink to="add-session">
      <button class="btn btn-primary mb-2">
          <i class="fa fa-plus" aria-hidden="true"></i>
          Tambah Sesi Ujian Baru
      </button>
    </RouterLink>
    <div class="container-fluid">
      <table id="q-table" class="display table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Batas Waktu</th>
            <th class="w-11">Status</th>
            <th class="w-26">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>1</td>
              <td>Seleksi Calon Perangkat Desa Dayu Tanggal 17 Desember 2022</td>
              <td>- Perangkat Desa Dayu</td>
              <td>120 Menit</td>
              <td><span class="status-active">Aktif</span></td>
              <td>
                <RouterLink to="edit-session">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="warning">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
              <td>2</td>
              <td>Seleksi Calon Perangkat Desa Modangan Tanggal 23 Desember 2022</td>
              <td>- Perangkat Desa Modangan</td>
              <td>75 Menit</td>
              <td><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink to="edit-session">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="success">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
              <td>3</td>
              <td>Seleksi Calon Perangkat Desa Modangan Tanggal 27 Desember 2022</td>
              <td>- Perangkat Desa Ngoran</td>
              <td>75 Menit</td>
              <td><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink to="edit-session">
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
