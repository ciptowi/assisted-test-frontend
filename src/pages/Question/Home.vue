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
            <th>Kategori</th>
            <th>pertanyaan</th>
            <th class="w-11">Status</th>
            <th class="w-26">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="q in questions">
              <td>{{ q.category }}</td>
              <td>{{ q.question }}</td>
              <td v-show="(q.status == 1)"><span class="status-active">Aktif</span></td>
              <td v-show="(q.status == 2)"><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink to="edit-question">
                  <button class="btn btn-sm btn-info btn-md text-white">Edit</button>
                </RouterLink>              
                <b-button size="sm" class="mx-1 text-white" variant="warning" v-show="(q.status == 1)" @click="UpdateStatus(q.id,2)">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1 text-white" variant="success" v-show="(q.status == 2)" @click="UpdateStatus(q.id,1)">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger" @click="UpdateStatus(q.id,0)">Hapus</b-button>
              </td>          
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default{
    data: () => {
      return{
        questions: [
          {
            id: 1,
            category: 'Perangkat Desa Dayu',
            question: 'Jika setiap peserta ujian sekarang sedang berpikir maka: ...',
            status: 1
          },{
            id: 2,
            category: 'Perangkat Desa Dayu',
            question: 'Pertanyaan 2 ?',
            status: 1
          },{
            id: 3,
            category: 'Perangkat Desa Dayu',
            question: 'Pertanyaan 3',
            status: 1
          },{
            id: 4,
            category: 'Perangkat Desa Dayu',
            question: 'Pertanyaan 4',
            status: 1
          },{
            id: 5,
            category: 'Perangkat Desa Dayu',
            question: 'P5 ?',
            status: 2
          },{
            id: 6,
            category: 'Perangkat Desa Dayu',
            question: 'P6 ?',
            status: 2
          },
        ]
      }
    },methods: {
      UpdateStatus(id,status){
        console.log('Set Status into '+status+' where id == '+id);
        //Update category status
      }
    }
  }
</script>