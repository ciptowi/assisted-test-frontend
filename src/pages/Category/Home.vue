<template>
  <div class="container text-left mt-3">
    
    <h1 class="text-center mb-3"><b>KATEGORI</b></h1>
    
    <div class="row">
      <div class="col-md-4">
        <input type="text" class="form-control form-control-md" placeholder="Nama Kategori Baru" name="category_name" id="c_name">
      </div>
      <div class="col-md-4">
        <button v-on:click="this.InsertCategory()" class="btn btn-primary mb-2">
            Tambahkan      
        </button>
      </div>
      <div class="col-md-4"></div>
      
    </div>
    
    <div class="table-responsive-xl">
      <table class="table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>Nama</th>
            <th class="w-11">Status</th>
            <th class="w-26">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in categories">
              <td><input type="text" class="form-control" :value=c.name :id="('c'+c.id)"></td>
              <td v-show="(c.status == 1)"><span class="status-active">Aktif</span></td>
              <td v-show="(c.status == 2)"><span class="status-inactive">Non Aktif</span></td>
              <td>
                <b-button type="submit" class="btn btn-sm btn-info btn-md text-white" @click="Update(c.id)">Update</b-button>
                <b-button v-show="(c.status == 1)" size="sm" class="mx-1 text-white" variant="warning" @click="UpdateStatus(c.id,2)">Non-Aktifkan</b-button>
                <b-button v-show="(c.status == 2)" size="sm" class="mx-1 text-white" variant="success" @click="UpdateStatus(c.id,1)">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger" @click="Update(c.id,0)">Hapus</b-button>
              </td>          
          </tr>
        </tbody>
      </table>
    </div>
  
  </div>
</template>

<script>
  export default{
    data: ()=>{
      return{
        categories: [ //get from db categories where status != 0
          {
            id: 1,
            name: 'Perangkat Desa Dayu',
            status: 1
          },{
            id: 2,
            name: 'Perangkat Desa Modangan',
            status: 1
          },{
            id: 3,
            name: 'Perangkat Desa Ngoran',
            status: 1
          },{
            id: 4,
            name: 'Tenaga Administrasi',
            status: 2
          },{
            id: 5,
            name: 'Resepsionis',
            status: 2
          },{
            id: 6,
            name: 'Marketing',
            status: 2
          },
        ]
      }
    },
    methods: {
      InsertCategory(){
        var name = document.getElementById('c_name').value;
        console.log('Insert '+name);
        //insert category using name as name
      },
      Update(id){
        var c_id = 'c'+id;
        var name = document.getElementById(c_id).value;
        console.log('Set Name into '+name+' where id == '+id);
        //Update category name
      },
      UpdateStatus(id,status){
        console.log('Set Status into '+status+' where id == '+id);
        //Update category status
      }
    },
  }
</script>
