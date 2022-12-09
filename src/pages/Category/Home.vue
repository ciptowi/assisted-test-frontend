<template>
  <div class="container text-left mt-3">
    
    <h1 class="text-center mb-3"><b>KATEGORI</b></h1>
    
    <div class="row">
      <div class="col-md-4">
        <input type="text" v-model="inputCategory" class="form-control form-control-md" placeholder="Nama Kategori Baru" name="category_name" id="c_name">
      </div>
      <div class="col-md-4">
        <button v-if="inputCategory === ''" class="btn btn-primary mb-2" disabled>
            Tambahkan      
        </button>
        <button v-else v-on:click="this.InsertCategory()" class="btn btn-primary mb-2">
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
          <tr v-for="c in categories" v-show="(c.status != 0)">
              <td><input type="text" class="form-control" :value=c.name :id="('c'+c.id)"></td>
              <td v-show="(c.status == 1)"><span class="status-active">Aktif</span></td>
              <td v-show="(c.status == 2)"><span class="status-inactive">Non Aktif</span></td>
              <td>
                <b-button type="submit" class="btn btn-sm btn-info btn-md text-white" @click="UpdateCategory(c.id,c.status)">Update</b-button>
                <b-button v-show="(c.status == 1)" size="sm" class="mx-1 text-white" variant="warning" @click="UpdateCategory(c.id,2)">Non-Aktifkan</b-button>
                <b-button v-show="(c.status == 2)" size="sm" class="mx-1 text-white" variant="success" @click="UpdateCategory(c.id,1)">Aktifkan</b-button>
                <b-button size="sm" class="mx-1" variant="danger" @click="UpdateCategory(c.id,0)">Hapus</b-button>
              </td>          
          </tr>
        </tbody>
      </table>
      <code>{{ listCategory }}</code>
    </div>
  
  </div>
</template>

<script>
import CategoryServices from "../../services/CategoryServices";

const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token

  export default{
    data: ()=>{
      return{
        inputCategory: '',
        categories: []
      }
    },
    methods: {
      getCategories(){
        CategoryServices.find(0).then((res) => {
          if(res.status === 200) {
            this.categories = res.data.data
            console.log(res)
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      InsertCategory(){
        const data = Object.assign({})
        data.name = this.inputCategory
        data.status = 1
        console.log(data)
        CategoryServices.insert(data, token).then((res) => {
          this.inputCategory = ''
          alert(res.data.message)
          this.getCategories()
        }).catch((err) => {
          alert(err.message)
        })
      },
      UpdateCategory(id,s){
        const data = Object.assign({})
        data.name = document.getElementById('c'+id).value;
        data.status = s;
        console.log('id = '+id+' name = '+data.name+' status = '+s);
        CategoryServices.update(id,data, token).then((res) => {
          alert(res.data.message)
          this.getCategories()
        }).catch((err) => {
          alert(err.message)
        })
      },
      UpdateCategoryStatus(id,s){
        const data = Object.assign({})
        data.name = document.getElementById('c'+id).value;
        data.status = s;
        console.log(data);
        CategoryServices.update(id,data, token).then((res) => {
          alert(res.data.message)
          this.getCategories()
        }).catch((err) => {
          alert(err.message)
        })
      }
    },
    created () {
      this.getCategories()
    }
  }
</script>
