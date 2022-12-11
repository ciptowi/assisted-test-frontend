<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>Soal Baru</b></h1>
    <b-card class="float-right">
      <div class="row">
        <div class="col-3">
          <select class="form-control form-control-md" name="c" id="c">
            <option disabled selected> -- Pilih Kategori -- </option>
            <option v-for="c in categories" :value='c.id' v-show="(c.status == 1)">{{ c.name }}</option>
          </select>
        </div>
        <div class="col-9">
          <input type="text" class="form-control form-control-md" placeholder="Pertanyaan" name="q" id="q" required v-model="inputContent">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban a" name="a1" id="a1" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban a" name="s1" id="s1" value="0">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban b" name="a2" id="a2" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban b" name="s2" id="s2" value="0">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban c" name="a3" id="a3" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban c" name="s3" id="s3" value="0">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban d" name="a4" id="a4" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban d" name="s4" id="s4" value="0">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban e" name="a5" id="a5" value="">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban e" name="s5" id="s5" value="0">
        </div>
      </div>
      <div class="text-center mt-4">
        <input type="submit" class="btn btn-primary" value="Tambahkan" @click="InsertQuestion()">
      </div>
    </b-card>
  </div>
</template>
<script>
  import QuestionServices from "../../services/QuestionServices";
  import CategoryServices from "../../services/CategoryServices";

  const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token

  export default{
    data: ()=>{
      return{
        categories: [],
        question: [],
        answer: [],
        q_id: '',
        inputCategory: '',
        inputContent: '',
      }
    },methods: {
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
      InsertQuestion(){
        const cat = document.getElementById('c')
        const data = Object.assign({})
        data.content = this.inputContent
        data.category_id = cat.value
        data.id = this.q_id
        data.status = 1
        //console.log(data)
        QuestionServices.q_insert(data, token).then((res) => {
          alert(res.data.message)
          console.log(res)
          this.QInsertQuestion()
        }).catch((err) => {
          alert(err.message)
        })
      },
      getQuestion(){
        QuestionServices.q_find(0).then((res) => {
          if(res.status === 200) {
            this.question = res.data.data
            var lastPosition = this.question.length -1;
            console.log(this.question[lastPosition])
            this.q_id = this.question[lastPosition].id+1
            console.log('question id = '+this.q_id)            
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      getAnswer(){
        QuestionServices.a_find(0,0).then((res) => {
          if(res.status === 200) {
            this.answer = res.data.data
            var lastPosition = this.answer.length -1;
            console.log(this.answer[lastPosition])
            this.a_id = this.answer[lastPosition].id
            console.log('latest answer id = '+this.a_id)            
          }
        }).catch((err) => {
          alert(err.message)
        })
      },
      InsertAnswers(content,score){
        const data = Object.assign({})
        data.id = this.a_id
        data.content = content
        data.question_id = this.q_id
        data.score = score
        //console.log(data)
        QuestionServices.a_insert(data, token).then((res) => {
          //alert(res.data.message)
          console.log('success input '+content+' ('+score+')')
        }).catch((err) => {
          alert(err.message)
          console.log('failet input '+content+' ('+score+')')
        })
      },
      QInsertQuestion(){
        var answers = [];//array of answers and score
        
        for(let ac = 1; ac < 6; ac++){
          var answer = document.getElementById('a'+ac).value;
          var score = document.getElementById('s'+ac).value;
          this.a_id = this.a_id+1
          this.InsertAnswers(answer, score)
        }
        this.$router.push('question');
        console.log(answers);
      }  
    },
    created(){
      this.getCategories()
      this.getQuestion()
      this.getAnswer()
    }
  }
</script>