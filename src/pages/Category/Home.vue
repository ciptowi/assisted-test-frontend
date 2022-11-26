<template>
  <div class="container text-left mt-3">
    
    <h1 class="text-center mb-3"><b>KATEGORI</b></h1>
    
    <div class="row">
      <div class="col-md-4">
        <input type="text" class="form-control form-control-md" placeholder="Nama Kategori Baru">
      </div>
      <div class="col-md-4">
        <button v-on:click="this.goToCreate()" class="btn btn-primary mb-2">
            Tambahkan      
        </button>
      </div>
      <div class="col-md-4"></div>
      
    </div>
    
    <div class="table-responsive-xl">
      <table class="table mt-1 text-center table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th class="w-11">Status</th>
            <th class="w-26">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>1</td>
              <td><input type="text" class="form-control" value="Perangkat Desa Dayu"></td>
              <td><span class="status-active">Aktif</span></td>
              <td>
                <input type="submit" class="btn btn-sm btn-info btn-md text-white" value="Update">
                <b-button size="sm" class="mx-1 text-white" variant="warning">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
            <td>2</td>
              <td><input type="text" class="form-control" value="Perangkat Desa Modangan"></td>
              <td><span class="status-active">Aktif</span></td>
              <td>
                <input type="submit" class="btn btn-sm btn-info btn-md text-white" value="Update">
                <b-button size="sm" class="mx-1 text-white" variant="warning">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
            <td>3</td>
              <td><input type="text" class="form-control" value="Perangkat Desa Ngoran"></td>
              <td><span class="status-active">Aktif</span></td>
              <td>
                <input type="submit" class="btn btn-sm btn-info btn-md text-white" value="Update">
                <b-button size="sm" class="mx-1 text-white" variant="warning">Non-Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
            <td>4</td>
              <td><input type="text" class="form-control" value="Tenaga Administrasi"></td>
              <td><span class="status-inactive">Non Aktif</span></td>
              <td>
                <input type="submit" class="btn btn-sm btn-info btn-md text-white" value="Update">
                <b-button size="sm" class="mx-1" variant="success">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
          <tr>
            <td>5</td>
              <td><input type="text" class="form-control" value="Resepsionis"></td>
              <td><span class="status-inactive">Non Aktif</span></td>
              <td>
                <input type="submit" class="btn btn-sm btn-info btn-md text-white" value="Update">
                <b-button size="sm" class="mx-1" variant="success">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger">Hapus</b-button>
              </td>          
          </tr>
        </tbody>
      </table>
    </div>
  
  </div>
</template>

<script>
</script>
