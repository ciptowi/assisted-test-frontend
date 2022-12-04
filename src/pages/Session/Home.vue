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
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Batas Waktu</th>
            <th class="w-11">Status</th>
            <th class="w-26">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in sessions">
              <td>{{ s.description }}</td>
              <td><div v-for="c in s.categories">{{ '- '+c }}</div></td>
              <td>{{ s.time_limit+' Menit' }}</td>
              <td v-show="(s.status == 1)"><span class="status-active">Aktif</span></td>
              <td v-show="(s.status == 2)"><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink to="edit-session">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="warning" v-show="(s.status == 1)" @click="UpdateStatus(s.id,2)">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1 text-white" variant="success" v-show="(s.status == 2)" @click="UpdateStatus(s.id,1)">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger" @click="UpdateStatus(s.id,0)">Hapus</b-button>
              </td>          
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default{
    data: () =>{
      return{
        sessions: [
          {
            id: 1,
            description: 'Seleksi Calon Perangkat Desa Dayu Tanggal 17 Desember 2022',
            categories: ['Perangkat Desa Dayu'],
            time_limit: 50,
            status: 1
          },{
            id: 2,
            description: 'Tes Kemampuan Dasar CV A 30 Desember 2022',
            categories: ['Tenaga Administrasi', 'Marketing Officer', 'Resepsionis'],
            time_limit: 120,
            status: 2
          },{
            id: 3,
            description: 'Seleksi Calon Perangkat Desa Penataran Tanggal 20 Januari 2023',
            categories: ['Perangkat Desa Penataran'],
            time_limit: 60,
            status: 2
          },{
            id: 4,
            description: 'Tes',
            categories: ['Resepsionis'],
            time_limit: 30,
            status: 2
          },
        ]
      }
    }
  }
</script>