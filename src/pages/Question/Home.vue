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
              <td v-for="c in categories" v-show="(c.id == q.category_id)">{{ c.name }}</td>
              <td>{{ q.content }}</td>
              <td v-show="(q.status == 1)"><span class="status-active">Aktif</span></td>
              <td v-show="(q.status == 2)"><span class="status-inactive">Non Aktif</span></td>
              <td>
                <RouterLink :to="'edit-question/'+q.id">
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
  import QuestionServices from "../../services/QuestionServices";
  import CategoryServices from "../../services/CategoryServices";

  export default{
    data: () => {
      return{
        questions: [],
        categories: []
      }
    },methods: {
      getQuestions(){
        QuestionServices.q_find().then((res) => {
          console.log(res);
          if(res.status === 200) {
            this.questions = res.data.data
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      getCategories(){
        CategoryServices.find().then((res) => {
          console.log(res);
          if(res.status === 200) {
            this.categories = res.data.data
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      UpdateStatus(id,s){
        const data = Object.assign({})
        data.status = s
        console.log(id)
        QuestionServices.update(id,data).then((res) => {
          alert(res.data.message)
          this.getQuestions()
        }).catch((err) => {
          alert(err.message)
        })
      },
    },
    created () {
      this.getQuestions()
      this.getCategories()
    }
  }
</script>