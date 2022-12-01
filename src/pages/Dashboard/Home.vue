<template>
  <div class="container text-left mt-3">
    <h2 class="text-center mb-3"><b>SESI AKTIF</b></h2>
    <div class="container mb-5">
      <table id="q-table" class="display table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Batas Waktu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>{{ active_session[0]['description'] }}</td>
              <td v-for="c in active_session[0]['category']"> {{ '- '+c }} </td>
              <td>{{ active_session[0]['time_limit'] }} Menit</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="text-center"><b>PESERTA</b></h2>
    <div class="container-fluid">
      <table id="q-table" class="display table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kategori</th>
            <th>NIK</th>            
            <th>Nomor Peserta</th>
            <th>Status</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in participant">
              <td>{{ p.name }}</td>
              <td>{{ p.category }}</td>
              <td>{{ p.nik }}</td>
              <td>{{ p.p_numb }}</td>
              <td v-show="(p.status == 1)">Belum Selesai Ujian</td>
              <td v-show="(p.status == 2)">Selesai Mengikuti Ujian</td>
              <td>{{ p.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
  export default{
    data : ()=>{
      return{
        active_session: [ //from db active_session where status == 2(active)
          {
            id: 1,
            description: 'Seleksi Calon Perangkat Desa Dayu Tanggal 17 Desember 2022',
            category: ['Perangkat Desa Dayu'],
            time_limit: 50
          }
        ],
        participant:[ //from db participant where session_id == active_session.id join category
          {
            category: 'Perangkat Desa Dayu',
            nik: '111111111111',
            name: 'Peserta A',
            p_numb: 'p01',
            status: 1,
            score: 0
          },{
            category: 'Perangkat Desa Dayu',
            nik: '222222222222',
            name: 'Peserta B',
            p_numb: 'p02',
            status: 2,
            score: 80
          },{
            category: 'Perangkat Desa Dayu',
            nik: '333333333333',
            name: 'Peserta C',
            p_numb: 'p03',
            status: 2,
            score: 60
          },
        ]
      }
    }
  }
</script>