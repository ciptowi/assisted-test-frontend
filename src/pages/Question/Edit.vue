<template>
  <div class="container mt-5">
    <h1 class="text-center p-3"><b>Edit Soal</b></h1>
    <input type="hidden" name="q_id" id="q_id" :value="q_id">
    <b-card class="float-right">
      <div class="row" v-for="q in question">
        <div class="col-3">
          <select class="form-control form-control-md" name="c" id="c">
            <option v-for="c in categories" :value="c.id" :selected="(c.id == q.category_id)">{{ c.name }}</option>
          </select>
        </div>
        <div class="col-9">
          <input type="text" class="form-control form-control-md" placeholder="Pertanyaan" name="q" id="q" required :value="q.content" >
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban a" name="a0"  id="a0" :value="answers[0].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban a" name="s0" id="s0" :value="answers[0].score">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban b" name="a1" id="a1" :value="answers[1].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban b" name="s1" id="s1" :value="answers[1].score">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban c" name="a2" id="a2" :value="answers[2].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban c" name="s2" id="s2" :value="answers[2].score">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban d" name="a3" id="a3" :value="answers[3].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban d" name="s3" id="s3" :value="answers[3].score">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban e" name="a4" id="a4" :value="answers[4].content">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban e" name="s4" id="s4" :value="answers[4].score">
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="UpdateQuestion()">Update</button>      
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
        data.category_id = document.getElementById('c').value
        data.content = document.getElementById('q').value
        //console.log(data)
        QuestionServices.q_update(this.q_id,data, token).then((res) => {
          alert(res.data.message)
          this.QUpdateQuestion()
          console.log(res)
        }).catch((err) => {
          alert(err.message)
        })
      },
      QUpdateQuestion(){
        var answers = [];//array of answers and score
        
        for(let ac = 0; ac < 5; ac++){
          var answer = document.getElementById('a'+ac).value;
          var score = document.getElementById('s'+ac).value;
          var id  = this.answers[ac].id

          this.UpdateAnswers(id, answer, score)
        }
        this.$router.push('/question')
        console.log(answers)
      },
      UpdateAnswers(id, content,score){
        const data = Object.assign({})
        data.content = content
        data.score = score
        data.question_id = this.q_id
        //console.log(data)
        QuestionServices.a_update(id, data, token).then((res) => {
          //alert(res.data.message)
          console.log('success input '+content+' ('+score+')')
        }).catch((err) => {
          alert(err.message)
          console.log('failet input '+content+' ('+score+')')
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