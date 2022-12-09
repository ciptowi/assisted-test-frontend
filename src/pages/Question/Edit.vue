<template>
  <div class="container mt-5">
    <h1 class="text-center p-3"><b>Edit Soal</b></h1>
    <input type="hidden" name="q_id" id="q_id" :value="q_id">
    <b-card class="float-right">
      <div class="row" v-for="q in question">
        <div class="col-3">
          <select class="form-control form-control-md" name="c" required v-model="inputCategory">
            <option v-for="c in categories" :value="c.id" :selected="(c.id == q.category_id)">{{ c.name }}</option>
          </select>
        </div>
        <div class="col-9">
          <input type="text" class="form-control form-control-md" placeholder="Pertanyaan" name="q" required :value="q.content" >
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban a" name="a1" :value="answers[0].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban a" name="a1p" :value="answers[0].score">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban b" name="a2" :value="answers[1].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban b" name="a2p" :value="answers[1].score">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban c" name="a3" :value="answers[2].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban c" name="a3p" :value="answers[2].score">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban d" name="a4" :value="answers[3].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban d" name="a4p" :value="answers[3].score">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban e" name="a5" :value="answers[4].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban e" name="a5p" :value="answers[4].score">
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="">Update</button>      
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
        answers: [{id: 0,content: '', score: 0},{id: 0,content: '', score: 0},{id: 0,content: '', score: 0},{id: 0,content: '', score: 0},{id: 0,content: '', score: 0}],
        a_index: 0,
        inputCategory: '',
        inputContent: ''
      }
    },
    methods:{
      getCategories(){
        CategoryServices.find(1).then((res) => {
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
        QuestionServices.a_find(1, this.q_id).then((res) => {
          //console.log(res);
          if(res.status === 200) {
            this.answers = res.data.data
            console.log(res.data.data)
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
      UpdateQuestion(){
        const data = Object.assign({})
        data.category_id = this.inputCategory
        data.content = this.inputContent
        console.log(data)
        QuestionServices.q_update(this.q_id,data, token).then((res) => {
          alert(res.data.message)
          console.log(res)
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