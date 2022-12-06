<template>
  <div class="container mt-3">
    <h1 class="text-center"><b>Soal Baru</b></h1>
    <b-card class="float-right">
      <div class="row">
        <div class="col-3">
          <select class="form-control form-control-md" name="c" id="c" required >
            <option disabled selected value=""> -- Pilih Kategori -- </option>
            <option v-for="c in categories" :value="c.id" v-show="(c.status == 1)">{{ c.name }}</option>
          </select>
        </div>
        <div class="col-9">
          <input type="text" class="form-control form-control-md" placeholder="Pertanyaan" name="q" id="q" required>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban a" name="a1" id="a1">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban a" name="s1" id="s1">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban b" name="a2" id="a2">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban b" name="s2" id="s2">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban c" name="a3" id="a3">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban c" name="s3" id="s3">
        </div>
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban d" name="a4" id="a4">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban d" name="s4" id="s4">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" placeholder="Jawaban e" name="a5" id="a5">
        </div>
        <div class="col-2">
          <input type="number" class="form-control form-control-sm" placeholder="Nilai Jawaban e" name="s5" id="s5">
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="question">
          <input type="submit" class="btn btn-primary" value="Tambahkan" @click="InsertQuestion()">
        </RouterLink>        
      </div>
    </b-card>
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
    },methods: {
        InsertQuestion(){
          var category = document.getElementById('c').value;
          var question = document.getElementById('q').value;
          var answers = [];//array of answers and score
          console.log('insert into question category_id = '+category+' & content = '+question);
          //insert db question return insert_id
          var q_id = 1 //question id
          
          for(let ac = 1; ac < 6; ac++){
            var answer = document.getElementById('a'+ac).value;
            var score = document.getElementById('s'+ac).value;

            console.log(ac);

            console.log('Insert into db answer question_id = '+q_id+', content = '+answer+' , score = '+score)

            answers.push([answer,score]);
          }
          
          console.log(answers);
        }  
      }, 
  }
</script>