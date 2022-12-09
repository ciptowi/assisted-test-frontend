<template>
  <div class="container mt-5">
    <h1 class="text-center p-3"><b>Edit Soal</b></h1>
    <input type="hidden" name="q_id" id="q_id" :value="q_id">
    <b-card class="float-right">
      <div class="row" v-for="q in question">
        <div class="col-3">
          <select class="form-control form-control-md" name="c" required>
            <option v-for="c in categories" :value="c.id" :selected="(c.id == q.category_id)" v-show="(c.status == 1)">{{ c.name }}</option>
          </select>
        </div>
        <div class="col-9">
          <input type="text" class="form-control form-control-md" placeholder="Pertanyaan" name="q" required :value="q.content">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban a" name="a1" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban a" name="a1p" value="">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban b" name="a2" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban b" name="a2p" value="">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban c" name="a3" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban c" name="a3p" value="">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban d" name="a4" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban d" name="a4p" value="">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban e" name="a5" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban e" name="a5p" value="">
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
<script>
import QuestionServices from "../../services/QuestionServices"
import CategoryServices from "../../services/CategoryServices"

const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token

  export default{
    props:{
      q_id: String
    },
    data: ()=>{
      return{
        question: [],
        categories: [],
        answers: [],
        a_index: 0,
      }
    },
    methods:{
      getCategories(){
        const param = Object.assign({})
        //param.status = 1;
        //console.log(param)
        CategoryServices.find().then((res) => {
          //console.log(res);
          if(res.status === 200) {
            this.categories = res.data.data
            //console.log(res)
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      getAnswers(){
        const param = Object.assign({})
        param.question_id = this.q_id
        console.log(param)
        QuestionServices.a_find(param).then((res) => {
          //console.log(res);
          if(res.status === 200) {
            this.answers = res.data.data
            console.log(res)
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      getQuestion(){
        QuestionServices.q_findById(this.q_id).then((res) => {
          if(res.status === 200) {
            this.question = res.data.data
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
    },
    created(){
      this.getQuestion()
      this.getCategories()
      this.getAnswers()
    }
  }
</script>