<template>
<div  :style="{'background-image':'url(https://www.ovconsultancy.com/wp-content/uploads/2018/11/icon_5-c34d58bc0046c04e43c86f0035e5bfda.png)'}">
    <!-- Participant Id Placeholder -->
    <input type="hidden" name="participant_id" id="p_id" value="1">
    <input type="hidden" name="session_id" id="s_id" value="1">
    <input type="hidden" name="category_id" id="c_id" value="1">

    <!-- Final Score -->
    <div class="responsive container mw-50 bg-light border rounded border-3 border-grey p-3 mt-5" v-show="finished == 1">
        <div class="text-center mt-3 m-b-3">
            <img style="width: 100px; margin-bottom: 10px;" src="@/assets/logo.png" alt="Yayasan Bina Citra Anak Bangsa"/>
            <br><h5>PUSAT STUDI PENDIDIKAN DAN PEMBERDAYAAN KEWARGANEGARAAN</h5>
        </div>
        
        <b-card class="container w-50 rounded p-3">
            <div class="form-group text-center">
                <h3>Skor Akhir</h3>
                <h1 class="mb-3">{{ (final_score*100/(10*questions.length)) }}</h1>

                <h3>Benar : <span>{{ a_right }}</span></h3>
                <h3>Salah : <span>{{ a_wrong }}</span></h3>
            </div>      
        </b-card>    
    </div>

    <!-- Quiz Section -->
    <div class="responsive container bg-light border rounded border-3 border-grey p-3 mt-5" v-show="finished == 0">
        
        <!-- Timer Placeholder -->
        <div class="text-center">
            <label class="fs-4 w-10 p-1 bg-warning text-light border border-grey rounded"><b id="cd">{{ timer }}</b></label>
        </div>
        
        <div class="d-flex flex-row-reverse">
                <button class="btn btn-danger text-light" @click="endTest()"><b>Akhiri Ujian</b></button>
        </div>

        <!-- Load Questions from array 'questions' in JS -->
        <div v-for="(q,index) in questions" v-show="index == (q_index)" :key="q.id">
            <div class="mb-4 mt-5" >
                <p>
                    <b>{{ (q_index+1)+' ) '+q.content }}</b>
                </p>            
            </div>

            <!-- Load Answers from array 'answers' in JS -->
            <div>
                <div class="mb-2">
                    <div class="form-check-label" v-for="a in answers">
                        <label v-if="a.question_id == q.id">
                            <input 
                                type="radio" 
                                :id="a.id" 
                                class="control-form a-radio" 
                                :value="a.id" 
                                @change="answered($event)" 
                                :name="'a'+q.id"
                            >
                            {{ a.content }}
                        </label>                    
                </div>                
            </div>
        </div>
            <button 
                class="btn btn-success rounded-pill text-white mt-4 mb-3"
                @click="n_question"
                v-show="q_index+1 != (questions.length)"
            >
                Selanjutnya <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>    
    </div>
        <!-- Pagination -->
        <div class="container text-center flex-wrap mt-5">
            <button 
                v-for="(key, index) in questions"
                class="btn border border-grey"
                :class="{'shadow-lg bg-secondary text-light':index == q_index}"
                @click="q_change(index)"
                :id="'num_btn_'+index"
            >
                {{ index+1 }}
            </button>
        </div>    
    </div>
</div>
</template>

<script>
    import QuestionServices from "../../services/QuestionServices";
    import ParticipantService from '../../services/ParticipantServices'
    
    export default {
        props:{
            nik: String
        },
        name: 'Test',
        data: () => {
            return{
                a_right: 0, //right answer
                a_wrong: 0, //wrong answer
                finished :0, //finished state
                q_index: 0, // questions index

                //insert into db
                a_selected: [], //selected answers
                sess_id: document.getElementsByName('participant_id'), //participant id
                final_score: 0, //final score

                //get from db
                timer: 75*60, //timer from db test_session.time_limit * 60 sec
                questions : [],
                answers : [],
                participant: [],
            }            
        },
        watch: {
            //countdown timer function
            timer: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timer--;
                        }, 1000);
                    }else{
                        this.endTest()
                    }
                },
                immediate: true // This ensures the watcher is triggered upon creation
            },
        },
        created() {
            window.addEventListener('beforeunload', this.endTest)
            this.getQuestions()
            this.getParticipantByNik()
        },
        methods: {
            async getParticipantByNik() {
                console.log('Get Participant')
                const nik = this.nik
                const response = await ParticipantService.find(nik)
                const r_data = response.data.data
                this.participant = r_data
                console.log(r_data)            
            },
            getQuestions(){
                QuestionServices.q_find(1).then((res) => {
                console.log(res);
                if(res.status === 200) {
                    this.questions = res.data.data
                    this.getAnswers()
                }
                }).catch((err) => {
                    alert(err.message)
                })
            },
            getAnswers(){
                console.log('get answers')
                for (let i = 0; i < this.questions.length; i++) {
                    const question_id = this.questions[i].id

                    QuestionServices.a_find(1, question_id).then((res) => {
                        console.log(res);
                        if(res.status === 200) {
                            this.answers = this.answers.concat(res.data.data)
                        console.log(this.answers)
                        }
                    }).catch((err) => {
                        alert(err.message)
                    })
                }
            },

            //change pagination color after selecting answer
            answered(a){
                console.log('index = '+this.q_index)  
                var num_btn = document.getElementById('num_btn_'+this.q_index);
                num_btn.style.backgroundColor ="Chartreuse";
                
                console.log('value = '+a.target.value)                          
            },

            //go to next question
            n_question(){
                this.q_index++
            },

            //change question index to change showed question
            q_change(i){
                this.q_index = i;
            },

            UpdateParticipant(){
                const id = this.participant[0].id
                const data = Object.assign({})
                data.category_id = this.participant[0].category_id
                data.nik = this.participant[0].nik
                data.name = this.participant[0].name
                data.partisipant_numb = this.participant[0].partisipant_numb
                data.score = this.final_score
                data.status = 2
                console.log('id = '+id)
                console.log(data);
                ParticipantService.update(id,data).then((res) => {
                    alert(res.data.message)
                    console.log('Data Tersimpan')
                }).catch((err) => {
                    alert(err.message)
                })
            },

            //finish test
            endTest(){
                var a_radios = document.getElementsByClassName('a-radio');

                //take all selected answers id and push it into array
                for (var i = 0, length = a_radios.length; i < length; i++) {
                    if (a_radios[i].checked) {
                        this.a_selected.push(a_radios[i].value);
                    }
                }

                //count how many answers are right
                for ( var as_i = 0, as_l = this.a_selected.length; as_i < as_l; as_i++ ){
                    for( var a_i = 0, a_l = this.answers.length; a_i < a_l; a_i++ ){
                        if( this.a_selected[as_i] == this.answers[a_i].id ){
                            this.final_score = this.final_score+this.answers[a_i].score;
                            
                            if( this.answers[a_i].score != 0 ){
                                this.a_right++
                            }
                        }
                        
                    }
                }

                //count how many answers are wrong
                this.a_wrong = this.questions.length - this.a_right

                console.log(this.a_selected);

                //change state to finished
                this.finished = 1;

                this.UpdateParticipant()
            },
        },
    }

    
</script>